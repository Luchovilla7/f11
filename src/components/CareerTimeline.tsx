import React, { useState } from "react";
import { careerSeasonsData } from "../data/villalbaData";
import { Trophy, Calendar, Target, Award, Filter, ArrowUpRight, Flame, ShieldCheck } from "lucide-react";

export const CareerTimeline: React.FC = () => {
  const [selectedClub, setSelectedClub] = useState<string>("all");
  const [searchTerm, setSearchTerm] = useState<string>("");

  const filteredSeasons = careerSeasonsData.filter((season) => {
    const matchesClub = selectedClub === "all" || season.clubCode === selectedClub;
    const matchesSearch =
      season.club.toLowerCase().includes(searchTerm.toLowerCase()) ||
      season.seasonYear.includes(searchTerm) ||
      (season.trophiesWon && season.trophiesWon.some((t) => t.toLowerCase().includes(searchTerm.toLowerCase())));
    return matchesClub && matchesSearch;
  });

  const maxGoals = Math.max(...careerSeasonsData.map((d) => d.goals));

  return (
    <section id="career-timeline" className="py-10 bg-[#050505] text-slate-100 border-t border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/10 pb-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-[10px] font-extrabold tracking-widest uppercase mb-2">
              <Calendar className="w-3.5 h-3.5" /> 17 Temporadas Élite (18–34 años)
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight">
              Carrera Profesional & <span className="text-indigo-400">Estadísticas por Temporada</span>
            </h2>
            <p className="text-white/60 text-xs sm:text-sm mt-1 max-w-2xl font-normal">
              Desglose año a año de partidos, goles, asistencias, xG y trofeos obtenidos en los 5 clubes de su trayectoria.
            </p>
          </div>

          {/* Filters & Search */}
          <div className="flex flex-wrap items-center gap-2">
            <input
              type="text"
              placeholder="Buscar por club o trofeo..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="px-3.5 py-2 rounded-xl bg-neutral-900 border border-white/10 text-xs text-white placeholder-white/40 focus:outline-none focus:border-indigo-500"
            />

            <div className="flex items-center gap-1 bg-neutral-900/80 p-1 rounded-2xl border border-white/5">
              {[
                { id: "all", name: "Todos" },
                { id: "misiones", name: "Misiones" },
                { id: "barcelona", name: "Barcelona" },
                { id: "berlin", name: "Berlín" },
                { id: "osaka", name: "Osaka" },
                { id: "seul", name: "Seúl" },
              ].map((c) => (
                <button
                  key={c.id}
                  onClick={() => setSelectedClub(c.id)}
                  className={`px-3 py-1 rounded-xl text-xs font-bold transition-all ${
                    selectedClub === c.id
                      ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/20"
                      : "text-white/60 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {c.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Season Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredSeasons.map((season) => {
            const pct = Math.round((season.goals / maxGoals) * 100);
            const ratio = (season.goals / season.games).toFixed(2);

            return (
              <div
                key={`${season.club}-${season.age}`}
                className="bg-neutral-900/80 border border-white/5 hover:border-indigo-500/30 rounded-3xl p-5 transition-all duration-300 hover:-translate-y-1 shadow-xl group relative overflow-hidden flex flex-col justify-between"
              >
                {/* Top Accent Bar */}
                <div
                  className="absolute top-0 left-0 right-0 h-1 transition-all"
                  style={{ width: `${pct}%`, backgroundColor: season.goals >= 30 ? "#6366f1" : "#38BDF8" }}
                />

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-white/40 bg-neutral-950 px-2.5 py-1 rounded-full border border-white/5 font-mono">
                      Temp · {season.age} años
                    </span>
                    <span className="text-indigo-400 font-bold font-mono text-xs flex items-center gap-1">
                      Dorsal #{season.num}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-indigo-400 transition-colors flex items-center justify-between">
                      <span>{season.club}</span>
                      <span className="text-xs text-white/40 font-mono font-normal">{season.seasonYear}</span>
                    </h3>
                  </div>

                  {/* Core Stats Grid */}
                  <div className="grid grid-cols-3 gap-2 bg-neutral-950/80 p-3 rounded-2xl border border-white/5 text-center">
                    <div>
                      <span className="text-indigo-400 font-bold font-mono text-xl block leading-tight">{season.goals}</span>
                      <span className="text-[9px] text-white/40 uppercase font-bold tracking-wider">Goles</span>
                    </div>
                    <div>
                      <span className="text-white font-bold font-mono text-xl block leading-tight">{season.games}</span>
                      <span className="text-[9px] text-white/40 uppercase font-bold tracking-wider">Partidos</span>
                    </div>
                    <div>
                      <span className="text-sky-400 font-bold font-mono text-xl block leading-tight">{ratio}</span>
                      <span className="text-[9px] text-white/40 uppercase font-bold tracking-wider">G/P Prom</span>
                    </div>
                  </div>

                  {/* Secondary Advanced Metrics */}
                  <div className="flex items-center justify-between text-[11px] text-white/60 font-mono pt-1">
                    <span>xG: <strong className="text-white">{season.xG}</strong></span>
                    <span>Asist: <strong className="text-emerald-400">{season.assists}</strong></span>
                    <span>Rating: <strong className="text-purple-300">{season.rating}</strong></span>
                  </div>

                  {/* Trophies Pill List if won */}
                  {season.trophiesWon && season.trophiesWon.length > 0 && (
                    <div className="pt-2 border-t border-white/5 space-y-1">
                      <div className="text-[10px] text-indigo-400 font-bold uppercase tracking-wider flex items-center gap-1">
                        <Trophy className="w-3 h-3 text-indigo-400" /> Títulos Conquistados ({season.trophiesWon.length}):
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {season.trophiesWon.map((trophy, ti) => (
                          <span
                            key={ti}
                            className="text-[10px] px-2 py-0.5 bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 rounded-full font-medium"
                          >
                            {trophy}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Relative Goal Dominance Bar */}
                <div className="mt-4 pt-2 border-t border-white/5">
                  <div className="flex justify-between text-[10px] text-white/40 font-mono mb-1">
                    <span>Volumen Goleador</span>
                    <span>{pct}% del pico</span>
                  </div>
                  <div className="w-full h-1.5 bg-neutral-950 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-indigo-600 rounded-full"
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
