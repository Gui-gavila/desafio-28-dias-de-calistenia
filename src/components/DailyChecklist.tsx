import React, { useState, useEffect } from 'react';
import { DayWorkout, DayProgress, Exercise, UserProfile } from '../types';
import { Exercise3DViewer } from './Exercise3DViewer';
import confetti from 'canvas-confetti';
import {
  CheckCircle2,
  Circle,
  Footprints,
  Droplets,
  Flame,
  Clock,
  Sparkles,
  Play,
  Pause,
  RotateCcw,
  Star,
  Eye,
  ChevronRight,
  Trophy,
  Activity,
  HeartHandshake,
} from 'lucide-react';

interface DailyChecklistProps {
  workout: DayWorkout;
  profile: UserProfile;
  progress: DayProgress;
  onUpdateProgress: (updated: DayProgress) => void;
  onOpenExerciseDetail: (exercise: Exercise) => void;
  onNextDay: () => void;
  onPrevDay: () => void;
  isLastDay: boolean;
  isFirstDay: boolean;
}

export const DailyChecklist: React.FC<DailyChecklistProps> = ({
  workout,
  profile,
  progress,
  onUpdateProgress,
  onOpenExerciseDetail,
  onNextDay,
  onPrevDay,
  isLastDay,
  isFirstDay,
}) => {
  const isMale = profile.gender === 'male';

  // Walk 15 min stopwatch state (900 seconds)
  const [walkSeconds, setWalkSeconds] = useState<number>(0);
  const [isWalkTimerActive, setIsWalkTimerActive] = useState<boolean>(false);

  // Quick 3D preview toggle inside checklist
  const [preview3DExercise, setPreview3DExercise] = useState<Exercise | null>(
    workout.exercises[0] || null
  );

  // Synchronize 3D preview when day changes
  useEffect(() => {
    if (workout.exercises.length > 0) {
      setPreview3DExercise(workout.exercises[0]);
    }
  }, [workout.day]);

  // Walk stopwatch timer
  useEffect(() => {
    let interval: any = null;
    if (isWalkTimerActive) {
      interval = setInterval(() => {
        setWalkSeconds(prev => {
          const next = prev + 1;
          if (next === 900 && !progress.walkCompleted) {
            // Auto mark walk completed when 15 min (900s) reached
            onUpdateProgress({
              ...progress,
              walkCompleted: true,
            });
            confetti({ particleCount: 50, spread: 60, origin: { y: 0.8 } });
          }
          return next;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isWalkTimerActive, progress, onUpdateProgress]);

  // Toggle individual exercise completion
  const handleToggleExercise = (exerciseId: string) => {
    const currentCompleted = progress.exercisesCompleted || [];
    const isAlreadyCompleted = currentCompleted.includes(exerciseId);
    const newCompleted = isAlreadyCompleted
      ? currentCompleted.filter(id => id !== exerciseId)
      : [...currentCompleted, exerciseId];

    const allExercisesDone =
      workout.exercises.every(ex => newCompleted.includes(ex.id)) &&
      (progress.walkCompleted || false);

    onUpdateProgress({
      ...progress,
      exercisesCompleted: newCompleted,
      completed: allExercisesDone,
      completedAt: allExercisesDone ? new Date().toISOString() : progress.completedAt,
    });
  };

  // Toggle walk completion
  const handleToggleWalk = () => {
    const nextWalkState = !progress.walkCompleted;
    const allExercisesDone =
      workout.exercises.every(ex => progress.exercisesCompleted?.includes(ex.id)) &&
      nextWalkState;

    onUpdateProgress({
      ...progress,
      walkCompleted: nextWalkState,
      completed: allExercisesDone,
      completedAt: allExercisesDone ? new Date().toISOString() : progress.completedAt,
    });

    if (nextWalkState) {
      confetti({
        particleCount: 40,
        spread: 50,
        origin: { y: 0.7 },
      });
    }
  };

  // Water click handler
  const handleSetWater = (glasses: number) => {
    onUpdateProgress({
      ...progress,
      waterGlasses: Math.max(0, glasses),
    });
  };

  // Star Energy rating
  const handleSetEnergy = (stars: number) => {
    onUpdateProgress({
      ...progress,
      energyLevel: stars,
    });
  };

  // Finish full day button
  const handleCompleteDay = () => {
    const allExIds = workout.exercises.map(e => e.id);
    onUpdateProgress({
      ...progress,
      completed: true,
      exercisesCompleted: allExIds,
      walkCompleted: true,
      completedAt: new Date().toISOString(),
    });

    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.6 },
    });
  };

  // Calculate day completion percentage
  const totalTasks = workout.exercises.length + 1; // exercises + walk
  const completedTasks =
    (progress.exercisesCompleted?.length || 0) + (progress.walkCompleted ? 1 : 0);
  const dayProgressPercent = Math.round((completedTasks / totalTasks) * 100);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  return (
    <div id="daily-checklist-container" className="space-y-6">
      {/* Day Top Banner */}
      <div className="bg-white rounded-2xl p-5 sm:p-6 border border-[#8fa38e]/20 shadow-[0_4px_16px_rgba(143,163,142,0.06)]">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span
                className={`px-3 py-1 rounded-full text-xs font-bold ${
                  isMale
                    ? 'bg-[#eef3ed] text-[#5c725b] border border-[#8fa38e]/30'
                    : 'bg-[#fdfaf4] text-[#8a7362] border border-[#d9bba4]/50'
                }`}
              >
                Semana {workout.week} • Dia {workout.day} de 28
              </span>
              {progress.completed && (
                <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[#eef3ed] text-[#5c725b] border border-[#8fa38e]/40 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#5c725b]" /> Dia Concluído
                </span>
              )}
            </div>
            <h1 className="text-xl sm:text-2xl font-bold text-[#3a3a38] tracking-tight">
              {workout.title}
            </h1>
            <p className="text-xs sm:text-sm text-[#6d6d6b] mt-0.5">{workout.tagline}</p>
          </div>

          {/* Navigation between days */}
          <div className="flex items-center gap-2 self-end sm:self-center">
            <button
              id="btn-prev-day"
              onClick={onPrevDay}
              disabled={isFirstDay}
              className="px-3.5 py-1.5 rounded-xl border border-[#8fa38e]/25 text-xs font-semibold text-[#6d6d6b] hover:bg-[#fbfaf7] disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            >
              ← Dia Anterior
            </button>
            <button
              id="btn-next-day"
              onClick={onNextDay}
              disabled={isLastDay}
              className={`px-4 py-1.5 rounded-xl text-xs font-bold transition-colors ${
                isMale
                  ? 'bg-[#8fa38e] hover:bg-[#7e937d] text-white'
                  : 'bg-[#c89f83] hover:bg-[#b88f73] text-white'
              } disabled:opacity-40 disabled:cursor-not-allowed shadow-2xs`}
            >
              Próximo Dia →
            </button>
          </div>
        </div>

        {/* Quick Day Stats Row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-5 pt-4 border-t border-[#8fa38e]/10 text-xs">
          <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-[#fbfaf7] border border-[#8fa38e]/15">
            <Clock className="w-4 h-4 text-[#8fa38e] shrink-0" />
            <div>
              <span className="text-[11px] text-[#999] font-medium block">Treino Calistenia</span>
              <span className="font-bold text-[#4a4a48]">30 minutos</span>
            </div>
          </div>

          <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-[#fbfaf7] border border-[#8fa38e]/15">
            <Footprints className="w-4 h-4 text-[#c89f83] shrink-0" />
            <div>
              <span className="text-[11px] text-[#999] font-medium block">Caminhada Diária</span>
              <span className="font-bold text-[#4a4a48]">15 minutos</span>
            </div>
          </div>

          <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-[#fbfaf7] border border-[#8fa38e]/15">
            <Flame className="w-4 h-4 text-[#8a7362] shrink-0" />
            <div>
              <span className="text-[11px] text-[#999] font-medium block">Gasto Estimado</span>
              <span className="font-bold text-[#4a4a48]">~{workout.estimatedCalories} kcal</span>
            </div>
          </div>

          <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-[#fbfaf7] border border-[#8fa38e]/15">
            <Activity className="w-4 h-4 text-[#5c725b] shrink-0" />
            <div>
              <span className="text-[11px] text-[#999] font-medium block">Progresso do Dia</span>
              <span className="font-bold text-[#4a4a48]">{dayProgressPercent}% concluído</span>
            </div>
          </div>
        </div>

        {/* Progress Bar for the day */}
        <div className="mt-3 w-full bg-[#e5e1d8] rounded-full h-2 overflow-hidden">
          <div
            className={`h-full transition-all duration-500 ${
              dayProgressPercent === 100
                ? 'bg-[#5c725b]'
                : isMale
                ? 'bg-[#8fa38e]'
                : 'bg-[#c89f83]'
            }`}
            style={{ width: `${dayProgressPercent}%` }}
          />
        </div>
      </div>

      {/* Main Grid: Left side Checklist, Right side 3D Interactive Viewer */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* LEFT COLUMN: Checklist & Walk & Water (7 cols) */}
        <div className="lg:col-span-7 space-y-5">
          {/* SECTION 1: Calisthenics 30-min Workout */}
          <div className="bg-white rounded-2xl p-5 border border-[#8fa38e]/20 shadow-[0_4px_16px_rgba(143,163,142,0.06)] space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className={`w-8 h-8 rounded-xl flex items-center justify-center font-bold text-xs ${
                  isMale ? 'bg-[#eef3ed] text-[#5c725b]' : 'bg-[#fdfaf4] text-[#8a7362]'
                }`}>
                  30'
                </div>
                <div>
                  <h3 className="font-bold text-[#3a3a38] text-sm sm:text-base">
                    1. Treino de Calistenia (30 min)
                  </h3>
                  <p className="text-xs text-[#6d6d6b]">{workout.focusArea}</p>
                </div>
              </div>
              <span className="text-xs font-semibold text-[#6d6d6b] bg-[#fbfaf7] border border-[#8fa38e]/15 px-2.5 py-1 rounded-lg">
                {progress.exercisesCompleted?.length || 0}/{workout.exercises.length} feitos
              </span>
            </div>

            {/* Warm-up Note */}
            <div className="p-3.5 rounded-xl bg-[#fdfaf4] border border-[#d9bba4]/50 text-xs text-[#6d6d6b] space-y-1">
              <div className="font-bold text-[#8a7362] flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#c89f83]" />
                Aquecimento Articular Inicial (4 min):
              </div>
              <div className="text-[#6d6d6b] pl-5 leading-relaxed">
                {workout.warmupExercises.join(' • ')}
              </div>
            </div>

            {/* Exercise Checklist Items */}
            <div className="space-y-2.5">
              {workout.exercises.map((exercise, idx) => {
                const isDone = progress.exercisesCompleted?.includes(exercise.id);
                const isSelectedFor3D = preview3DExercise?.id === exercise.id;

                return (
                  <div
                    key={exercise.id}
                    className={`p-3.5 rounded-xl border transition-all ${
                      isDone
                        ? 'bg-[#eef3ed]/30 border-[#8fa38e]/40'
                        : isSelectedFor3D
                        ? 'bg-[#eef3ed]/40 border-[#8fa38e] shadow-xs'
                        : 'bg-white border-[#8fa38e]/15 hover:border-[#8fa38e]/40'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      {/* Checkbox and Name */}
                      <div className="flex items-start gap-3">
                        <button
                          id={`btn-check-exercise-${exercise.id}`}
                          onClick={() => handleToggleExercise(exercise.id)}
                          className="mt-0.5 text-[#8fa38e] hover:opacity-80 transition-opacity"
                          title={isDone ? 'Marcar como não feito' : 'Marcar como feito'}
                        >
                          {isDone ? (
                            <CheckCircle2 className="w-5 h-5 text-[#8fa38e] fill-[#eef3ed]" />
                          ) : (
                            <Circle className="w-5 h-5 text-[#d8d3c7] hover:text-[#8fa38e]" />
                          )}
                        </button>

                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-xs sm:text-sm text-[#3a3a38]">
                              {idx + 1}. {exercise.name}
                            </span>
                            <span
                              className={`text-[10px] px-2 py-0.5 rounded font-medium ${
                                isMale
                                  ? 'bg-[#eef3ed] text-[#5c725b] border border-[#8fa38e]/25'
                                  : 'bg-[#fdfaf4] text-[#8a7362] border border-[#d9bba4]/40'
                              }`}
                            >
                              {exercise.category}
                            </span>
                          </div>

                          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-[#6d6d6b] mt-1">
                            <span className="font-semibold text-[#4a4a48]">
                              {exercise.sets} séries × {exercise.repsOrDuration}
                            </span>
                            <span>• Descanso: {exercise.restSeconds}s</span>
                          </div>

                          <div className="text-[11px] text-[#6d6d6b] mt-1">
                            <span className="text-[#999]">Foco: </span>
                            {exercise.muscles.primary.join(', ')}
                          </div>
                        </div>
                      </div>

                      {/* Action buttons: Select 3D and Details Modal */}
                      <div className="flex items-center gap-1.5 shrink-0">
                        <button
                          id={`btn-select-3d-${exercise.id}`}
                          onClick={() => setPreview3DExercise(exercise)}
                          className={`px-2.5 py-1 text-xs font-semibold rounded-lg border transition-colors flex items-center gap-1 ${
                            isSelectedFor3D
                              ? 'bg-[#8fa38e] text-white border-[#8fa38e]'
                              : 'bg-white text-[#4a4a48] border-[#8fa38e]/25 hover:bg-[#eef3ed]'
                          }`}
                          title="Carregar animação 3D ao lado"
                        >
                          <Eye className="w-3.5 h-3.5" />
                          <span className="hidden sm:inline">3D</span>
                        </button>

                        <button
                          id={`btn-open-detail-${exercise.id}`}
                          onClick={() => onOpenExerciseDetail(exercise)}
                          className="p-1 text-[#6d6d6b] hover:text-[#3a3a38] rounded-lg hover:bg-[#fbfaf7] transition-colors"
                          title="Ver instruções completas e cronômetro"
                        >
                          <ChevronRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Cool-down Note */}
            <div className="p-3.5 rounded-xl bg-[#fbfaf7] border border-[#8fa38e]/15 text-xs text-[#6d6d6b] space-y-1">
              <div className="font-bold text-[#4a4a48] flex items-center gap-1.5">
                <HeartHandshake className="w-3.5 h-3.5 text-[#8fa38e]" />
                Desaquecimento & Alongamento Final (3 min):
              </div>
              <div className="text-[#6d6d6b] pl-5 leading-relaxed">
                {workout.cooldownExercises.join(' • ')}
              </div>
            </div>
          </div>

          {/* SECTION 2: 15-Minute Daily Walk Tracker (Natural Tones Clay style) */}
          <div className="bg-[#fdfaf4] border-l-4 border-l-[#d9bba4] border-y border-r border-[#d9bba4]/40 p-5 rounded-2xl shadow-[0_4px_16px_rgba(143,163,142,0.06)] space-y-4">
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-start gap-3">
                <button
                  id="btn-toggle-walk-completed"
                  onClick={handleToggleWalk}
                  className="mt-1 text-[#8fa38e] hover:opacity-80 transition-opacity"
                >
                  {progress.walkCompleted ? (
                    <CheckCircle2 className="w-6 h-6 text-[#8fa38e] fill-[#eef3ed]" />
                  ) : (
                    <Circle className="w-6 h-6 text-[#d8d3c7] hover:text-[#8fa38e]" />
                  )}
                </button>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold text-[#8a7362] text-sm sm:text-base">
                      2. Caminhada Diária Obrigatória (15 min)
                    </h3>
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-[#eef3ed] text-[#5c725b] border border-[#8fa38e]/30">
                      NEAT & Queima Lipídica
                    </span>
                  </div>
                  <p className="text-xs text-[#6d6d6b] mt-1 leading-relaxed">
                    {workout.walkTip}
                  </p>
                </div>
              </div>
            </div>

            {/* Walk Interactive Stopwatch */}
            <div className="p-4 rounded-xl bg-gradient-to-r from-[#fbf6f0] to-[#f7ede6] border border-[#d9bba4]/50 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#c89f83] text-white flex items-center justify-center font-bold shadow-2xs">
                  <Footprints className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-[#8a7362] block">
                    Cronômetro da Caminhada (Meta: 15:00)
                  </span>
                  <span className="text-xs text-[#6d6d6b]">
                    {walkSeconds >= 900 ? 'Meta dos 15 min batida!' : 'Passo firme e ritmado'}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="font-mono text-2xl font-bold text-[#4a4a48] px-3 py-1 bg-white rounded-xl border border-[#d9bba4]/60 shadow-2xs">
                  {formatTime(walkSeconds)}
                </span>

                <button
                  id="btn-toggle-walk-timer"
                  onClick={() => setIsWalkTimerActive(!isWalkTimerActive)}
                  className={`p-2.5 rounded-xl text-white font-bold transition-all shadow-xs ${
                    isWalkTimerActive
                      ? 'bg-[#c89f83] hover:bg-[#b88f73]'
                      : 'bg-[#8fa38e] hover:bg-[#7e937d]'
                  }`}
                  title={isWalkTimerActive ? 'Pausar caminhada' : 'Iniciar caminhada'}
                >
                  {isWalkTimerActive ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                </button>

                <button
                  id="btn-reset-walk-timer"
                  onClick={() => {
                    setIsWalkTimerActive(false);
                    setWalkSeconds(0);
                  }}
                  className="p-2.5 rounded-xl bg-white border border-[#8fa38e]/20 text-[#6d6d6b] hover:bg-[#fbfaf7] transition-colors"
                  title="Zerar cronômetro"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* SECTION 3: Hydration & Daily Feeling */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Water Tracker */}
            <div className="bg-white rounded-2xl p-4 border border-[#8fa38e]/20 shadow-[0_4px_16px_rgba(143,163,142,0.06)] space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Droplets className="w-4 h-4 text-[#8fa38e]" />
                  <h4 className="font-bold text-xs sm:text-sm text-[#3a3a38]">
                    Hidratação (Meta: {profile.waterTargetLiters}L)
                  </h4>
                </div>
                <span className="text-xs font-semibold text-[#5c725b]">
                  {progress.waterGlasses || 0}/{profile.waterTargetGlasses} copos
                </span>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {Array.from({ length: profile.waterTargetGlasses }).map((_, i) => {
                  const isFilled = (progress.waterGlasses || 0) > i;
                  return (
                    <button
                      key={i}
                      id={`btn-water-glass-${i}`}
                      onClick={() => handleSetWater(isFilled ? i : i + 1)}
                      className={`w-7 h-8 rounded-md text-xs flex items-center justify-center transition-all ${
                        isFilled
                          ? 'bg-[#8fa38e] text-white shadow-xs scale-105'
                          : 'bg-[#fbfaf7] border border-[#8fa38e]/20 text-[#8fa38e] hover:bg-[#eef3ed]'
                      }`}
                      title={`${(i + 1) * 300}ml`}
                    >
                      <Droplets className="w-3.5 h-3.5" />
                    </button>
                  );
                })}
              </div>
              <p className="text-[11px] text-[#6d6d6b]">
                Calculado para seu peso ({profile.weight}kg): acelera o metabolismo e previne cãibras.
              </p>
            </div>

            {/* Energy & Feeling */}
            <div className="bg-white rounded-2xl p-4 border border-[#8fa38e]/20 shadow-[0_4px_16px_rgba(143,163,142,0.06)] space-y-3">
              <h4 className="font-bold text-xs sm:text-sm text-[#3a3a38] flex items-center gap-1.5">
                <Star className="w-4 h-4 text-[#c89f83]" /> Sensação / Nível de Energia
              </h4>

              <div className="flex items-center gap-2">
                {[1, 2, 3, 4, 5].map(star => (
                  <button
                    key={star}
                    id={`btn-star-energy-${star}`}
                    onClick={() => handleSetEnergy(star)}
                    className="p-1 text-[#d8d3c7] hover:text-[#c89f83] transition-colors"
                  >
                    <Star
                      className={`w-5 h-5 ${
                        (progress.energyLevel || 0) >= star
                          ? 'text-[#c89f83] fill-[#d9bba4]'
                          : 'text-[#d8d3c7]'
                      }`}
                    />
                  </button>
                ))}
                <span className="text-xs text-[#6d6d6b] ml-1">
                  {progress.energyLevel === 5
                    ? 'Excelente!'
                    : progress.energyLevel === 4
                    ? 'Ótimo'
                    : progress.energyLevel === 3
                    ? 'Moderado'
                    : progress.energyLevel
                    ? 'Cansado'
                    : 'Avalie seu dia'}
                </span>
              </div>

              <input
                id="input-daily-notes"
                type="text"
                placeholder="Anotação rápida do treino de hoje..."
                value={progress.notes || ''}
                onChange={e =>
                  onUpdateProgress({
                    ...progress,
                    notes: e.target.value,
                  })
                }
                className="w-full text-xs px-3 py-2 rounded-xl bg-[#fbfaf7] border border-[#8fa38e]/20 focus:outline-none focus:ring-1 focus:ring-[#8fa38e] text-[#4a4a48]"
              />
            </div>
          </div>

          {/* Finish Day Complete Button */}
          <div className="pt-2">
            <button
              id="btn-complete-entire-day"
              onClick={handleCompleteDay}
              className={`w-full py-3.5 px-6 rounded-2xl font-bold text-sm transition-all shadow-sm flex items-center justify-center gap-2 ${
                progress.completed
                  ? 'bg-[#5c725b] hover:bg-[#4d5f4c] text-white'
                  : isMale
                  ? 'bg-[#8fa38e] hover:bg-[#7e937d] text-white'
                  : 'bg-[#c89f83] hover:bg-[#b88f73] text-white'
              }`}
            >
              <Trophy className="w-5 h-5" />
              {progress.completed
                ? `Dia ${workout.day} Concluído com Sucesso! (Clique para comemorar)`
                : `Finalizar e Registrar Dia ${workout.day} do Desafio`}
            </button>
          </div>
        </div>

        {/* RIGHT COLUMN: 3D Visualizer & Master Tips (5 cols) */}
        <div className="lg:col-span-5 space-y-5">
          {preview3DExercise ? (
            <div className="sticky top-4 space-y-4">
              <Exercise3DViewer exercise={preview3DExercise} gender={profile.gender} />

              {/* Master Calisthenics Advice Card */}
              <div className="p-4 rounded-2xl bg-white border border-[#8fa38e]/20 shadow-[0_4px_16px_rgba(143,163,142,0.06)] space-y-2.5">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-[#fdfaf4] border border-[#d9bba4]/50 text-[#8a7362] flex items-center justify-center font-bold text-xs">
                    ★
                  </div>
                  <h4 className="font-bold text-[#3a3a38] text-xs sm:text-sm">
                    Dica Técnica do Mestre de Calistenia
                  </h4>
                </div>
                <p className="text-xs text-[#6d6d6b] leading-relaxed">
                  {workout.calisthenicsTip}
                </p>

                <div className="pt-2 border-t border-[#8fa38e]/10 flex items-center justify-between text-xs text-[#6d6d6b]">
                  <span>Exercício Atual: <strong className="text-[#4a4a48]">{preview3DExercise.name}</strong></span>
                  <button
                    id="btn-view-full-instructions"
                    onClick={() => onOpenExerciseDetail(preview3DExercise)}
                    className="text-[#5c725b] hover:text-[#3a3a38] font-bold"
                  >
                    Ver Tudo →
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-[#fbfaf7] rounded-2xl p-8 border border-[#8fa38e]/20 text-center text-[#6d6d6b] text-xs">
              Selecione um exercício na lista para carregar o modelo 3D.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
