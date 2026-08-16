import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Exercise, PoseType } from '../types';
import { Play, Pause, RotateCw, Sparkles, ZoomIn, ZoomOut, Info, Layers } from 'lucide-react';

interface Exercise3DViewerProps {
  exercise: Exercise;
  gender: 'male' | 'female';
}

export const Exercise3DViewer: React.FC<Exercise3DViewerProps> = ({ exercise, gender }) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [playbackSpeed, setPlaybackSpeed] = useState<number>(1);
  const [highlightMuscles, setHighlightMuscles] = useState(true);
  const [activePhase, setActivePhase] = useState<string>('Execução Contínua');
  const [cameraDistance, setCameraDistance] = useState<number>(3.5);

  // References for Three.js animation
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const reqIdRef = useRef<number | null>(null);
  const mannequinGroupRef = useRef<THREE.Group | null>(null);
  const timeRef = useRef<number>(0);
  const isPlayingRef = useRef<boolean>(true);
  const speedRef = useRef<number>(1);
  const highlightRef = useRef<boolean>(true);
  const isDraggingRef = useRef<boolean>(false);
  const prevMousePosRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const rotationRef = useRef<{ y: number; x: number }>({ y: 0.4, x: 0.2 });

  isPlayingRef.current = isPlaying;
  speedRef.current = playbackSpeed;
  highlightRef.current = highlightMuscles;

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || 400;
    const height = container.clientHeight || 340;

    // Scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color('#fbfaf7'); // Natural cream tone
    sceneRef.current = scene;

    // Camera
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(2.8, 2.0, 3.2);
    camera.lookAt(0, 0.6, 0);
    cameraRef.current = camera;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    rendererRef.current = renderer;

    container.innerHTML = '';
    container.appendChild(renderer.domElement);

    // Lighting (Warm studio lighting for Natural Tones)
    const ambientLight = new THREE.AmbientLight(0xfffaf0, 0.9);
    scene.add(ambientLight);

    const mainLight = new THREE.DirectionalLight(0xfffdf5, 1.2);
    mainLight.position.set(5, 8, 5);
    mainLight.castShadow = true;
    mainLight.shadow.mapSize.width = 1024;
    mainLight.shadow.mapSize.height = 1024;
    mainLight.shadow.bias = -0.001;
    scene.add(mainLight);

    const rimLight = new THREE.DirectionalLight(gender === 'male' ? 0x8fa38e : 0xc89f83, 0.6);
    rimLight.position.set(-5, 4, -4);
    scene.add(rimLight);

    const fillLight = new THREE.DirectionalLight(0xf4ebe1, 0.5);
    fillLight.position.set(0, -3, 3);
    scene.add(fillLight);

    // Grid Floor
    const gridHelper = new THREE.GridHelper(10, 20, 0xd4decb, 0xeef3ed);
    gridHelper.position.y = -0.01;
    scene.add(gridHelper);

    // Subtle Circular Platform
    const platformGeo = new THREE.CylinderGeometry(2.2, 2.3, 0.05, 32);
    const platformMat = new THREE.MeshStandardMaterial({
      color: 0xfdfaf4,
      roughness: 0.7,
      metalness: 0.1,
    });
    const platform = new THREE.Mesh(platformGeo, platformMat);
    platform.position.y = -0.03;
    platform.receiveShadow = true;
    scene.add(platform);

    // Build Mannequin Rig
    const mannequinGroup = new THREE.Group();
    scene.add(mannequinGroup);
    mannequinGroupRef.current = mannequinGroup;

    // Materials
    const bodyMat = new THREE.MeshStandardMaterial({
      color: 0x94a3b8, // Slate-400 clean anatomical mannequin
      roughness: 0.4,
      metalness: 0.2,
    });

    const jointMat = new THREE.MeshStandardMaterial({
      color: 0x64748b, // Slate-500
      roughness: 0.3,
      metalness: 0.4,
    });

    // Muscle highlight color
    const chestHighlightMat = new THREE.MeshStandardMaterial({
      color: 0x0284c7, // Vibrant sky blue
      emissive: 0x0369a1,
      emissiveIntensity: 0.5,
      roughness: 0.3,
    });

    const absHighlightMat = new THREE.MeshStandardMaterial({
      color: 0x059669, // Emerald
      emissive: 0x047857,
      emissiveIntensity: 0.5,
      roughness: 0.3,
    });

    const gluteHighlightMat = new THREE.MeshStandardMaterial({
      color: 0xe11d48, // Rose / Crimson
      emissive: 0xbe123c,
      emissiveIntensity: 0.5,
      roughness: 0.3,
    });

    const legHighlightMat = new THREE.MeshStandardMaterial({
      color: 0xd97706, // Amber
      emissive: 0xb45309,
      emissiveIntensity: 0.4,
      roughness: 0.3,
    });

    // Pick active muscle material based on category / exercise
    const isChestExercise = exercise.category === 'Peito' || exercise.muscles.primary.some(m => m.includes('Peitoral'));
    const isGluteExercise = exercise.category === 'Glúteos' || exercise.muscles.primary.some(m => m.includes('Glúteo'));
    const isAbsExercise = exercise.category === 'Abdômen & Core' || exercise.muscles.primary.some(m => m.includes('Abdominal') || m.includes('Transverso'));

    const chestMat = highlightMuscles && isChestExercise ? chestHighlightMat : bodyMat;
    const absMat = highlightMuscles && isAbsExercise ? absHighlightMat : bodyMat;
    const gluteMat = highlightMuscles && isGluteExercise ? gluteHighlightMat : bodyMat;
    const legMat = highlightMuscles && (isGluteExercise || exercise.category === 'Pernas') ? legHighlightMat : bodyMat;

    // --- Create Mannequin Parts Hierarchy ---
    // Root Pelvis
    const pelvis = new THREE.Group();
    mannequinGroup.add(pelvis);

    const pelvisMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.16, 0.16, 16), gluteMat);
    pelvisMesh.castShadow = true;
    pelvis.add(pelvisMesh);

    // Spine / Abdomen
    const spine = new THREE.Group();
    spine.position.y = 0.12;
    pelvis.add(spine);

    const absMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.17, 0.22, 16), absMat);
    absMesh.position.y = 0.11;
    absMesh.castShadow = true;
    spine.add(absMesh);

    // Chest / Thorax
    const thorax = new THREE.Group();
    thorax.position.y = 0.22;
    spine.add(thorax);

    const chestMesh = new THREE.Mesh(new THREE.BoxGeometry(0.38, 0.28, 0.22), chestMat);
    chestMesh.position.y = 0.14;
    chestMesh.castShadow = true;
    thorax.add(chestMesh);

    // Neck & Head
    const headGroup = new THREE.Group();
    headGroup.position.y = 0.32;
    thorax.add(headGroup);

    const neck = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.09, 0.1, 12), bodyMat);
    neck.position.y = 0.05;
    headGroup.add(neck);

    const head = new THREE.Mesh(new THREE.SphereGeometry(0.14, 20, 20), bodyMat);
    head.position.y = 0.2;
    head.scale.set(1, 1.15, 1.1);
    head.castShadow = true;
    headGroup.add(head);

    // Shoulders & Arms (Left & Right)
    function createArm(side: 'left' | 'right') {
      const armRoot = new THREE.Group();
      const xSign = side === 'left' ? 1 : -1;
      armRoot.position.set(xSign * 0.24, 0.22, 0);
      thorax.add(armRoot);

      const shoulder = new THREE.Mesh(new THREE.SphereGeometry(0.09, 12, 12), jointMat);
      armRoot.add(shoulder);

      const upperArm = new THREE.Group();
      armRoot.add(upperArm);

      const upperArmMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.06, 0.28, 12), bodyMat);
      upperArmMesh.position.y = -0.14;
      upperArmMesh.castShadow = true;
      upperArm.add(upperArmMesh);

      const elbow = new THREE.Mesh(new THREE.SphereGeometry(0.07, 12, 12), jointMat);
      elbow.position.y = -0.28;
      upperArm.add(elbow);

      const forearm = new THREE.Group();
      forearm.position.y = -0.28;
      upperArm.add(forearm);

      const forearmMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.05, 0.26, 12), bodyMat);
      forearmMesh.position.y = -0.13;
      forearmMesh.castShadow = true;
      forearm.add(forearmMesh);

      const hand = new THREE.Mesh(new THREE.BoxGeometry(0.07, 0.1, 0.04), jointMat);
      hand.position.y = -0.28;
      forearm.add(hand);

      return { armRoot, upperArm, forearm, hand };
    }

    const leftArm = createArm('left');
    const rightArm = createArm('right');

    // Legs (Left & Right)
    function createLeg(side: 'left' | 'right') {
      const hip = new THREE.Group();
      const xSign = side === 'left' ? 1 : -1;
      hip.position.set(xSign * 0.11, -0.06, 0);
      pelvis.add(hip);

      const hipJoint = new THREE.Mesh(new THREE.SphereGeometry(0.09, 12, 12), jointMat);
      hip.add(hipJoint);

      const thigh = new THREE.Group();
      hip.add(thigh);

      const thighMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.075, 0.38, 14), isGluteExercise ? gluteMat : legMat);
      thighMesh.position.y = -0.19;
      thighMesh.castShadow = true;
      thigh.add(thighMesh);

      const knee = new THREE.Mesh(new THREE.SphereGeometry(0.08, 12, 12), jointMat);
      knee.position.y = -0.38;
      thigh.add(knee);

      const shin = new THREE.Group();
      shin.position.y = -0.38;
      thigh.add(shin);

      const shinMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.075, 0.06, 0.38, 14), legMat);
      shinMesh.position.y = -0.19;
      shinMesh.castShadow = true;
      shin.add(shinMesh);

      const foot = new THREE.Mesh(new THREE.BoxGeometry(0.09, 0.06, 0.18), jointMat);
      foot.position.set(0, -0.4, 0.05);
      foot.castShadow = true;
      shin.add(foot);

      return { hip, thigh, shin, foot };
    }

    const leftLeg = createLeg('left');
    const rightLeg = createLeg('right');

    // Attach reference dictionary to store joints for kinematics
    const rig = {
      pelvis,
      spine,
      thorax,
      headGroup,
      leftArm,
      rightArm,
      leftLeg,
      rightLeg,
    };

    // --- Animation loop with pose procedural kinematics ---
    const poseType = exercise.poseType;

    const animate = () => {
      reqIdRef.current = requestAnimationFrame(animate);

      if (isPlayingRef.current) {
        timeRef.current += 0.02 * speedRef.current;
      }

      const t = timeRef.current;
      const cycle = (Math.sin(t) + 1) / 2; // 0 to 1 smooth cycle

      // Determine phase label
      if (cycle < 0.2) {
        setActivePhase('Posição Inicial / Alinhamento');
      } else if (cycle < 0.6) {
        setActivePhase('Fase Excêntrica (Descida Controlada)');
      } else if (cycle < 0.85) {
        setActivePhase('Pico de Contração & Tensão Máxima');
      } else {
        setActivePhase('Fase Concêntrica (Retorno Firme)');
      }

      // Procedural animations per pose
      applyPoseKinematics(poseType, cycle, rig, mannequinGroup);

      // Camera orbital control via drag
      const radius = 4.2;
      const ry = rotationRef.current.y;
      const rx = Math.max(-0.5, Math.min(1.2, rotationRef.current.x));

      camera.position.x = radius * Math.sin(ry) * Math.cos(rx);
      camera.position.y = radius * Math.sin(rx) + 0.6;
      camera.position.z = radius * Math.cos(ry) * Math.cos(rx);
      camera.lookAt(0, 0.5, 0);

      renderer.render(scene, camera);
    };

    animate();

    // Mouse & Touch Drag Rotation
    const handleMouseDown = (e: MouseEvent) => {
      isDraggingRef.current = true;
      prevMousePosRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDraggingRef.current) return;
      const deltaX = e.clientX - prevMousePosRef.current.x;
      const deltaY = e.clientY - prevMousePosRef.current.y;

      rotationRef.current.y += deltaX * 0.01;
      rotationRef.current.x -= deltaY * 0.01;

      prevMousePosRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseUp = () => {
      isDraggingRef.current = false;
    };

    // Touch events for mobile
    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        isDraggingRef.current = true;
        prevMousePosRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isDraggingRef.current || e.touches.length !== 1) return;
      const deltaX = e.touches[0].clientX - prevMousePosRef.current.x;
      const deltaY = e.touches[0].clientY - prevMousePosRef.current.y;

      rotationRef.current.y += deltaX * 0.01;
      rotationRef.current.x -= deltaY * 0.01;

      prevMousePosRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    };

    const handleTouchEnd = () => {
      isDraggingRef.current = false;
    };

    const dom = renderer.domElement;
    dom.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    dom.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchmove', handleTouchMove);
    window.addEventListener('touchend', handleTouchEnd);

    // Resize observer
    const handleResize = () => {
      if (!container || !renderer || !camera) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container);

    return () => {
      if (reqIdRef.current) cancelAnimationFrame(reqIdRef.current);
      dom.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      dom.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
      resizeObserver.disconnect();
      renderer.dispose();
    };
  }, [exercise, gender, highlightMuscles]);

  // Procedural Inverse/Forward Kinematics for Calisthenics Poses
  function applyPoseKinematics(pose: PoseType, cycle: number, rig: any, rootGroup: THREE.Group) {
    const { pelvis, spine, thorax, headGroup, leftArm, rightArm, leftLeg, rightLeg } = rig;

    // Reset default transforms
    rootGroup.position.set(0, 0, 0);
    rootGroup.rotation.set(0, 0, 0);
    pelvis.position.set(0, 0.9, 0);
    pelvis.rotation.set(0, 0, 0);
    spine.rotation.set(0, 0, 0);
    thorax.rotation.set(0, 0, 0);
    headGroup.rotation.set(0, 0, 0);

    leftArm.upperArm.rotation.set(0, 0, 0);
    rightArm.upperArm.rotation.set(0, 0, 0);
    leftArm.forearm.rotation.set(0, 0, 0);
    rightArm.forearm.rotation.set(0, 0, 0);

    leftLeg.thigh.rotation.set(0, 0, 0);
    rightLeg.thigh.rotation.set(0, 0, 0);
    leftLeg.shin.rotation.set(0, 0, 0);
    rightLeg.shin.rotation.set(0, 0, 0);

    switch (pose) {
      case 'pushup':
      case 'diamond_pushup':
      case 'incline_pushup':
      case 'decline_pushup': {
        // Horizontal plank orientation
        rootGroup.rotation.x = -Math.PI / 2;
        const pushHeight = 0.35 + cycle * 0.38;
        rootGroup.position.set(0, pushHeight, -0.2);

        if (pose === 'decline_pushup') {
          rootGroup.rotation.x = -Math.PI / 2 - 0.25;
          rootGroup.position.y += 0.2;
        } else if (pose === 'incline_pushup') {
          rootGroup.rotation.x = -Math.PI / 2 + 0.3;
          rootGroup.position.y += 0.1;
        }

        // Arm flexion
        const elbowBend = (1 - cycle) * 1.5;
        const shoulderSpread = pose === 'diamond_pushup' ? 0.3 : 0.6;

        leftArm.armRoot.rotation.z = shoulderSpread;
        rightArm.armRoot.rotation.z = -shoulderSpread;

        leftArm.upperArm.rotation.x = elbowBend * 0.7;
        rightArm.upperArm.rotation.x = elbowBend * 0.7;
        leftArm.forearm.rotation.x = -elbowBend;
        rightArm.forearm.rotation.x = -elbowBend;

        // Legs straight
        leftLeg.thigh.rotation.x = 0.05;
        rightLeg.thigh.rotation.x = 0.05;
        break;
      }

      case 'glute_bridge':
      case 'single_leg_bridge': {
        // Lying on back
        rootGroup.rotation.x = Math.PI / 2;
        rootGroup.position.set(0, 0.2, 0);

        // Pelvis bridge rise
        const bridgeLift = cycle * 0.45;
        pelvis.position.z = bridgeLift;
        spine.rotation.x = -bridgeLift * 0.8;

        // Feet planted
        leftLeg.thigh.rotation.x = 1.2 - bridgeLift * 0.6;
        leftLeg.shin.rotation.x = -1.8 + bridgeLift * 0.3;

        if (pose === 'single_leg_bridge') {
          // Right leg extended to ceiling
          rightLeg.thigh.rotation.x = 0.3;
          rightLeg.shin.rotation.x = 0.1;
        } else {
          rightLeg.thigh.rotation.x = 1.2 - bridgeLift * 0.6;
          rightLeg.shin.rotation.x = -1.8 + bridgeLift * 0.3;
        }

        // Arms flat on ground
        leftArm.upperArm.rotation.x = -0.2;
        rightArm.upperArm.rotation.x = -0.2;
        break;
      }

      case 'squat':
      case 'sumo_squat': {
        // Standing squat descent
        const squatDepth = cycle * 0.45;
        pelvis.position.y = 0.9 - squatDepth;
        spine.rotation.x = squatDepth * 0.7; // slight forward torso lean for glute engagement

        const legSpread = pose === 'sumo_squat' ? 0.45 : 0.2;
        leftLeg.hip.rotation.z = legSpread;
        rightLeg.hip.rotation.z = -legSpread;

        const kneeFlex = cycle * 1.55;
        leftLeg.thigh.rotation.x = -kneeFlex;
        rightLeg.thigh.rotation.x = -kneeFlex;
        leftLeg.shin.rotation.x = kneeFlex * 1.1;
        rightLeg.shin.rotation.x = kneeFlex * 1.1;

        // Arms counterbalance in front
        leftArm.upperArm.rotation.x = 1.3;
        rightArm.upperArm.rotation.x = 1.3;
        break;
      }

      case 'bulgarian_split': {
        // Lunge with rear leg back
        const lungeDepth = cycle * 0.38;
        pelvis.position.y = 0.8 - lungeDepth;
        spine.rotation.x = 0.25; // 15° forward hinge to maximize glute tension

        // Front leg (Left)
        leftLeg.thigh.rotation.x = -0.5 - cycle * 0.9;
        leftLeg.shin.rotation.x = 0.8 + cycle * 0.7;

        // Rear elevated leg (Right)
        rightLeg.thigh.rotation.x = 0.8 - cycle * 0.2;
        rightLeg.shin.rotation.x = -1.6;

        leftArm.upperArm.rotation.x = 0.6;
        rightArm.upperArm.rotation.x = 0.6;
        break;
      }

      case 'donkey_kicks':
      case 'fire_hydrant': {
        // Table top 4-point position
        rootGroup.rotation.x = -Math.PI / 2;
        rootGroup.position.set(0, 0.45, 0);

        // Arms supporting
        leftArm.upperArm.rotation.x = 1.5;
        rightArm.upperArm.rotation.x = 1.5;

        // Support leg (Left)
        leftLeg.thigh.rotation.x = 1.5;
        leftLeg.shin.rotation.x = -1.5;

        if (pose === 'donkey_kicks') {
          // Right leg kicking to ceiling
          const kickHeight = cycle * 1.2;
          rightLeg.thigh.rotation.x = 0.5 - kickHeight;
          rightLeg.shin.rotation.x = -1.5;
        } else {
          // Fire hydrant abduction
          const abduction = cycle * 1.3;
          rightLeg.thigh.rotation.x = 1.5;
          rightLeg.thigh.rotation.z = -abduction;
          rightLeg.shin.rotation.x = -1.5;
        }
        break;
      }

      case 'plank':
      case 'mountain_climber': {
        // Horizontal plank
        rootGroup.rotation.x = -Math.PI / 2;
        rootGroup.position.set(0, 0.35, -0.2);

        // Arms
        leftArm.upperArm.rotation.x = 1.5;
        rightArm.upperArm.rotation.x = 1.5;
        leftArm.forearm.rotation.x = 0;
        rightArm.forearm.rotation.x = 0;

        if (pose === 'mountain_climber') {
          const runCycle = Math.sin(timeRef.current * 4);
          leftLeg.thigh.rotation.x = runCycle > 0 ? 1.2 : 0;
          leftLeg.shin.rotation.x = runCycle > 0 ? -1.5 : 0;
          rightLeg.thigh.rotation.x = runCycle <= 0 ? 1.2 : 0;
          rightLeg.shin.rotation.x = runCycle <= 0 ? -1.5 : 0;
        }
        break;
      }

      case 'hollow_body':
      case 'leg_raises':
      case 'flutter_kicks':
      case 'bicycle_crunches': {
        // Lying on back
        rootGroup.rotation.x = Math.PI / 2;
        rootGroup.position.set(0, 0.25, 0);

        if (pose === 'hollow_body') {
          // Hollow boat shape
          spine.rotation.x = 0.35;
          leftArm.upperArm.rotation.x = -2.8;
          rightArm.upperArm.rotation.x = -2.8;
          leftLeg.thigh.rotation.x = -0.35;
          rightLeg.thigh.rotation.x = -0.35;
        } else if (pose === 'leg_raises') {
          const lift = cycle * 1.5;
          leftLeg.thigh.rotation.x = -lift;
          rightLeg.thigh.rotation.x = -lift;
        } else if (pose === 'flutter_kicks') {
          const kickA = Math.sin(timeRef.current * 5) * 0.3;
          leftLeg.thigh.rotation.x = -0.4 + kickA;
          rightLeg.thigh.rotation.x = -0.4 - kickA;
        } else if (pose === 'bicycle_crunches') {
          const twist = Math.sin(timeRef.current * 3);
          spine.rotation.z = twist * 0.4;
          leftLeg.thigh.rotation.x = twist > 0 ? -1.2 : -0.2;
          leftLeg.shin.rotation.x = twist > 0 ? 1.5 : 0;
          rightLeg.thigh.rotation.x = twist <= 0 ? -1.2 : -0.2;
          rightLeg.shin.rotation.x = twist <= 0 ? 1.5 : 0;
        }
        break;
      }

      case 'chair_dips': {
        // Sitting dip
        const dipDepth = cycle * 0.35;
        pelvis.position.set(0, 0.65 - dipDepth, 0);

        // Arms behind on chair
        leftArm.upperArm.rotation.x = -0.6 - cycle * 0.9;
        rightArm.upperArm.rotation.x = -0.6 - cycle * 0.9;
        leftArm.forearm.rotation.x = 1.2;
        rightArm.forearm.rotation.x = 1.2;

        // Legs forward
        leftLeg.thigh.rotation.x = -1.2;
        rightLeg.thigh.rotation.x = -1.2;
        leftLeg.shin.rotation.x = 1.2;
        rightLeg.shin.rotation.x = 1.2;
        break;
      }

      case 'side_plank': {
        // Side plank
        rootGroup.rotation.z = Math.PI / 2;
        rootGroup.position.set(0, 0.45, 0);
        leftArm.upperArm.rotation.y = 1.5;
        rightArm.upperArm.rotation.y = -1.5;
        break;
      }

      case 'superman': {
        // Lying on stomach with arch
        rootGroup.rotation.x = -Math.PI / 2;
        rootGroup.position.set(0, 0.2, 0);
        const arch = cycle * 0.35;
        spine.rotation.x = -arch;
        leftArm.upperArm.rotation.x = 2.8;
        rightArm.upperArm.rotation.x = 2.8;
        leftLeg.thigh.rotation.x = arch;
        rightLeg.thigh.rotation.x = arch;
        break;
      }

      case 'wall_sit': {
        // Wall sit 90 degrees
        pelvis.position.set(0, 0.55, 0);
        leftLeg.thigh.rotation.x = -1.57;
        rightLeg.thigh.rotation.x = -1.57;
        leftLeg.shin.rotation.x = 1.57;
        rightLeg.shin.rotation.x = 1.57;
        break;
      }

      case 'calf_raises': {
        // Standing calf lift
        const heelRise = cycle * 0.15;
        pelvis.position.y = 0.9 + heelRise;
        leftLeg.shin.position.y = -0.38 + heelRise * 0.5;
        rightLeg.shin.position.y = -0.38 + heelRise * 0.5;
        break;
      }

      default:
        break;
    }
  }

  const resetCamera = () => {
    rotationRef.current = { y: 0.4, x: 0.2 };
  };

  return (
    <div id="exercise-3d-visualizer-card" className="bg-white rounded-2xl border border-[#8fa38e]/20 shadow-[0_4px_16px_rgba(143,163,142,0.06)] overflow-hidden flex flex-col">
      {/* Visualizer Header */}
      <div className="px-4 py-3 bg-[#fbfaf7] border-b border-[#8fa38e]/15 flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-xs ${
            gender === 'male'
              ? 'bg-[#eef3ed] text-[#5c725b] border border-[#8fa38e]/30'
              : 'bg-[#fdfaf4] text-[#8a7362] border border-[#d9bba4]/50'
          }`}>
            3D
          </div>
          <div>
            <h3 className="font-semibold text-[#3a3a38] text-sm">{exercise.name}</h3>
            <p className="text-xs text-[#6d6d6b] flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-[#8fa38e] animate-pulse"></span>
              {activePhase}
            </p>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-1.5">
          <button
            id="btn-toggle-muscles"
            onClick={() => setHighlightMuscles(!highlightMuscles)}
            className={`px-2.5 py-1 text-xs font-medium rounded-lg transition-colors flex items-center gap-1 border ${
              highlightMuscles
                ? gender === 'male'
                  ? 'bg-[#eef3ed] text-[#5c725b] border-[#8fa38e]/40'
                  : 'bg-[#fdfaf4] text-[#8a7362] border-[#d9bba4]/60'
                : 'bg-white text-[#6d6d6b] border-[#8fa38e]/20 hover:bg-[#fbfaf7]'
            }`}
            title="Destacar grupos musculares ativos"
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Músculos</span>
          </button>

          <button
            id="btn-play-pause-3d"
            onClick={() => setIsPlaying(!isPlaying)}
            className="p-1.5 rounded-lg bg-white border border-[#8fa38e]/20 text-[#6d6d6b] hover:bg-[#fbfaf7] transition-colors"
            title={isPlaying ? 'Pausar animação' : 'Reproduzir animação'}
          >
            {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 text-[#5c725b]" />}
          </button>

          <button
            id="btn-speed-3d"
            onClick={() => {
              const speeds = [0.5, 1, 1.5];
              const nextIdx = (speeds.indexOf(playbackSpeed) + 1) % speeds.length;
              setPlaybackSpeed(speeds[nextIdx]);
            }}
            className="px-2 py-1 text-xs font-medium bg-white border border-[#8fa38e]/20 rounded-lg text-[#6d6d6b] hover:bg-[#fbfaf7] transition-colors"
            title="Velocidade de reprodução"
          >
            {playbackSpeed}x
          </button>

          <button
            id="btn-reset-view-3d"
            onClick={resetCamera}
            className="p-1.5 rounded-lg bg-white border border-[#8fa38e]/20 text-[#6d6d6b] hover:bg-[#fbfaf7] transition-colors"
            title="Centralizar câmera"
          >
            <RotateCw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* 3D Canvas Container */}
      <div className="relative w-full h-72 sm:h-80 bg-gradient-to-b from-[#fbfaf7] to-[#f4ebe1]/50 flex items-center justify-center select-none cursor-grab active:cursor-grabbing">
        <div ref={mountRef} className="w-full h-full" />

        {/* 360 Hint Overlay */}
        <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-xs px-2.5 py-1 rounded-full text-[11px] text-[#6d6d6b] border border-[#8fa38e]/20 shadow-xs flex items-center gap-1 pointer-events-none">
          <RotateCw className="w-3 h-3 text-[#8fa38e] animate-spin-slow" />
          <span>Arraste para girar 360°</span>
        </div>

        {/* Active Muscle Badge Overlay */}
        <div className="absolute top-3 right-3 flex flex-col gap-1 items-end pointer-events-none">
          <div className="bg-white/95 backdrop-blur-xs px-2.5 py-1 rounded-lg text-[11px] font-semibold text-[#3a3a38] border border-[#8fa38e]/20 shadow-xs">
            Foco:{' '}
            <span className={gender === 'male' ? 'text-[#5c725b]' : 'text-[#8a7362]'}>
              {exercise.muscles.primary[0]}
            </span>
          </div>
          {exercise.muscles.primary[1] && (
            <div className="bg-white/90 backdrop-blur-xs px-2 py-0.5 rounded-md text-[10px] text-[#6d6d6b] border border-[#8fa38e]/20 shadow-xs">
              + {exercise.muscles.primary[1]}
            </div>
          )}
        </div>
      </div>

      {/* Biomechanical Cues & Quick Instructions */}
      <div className="p-4 bg-white border-t border-[#8fa38e]/15 text-xs text-[#6d6d6b] space-y-2">
        <div className="flex items-start gap-2">
          <Sparkles className="w-4 h-4 text-[#c89f83] shrink-0 mt-0.5" />
          <div>
            <span className="font-semibold text-[#3a3a38]">Dica de Ouro do Mestre: </span>
            <span className="text-[#4a4a48]">{exercise.keyCues[0]}</span>
          </div>
        </div>

        <div className="flex items-start gap-2">
          <Info className="w-4 h-4 text-[#8fa38e] shrink-0 mt-0.5" />
          <div>
            <span className="font-semibold text-[#3a3a38]">Respiração Correta: </span>
            <span className="text-[#4a4a48]">{exercise.breathing}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
