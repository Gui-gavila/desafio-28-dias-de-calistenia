import React from 'react';
import { DayWorkout, DayProgress, UserProfile } from '../types';
import { CheckCircle2, Circle, Trophy, Flame, Footprints, Clock, ArrowRight, Award } from 'lucide-react';

interface CalendarGrid28Props {
  days: DayWorkout[];
  progressMap: Record<number, DayProgress>;
  selectedDay: number;
  onSelectDay: (day: number) => void;
  profile: UserProfile;
}

export const CalendarGrid28: React.FC<CalendarGrid28Props> = ({
  days,
  progressMap,
  selectedDay,
  onSelectDay,
  profile,
}) => {
  const isMale = profile.gender === 'male';

  // Calculate overall stats
  const progressList = Object.values(progressMap) as DayProgress[];
  const completedDaysCount = progressList.filter(p => p.completed).length;
  const progressPercent = Math.round((completedDaysCount / 28) * 100);
  const totalWorkoutMinutes = completedDaysCount * 30;
  const totalWalkMinutes = progressList.filter(p => p.walkCompleted).length * 15;
  const totalCaloriesEstimated = progressList.reduce((acc, p) => {
    if (p.completed) {
      const dayData = days.find(d => d.day === p.day);
      return acc + (dayData?.estimatedCalories || 280);
    }
    return acc;
  }, 0);

  // Group days by week (1, 2, 3, 4)
  const weeks = [
    { number: 1, title: 'Semana 1: Fundação & Conexão Neural', desc: 'Ativação biomecânica, postura e queima inicial de calorias.', days: days.slice(0, 7) },
    { number: 2, title: 'Semana 2: Intensificação Muscular & Sobrecarga', desc: 'Aumento de tempo sob tensão e resistência isométrica.', days: days.slice(7, 14) },
    { number: 3, title: 'Semana 3: Hipertrofia & Modelagem Tridimensional', desc: 'Estímulo metabólico profundo para esculpir as fibras.', days: days.slice(14, 21) },
    { number: 4, title: 'Semana 4: Definição Máxima & Transformação', desc: 'A reta final para consolidar o novo corpo e hábitos.', days: days.slice(21, 28) },
  ];

  return (
    <div id="calendar-grid-28-container" className="space-y-6">
      {/* Top Stats Overview Card */}
      <div className="bg-white rounded-2xl p-5 sm:p-6 border border-[#8fa38e]/20 shadow-[0_4px_16px_rgba(143,163,142,0.06)]">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Trophy className="w-5 h-5 text-[#c89f83]" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#6d6d6b]">
                Progresso Geral do Desafio (28 Dias)
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-[#3a3a38]">
              {completedDaysCount} de 28 Dias Concluídos ({progressPercent}%)
            </h2>
            <p className="text-xs text-[#6d6d6b] mt-0.5">
              {profile.focus} • {profile.name}
            </p>
          </div>

          <div className="grid grid-cols-3 gap-2.5 sm:gap-4 text-center">
            <div className="p-2.5 sm:p-3 rounded-xl bg-[#fbfaf7] border border-[#8fa38e]/15">
              <Clock className="w-4 h-4 text-[#8fa38e] mx-auto mb-1" />
              <span className="text-[10px] text-[#999] block">Calistenia</span>
              <span className="text-xs sm:text-sm font-bold text-[#4a4a48]">{totalWorkoutMinutes} min</span>
            </div>
            <div className="p-2.5 sm:p-3 rounded-xl bg-[#fbfaf7] border border-[#8fa38e]/15">
              <Footprints className="w-4 h-4 text-[#c89f83] mx-auto mb-1" />
              <span className="text-[10px] text-[#999] block">Caminhadas</span>
              <span className="text-xs sm:text-sm font-bold text-[#4a4a48]">{totalWalkMinutes} min</span>
            </div>
            <div className="p-2.5 sm:p-3 rounded-xl bg-[#fbfaf7] border border-[#8fa38e]/15">
              <Flame className="w-4 h-4 text-[#8a7362] mx-auto mb-1" />
              <span className="text-[10px] text-[#999] block">Calorias Queimadas</span>
              <span className="text-xs sm:text-sm font-bold text-[#4a4a48]">~{totalCaloriesEstimated}</span>
            </div>
          </div>
        </div>

        {/* Global Progress Bar */}
        <div className="mt-4 w-full bg-[#e5e1d8] rounded-full h-3 overflow-hidden p-0.5 border border-[#d8d3c7]">
          <div
            className={`h-full rounded-full transition-all duration-700 ${
              progressPercent === 100
                ? 'bg-[#5c725b]'
                : isMale
                ? 'bg-[#8fa38e]'
                : 'bg-[#c89f83]'
            }`}
            style={{ width: `${Math.max(progressPercent, 2)}%` }}
          />
        </div>
      </div>

      {/* 4 Weeks Roadmap */}
      <div className="space-y-6">
        {weeks.map(week => {
          const weekCompletedCount = week.days.filter(d => progressMap[d.day]?.completed).length;
          const isWeekFinished = weekCompletedCount === 7;

          return (
            <div
              key={week.number}
              className="bg-white rounded-2xl p-5 border border-[#8fa38e]/20 shadow-[0_4px_16px_rgba(143,163,142,0.06)] space-y-4"
            >
              {/* Week Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#8fa38e]/10 pb-3">
                <div className="flex items-center gap-2.5">
                  <div
                    className={`w-7 h-7 rounded-lg flex items-center justify-center font-bold text-xs ${
                      isWeekFinished
                        ? 'bg-[#eef3ed] text-[#5c725b] border border-[#8fa38e]/40'
                        : isMale
                        ? 'bg-[#eef3ed] text-[#5c725b] border border-[#8fa38e]/30'
                        : 'bg-[#fdfaf4] text-[#8a7362] border border-[#d9bba4]/50'
                    }`}
                  >
                    {isWeekFinished ? '✓' : `S${week.number}`}
                  </div>
                  <div>
                    <h3 className="font-bold text-sm sm:text-base text-[#3a3a38]">{week.title}</h3>
                    <p className="text-xs text-[#6d6d6b]">{week.desc}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 self-start sm:self-center">
                  <span className="text-xs font-semibold text-[#6d6d6b] bg-[#fbfaf7] border border-[#8fa38e]/15 px-2.5 py-1 rounded-lg">
                    {weekCompletedCount}/7 dias
                  </span>
                  {isWeekFinished && (
                    <span className="text-xs font-bold text-[#5c725b] bg-[#eef3ed] px-2.5 py-1 rounded-lg border border-[#8fa38e]/30 flex items-center gap-1">
                      <Award className="w-3.5 h-3.5" /> Meta Concluída
                    </span>
                  )}
                </div>
              </div>

              {/* 7 Days Grid for this week */}
              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2.5">
                {week.days.map(day => {
                  const dayProg = progressMap[day.day];
                  const isDone = dayProg?.completed;
                  const isSelected = selectedDay === day.day;
                  const hasWalk = dayProg?.walkCompleted;

                  return (
                    <button
                      key={day.day}
                      id={`btn-calendar-day-${day.day}`}
                      onClick={() => onSelectDay(day.day)}
                      className={`p-3 rounded-xl border text-left transition-all flex flex-col justify-between h-28 relative ${
                        isSelected
                          ? isMale
                            ? 'bg-[#eef3ed]/70 border-[#8fa38e] shadow-xs ring-2 ring-[#8fa38e]/30'
                            : 'bg-[#fdfaf4] border-[#c89f83] shadow-xs ring-2 ring-[#c89f83]/30'
                          : isDone
                          ? 'bg-[#eef3ed]/30 border-[#8fa38e]/30 hover:border-[#8fa38e]/60'
                          : 'bg-[#fbfaf7] border-[#8fa38e]/15 hover:bg-[#f3efe6] hover:border-[#8fa38e]/30'
                      }`}
                    >
                      {/* Top Day Number & Status */}
                      <div className="flex items-center justify-between w-full">
                        <span className="font-bold text-xs text-[#3a3a38]">
                          Dia {day.day}
                        </span>
                        {isDone ? (
                          <CheckCircle2 className="w-4 h-4 text-[#8fa38e]" />
                        ) : (
                          <Circle className="w-4 h-4 text-[#d8d3c7]" />
                        )}
                      </div>

                      {/* Day Title & Focus */}
                      <div className="my-auto">
                        <span className="text-[11px] font-semibold text-[#4a4a48] line-clamp-1 block">
                          {day.title}
                        </span>
                        <span className="text-[10px] text-[#6d6d6b] line-clamp-1 block mt-0.5">
                          {day.focusArea}
                        </span>
                      </div>

                      {/* Bottom mini indicators */}
                      <div className="flex items-center justify-between text-[10px] text-[#6d6d6b] pt-1 border-t border-[#8fa38e]/10 w-full">
                        <span>30' + 15'</span>
                        {hasWalk && (
                          <span className="text-[#5c725b] font-bold">Walk ✓</span>
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
