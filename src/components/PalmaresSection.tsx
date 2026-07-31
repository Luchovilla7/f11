import React from "react";
import { clubPalmaresData } from "../data/villalbaData";
import { Trophy, Award, Globe, Shield, Sparkles } from "lucide-react";

export const PalmaresSection: React.FC = () => {
  const totalTitles = clubPalmaresData.reduce((acc, curr) => acc + curr.titles, 0);

  return (
    <section id="palmares-jugador" className="py-10 bg-[#050505] text-slate-100 border-t border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/10 pb-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-[10px] font-extrabold tracking-widest uppercase mb-2">
              <Trophy className="w-3.5 h-3.5" /> Colección de Campeonatos
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight">
              Palmarés Completo de <span className="text-indigo-400">Clubes ({totalTitles} Títulos)</span>
            </h2>
            <p className="text-white/60 text-xs sm:text-sm mt-1 max-w-2xl font-normal">
              Logros nacionales e internacionales conseguidos a lo largo de 17 temporadas en Argentina, España, Alemania, Japón y Corea del Sur.
            </p>
          </div>

          <div className="flex items-center gap-4 bg-neutral-900/80 px-5 py-3 rounded-2xl border border-white/5">
            <Trophy className="w-8 h-8 text-indigo-400" />
            <div>
              <div className="text-2xl font-bold font-mono text-indigo-400 leading-none">{totalTitles} Títulos</div>
              <div className="text-[10px] text-white/40 uppercase font-bold tracking-wider mt-0.5">Nivel Élite Profesional</div>
            </div>
          </div>
        </div>

        {/* Club Palmares Blocks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {clubPalmaresData.map((clubBlock) => (
            <div
              key={clubBlock.club}
              className="bg-neutral-900/80 border border-white/5 hover:border-indigo-500/30 p-6 rounded-3xl space-y-4 shadow-xl transition-all duration-300"
            >
              {/* Club Header */}
              <div className="flex items-start justify-between border-b border-white/5 pb-4">
                <div>
                  <h3 className="text-xl font-bold text-white uppercase tracking-wide">
                    {clubBlock.club}
                  </h3>
                  <p className="text-xs text-white/40 font-mono mt-0.5">{clubBlock.period}</p>
                </div>
                <div className="text-center bg-neutral-950 px-3.5 py-1.5 rounded-2xl border border-white/5">
                  <span className="text-2xl font-bold font-mono text-indigo-400 block leading-none">{clubBlock.titles}</span>
                  <span className="text-[9px] text-white/40 uppercase font-bold tracking-widest">
                    {clubBlock.titles === 1 ? "Título" : "Títulos"}
                  </span>
                </div>
              </div>

              {/* Trophies Grid */}
              <div className="grid grid-cols-1 gap-2.5">
                {clubBlock.trophies.map((trophy, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-2xl bg-neutral-950/80 border border-white/5 hover:border-white/10 flex items-center justify-between group transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{trophy.icon}</span>
                      <div>
                        <div className="font-bold text-xs text-white group-hover:text-indigo-300 transition-colors">
                          {trophy.name}
                        </div>
                        <div className="text-[10px] text-white/40">{trophy.category || "Campeonato Oficial"}</div>
                      </div>
                    </div>
                    <span className="px-2.5 py-1 rounded-xl bg-neutral-900 text-indigo-400 font-mono font-bold text-xs border border-white/5">
                      {trophy.year}
                    </span>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
