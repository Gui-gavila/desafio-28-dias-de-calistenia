import React, { useState, useEffect, useRef } from 'react';
import { DayWorkout, Exercise } from '../types';
import { Exercise3DViewer } from './Exercise3DViewer';
import { Play, Pause, SkipForward, RotateCcw, X, CheckCircle2, Timer, Volume2 } from 'lucide-react';
import confetti from 'canvas-confetti';

interface WorkoutPlayerModalProps {
  workout: DayWorkout;
  gender: 'male' | 'female';
  onClose: () => void;
  onCompleteWorkout: () => void;
}

export const WorkoutPlayerModal: React.FC<WorkoutPlayerModalProps> = ({
  workout,
  gender,
  onClose,
  onCompleteWorkout,
}) => {
  const [currentExerciseIdx, setCurrentExerciseIdx] = useState<number>(0);
  const [currentSet, setCurrentSet] = useState<number>(1);
  const [mode, setMode] = useState<'exercise' | 'rest'>('exercise');
  const [timerSeconds, setTimerSeconds] = useState<number>(45); // default exercise duration/work
  const [isActive, setIsActive] = useState<boolean>(true);

  const currentExercise: Exercise = workout.exercises[currentExerciseIdx];
  const isMale = gender === 'male';

  const playBeep = (freq = 440) => {
    try {
      const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
      gain.gain.setValueAtTime(0.08, audioCtx.currentTime);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.25);
    } catch (e) {}
  };

  useEffect(() => {
    let interval: any = null;
    if (isActive && timerSeconds > 0) {
      interval = setInterval(() => {
        setTimerSeconds(prev => {
          if (prev === 4 || prev === 3 || prev === 2) {
            playBeep(440);
          } else if (prev === 1) {
            playBeep(880);
          }
          return prev - 1;
        });
      }, 1000);
    } else if (timerSeconds === 0 && isActive) {
      handleNextPhase();
    }
    return () => clearInterval(interval);
  }, [isActive, timerSeconds, mode, currentSet, currentExerciseIdx]);

  const handleNextPhase = () => {
    if (mode === 'exercise') {
      // Switch to rest
      setMode('rest');
      setTimerSeconds(currentExercise.restSeconds || 45);
    } else {
      // Switch to next set or next exercise
      if (currentSet < currentExercise.sets) {
        setCurrentSet(prev => prev + 1);
        setMode('exercise');
        setTimerSeconds(45);
      } else {
        // Next exercise
        if (currentExerciseIdx < workout.exercises.length - 1) {
          setCurrentExerciseIdx(prev => prev + 1);
          setCurrentSet(1);
          setMode('exercise');
          setTimerSeconds(45);
        } else {
          // Finished full workout!
          setIsActive(false);
          confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
          onCompleteWorkout();
          onClose();
        }
      }
    }
  };

  const handleManualSkip = () => {
    handleNextPhase();
  };

  const formatSecs = (s: number) => {
    const mins = Math.floor(s / 60);
    const secs = s % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  return (
    <div id="workout-player-modal" className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#2c332b]/50 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-3xl max-h-[95vh] rounded-3xl shadow-[0_16px_48px_rgba(0,0,0,0.12)] border border-[#8fa38e]/25 flex flex-col overflow-hidden">
        {/* Header */}
        <div className="px-6 py-4 bg-[#fbfaf7] border-b border-[#8fa38e]/15 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className={`px-3 py-1 rounded-full text-xs font-bold ${
              isMale
                ? 'bg-[#eef3ed] text-[#5c725b] border border-[#8fa38e]/30'
                : 'bg-[#fdfaf4] text-[#8a7362] border border-[#d9bba4]/50'
            }`}>
              Dia {workout.day} • Modo Treino Guiado
            </span>
            <span className="text-xs text-[#6d6d6b] font-medium hidden sm:inline">
              Exercício {currentExerciseIdx + 1} de {workout.exercises.length}
            </span>
          </div>

          <button
            id="btn-close-player"
            onClick={onClose}
            className="p-2 text-[#6d6d6b] hover:text-[#3a3a38] rounded-xl hover:bg-[#eef3ed] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Active Banner */}
          <div className={`p-5 rounded-2xl border text-center transition-all ${
            mode === 'exercise'
              ? isMale
                ? 'bg-[#eef3ed]/60 border-[#8fa38e]/40 text-[#3a3a38]'
                : 'bg-[#fdfaf4] border-[#d9bba4]/60 text-[#3a3a38]'
              : 'bg-[#eef3ed]/80 border-[#8fa38e] text-[#3a3a38]'
          }`}>
            <span className="text-xs font-bold uppercase tracking-wider block text-[#6d6d6b]">
              {mode === 'exercise' ? `EM EXECUÇÃO • SÉRIE ${currentSet} DE ${currentExercise.sets}` : 'DESCANSO ATIVO • RESPIRE'}
            </span>
            <h2 className="text-xl sm:text-2xl font-bold mt-1 text-[#3a3a38]">
              {mode === 'exercise' ? currentExercise.name : 'Recuperação Muscular'}
            </h2>
            <p className="text-xs mt-0.5 text-[#6d6d6b]">
              {mode === 'exercise' ? `Meta: ${currentExercise.repsOrDuration}` : `Próximo: Série ${currentSet < currentExercise.sets ? currentSet + 1 : 1}`}
            </p>

            {/* Giant Countdown Timer */}
            <div className="text-5xl sm:text-6xl font-mono font-extrabold my-4 tracking-tight text-[#4a4a48]">
              {formatSecs(timerSeconds)}
            </div>

            {/* Controls */}
            <div className="flex items-center justify-center gap-3">
              <button
                id="btn-player-toggle"
                onClick={() => setIsActive(!isActive)}
                className={`px-5 py-2.5 rounded-xl font-bold text-xs text-white shadow-2xs transition-all flex items-center gap-1.5 ${
                  isActive ? 'bg-[#c89f83] hover:bg-[#b88f73]' : 'bg-[#8fa38e] hover:bg-[#7e937d]'
                }`}
              >
                {isActive ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                {isActive ? 'Pausar' : 'Continuar'}
              </button>

              <button
                id="btn-player-skip"
                onClick={handleManualSkip}
                className="px-4 py-2.5 rounded-xl font-semibold text-xs bg-white border border-[#8fa38e]/25 text-[#4a4a48] hover:bg-[#fbfaf7] transition-colors flex items-center gap-1 shadow-2xs"
              >
                <SkipForward className="w-4 h-4" />
                <span>Pular Fase</span>
              </button>
            </div>
          </div>

          {/* 3D Visualizer during guided workout */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold text-[#6d6d6b] uppercase tracking-wider">
              Biomecânica 3D em Tempo Real
            </h4>
            <Exercise3DViewer exercise={currentExercise} gender={gender} />
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-[#fbfaf7] border-t border-[#8fa38e]/15 flex items-center justify-between">
          <div className="text-xs text-[#6d6d6b]">
            Foco: <strong className="text-[#4a4a48]">{currentExercise.muscles.primary.join(', ')}</strong>
          </div>
          <button
            id="btn-finish-workout-early"
            onClick={() => {
              onCompleteWorkout();
              onClose();
            }}
            className="px-4 py-2 text-xs font-bold text-white bg-[#8fa38e] hover:bg-[#7e937d] rounded-xl transition-colors shadow-2xs"
          >
            Concluir Treino de Hoje ✓
          </button>
        </div>
      </div>
    </div>
  );
};
