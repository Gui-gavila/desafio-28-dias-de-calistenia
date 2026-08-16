export type Gender = 'male' | 'female';

export interface UserProfile {
  gender: Gender;
  name: string;
  height: number; // in meters (e.g., 1.75 or 1.53)
  weight: number; // in kg (e.g., 86 or 62)
  focus: string;
  focusSubtext: string;
  dailyWorkoutMinutes: number; // 30 min
  dailyWalkMinutes: number; // 15 min
  waterTargetLiters: number;
  waterTargetGlasses: number;
  primaryColor: string;
  accentColor: string;
}

export type PoseType =
  | 'pushup'
  | 'incline_pushup'
  | 'decline_pushup'
  | 'diamond_pushup'
  | 'plank'
  | 'hollow_body'
  | 'mountain_climber'
  | 'leg_raises'
  | 'bicycle_crunches'
  | 'chair_dips'
  | 'glute_bridge'
  | 'single_leg_bridge'
  | 'squat'
  | 'sumo_squat'
  | 'bulgarian_split'
  | 'donkey_kicks'
  | 'fire_hydrant'
  | 'lunges'
  | 'wall_sit'
  | 'side_plank'
  | 'superman'
  | 'flutter_kicks'
  | 'calf_raises';

export interface MuscleActivation {
  primary: string[];
  secondary: string[];
}

export interface Exercise {
  id: string;
  name: string;
  category: 'Peito' | 'Abdômen & Core' | 'Glúteos' | 'Pernas' | 'Cardio Calistênico' | 'Full Body';
  sets: number;
  repsOrDuration: string; // e.g. "12 a 15 repetições" or "40 segundos"
  restSeconds: number;
  poseType: PoseType;
  muscles: MuscleActivation;
  instructions: string[];
  keyCues: string[];
  breathing: string;
  commonMistakes: string[];
  regression: string; // Easier variation
  progression: string; // Harder variation
}

export interface DayWorkout {
  day: number;
  week: number;
  title: string;
  focusArea: string;
  tagline: string;
  warmupTimeMinutes: number;
  warmupExercises: string[];
  exercises: Exercise[];
  cooldownTimeMinutes: number;
  cooldownExercises: string[];
  estimatedCalories: number;
  walkGoalMinutes: number;
  walkTip: string;
  calisthenicsTip: string;
}

export interface DayProgress {
  day: number;
  completed: boolean;
  exercisesCompleted: string[]; // exercise ids
  walkCompleted: boolean;
  waterGlasses: number;
  notes?: string;
  energyLevel?: number; // 1-5
  completedAt?: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
}
