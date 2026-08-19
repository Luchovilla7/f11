import React, { useState, useMemo } from "react";
import { internationalPalmares, TournamentPalmares } from "../data/internationalPalmaresData";
import { Trophy, Globe, Search, Award, Shield, Sparkles, Filter, ChevronRight } from "lucide-react";

export const InternationalPalmaresSection: React.FC = () => {
  const [selectedTournamentId, setSelectedTournamentId] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Total trophies calculation
  const totalTrophiesAll = useMemo(() => {
    return internationalPalmares.reduce((acc, t) => {
      const tCount = t.champions.reduce((cAcc, champ) => cAcc + champ.years.length, 0);
      return acc + tCount;
    }, 0);
  }, []);

  const filteredTournaments = useMemo(() => {
    let list = internationalPalmares;

    if (selectedTournamentId !== "all") {
      list = list.filter((t) => t.id === selectedTournamentId);
    }

    if (searchQuery.trim() !== "") {
      const q = searchQuery.toLowerCase().trim();
      list = list
        .map((t) => {
          const matchingChampions = t.champions.filter(
            (c) =>
              c.country.toLowerCase().includes(q) ||
              c.years.some((y) => y.toString().includes(q))
          );
          if (t.name.toLowerCase().includes(q) || matchingChampions.length > 0) {
            return {
              ...t,
              champions: t.name.toLowerCase().includes(q) ? t.champions : matchingChampions,
            };
          }
          return null;
        })
        .filter(Boolean) as TournamentPalmares[];
    }

    return list;
  }, [selectedTournamentId, searchQuery]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      
      {/* Top Banner & Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="bg-gradient-to-br from-amber-500/10 via-neutral-900 to-neutral-900 p-6 rounded-3xl border border-amber-500/20 shadow-xl flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center shrink-0">
            <Trophy className="w-7 h-7 text-amber-400" />
          </div>
          <div>
            <div className="text-2xl font-black text-white tracking-tight">
              {internationalPalmares.length} Torneos Globales
            </div>
            <div className="text-xs text-white/60 font-medium">
              Palmarés Histórico de Selecciones Nacionales
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-indigo-500/10 via-neutral-900 to-neutral-900 p-6 rounded-3xl border border-indigo-500/20 shadow-xl flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-indigo-500/20 border border-indigo-500/40 flex items-center justify-center shrink-0">
            <Globe className="w-7 h-7 text-indigo-400" />
          </div>
          <div>
            <div className="text-2xl font-black text-white tracking-tight">
              {totalTrophiesAll} Títulos
            </div>
            <div className="text-xs text-white/60 font-medium">
              FIFA, CONMEBOL, UEFA, CONCACAF, AFC, CAF & OFC
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-emerald-500/10 via-neutral-900 to-neutral-900 p-6 rounded-3xl border border-emerald-500/20 shadow-xl flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center shrink-0">
            <Award className="w-7 h-7 text-emerald-400" />
          </div>
          <div>
            <div className="text-2xl font-black text-white tracking-tight">
              Registros Oficiales
            </div>
            <div className="text-xs text-white/60 font-medium">
              Años de campeonatos y ediciones continentales
            </div>
          </div>
        </div>
      </div>

      {/* Controls & Tournament Selector Tabs */}
      <div className="bg-neutral-900/80 border border-white/10 rounded-3xl p-5 backdrop-blur-xl space-y-4">
        
        {/* Search Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 text-white/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Buscar país o año (ej: Argentina, 2023)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-neutral-950 border border-white/10 rounded-2xl text-xs text-white placeholder-white/40 focus:outline-none focus:border-indigo-500 transition-colors"
            />
          </div>

          <div className="text-xs text-white/50 font-mono">
            {filteredTournaments.length} torneo{filteredTournaments.length !== 1 ? "s" : ""} mostrado{filteredTournaments.length !== 1 ? "s" : ""}
          </div>
        </div>

        {/* Tournament Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          <button
            onClick={() => setSelectedTournamentId("all")}
            className={`px-4 py-2 rounded-2xl text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap shrink-0 ${
              selectedTournamentId === "all"
                ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/30 border border-indigo-400/40"
                : "bg-neutral-950 text-white/60 hover:text-white border border-white/5"
            }`}
          >
            Todos los Torneos
          </button>
          {internationalPalmares.map((t) => (
            <button
              key={t.id}
              onClick={() => setSelectedTournamentId(t.id)}
              className={`px-4 py-2 rounded-2xl text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap shrink-0 flex items-center gap-1.5 ${
                selectedTournamentId === t.id
                  ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/30 border border-indigo-400/40"
                  : "bg-neutral-950 text-white/60 hover:text-white border border-white/5"
              }`}
            >
              <span>{t.iconEmoji}</span>
              <span>{t.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Tournaments Grid / List */}
      <div className="space-y-8">
        {filteredTournaments.length === 0 ? (
          <div className="text-center py-16 bg-neutral-900/40 border border-white/5 rounded-3xl">
            <div className="text-4xl mb-3">🔍</div>
            <div className="text-white font-bold text-lg">No se encontraron resultados</div>
            <div className="text-white/40 text-xs mt-1">Prueba buscando otro país o seleccionando otro filtro de torneo.</div>
          </div>
        ) : (
          filteredTournaments.map((tournament) => {
            const totalTournamentTitles = tournament.champions.reduce((acc, c) => acc + c.years.length, 0);

            return (
              <div
                key={tournament.id}
                className="bg-neutral-900/90 border border-white/10 rounded-3xl overflow-hidden shadow-2xl transition-all"
              >
                {/* Tournament Header */}
                <div className="p-6 border-b border-white/10 bg-gradient-to-r from-neutral-950 via-neutral-900 to-neutral-950 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="text-4xl bg-neutral-950 p-3 rounded-2xl border border-white/10 shadow-inner">
                      {tournament.iconEmoji}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className={`px-2.5 py-0.5 rounded-full border text-[10px] font-black uppercase tracking-widest bg-gradient-to-r ${tournament.badgeColor}`}>
                          {tournament.confederation} • {tournament.regionName}
                        </span>
                        <span className="text-white/40 text-[11px] font-mono">
                          {totalTournamentTitles} ediciones catalogadas
                        </span>
                      </div>
                      <h2 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight mt-1">
                        {tournament.name}
                      </h2>
                      <p className="text-white/60 text-xs mt-0.5">
                        {tournament.description}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 self-start sm:self-center shrink-0 bg-neutral-950 px-4 py-2 rounded-2xl border border-white/10">
                    <Trophy className="w-4 h-4 text-amber-400" />
                    <span className="text-xs font-bold text-white uppercase">
                      Líder: {tournament.champions[0]?.country} ({tournament.champions[0]?.years.length})
                    </span>
                  </div>
                </div>

                {/* Champions Ranking Table / Grid */}
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {tournament.champions.map((champ, rankIdx) => (
                      <div
                        key={champ.country}
                        className="bg-neutral-950/70 border border-white/5 hover:border-white/20 rounded-2xl p-4 transition-all hover:bg-neutral-950 group"
                      >
                        <div className="flex items-center justify-between gap-3 mb-3">
                          <div className="flex items-center gap-3">
                            <span className="text-2xl">{champ.flag}</span>
                            <div>
                              <div className="text-sm font-black text-white group-hover:text-indigo-400 transition-colors">
                                {champ.country}
                              </div>
                              <div className="text-[10px] text-white/40 font-mono">
                                Ranking #{rankIdx + 1}
                              </div>
                            </div>
                          </div>

                          <div className="flex items-center gap-1.5 px-3 py-1 bg-amber-500/10 border border-amber-500/20 rounded-xl text-amber-300 font-black text-xs">
                            <Trophy className="w-3.5 h-3.5 text-amber-400" />
                            <span>{champ.years.length}</span>
                          </div>
                        </div>

                        {/* Champion Years Pills */}
                        <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/5">
                          {champ.years.map((year) => (
                            <span
                              key={year}
                              className="px-2.5 py-1 bg-neutral-900 border border-white/10 rounded-lg text-[11px] font-bold text-white/80 hover:text-white hover:border-indigo-500/50 hover:bg-indigo-500/10 transition-all font-mono"
                            >
                              {year}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>

    </div>
  );
};
