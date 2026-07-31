import React from "react";
import { villalbaProfile } from "../data/villalbaData";
import { Trophy, Target, Flame, TrendingUp, Award, Activity, Globe2, ShieldAlert } from "lucide-react";
import villalbaImage from "../assets/images/luciano_villalba_portrait_1785510513962.jpg";

interface HeroHeaderProps {
  onOpenAiScout: () => void;
}

export const HeroHeader: React.FC<HeroHeaderProps> = ({ onOpenAiScout }) => {
  return (
    <section id="profile" className="relative pt-6 pb-8 overflow-hidden">
      {/* Subtle Background Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Bento Container */}
        <div className="relative rounded-3xl bg-neutral-900/60 border border-white/5 p-6 lg:p-8 shadow-2xl backdrop-blur-xl overflow-hidden space-y-6">
          
          {/* Subtle Top Accent Line */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-indigo-400 to-emerald-400" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            
            {/* Player Photo Bento Card */}
            <div className="lg:col-span-4 bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-3xl relative overflow-hidden border border-white/5 flex flex-col justify-between min-h-[380px] p-6 shadow-xl">
              <div
                className="absolute inset-0 bg-cover bg-top opacity-50 mix-blend-luminosity hover:opacity-75 transition-opacity duration-500"
                style={{ backgroundImage: `url(${villalbaImage})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent" />

              {/* Badges Top Row */}
              <div className="relative z-10 flex items-center justify-between">
                <div className="flex space-x-2">
                  <span className="px-3 py-1 bg-indigo-600 text-white text-[10px] font-bold rounded-full uppercase tracking-wider shadow-md">
                    #7 Dorsal Elite
                  </span>
                  <span className="px-3 py-1 bg-white/10 text-white/80 text-[10px] font-bold rounded-full uppercase tracking-wider backdrop-blur-sm border border-white/10">
                    🇦🇷 Argentina
                  </span>
                </div>
              </div>

              {/* Bottom Info Overlay */}
              <div className="relative z-10 space-y-2 mt-auto pt-20">
                <div className="flex items-center gap-2 text-amber-400 text-[10px] font-bold uppercase tracking-widest">
                  <Flame className="w-3.5 h-3.5 text-amber-400 animate-bounce" />
                  Bota de Oro & Campeón Mundial
                </div>
                <h1 className="text-4xl sm:text-5xl font-black italic uppercase leading-none text-white tracking-tight">
                  Luciano<br />
                  <span className="text-indigo-400">Villalba</span>
                </h1>
                <p className="text-white/70 text-xs font-semibold uppercase tracking-wider">
                  {villalbaProfile.primaryPosition}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {villalbaProfile.dorsals.map((dorsal, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-white/70 text-[10px] font-mono"
                    >
                      {dorsal}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Player Details & Metrics Bento Grid */}
            <div className="lg:col-span-8 flex flex-col justify-between space-y-4">
              
              {/* Header Title Tag */}
              <div className="bg-neutral-900/80 p-6 rounded-3xl border border-white/5 space-y-3">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-[10px] font-extrabold tracking-widest uppercase">
                    <Award className="w-3.5 h-3.5" /> Perfil de Analítica Avanzada
                  </div>
                  <button
                    onClick={onOpenAiScout}
                    className="text-xs text-indigo-400 hover:text-indigo-300 font-bold uppercase tracking-wider flex items-center gap-1"
                  >
                    Informe IA Scouting →
                  </button>
                </div>

                <p className="text-white/80 text-xs sm:text-sm leading-relaxed font-normal">
                  {villalbaProfile.bio}
                </p>

                {/* Metadata Info Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-3 border-t border-white/5">
                  <div>
                    <div className="text-white/40 text-[10px] uppercase tracking-widest font-bold">Posición</div>
                    <div className="text-white font-semibold text-xs mt-0.5">{villalbaProfile.primaryPosition}</div>
                  </div>
                  <div>
                    <div className="text-white/40 text-[10px] uppercase tracking-widest font-bold">Pierna Hábil</div>
                    <div className="text-white font-semibold text-xs mt-0.5">{villalbaProfile.preferredFoot}</div>
                  </div>
                  <div>
                    <div className="text-white/40 text-[10px] uppercase tracking-widest font-bold">Estatura</div>
                    <div className="text-white font-semibold text-xs mt-0.5">{villalbaProfile.height}</div>
                  </div>
                  <div>
                    <div className="text-white/40 text-[10px] uppercase tracking-widest font-bold">Carrera Élite</div>
                    <div className="text-white font-semibold text-xs mt-0.5">{villalbaProfile.totalSeasons} Años (18–34)</div>
                  </div>
                  <div>
                    <div className="text-white/40 text-[10px] uppercase tracking-widest font-bold">Títulos Clubes</div>
                    <div className="text-indigo-400 font-bold text-xs mt-0.5">22 Campeonatos</div>
                  </div>
                  <div>
                    <div className="text-white/40 text-[10px] uppercase tracking-widest font-bold">Títulos Selección</div>
                    <div className="text-sky-400 font-bold text-xs mt-0.5">5 Trofeos AFA</div>
                  </div>
                </div>
              </div>

              {/* Main KPIs Bento Tile Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                
                {/* Total Goals */}
                <div className="p-5 rounded-3xl bg-neutral-900/80 border border-white/5 flex flex-col justify-between">
                  <div className="text-[10px] text-white/40 font-bold uppercase tracking-widest">Goles Totales</div>
                  <div className="text-3xl sm:text-4xl font-bold font-mono text-white mt-2">
                    {villalbaProfile.totalClubGoals + villalbaProfile.totalSeleccionGoals}
                  </div>
                  <div className="text-[10px] text-indigo-400 font-bold uppercase mt-2">
                    338 Club + 27 Arg
                  </div>
                </div>

                {/* Total Matches */}
                <div className="p-5 rounded-3xl bg-neutral-900/80 border border-white/5 flex flex-col justify-between">
                  <div className="text-[10px] text-white/40 font-bold uppercase tracking-widest">Partidos</div>
                  <div className="text-3xl sm:text-4xl font-bold font-mono text-white mt-2">
                    {villalbaProfile.totalClubGames + villalbaProfile.totalSeleccionGames}
                  </div>
                  <div className="text-[10px] text-white/40 font-bold uppercase mt-2">
                    568 Club + 35 Arg
                  </div>
                </div>

                {/* Goal Ratio */}
                <div className="p-5 rounded-3xl bg-neutral-900/80 border border-white/5 flex flex-col justify-between">
                  <div className="text-[10px] text-white/40 font-bold uppercase tracking-widest">Promed. Gol/PJ</div>
                  <div className="text-3xl sm:text-4xl font-bold font-mono text-indigo-400 mt-2">
                    {((villalbaProfile.totalClubGoals + villalbaProfile.totalSeleccionGoals) / (villalbaProfile.totalClubGames + villalbaProfile.totalSeleccionGames)).toFixed(2)}
                  </div>
                  <div className="text-[10px] text-indigo-400/80 font-bold uppercase mt-2">
                    Elite Mundial
                  </div>
                </div>

                {/* xG Overperformance */}
                <div className="p-5 rounded-3xl bg-neutral-900/80 border border-white/5 flex flex-col justify-between">
                  <div className="text-[10px] text-white/40 font-bold uppercase tracking-widest">xG Sobrerend.</div>
                  <div className="text-3xl sm:text-4xl font-bold font-mono text-emerald-400 mt-2">
                    {villalbaProfile.xGOverperformance}
                  </div>
                  <div className="text-[10px] text-emerald-400/80 font-bold uppercase mt-2">
                    Top Finalizador
                  </div>
                </div>

              </div>

              {/* Trajectory Bento Strip */}
              <div className="bg-neutral-900/80 p-4 rounded-3xl border border-white/5 flex items-center justify-between flex-wrap gap-3">
                <div className="text-[10px] text-white/40 font-bold uppercase tracking-widest">
                  Trayectoria de Clubes
                </div>
                <div className="flex flex-wrap gap-2">
                  <div className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-white/90 font-medium flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-amber-400" />
                    Misiones <span className="text-white/40 text-[10px] font-mono">(5 Títulos)</span>
                  </div>
                  <div className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-white/90 font-medium flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-indigo-500" />
                    Barcelona <span className="text-white/40 text-[10px] font-mono">(11 Títulos)</span>
                  </div>
                  <div className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-white/90 font-medium flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-red-500" />
                    Berlín <span className="text-white/40 text-[10px] font-mono">(1 Título)</span>
                  </div>
                  <div className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-white/90 font-medium flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-purple-500" />
                    Osaka <span className="text-white/40 text-[10px] font-mono">(4 Títulos)</span>
                  </div>
                  <div className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-white/90 font-medium flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    Seúl <span className="text-white/40 text-[10px] font-mono">(1 Título)</span>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
