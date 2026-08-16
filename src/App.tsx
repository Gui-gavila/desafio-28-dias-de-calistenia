import React, { useState, useEffect } from 'react';
import { Gender, DayProgress, Exercise } from './types';
import { PROFILES, MALE_28_DAYS, FEMALE_28_DAYS } from './data/challengeData';
import { Header } from './components/Header';
import { DailyChecklist } from './components/DailyChecklist';
import { CalendarGrid28 } from './components/CalendarGrid28';
import { ExerciseLibraryView } from './components/ExerciseLibraryView';
import { ExerciseDetailModal } from './components/ExerciseDetailModal';
import { WorkoutPlayerModal } from './components/WorkoutPlayerModal';
import { AiCoachDrawer } from './components/AiCoachDrawer';
import { Bot, Trophy, Footprints, Droplets, Dumbbell, Sparkles } from 'lucide-react';

export default function App() {
  const [gender, setGender] = useState<Gender>('male');
  const [selectedDay, setSelectedDay] = useState<number>(1);
  const [activeTab, setActiveTab] = useState<'checklist' | 'calendar' | 'exercises' | 'guide'>('checklist');

  // Modals state
  const [selectedExerciseForModal, setSelectedExerciseForModal] = useState<Exercise | null>(null);
  const [isWorkoutPlayerOpen, setIsWorkoutPlayerOpen] = useState<boolean>(false);
  const [isCoachOpen, setIsCoachOpen] = useState<boolean>(false);

  // Load progress from localStorage
  const maleStorageKey = 'calisthenics_28_male_progress_v2';
  const femaleStorageKey = 'calisthenics_28_female_progress_v2';

  const [maleProgress, setMaleProgress] = useState<Record<number, DayProgress>>(() => {
    try {
      const saved = localStorage.getItem(maleStorageKey);
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const [femaleProgress, setFemaleProgress] = useState<Record<number, DayProgress>>(() => {
    try {
      const saved = localStorage.getItem(femaleStorageKey);
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  // Save to localStorage when state changes
  useEffect(() => {
    try {
      localStorage.setItem(maleStorageKey, JSON.stringify(maleProgress));
    } catch (e) {
      console.error(e);
    }
  }, [maleProgress]);

  useEffect(() => {
    try {
      localStorage.setItem(femaleStorageKey, JSON.stringify(femaleProgress));
    } catch (e) {
      console.error(e);
    }
  }, [femaleProgress]);

  const activeProfile = PROFILES[gender];
  const activeDays = gender === 'male' ? MALE_28_DAYS : FEMALE_28_DAYS;
  const currentWorkout = activeDays.find(d => d.day === selectedDay) || activeDays[0];
  const currentProgressMap = gender === 'male' ? maleProgress : femaleProgress;
  const currentDayProgress: DayProgress = currentProgressMap[selectedDay] || {
    day: selectedDay,
    completed: false,
    exercisesCompleted: [],
    walkCompleted: false,
    waterGlasses: 0,
  };

  const handleUpdateCurrentDayProgress = (updated: DayProgress) => {
    if (gender === 'male') {
      setMaleProgress(prev => ({ ...prev, [selectedDay]: updated }));
    } else {
      setFemaleProgress(prev => ({ ...prev, [selectedDay]: updated }));
    }
  };

  const completedDaysCount = (Object.values(currentProgressMap) as DayProgress[]).filter(p => p.completed).length;

  return (
    <div className="min-h-screen bg-[#f9f7f2] text-[#4a4a48] flex flex-col font-sans selection:bg-[#8fa38e]/30 selection:text-[#3a3a38]">
      {/* Header with Gender Switcher and Nav Tabs */}
      <Header
        currentGender={gender}
        onGenderChange={newGender => {
          setGender(newGender);
          setSelectedDay(1);
        }}
        maleProfile={PROFILES.male}
        femaleProfile={PROFILES.female}
        activeTab={activeTab}
        onTabChange={setActiveTab}
        onOpenCoach={() => setIsCoachOpen(true)}
        onStartGuidedWorkout={() => setIsWorkoutPlayerOpen(true)}
        completedDaysCount={completedDaysCount}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 space-y-6">
        {/* Profile Identity Bar */}
        <div className="bg-white rounded-2xl p-4 sm:p-5 border border-[#8fa38e]/20 shadow-[0_4px_16px_rgba(143,163,142,0.06)] flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div
              className={`w-12 h-12 rounded-2xl flex items-center justify-center font-bold text-white shadow-xs ${
                gender === 'male'
                  ? 'bg-[#8fa38e]'
                  : 'bg-[#c89f83]'
              }`}
            >
              <Dumbbell className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="font-bold text-base sm:text-lg text-[#3a3a38]">
                  {activeProfile.name}
                </h2>
                <span
                  className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full ${
                    gender === 'male'
                      ? 'bg-[#eef3ed] text-[#5c725b] border border-[#8fa38e]/30'
                      : 'bg-[#fdfaf4] text-[#8a7362] border border-[#d9bba4]/50'
                  }`}
                >
                  {gender === 'male' ? 'Foco: Peito & Barriga' : 'Foco: Bumbum & Cintura'}
                </span>
              </div>
              <p className="text-xs text-[#6d6d6b] mt-0.5">
                {activeProfile.focusSubtext}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 self-start md:self-center text-xs">
            <div className="px-3 py-1.5 rounded-xl bg-[#fbfaf7] border border-[#8fa38e]/15">
              <span className="text-[#999] block text-[10px] uppercase font-semibold">Treino Diário</span>
              <strong className="text-[#4a4a48] font-bold">30 min</strong>
            </div>
            <div className="px-3 py-1.5 rounded-xl bg-[#fbfaf7] border border-[#8fa38e]/15">
              <span className="text-[#999] block text-[10px] uppercase font-semibold">Caminhada</span>
              <strong className="text-[#4a4a48] font-bold">15 min</strong>
            </div>
            <div className="px-3 py-1.5 rounded-xl bg-[#fbfaf7] border border-[#8fa38e]/15">
              <span className="text-[#999] block text-[10px] uppercase font-semibold">Hidratação</span>
              <strong className="text-[#4a4a48] font-bold">{activeProfile.waterTargetLiters}L</strong>
            </div>
          </div>
        </div>

        {/* Tab Views */}
        {activeTab === 'checklist' && (
          <DailyChecklist
            workout={currentWorkout}
            profile={activeProfile}
            progress={currentDayProgress}
            onUpdateProgress={handleUpdateCurrentDayProgress}
            onOpenExerciseDetail={ex => setSelectedExerciseForModal(ex)}
            onNextDay={() => setSelectedDay(prev => Math.min(28, prev + 1))}
            onPrevDay={() => setSelectedDay(prev => Math.max(1, prev - 1))}
            isLastDay={selectedDay === 28}
            isFirstDay={selectedDay === 1}
          />
        )}

        {activeTab === 'calendar' && (
          <CalendarGrid28
            days={activeDays}
            progressMap={currentProgressMap}
            selectedDay={selectedDay}
            onSelectDay={day => {
              setSelectedDay(day);
              setActiveTab('checklist');
            }}
            profile={activeProfile}
          />
        )}

        {activeTab === 'exercises' && (
          <ExerciseLibraryView
            gender={gender}
            onSelectExerciseDetail={ex => setSelectedExerciseForModal(ex)}
          />
        )}
      </main>

      {/* Floating AI Coach Button */}
      <button
        id="btn-floating-ai-coach"
        onClick={() => setIsCoachOpen(true)}
        className="fixed bottom-5 right-5 z-40 px-4 py-3 bg-[#4a4a48] hover:bg-[#3a3a38] text-white rounded-2xl shadow-xl flex items-center gap-2 text-xs font-bold transition-transform hover:scale-105 border border-[#8fa38e]/30"
      >
        <Bot className="w-5 h-5 text-[#8fa38e] animate-bounce" />
        <span>Tirar Dúvida com Mestre AI</span>
      </button>

      {/* Modals */}
      {selectedExerciseForModal && (
        <ExerciseDetailModal
          exercise={selectedExerciseForModal}
          gender={gender}
          onClose={() => setSelectedExerciseForModal(null)}
          isCompleted={currentDayProgress.exercisesCompleted?.includes(selectedExerciseForModal.id)}
          onMarkComplete={exerciseId => {
            const currentDone = currentDayProgress.exercisesCompleted || [];
            if (!currentDone.includes(exerciseId)) {
              handleUpdateCurrentDayProgress({
                ...currentDayProgress,
                exercisesCompleted: [...currentDone, exerciseId],
              });
            }
          }}
        />
      )}

      {isWorkoutPlayerOpen && (
        <WorkoutPlayerModal
          workout={currentWorkout}
          gender={gender}
          onClose={() => setIsWorkoutPlayerOpen(false)}
          onCompleteWorkout={() => {
            const allEx = currentWorkout.exercises.map(e => e.id);
            handleUpdateCurrentDayProgress({
              ...currentDayProgress,
              exercisesCompleted: allEx,
            });
          }}
        />
      )}

      <AiCoachDrawer
        isOpen={isCoachOpen}
        onClose={() => setIsCoachOpen(false)}
        profile={activeProfile}
        currentDay={selectedDay}
      />

      {/* Footer */}
      <footer className="bg-white border-t border-[#8fa38e]/15 mt-12 py-6 text-center text-xs text-[#6d6d6b]">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p>© 2026 Desafio 28 Dias de Calistenia • 30 min de Treino + 15 min de Caminhada Diária</p>
          <div className="flex items-center gap-3">
            <span className="text-[#8fa38e] font-medium">Desenvolvido com foco em biomecânica e saúde postural</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
