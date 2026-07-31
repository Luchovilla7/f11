import React, { useState } from "react";
import { sudamericanaRegionalData } from "../data/villalbaData";
import { Globe, Search, Award, Shield, Flag } from "lucide-react";

export const SouthAmericanFootballSection: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedCountry, setSelectedCountry] = useState<string>("all");

  const maxTitles = sudamericanaRegionalData[0].titulos;

  const filteredData = sudamericanaRegionalData.filter((row) => {
    const matchesSearch =
      row.region.toLowerCase().includes(searchTerm.toLowerCase()) ||
      row.pais.toLowerCase().includes(searchTerm.toLowerCase()) ||
      row.years.some((y) => y.toString().includes(searchTerm));
    const matchesCountry = selectedCountry === "all" || row.pais === selectedCountry;
    return matchesSearch && matchesCountry;
  });

  const countriesList = Array.from(new Set(sudamericanaRegionalData.map((d) => d.pais)));

  return (
    <section id="fútbol-sudamericano" className="py-10 bg-[#050505] text-slate-100 border-t border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/10 pb-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-extrabold tracking-widest uppercase mb-2">
              <Globe className="w-3.5 h-3.5" /> Palmarés Continental CONMEBOL
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight">
              Campeonato <span className="text-emerald-400">Sudamericano</span> por Regiones
            </h2>
            <p className="text-white/60 text-xs sm:text-sm mt-1 max-w-2xl font-normal">
              Tabla general de títulos sudamericanos conseguidos por regiones y departamentos de América del Sur (1965–2025).
            </p>
          </div>

          {/* Country Selector */}
          <div className="flex flex-wrap items-center gap-1.5 bg-neutral-900/80 p-1.5 rounded-2xl border border-white/5">
            <button
              onClick={() => setSelectedCountry("all")}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all uppercase ${
                selectedCountry === "all" ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/20" : "text-white/60 hover:text-white"
              }`}
            >
              Todos los Países
            </button>
            {countriesList.map((country) => (
              <button
                key={country}
                onClick={() => setSelectedCountry(country)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all uppercase ${
                  selectedCountry === country ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/20" : "text-white/60 hover:text-white"
                }`}
              >
                {country}
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
              placeholder="Buscar región, país o año..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-transparent text-xs text-white placeholder-white/40 focus:outline-none"
            />
          </div>

          <div className="text-white/40 text-xs font-mono font-semibold hidden sm:block">
            Registros de <strong className="text-emerald-400">{filteredData.length}</strong> regiones
          </div>
        </div>

        {/* Regional Table */}
        <div className="bg-neutral-900/80 border border-white/5 rounded-3xl overflow-hidden shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-white/80">
              <thead className="bg-neutral-950 text-white/40 uppercase text-[10px] font-bold tracking-widest border-b border-white/5">
                <tr>
                  <th className="py-4 px-6 text-center w-16">#</th>
                  <th className="py-4 px-6">Región / Estado</th>
                  <th className="py-4 px-6">País</th>
                  <th className="py-4 px-6 text-center">Títulos</th>
                  <th className="py-4 px-6 w-1/4">Índice de Dominancia</th>
                  <th className="py-4 px-6">Años Campeón</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {filteredData.map((row, idx) => {
                  const pct = Math.round((row.titulos / maxTitles) * 100);

                  return (
                    <tr key={row.region} className="hover:bg-white/5 transition-colors">
                      <td className="py-4 px-6 text-center font-bold">
                        <span className="inline-flex items-center justify-center w-7 h-7 rounded-xl bg-neutral-950 font-mono font-bold text-xs text-white/60 border border-white/5">
                          {idx + 1}
                        </span>
                      </td>

                      <td className="py-4 px-6 font-bold text-sm text-white">
                        {row.region}
                      </td>

                      <td className="py-4 px-6">
                        <span className="inline-flex items-center gap-2 font-medium text-white/80">
                          <span className="text-base">{row.flag}</span> {row.pais}
                        </span>
                      </td>

                      <td className="py-4 px-6 text-center font-bold font-mono text-base text-emerald-400">
                        {row.titulos}
                      </td>

                      <td className="py-4 px-6">
                        <div className="flex items-center gap-3">
                          <span className="text-[10px] text-white/40 font-mono font-bold w-8">{pct}%</span>
                          <div className="w-full bg-neutral-950 h-2 rounded-full overflow-hidden border border-white/5">
                            <div
                              className="h-full bg-emerald-500 rounded-full"
                              style={{ width: `${pct}%` }}
                            />
                          </div>
                        </div>
                      </td>

                      <td className="py-4 px-6">
                        <div className="flex flex-wrap gap-1 max-w-sm">
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
