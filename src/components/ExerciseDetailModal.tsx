import React, { useState, useEffect } from 'react';
import { Exercise } from '../types';
import { Exercise3DViewer } from './Exercise3DViewer';
import { X, CheckCircle2, AlertCircle, ArrowUpRight, ArrowDownRight, Wind, Timer, Play, Pause, RotateCcw } from 'lucide-react';

interface ExerciseDetailModalProps {
  exercise: Exercise | null;
  gender: 'male' | 'female';
  onClose: () => void;
  onMarkComplete?: (exerciseId: string) => void;
  isCompleted?: boolean;
}

export const ExerciseDetailModal: React.FC<ExerciseDetailModalProps> = ({
  exercise,
  gender,
  onClose,
  onMarkComplete,
  isCompleted = false,
}) => {
  const [restTimer, setRestTimer] = useState<number>(0);
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(false);

  useEffect(() => {
    if (exercise) {
      setRestTimer(exercise.restSeconds);
      setIsTimerRunning(false);
    }
  }, [exercise]);

  useEffect(() => {
    let interval: any = null;
    if (isTimerRunning && restTimer > 0) {
      interval = setInterval(() => {
        setRestTimer(prev => prev - 1);
      }, 1000);
    } else if (restTimer === 0 && isTimerRunning) {
      setIsTimerRunning(false);
      // Play soft beep using Web Audio API
      try {
        const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.frequency.setValueAtTime(587.33, audioCtx.currentTime); // D5
        gain.gain.setValueAtTime(0.1, audioCtx.currentTime);
        osc.start();
        osc.stop(audioCtx.currentTime + 0.3);
      } catch (e) {
        // Audio fallback
      }
    }
    return () => clearInterval(interval);
  }, [isTimerRunning, restTimer]);

  if (!exercise) return null;

  const isMale = gender === 'male';

  return (
    <div id="exercise-detail-modal" className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#2c332b]/50 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-2xl max-h-[90vh] rounded-2xl shadow-[0_16px_48px_rgba(0,0,0,0.12)] border border-[#8fa38e]/25 flex flex-col overflow-hidden">
        {/* Header */}
        <div className="px-6 py-4 bg-[#fbfaf7] border-b border-[#8fa38e]/15 flex items-center justify-between">
          <div>
            <span className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold mb-1 ${
              isMale
                ? 'bg-[#eef3ed] text-[#5c725b] border border-[#8fa38e]/30'
                : 'bg-[#fdfaf4] text-[#8a7362] border border-[#d9bba4]/50'
            }`}>
              {exercise.category}
            </span>
            <h2 className="text-lg font-bold text-[#3a3a38]">{exercise.name}</h2>
          </div>
          <button
            id="btn-close-exercise-modal"
            onClick={onClose}
            className="p-2 rounded-xl text-[#6d6d6b] hover:text-[#3a3a38] hover:bg-[#eef3ed] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* 3D Visualizer */}
          <Exercise3DViewer exercise={exercise} gender={gender} />

          {/* Quick Target Specs Bar */}
          <div className="grid grid-cols-3 gap-3">
            <div className="p-3 rounded-xl bg-[#fbfaf7] border border-[#8fa38e]/15 text-center">
              <span className="text-[11px] text-[#999] font-medium block">Séries</span>
              <span className="text-base font-bold text-[#4a4a48]">{exercise.sets} séries</span>
            </div>
            <div className="p-3 rounded-xl bg-[#fbfaf7] border border-[#8fa38e]/15 text-center">
              <span className="text-[11px] text-[#999] font-medium block">Repetições / Tempo</span>
              <span className="text-sm font-bold text-[#4a4a48]">{exercise.repsOrDuration}</span>
            </div>
            <div className="p-3 rounded-xl bg-[#fbfaf7] border border-[#8fa38e]/15 text-center">
              <span className="text-[11px] text-[#999] font-medium block">Descanso</span>
              <span className="text-base font-bold text-[#4a4a48]">{exercise.restSeconds}s</span>
            </div>
          </div>

          {/* Rest Stopwatch Widget */}
          <div className="p-3.5 rounded-xl bg-[#fdfaf4] border border-[#d9bba4]/50 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <Timer className="w-5 h-5 text-[#8a7362]" />
              <div>
                <span className="text-xs font-semibold text-[#4a4a48] block">Cronômetro de Descanso entre Séries</span>
                <span className="text-xs text-[#6d6d6b]">Recupere o fôlego antes da próxima série</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-lg font-bold text-[#4a4a48] px-2.5 py-0.5 bg-white rounded-lg border border-[#d9bba4]/60 shadow-2xs">
                {Math.floor(restTimer / 60)}:{String(restTimer % 60).padStart(2, '0')}
              </span>
              <button
                id="btn-toggle-rest-timer"
                onClick={() => setIsTimerRunning(!isTimerRunning)}
                className="p-2 rounded-lg bg-[#8fa38e] text-white hover:bg-[#7e937d] transition-colors shadow-2xs"
                title={isTimerRunning ? 'Pausar' : 'Iniciar descanso'}
              >
                {isTimerRunning ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              </button>
              <button
                id="btn-reset-rest-timer"
                onClick={() => {
                  setIsTimerRunning(false);
                  setRestTimer(exercise.restSeconds);
                }}
                className="p-2 rounded-lg bg-white border border-[#8fa38e]/20 text-[#6d6d6b] hover:bg-[#fbfaf7] transition-colors"
                title="Reiniciar tempo"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Step-by-Step Instructions */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#6d6d6b] mb-2">
              Instruções de Execução Perfeita
            </h4>
            <ol className="space-y-2">
              {exercise.instructions.map((step, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs text-[#4a4a48] leading-relaxed">
                  <span className="w-5 h-5 rounded-full bg-[#eef3ed] text-[#5c725b] border border-[#8fa38e]/30 font-bold flex items-center justify-center shrink-0 text-[11px]">
                    {idx + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* Muscle Activation List */}
          <div className="p-4 rounded-xl bg-[#fbfaf7] border border-[#8fa38e]/15 space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#6d6d6b]">
              Grupos Musculares Ativados
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {exercise.muscles.primary.map((m, i) => (
                <span
                  key={i}
                  className={`px-2.5 py-1 rounded-md text-xs font-semibold ${
                    isMale
                      ? 'bg-[#eef3ed] text-[#5c725b] border border-[#8fa38e]/30'
                      : 'bg-[#fdfaf4] text-[#8a7362] border border-[#d9bba4]/50'
                  }`}
                >
                  ★ {m} (Primário)
                </span>
              ))}
              {exercise.muscles.secondary.map((m, i) => (
                <span key={i} className="px-2.5 py-1 rounded-md text-xs bg-white text-[#6d6d6b] border border-[#8fa38e]/15">
                  {m}
                </span>
              ))}
            </div>
          </div>

          {/* Biomechanical Cues and Errors */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="p-3.5 rounded-xl bg-[#eef3ed]/50 border border-[#8fa38e]/30">
              <h5 className="text-xs font-bold text-[#5c725b] mb-1 flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" /> Pontos-Chave da Postura
              </h5>
              <ul className="space-y-1 text-xs text-[#4a4a48]">
                {exercise.keyCues.map((cue, idx) => (
                  <li key={idx}>• {cue}</li>
                ))}
              </ul>
            </div>

            <div className="p-3.5 rounded-xl bg-[#fdfaf4] border border-[#d9bba4]/50">
              <h5 className="text-xs font-bold text-[#8a7362] mb-1 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5 text-[#c89f83]" /> Erros Comuns a Evitar
              </h5>
              <ul className="space-y-1 text-xs text-[#4a4a48]">
                {exercise.commonMistakes.map((mistake, idx) => (
                  <li key={idx}>• {mistake}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Progression & Regression */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="p-3 rounded-xl bg-[#fbfaf7] border border-[#8fa38e]/15">
              <span className="text-[11px] font-semibold text-[#8fa38e] flex items-center gap-1 mb-1">
                <ArrowDownRight className="w-3.5 h-3.5" /> Variação Mais Fácil (Regressão)
              </span>
              <p className="text-xs text-[#4a4a48]">{exercise.regression}</p>
            </div>

            <div className="p-3 rounded-xl bg-[#fbfaf7] border border-[#8fa38e]/15">
              <span className="text-[11px] font-semibold text-[#5c725b] flex items-center gap-1 mb-1">
                <ArrowUpRight className="w-3.5 h-3.5" /> Variação Mais Avançada (Progressão)
              </span>
              <p className="text-xs text-[#4a4a48]">{exercise.progression}</p>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-[#fbfaf7] border-t border-[#8fa38e]/15 flex items-center justify-between">
          <button
            id="btn-close-modal-footer"
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-[#6d6d6b] hover:text-[#3a3a38] hover:bg-[#eef3ed] rounded-xl transition-colors"
          >
            Fechar
          </button>

          {onMarkComplete && (
            <button
              id="btn-modal-mark-complete"
              onClick={() => {
                onMarkComplete(exercise.id);
                onClose();
              }}
              className={`px-5 py-2 rounded-xl text-xs font-bold transition-all shadow-xs flex items-center gap-1.5 ${
                isCompleted
                  ? 'bg-[#eef3ed] text-[#5c725b] border border-[#8fa38e]/40'
                  : isMale
                  ? 'bg-[#8fa38e] hover:bg-[#7e937d] text-white'
                  : 'bg-[#c89f83] hover:bg-[#b88f73] text-white'
              }`}
            >
              <CheckCircle2 className="w-4 h-4" />
              {isCompleted ? 'Exercício Concluído ✓' : 'Marcar como Feito'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
