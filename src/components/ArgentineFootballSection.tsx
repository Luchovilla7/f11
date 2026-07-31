import React, { useState } from "react";
import { ligaArgentinaData, copaArgentinaData, supercopaArgentinaData } from "../data/villalbaData";
import { Trophy, Search, Award, MapPin, BarChart2 } from "lucide-react";

export const ArgentineFootballSection: React.FC = () => {
  const [activeSubTab, setActiveSubTab] = useState<"copa" | "liga" | "supercopa">("copa");
  const [searchTerm, setSearchTerm] = useState<string>("");

  const getCurrentData = () => {
    switch (activeSubTab) {
      case "liga":
        return { name: "Liga Argentina de Fútbol", data: ligaArgentinaData, max: ligaArgentinaData[0].titulos };
      case "copa":
        return { name: "Copa Argentina de Fútbol", data: copaArgentinaData, max: copaArgentinaData[0].titulos };
      case "supercopa":
        return { name: "Supercopa Argentina de Fútbol", data: supercopaArgentinaData, max: supercopaArgentinaData[0].titulos };
    }
  };

  const current = getCurrentData();

  const filteredData = current.data.filter((row) =>
    row.prov.toLowerCase().includes(searchTerm.toLowerCase()) ||
    row.years.some((y) => y.toString().includes(searchTerm))
  );

  return (
    <section id="fútbol-argentino" className="py-10 bg-[#050505] text-slate-100 border-t border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/10 pb-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-[10px] font-extrabold tracking-widest uppercase mb-2">
              <MapPin className="w-3.5 h-3.5" /> Histórico Provincial 1965–2025
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight">
              Fútbol <span className="text-indigo-400">Argentino</span> — Dominancia Provincial
            </h2>
            <p className="text-white/60 text-xs sm:text-sm mt-1 max-w-2xl font-normal">
              Estadísticas históricas oficiales del palmarés por provincias en la Liga Argentina, Copa Argentina y Supercopa Argentina.
            </p>
          </div>

          {/* Sub-Tab Selector */}
          <div className="flex items-center gap-1.5 bg-neutral-900/80 p-1.5 rounded-2xl border border-white/5">
            {[
              { id: "copa", label: "Copa Argentina" },
              { id: "liga", label: "Liga Argentina" },
              { id: "supercopa", label: "Supercopa Arg" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveSubTab(tab.id as any)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all uppercase ${
                  activeSubTab === tab.id
                    ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/20"
                    : "text-white/60 hover:text-white hover:bg-white/5"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Search Bar */}
        <div className="flex items-center justify-between gap-4 bg-neutral-900/80 p-4 rounded-3xl border border-white/5">
          <div className="flex items-center gap-3 w-full sm:w-80 bg-neutral-950 px-3.5 py-2 rounded-2xl border border-white/5">
            <Search className="w-4 h-4 text-white/40" />
            <input
              type="text"
              placeholder="Filtrar provincia o año..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-transparent text-xs text-white placeholder-white/40 focus:outline-none"
            />
          </div>

          <div className="text-white/40 text-xs font-mono font-semibold hidden sm:block">
            Mostrando <strong className="text-indigo-400">{filteredData.length}</strong> provincias
          </div>
        </div>

        {/* Palmares Table Container */}
        <div className="bg-neutral-900/80 border border-white/5 rounded-3xl overflow-hidden shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-white/80">
              <thead className="bg-neutral-950 text-white/40 uppercase text-[10px] font-bold tracking-widest border-b border-white/5">
                <tr>
                  <th className="py-4 px-6 text-center w-16">#</th>
                  <th className="py-4 px-6">Provincia</th>
                  <th className="py-4 px-6 text-center">Títulos</th>
                  <th className="py-4 px-6 w-1/3">Dominancia %</th>
                  <th className="py-4 px-6">Años Campeón</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {filteredData.map((row, idx) => {
                  const pct = Math.round((row.titulos / current.max) * 100);
                  const isTop1 = idx === 0;
                  const isTop2 = idx === 1;
                  const isTop3 = idx === 2;

                  return (
                    <tr key={row.prov} className="hover:bg-white/5 transition-colors">
                      <td className="py-4 px-6 text-center font-bold">
                        <span
                          className={`inline-flex items-center justify-center w-7 h-7 rounded-xl font-mono font-bold text-xs ${
                            isTop1
                              ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/20"
                              : isTop2
                              ? "bg-neutral-700 text-white"
                              : isTop3
                              ? "bg-neutral-800 text-white/80"
                              : "bg-neutral-950 text-white/40"
                          }`}
                        >
                          {idx + 1}
                        </span>
                      </td>

                      <td className="py-4 px-6 font-bold text-sm text-white flex items-center gap-2">
                        <span>{row.prov}</span>
                        {row.prov === "Misiones" && (
                          <span className="px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 text-[10px] font-bold border border-indigo-500/30">
                            Cuna de Villalba
                          </span>
                        )}
                      </td>

                      <td className="py-4 px-6 text-center font-bold font-mono text-base text-indigo-400">
                        {row.titulos}
                      </td>

                      <td className="py-4 px-6">
                        <div className="flex items-center gap-3">
                          <span className="text-[10px] text-white/40 font-mono font-bold w-8">{pct}%</span>
                          <div className="w-full bg-neutral-950 h-2 rounded-full overflow-hidden border border-white/5">
                            <div
                              className="h-full bg-indigo-600 rounded-full"
                              style={{ width: `${pct}%` }}
                            />
                          </div>
                        </div>
                      </td>

                      <td className="py-4 px-6">
                        <div className="flex flex-wrap gap-1 max-w-md">
                          {row.years.map((year) => (
                            <span
                              key={year}
                              className="px-2 py-0.5 bg-neutral-950 border border-white/5 rounded-lg text-[10px] font-mono font-medium text-white/60"
                            >
                              {year}
                            </span>
                          ))}
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
};
