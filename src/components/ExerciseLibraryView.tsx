import React, { useState } from 'react';
import { EXERCISES_DATABASE } from '../data/exercises';
import { Exercise, Gender } from '../types';
import { Exercise3DViewer } from './Exercise3DViewer';
import { Search, Filter, Layers, CheckCircle2, ChevronRight, Sparkles } from 'lucide-react';

interface ExerciseLibraryViewProps {
  gender: Gender;
  onSelectExerciseDetail: (exercise: Exercise) => void;
}

export const ExerciseLibraryView: React.FC<ExerciseLibraryViewProps> = ({
  gender,
  onSelectExerciseDetail,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeExercise, setActiveExercise] = useState<Exercise>(
    gender === 'male' ? EXERCISES_DATABASE.pushup_standard : EXERCISES_DATABASE.glute_bridge
  );

  const isMale = gender === 'male';
  const allExercises = Object.values(EXERCISES_DATABASE);

  const categories = ['Todos', 'Peito', 'Glúteos', 'Abdômen & Core', 'Pernas', 'Cardio Calistênico'];

  const filteredExercises = allExercises.filter(ex => {
    const matchesCategory = selectedCategory === 'Todos' || ex.category === selectedCategory;
    const matchesSearch =
      ex.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ex.muscles.primary.some(m => m.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div id="exercise-library-view" className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-2xl p-5 sm:p-6 border border-[#8fa38e]/20 shadow-[0_4px_16px_rgba(143,163,142,0.06)]">
        <h2 className="text-xl sm:text-2xl font-bold text-[#3a3a38] tracking-tight">
          Biblioteca de Biomecânica 3D
        </h2>
        <p className="text-xs sm:text-sm text-[#6d6d6b] mt-1">
          Explore as animações 3D interativas, grupos musculares primários e instruções técnicas de calistenia.
        </p>

        {/* Search & Category Filter */}
        <div className="mt-4 flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-[#8fa38e] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              id="input-search-exercises"
              type="text"
              placeholder="Buscar por exercício ou músculo (ex: peito, glúteo, abdômen)..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-[#fbfaf7] border border-[#8fa38e]/20 rounded-xl text-xs text-[#4a4a48] focus:outline-none focus:ring-1 focus:ring-[#8fa38e]"
            />
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-1 sm:pb-0">
            {categories.map(cat => (
              <button
                key={cat}
                id={`btn-filter-category-${cat}`}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-colors border ${
                  selectedCategory === cat
                    ? isMale
                      ? 'bg-[#8fa38e] text-white border-[#8fa38e]'
                      : 'bg-[#c89f83] text-white border-[#c89f83]'
                    : 'bg-white text-[#6d6d6b] border-[#8fa38e]/20 hover:bg-[#fbfaf7]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid: 3D Visualizer on Top/Left, Catalog List on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Active 3D Viewer & Deep Cues (6 cols) */}
        <div className="lg:col-span-6 space-y-4">
          <div className="sticky top-20 space-y-4">
            <Exercise3DViewer exercise={activeExercise} gender={gender} />

            <div className="bg-white p-5 rounded-2xl border border-[#8fa38e]/20 shadow-[0_4px_16px_rgba(143,163,142,0.06)] space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                    isMale
                      ? 'bg-[#eef3ed] text-[#5c725b] border border-[#8fa38e]/30'
                      : 'bg-[#fdfaf4] text-[#8a7362] border border-[#d9bba4]/50'
                  }`}>
                    {activeExercise.category}
                  </span>
                  <h3 className="text-base font-bold text-[#3a3a38] mt-1">{activeExercise.name}</h3>
                </div>
                <button
                  id="btn-open-full-modal-lib"
                  onClick={() => onSelectExerciseDetail(activeExercise)}
                  className="px-3.5 py-1.5 rounded-xl bg-[#fbfaf7] border border-[#8fa38e]/20 hover:bg-[#eef3ed] text-[#4a4a48] text-xs font-bold transition-colors"
                >
                  Ver Ficha Completa
                </button>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#6d6d6b] mb-1.5">
                  Músculos Principais
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {activeExercise.muscles.primary.map((m, idx) => (
                    <span key={idx} className="text-xs px-2.5 py-1 rounded-md bg-[#eef3ed] text-[#5c725b] font-semibold border border-[#8fa38e]/30">
                      ★ {m}
                    </span>
                  ))}
                  {activeExercise.muscles.secondary.map((m, idx) => (
                    <span key={idx} className="text-xs px-2.5 py-1 rounded-md bg-[#fbfaf7] text-[#6d6d6b] border border-[#8fa38e]/15">
                      {m}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#6d6d6b] mb-1.5">
                  Dica de Postura & Biomecânica
                </h4>
                <p className="text-xs text-[#4a4a48] leading-relaxed bg-[#fbfaf7] p-3 rounded-xl border border-[#8fa38e]/15">
                  {activeExercise.keyCues[0]}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Exercise List (6 cols) */}
        <div className="lg:col-span-6 space-y-3">
          {filteredExercises.map(ex => {
            const isCurrent = activeExercise.id === ex.id;

            return (
              <div
                key={ex.id}
                onClick={() => setActiveExercise(ex)}
                className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-center justify-between gap-3 ${
                  isCurrent
                    ? isMale
                      ? 'bg-[#eef3ed]/60 border-[#8fa38e] shadow-xs ring-1 ring-[#8fa38e]/40'
                      : 'bg-[#fdfaf4] border-[#c89f83] shadow-xs ring-1 ring-[#c89f83]/40'
                    : 'bg-white border-[#8fa38e]/15 hover:border-[#8fa38e]/40 hover:bg-[#fbfaf7]'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-xs shrink-0 ${
                    isCurrent
                      ? isMale
                        ? 'bg-[#8fa38e] text-white shadow-2xs'
                        : 'bg-[#c89f83] text-white shadow-2xs'
                      : 'bg-[#fbfaf7] border border-[#8fa38e]/20 text-[#6d6d6b]'
                  }`}>
                    3D
                  </div>
                  <div>
                    <h4 className="font-bold text-xs sm:text-sm text-[#3a3a38]">{ex.name}</h4>
                    <p className="text-[11px] text-[#6d6d6b] mt-0.5">
                      {ex.sets} séries • {ex.repsOrDuration}
                    </p>
                    <span className="text-[10px] text-[#8a7362] block mt-1">
                      {ex.muscles.primary.join(', ')}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    id={`btn-select-exercise-lib-${ex.id}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectExerciseDetail(ex);
                    }}
                    className="p-2 text-[#6d6d6b] hover:text-[#3a3a38] rounded-lg hover:bg-[#eef3ed] transition-colors"
                    title="Ver detalhes"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
