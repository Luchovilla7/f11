import React, { useState } from "react";
import { seleccionData, amistosos2018Matches } from "../data/villalbaData";
import { MatchDetail } from "../types";
import { Users, Trophy, Award, Flame, Star, ChevronDown, ChevronUp, Globe2, ShieldCheck, CheckCircle2 } from "lucide-react";

export const NationalTeamSection: React.FC = () => {
  const [expandedMatch, setExpandedMatch] = useState<string | null>("arg-mas-2018");

  const totalGoals = seleccionData.reduce((acc, curr) => (typeof curr.goals === "number" ? acc + curr.goals : acc), 0);
  const totalGames = seleccionData.reduce((acc, curr) => (typeof curr.games === "number" ? acc + curr.games : acc), 0);
  const avgGoals = (totalGoals / (totalGames || 1)).toFixed(2);

  return (
    <section id="seleccion" className="py-10 bg-[#050505] text-slate-100 border-t border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/10 pb-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-[10px] font-extrabold tracking-widest uppercase mb-2">
              <Users className="w-3.5 h-3.5" /> Carrera Internacional (2018–2026)
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight">
              Selección <span className="text-sky-400">Argentina 🇦🇷</span>
            </h2>
            <p className="text-white/60 text-xs sm:text-sm mt-1 max-w-2xl font-normal">
              Estadísticas detalladas de su paso por la Albiceleste, Campeón del Mundo 2023, Bicampeón de América y sus partidos clave.
            </p>
          </div>

          <div className="flex items-center gap-3 bg-neutral-900/80 p-4 rounded-2xl border border-white/5">
            <span className="text-3xl">🏆</span>
            <div>
              <div className="text-sky-300 font-bold font-mono text-base">5 Títulos Albicelestes</div>
              <div className="text-white/40 text-xs">Incluye Copa del Mundo 2023</div>
            </div>
          </div>
        </div>

        {/* Overview KPIs Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-neutral-900/80 p-5 rounded-3xl border border-white/5 text-center">
            <span className="text-sky-400 font-bold font-mono text-4xl block">{totalGoals}</span>
            <span className="text-white/40 text-[10px] uppercase font-bold tracking-widest">Goles Totales</span>
          </div>
          <div className="bg-neutral-900/80 p-5 rounded-3xl border border-white/5 text-center">
            <span className="text-white font-bold font-mono text-4xl block">{totalGames}</span>
            <span className="text-white/40 text-[10px] uppercase font-bold tracking-widest">Partidos Oficiales</span>
          </div>
          <div className="bg-neutral-900/80 p-5 rounded-3xl border border-white/5 text-center">
            <span className="text-indigo-400 font-bold font-mono text-4xl block">{avgGoals}</span>
            <span className="text-white/40 text-[10px] uppercase font-bold tracking-widest">Promedio de Gol / Part</span>
          </div>
        </div>

        {/* SPECIAL FEATURE: 2018 Amistosos Match Breakdown */}
        <div className="bg-neutral-900/80 border border-white/5 rounded-3xl p-6 lg:p-8 space-y-6 shadow-2xl">
          <div className="flex items-center justify-between border-b border-white/5 pb-4">
            <div>
              <div className="text-sky-400 font-bold text-xs uppercase tracking-widest flex items-center gap-2">
                <Star className="w-4 h-4 text-indigo-400" /> Año Histórico 2018: El Debut
              </div>
              <h3 className="text-2xl font-bold text-white uppercase tracking-wide mt-1">
                Amistosos Internacionales 2018
              </h3>
            </div>
            <span className="px-3 py-1 rounded-full bg-sky-500/10 text-sky-300 font-mono font-bold text-xs border border-sky-500/20">
              Debut Absoluto con Gol
            </span>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {amistosos2018Matches.map((match) => {
              const isExpanded = expandedMatch === match.id;
              const hasVillalbaGoal = match.homeScorers.some((s) => s.isVillalba);

              return (
                <div
                  key={match.id}
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                    hasVillalbaGoal
                      ? "bg-sky-950/20 border-sky-500/30 shadow-sky-500/5 shadow-lg"
                      : "bg-neutral-950/70 border-white/5"
                  }`}
                >
                  {/* Match Header Row */}
                  <div
                    onClick={() => setExpandedMatch(isExpanded ? null : match.id)}
                    className="p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 cursor-pointer hover:bg-neutral-900/50 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xs text-white/50 font-mono font-bold uppercase tracking-wider bg-neutral-900 px-3 py-1 rounded-xl border border-white/5">
                        {match.date}
                      </span>
                      {hasVillalbaGoal && (
                        <span className="px-2.5 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 font-bold text-[10px] border border-indigo-500/30 animate-pulse">
                          ⚽ GOL DE VILLALBA (DEBUT)
                        </span>
                      )}
                    </div>

                    {/* Score display */}
                    <div className="flex items-center gap-6 font-bold font-mono text-2xl text-white">
                      <span className="text-sky-300">{match.homeTeam}</span>
                      <span className="bg-neutral-900 px-3 py-1 rounded-xl border border-white/5 text-indigo-400">
                        {match.homeScore} - {match.awayScore}
                      </span>
                      <span className="text-white/80">{match.awayTeam}</span>
                    </div>

                    <div className="flex items-center gap-2 text-xs text-sky-400 font-semibold">
                      <span>{isExpanded ? "Ocultar Análisis" : "Ver Detalle"}</span>
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </div>
                  </div>

                  {/* Expanded Match Details */}
                  {isExpanded && (
                    <div className="p-5 border-t border-white/5 bg-neutral-950 space-y-4 text-xs text-white/80 animate-in slide-in-from-top-1">
                      
                      {/* Scorers Columns */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-neutral-900/80 p-4 rounded-2xl border border-white/5">
                        <div>
                          <div className="font-bold text-sky-400 mb-2 uppercase tracking-wider text-[10px]">
                            Goles Argentina:
                          </div>
                          {match.homeScorers.length > 0 ? (
                            match.homeScorers.map((scorer, idx) => (
                              <div
                                key={idx}
                                className={`flex items-center gap-2 my-1 ${
                                  scorer.isVillalba ? "text-indigo-300 font-bold text-xs" : "text-white/80"
                                }`}
                              >
                                <span>⚽ {scorer.name} ({scorer.minute})</span>
                                {scorer.isDebut && (
                                  <span className="px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 text-[10px] font-bold">
                                    ¡Primer Gol Internacional!
                                  </span>
                                )}
                              </div>
                            ))
                          ) : (
                            <span className="text-white/40 italic">Sin goles</span>
                          )}
                        </div>

                        <div>
                          <div className="font-bold text-white/40 mb-2 uppercase tracking-wider text-[10px]">
                            Goles {match.awayTeam}:
                          </div>
                          {match.awayScorers.length > 0 ? (
                            match.awayScorers.map((scorer, idx) => (
                              <div key={idx} className="text-white/60 my-1">
                                ⚽ {scorer.name} ({scorer.minute})
                              </div>
                            ))
                          ) : (
                            <span className="text-white/40 italic">Sin goles convertidos</span>
                          )}
                        </div>
                      </div>

                      {/* Villalba Match Highlight Performance */}
                      {match.villalbaPerformance && match.villalbaPerformance.minutesPlayed > 0 && (
                        <div className="p-4 bg-neutral-900/90 rounded-2xl border border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                          <div className="space-y-1">
                            <div className="text-indigo-400 font-bold uppercase text-[10px] tracking-wider">
                              Actuación Táctica de Villalba
                            </div>
                            <p className="text-white/80 text-xs">{match.villalbaPerformance.keyMoment}</p>
                          </div>
                          <div className="flex items-center gap-3 bg-neutral-950 px-3 py-2 rounded-xl border border-white/5 text-center font-mono">
                            <div>
                              <span className="text-white/40 text-[9px] block uppercase">Rating</span>
                              <span className="text-indigo-400 font-bold text-sm">{match.villalbaPerformance.rating}</span>
                            </div>
                            <div className="h-6 w-px bg-white/10" />
                            <div>
                              <span className="text-white/40 text-[9px] block uppercase">Minutos</span>
                              <span className="text-white font-bold text-sm">{match.villalbaPerformance.minutesPlayed}'</span>
                            </div>
                          </div>
                        </div>
                      )}

                    </div>
                  )}

                </div>
              );
            })}
          </div>
        </div>

        {/* International Palmares Banner */}
        <div className="bg-neutral-900/80 border border-white/5 rounded-3xl p-6 sm:p-8 space-y-4">
          <h3 className="text-xl font-bold text-white uppercase tracking-wide flex items-center gap-2">
            <Trophy className="w-5 h-5 text-indigo-400" /> Palmarés Internacional con Argentina
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-4 rounded-2xl bg-neutral-950/80 border border-white/5 flex items-center gap-4">
              <span className="text-3xl">🌍</span>
              <div>
                <div className="font-bold text-indigo-400 text-sm">Copa Mundial FIFA</div>
                <div className="text-xs text-white/60">Campeón 2023 (8 Goles)</div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-neutral-950/80 border border-white/5 flex items-center gap-4">
              <span className="text-3xl">🏆</span>
              <div>
                <div className="font-bold text-sky-300 text-sm">Copa Sudamérica</div>
                <div className="text-xs text-white/60">Bicampeón (2022, 2025)</div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-neutral-950/80 border border-white/5 flex items-center gap-4">
              <span className="text-3xl">🌟</span>
              <div>
                <div className="font-bold text-indigo-300 text-sm">Copa de las Américas</div>
                <div className="text-xs text-white/60">Bicampeón (2023, 2026)</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
