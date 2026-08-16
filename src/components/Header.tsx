import React from 'react';
import { UserProfile, Gender } from '../types';
import { Bot, Dumbbell, Calendar, BookOpen, Sparkles, Play, Award } from 'lucide-react';

interface HeaderProps {
  currentGender: Gender;
  onGenderChange: (gender: Gender) => void;
  maleProfile: UserProfile;
  femaleProfile: UserProfile;
  activeTab: 'checklist' | 'calendar' | 'exercises' | 'guide';
  onTabChange: (tab: 'checklist' | 'calendar' | 'exercises' | 'guide') => void;
  onOpenCoach: () => void;
  onStartGuidedWorkout: () => void;
  completedDaysCount: number;
}

export const Header: React.FC<HeaderProps> = ({
  currentGender,
  onGenderChange,
  maleProfile,
  femaleProfile,
  activeTab,
  onTabChange,
  onOpenCoach,
  onStartGuidedWorkout,
  completedDaysCount,
}) => {
  const isMale = currentGender === 'male';
  const activeProfile = isMale ? maleProfile : femaleProfile;

  return (
    <header id="main-app-header" className="bg-white/95 backdrop-blur-xs border-b border-[#8fa38e]/15 sticky top-0 z-40">
      {/* Top Profile Selector Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 border-b border-[#8fa38e]/10 flex flex-col sm:flex-row items-center justify-between gap-2.5">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-[#8fa38e] text-white flex items-center justify-center font-black text-xs tracking-tighter shadow-2xs">
            28D
          </div>
          <div>
            <span className="font-extrabold text-sm sm:text-base text-[#3a3a38] tracking-tight block">
              Desafio 28 Dias de Calistenia
            </span>
            <span className="text-[11px] text-[#6d6d6b] hidden sm:block">
              Treino 30 min + Caminhada 15 min diários • Visualizador 3D & Mestre AI
            </span>
          </div>
        </div>

        {/* Gender Profile Switcher Tabs (Natural Tones Pill) */}
        <div className="flex items-center p-1 bg-[#e5e1d8] rounded-full border border-[#d8d3c7] shadow-2xs">
          <button
            id="tab-profile-male"
            onClick={() => onGenderChange('male')}
            className={`px-3.5 sm:px-4 py-1.5 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 ${
              isMale
                ? 'bg-white text-[#5c725b] shadow-xs'
                : 'text-[#6d6d6b] hover:text-[#3a3a38]'
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-[#8fa38e]"></span>
            <span>Homem (1,75m | 86kg)</span>
            <span className="hidden md:inline text-[10px] text-[#5c725b] font-medium">• Peito & Barriga</span>
          </button>

          <button
            id="tab-profile-female"
            onClick={() => onGenderChange('female')}
            className={`px-3.5 sm:px-4 py-1.5 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 ${
              !isMale
                ? 'bg-white text-[#8a7362] shadow-xs'
                : 'text-[#6d6d6b] hover:text-[#3a3a38]'
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-[#c89f83]"></span>
            <span>Mulher (1,53m | 62kg)</span>
            <span className="hidden md:inline text-[10px] text-[#8a7362] font-medium">• Glúteos & Cintura</span>
          </button>
        </div>
      </div>

      {/* Main Nav Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex flex-wrap items-center justify-between gap-3">
        {/* Navigation Tabs */}
        <nav className="flex items-center gap-1 sm:gap-2">
          <button
            id="nav-tab-checklist"
            onClick={() => onTabChange('checklist')}
            className={`px-3 py-2 rounded-xl text-xs font-semibold transition-colors flex items-center gap-1.5 ${
              activeTab === 'checklist'
                ? isMale
                  ? 'bg-[#eef3ed] text-[#5c725b] font-bold border border-[#8fa38e]/30'
                  : 'bg-[#fdfaf4] text-[#8a7362] font-bold border border-[#d9bba4]/50'
                : 'text-[#6d6d6b] hover:bg-[#fbfaf7] hover:text-[#3a3a38]'
            }`}
          >
            <Dumbbell className="w-4 h-4" />
            <span>Treino do Dia</span>
          </button>

          <button
            id="nav-tab-calendar"
            onClick={() => onTabChange('calendar')}
            className={`px-3 py-2 rounded-xl text-xs font-semibold transition-colors flex items-center gap-1.5 ${
              activeTab === 'calendar'
                ? isMale
                  ? 'bg-[#eef3ed] text-[#5c725b] font-bold border border-[#8fa38e]/30'
                  : 'bg-[#fdfaf4] text-[#8a7362] font-bold border border-[#d9bba4]/50'
                : 'text-[#6d6d6b] hover:bg-[#fbfaf7] hover:text-[#3a3a38]'
            }`}
          >
            <Calendar className="w-4 h-4" />
            <span>28 Dias ({completedDaysCount}/28)</span>
          </button>

          <button
            id="nav-tab-exercises"
            onClick={() => onTabChange('exercises')}
            className={`px-3 py-2 rounded-xl text-xs font-semibold transition-colors flex items-center gap-1.5 ${
              activeTab === 'exercises'
                ? isMale
                  ? 'bg-[#eef3ed] text-[#5c725b] font-bold border border-[#8fa38e]/30'
                  : 'bg-[#fdfaf4] text-[#8a7362] font-bold border border-[#d9bba4]/50'
                : 'text-[#6d6d6b] hover:bg-[#fbfaf7] hover:text-[#3a3a38]'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>Guia 3D</span>
          </button>
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          <button
            id="btn-header-guided-workout"
            onClick={onStartGuidedWorkout}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all shadow-xs flex items-center gap-1.5 text-white ${
              isMale ? 'bg-[#8fa38e] hover:bg-[#7e937d]' : 'bg-[#c89f83] hover:bg-[#b88f73]'
            }`}
          >
            <Play className="w-3.5 h-3.5 fill-white" />
            <span className="hidden sm:inline">Iniciar Treino Guiado (30')</span>
            <span className="sm:hidden">Treinar</span>
          </button>

          <button
            id="btn-header-open-coach"
            onClick={onOpenCoach}
            className="px-3 py-2 rounded-xl text-xs font-bold bg-[#4a4a48] hover:bg-[#3a3a38] text-white transition-colors flex items-center gap-1.5 shadow-xs border border-[#8fa38e]/20"
            title="Abrir Mestre Calistenia AI"
          >
            <Bot className="w-4 h-4 text-[#8fa38e]" />
            <span>Mestre AI</span>
          </button>
        </div>
      </div>
    </header>
  );
};
