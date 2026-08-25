import React, { useState } from "react";
import { careerSeasonsData, radarAttributesData, villalbaProfile } from "../data/villalbaData";
import {
  ResponsiveContainer,
  ComposedChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  AreaChart,
  Area,
} from "recharts";
import { BarChart3, TrendingUp, Zap, Sparkles, Filter, Percent, Crosshair, Activity, Flame } from "lucide-react";

export const AdvancedStatsOverview: React.FC = () => {
  const [clubFilter, setClubFilter] = useState<string>("all");

  const filteredData = careerSeasonsData.filter((d) => {
    if (clubFilter === "all") return true;
    return d.clubCode === clubFilter;
  });

  const totalGoalsFiltered = filteredData.reduce((acc, curr) => acc + curr.goals, 0);
  const totalXGFiltered = filteredData.reduce((acc, curr) => acc + curr.xG, 0);
  const totalAssistsFiltered = filteredData.reduce((acc, curr) => acc + curr.assists, 0);
  const avgRatingFiltered = (
    filteredData.reduce((acc, curr) => acc + curr.rating, 0) / (filteredData.length || 1)
  ).toFixed(2);

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-slate-900/95 border border-slate-700/80 p-3.5 rounded-xl shadow-xl backdrop-blur-md text-xs text-slate-200">
          <div className="font-bold text-amber-400 text-sm mb-1">{data.club} — Temp. {data.age} años ({data.seasonYear})</div>
          <div className="grid grid-cols-2 gap-x-4 gap-y-1 mt-2">
            <div><span className="text-slate-400">Goles Reales:</span> <span className="font-bold text-amber-400">{data.goals}</span></div>
            <div><span className="text-slate-400">Goles Esp. (xG):</span> <span className="font-bold text-sky-400">{data.xG}</span></div>
            <div><span className="text-slate-400">Asistencias:</span> <span className="font-bold text-emerald-400">{data.assists}</span></div>
            <div><span className="text-slate-400">Rating Promedio:</span> <span className="font-bold text-purple-300">{data.rating}</span></div>
            <div><span className="text-slate-400">Tiros por 90':</span> <span className="font-bold text-slate-200">{data.shotsPer90}</span></div>
            <div><span className="text-slate-400">Pases Clave/90':</span> <span className="font-bold text-slate-200">{data.keyPassesPer90}</span></div>
          </div>
          {data.trophiesWon && data.trophiesWon.length > 0 && (
            <div className="mt-2.5 pt-2 border-t border-slate-800 text-[11px] text-amber-300">
              🏆 {data.trophiesWon.join(", ")}
            </div>
          )}
        </div>
      );
    }
    return null;
  };

  return (
    <section id="advanced-stats" className="py-10 bg-[#050505] border-t border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/10 pb-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-[10px] font-extrabold tracking-widest uppercase mb-2">
              <BarChart3 className="w-3.5 h-3.5" /> Métrica Avanzada StatsBomb / Opta
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight">
              Análisis de Rendimiento & <span className="text-indigo-400">Expected Goals (xG)</span>
            </h2>
            <p className="text-white/60 text-xs sm:text-sm mt-1 max-w-2xl font-normal">
              Visualización interactiva del sobrerendimiento de gol ({villalbaProfile.xGOverperformance} xG), volumen de tiros, generación de asistencias esperadas (xA) y radar de atributos biomecánicos.
            </p>
          </div>

          {/* Club Filter Selector */}
          <div className="flex items-center gap-1.5 bg-neutral-900/80 p-1.5 rounded-2xl border border-white/5">
            <Filter className="w-4 h-4 text-white/40 ml-2" />
            <span className="text-[10px] text-white/40 font-bold uppercase tracking-wider mr-1 hidden sm:inline">Etapa:</span>
            {[
              { id: "all", name: "Todas" },
              { id: "misiones", name: "Misiones" },
              { id: "barcelona", name: "Barcelona" },
              { id: "berlin", name: "Berlín" },
              { id: "osaka", name: "Osaka" },
              { id: "seul", name: "Seúl" },
            ].map((club) => (
              <button
                key={club.id}
                onClick={() => setClubFilter(club.id)}
                className={`px-3 py-1 rounded-xl text-xs font-bold transition-all ${
                  clubFilter === club.id
                    ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/20"
                    : "text-white/60 hover:text-white hover:bg-white/5"
                }`}
              >
                {club.name}
              </button>
            ))}
          </div>
        </div>

        {/* Filter Summary KPI Bento Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="bg-neutral-900/80 border border-white/5 p-5 rounded-3xl flex items-center justify-between">
            <div>
              <div className="text-white/40 text-[10px] font-bold uppercase tracking-widest">Goles (Etapa)</div>
              <div className="text-indigo-400 font-bold font-mono text-2xl mt-1">{totalGoalsFiltered}</div>
            </div>
            <div className="p-3 bg-indigo-500/10 rounded-2xl text-indigo-400 border border-indigo-500/20">
              <Flame className="w-5 h-5" />
            </div>
          </div>

          <div className="bg-neutral-900/80 border border-white/5 p-5 rounded-3xl flex items-center justify-between">
            <div>
              <div className="text-white/40 text-[10px] font-bold uppercase tracking-widest">Expected Goals (xG)</div>
              <div className="text-sky-400 font-bold font-mono text-2xl mt-1">{totalXGFiltered.toFixed(1)}</div>
            </div>
            <div className="p-3 bg-sky-500/10 rounded-2xl text-sky-400 border border-sky-500/20">
              <Crosshair className="w-5 h-5" />
            </div>
          </div>

          <div className="bg-neutral-900/80 border border-white/5 p-5 rounded-3xl flex items-center justify-between">
            <div>
              <div className="text-white/40 text-[10px] font-bold uppercase tracking-widest">Asistencias</div>
              <div className="text-emerald-400 font-bold font-mono text-2xl mt-1">{totalAssistsFiltered}</div>
            </div>
            <div className="p-3 bg-emerald-500/10 rounded-2xl text-emerald-400 border border-emerald-500/20">
              <TrendingUp className="w-5 h-5" />
            </div>
          </div>

          <div className="bg-neutral-900/80 border border-white/5 p-5 rounded-3xl flex items-center justify-between">
            <div>
              <div className="text-white/40 text-[10px] font-bold uppercase tracking-widest">Sofascore Rating</div>
              <div className="text-purple-300 font-bold font-mono text-2xl mt-1">{avgRatingFiltered}</div>
            </div>
            <div className="p-3 bg-purple-500/10 rounded-2xl text-purple-300 border border-purple-500/20">
              <Zap className="w-5 h-5" />
            </div>
          </div>
        </div>

        {/* Charts Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Main Composed Chart: Goals vs xG over seasons */}
          <div className="lg:col-span-7 bg-neutral-900/80 border border-white/5 p-6 rounded-3xl backdrop-blur-xl space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-base font-bold text-white flex items-center gap-2 uppercase tracking-wide">
                  <Activity className="w-4 h-4 text-indigo-400" />
                  Evolución Temporada a Temporada: Goles vs xG
                </h3>
                <p className="text-white/50 text-xs mt-0.5">
                  Producción goleadora real (Barras Indigo) frente a la calidad de ocasiones xG (Línea Celeste).
                </p>
              </div>
            </div>

            <div className="h-80 w-full pt-4">
              <ResponsiveContainer width="100%" height="100%">
                <ComposedChart data={filteredData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#262626" />
                  <XAxis dataKey="age" stroke="#737373" tickFormatter={(v) => `${v}a`} tick={{ fontSize: 11 }} />
                  <YAxis stroke="#737373" tick={{ fontSize: 11 }} />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend wrapperStyle={{ paddingTop: "10px", fontSize: "12px", textTransform: "uppercase" }} />
                  <Bar dataKey="goals" name="Goles Reales" fill="#6366f1" radius={[6, 6, 0, 0]} barSize={18} />
                  <Bar dataKey="assists" name="Asistencias" fill="#10B981" radius={[6, 6, 0, 0]} barSize={12} />
                  <Line type="monotone" dataKey="xG" name="xG Esperados" stroke="#38BDF8" strokeWidth={3} dot={{ r: 4, fill: "#38BDF8" }} />
                </ComposedChart>
              </ResponsiveContainer>
            </div>

            <div className="p-3 bg-neutral-950 rounded-2xl border border-white/5 text-xs text-white/80 flex items-center gap-3">
              <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 font-bold text-[10px] uppercase">Dato Clave</span>
              <span>
                En su pico de 25 años en el Barcelona (38 goles vs 32.8 xG) y 30 años en el Osaka (36 goles vs 31.5 xG), Luciano registró índices de definición del top 1% mundial.
              </span>
            </div>
          </div>

          {/* Radar Chart: Attributes Profile */}
          <div className="lg:col-span-5 bg-neutral-900/80 border border-white/5 p-6 rounded-3xl backdrop-blur-xl space-y-4 flex flex-col justify-between">
            <div>
              <h3 className="text-base font-bold text-white flex items-center gap-2 uppercase tracking-wide">
                <Sparkles className="w-4 h-4 text-indigo-400" />
                Radar Táctico de Habilidades (Peak Profile)
              </h3>
              <p className="text-white/50 text-xs mt-0.5">
                Perfil radar comparativo frente al promedio de extremos top de Europa / Sudamérica.
              </p>
            </div>

            <div className="h-72 w-full flex items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="75%" data={radarAttributesData}>
                  <PolarGrid stroke="#262626" />
                  <PolarAngleAxis dataKey="attribute" stroke="#a3a3a3" tick={{ fontSize: 10, fill: "#d4d4d4" }} />
                  <PolarRadiusAxis angle={30} domain={[0, 100]} stroke="#404040" />
                  <Radar name="Luciano Villalba" dataKey="value" stroke="#6366f1" fill="#6366f1" fillOpacity={0.4} />
                  <Radar name="Promedio Elite" dataKey="benchmark" stroke="#38BDF8" fill="#38BDF8" fillOpacity={0.15} />
                  <Tooltip
                    contentStyle={{ backgroundColor: "#0a0a0a", borderColor: "#262626", borderRadius: "16px", color: "#F8FAFC", fontSize: "12px" }}
                  />
                  <Legend wrapperStyle={{ fontSize: "12px" }} />
                </RadarChart>
              </ResponsiveContainer>
            </div>

            <div className="grid grid-cols-2 gap-2 text-center text-xs">
              <div className="bg-neutral-950 p-3 rounded-2xl border border-white/5">
                <span className="text-white/40 block text-[10px] uppercase font-bold tracking-wider">Puntaje Máximo</span>
                <span className="text-indigo-400 font-bold font-mono text-sm">96/100 Desmarque</span>
              </div>
              <div className="bg-neutral-950 p-3 rounded-2xl border border-white/5">
                <span className="text-white/40 block text-[10px] uppercase font-bold tracking-wider">Efectividad Regate</span>
                <span className="text-sky-400 font-bold font-mono text-sm">68.4% Éxito 1v1</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
