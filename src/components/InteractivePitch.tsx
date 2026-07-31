import React, { useState } from "react";
import { shotMapData } from "../data/villalbaData";
import { ShotPoint } from "../types";
import { Shield, Target, Flame, Layers, Info, Crosshair, ArrowRight } from "lucide-react";

export const InteractivePitch: React.FC = () => {
  const [activeLayer, setActiveLayer] = useState<"shotmap" | "heatmap" | "passing">("shotmap");
  const [selectedShot, setSelectedShot] = useState<ShotPoint | null>(shotMapData[0]);
  const [selectedRole, setSelectedRole] = useState<string>("inside_forward");

  return (
    <section id="tactical-pitch" className="py-10 bg-[#050505] text-slate-100 border-t border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/10 pb-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-[10px] font-extrabold tracking-widest uppercase mb-2">
              <Shield className="w-3.5 h-3.5" /> Pizarra Táctica & Mapa de Tiros
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight">
              Análisis Táctico de Posicionamiento & <span className="text-indigo-400">Mapa de Gol</span>
            </h2>
            <p className="text-white/60 text-xs sm:text-sm mt-1 max-w-2xl font-normal">
              Explora en detalle los patrones de ataque de Luciano Villalba, sus zonas de tiro de mayor conversión, el mapa de calor de desplazamientos sin pelota y sus roles según el club.
            </p>
          </div>

          {/* Layer Selector */}
          <div className="flex items-center gap-1.5 bg-neutral-900/80 p-1.5 rounded-2xl border border-white/5">
            {[
              { id: "shotmap", label: "Mapa de Tiros (xG)", icon: Target },
              { id: "heatmap", label: "Mapa de Calor", icon: Flame },
              { id: "passing", label: "Red de Pases", icon: Layers },
            ].map((layer) => {
              const Icon = layer.icon;
              const isActive = activeLayer === layer.id;
              return (
                <button
                  key={layer.id}
                  onClick={() => setActiveLayer(layer.id as any)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 uppercase ${
                    isActive
                      ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/20"
                      : "text-white/60 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  {layer.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Pitch Display Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Tactical Field Container */}
          <div className="lg:col-span-8 bg-neutral-900/80 border border-white/5 rounded-3xl p-6 relative shadow-2xl overflow-hidden space-y-4">
            
            {/* Header info bar */}
            <div className="flex items-center justify-between text-xs text-white/50 border-b border-white/5 pb-3">
              <div className="flex items-center gap-2 font-semibold">
                <span className="w-2.5 h-2.5 rounded-full bg-indigo-500 animate-ping" />
                <span className="uppercase tracking-wider text-[11px]">Dirección de ataque: De Izquierda a Derecha →</span>
              </div>
              <div className="flex items-center gap-3 font-mono text-[11px]">
                <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-full bg-indigo-400" /> Gol</span>
                <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-full bg-sky-400" /> Atajado</span>
                <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-full bg-red-400" /> Palo</span>
              </div>
            </div>

            {/* SVG Interactive Pitch Canvas */}
            <div className="relative w-full aspect-[16/10] bg-emerald-950/70 border-2 border-emerald-800/80 rounded-2xl overflow-hidden shadow-inner">
              
              {/* Pitch Markings SVG */}
              <svg className="absolute inset-0 w-full h-full text-emerald-700/60 stroke-current stroke-2" fill="none" viewBox="0 0 1000 620">
                {/* Outer Boundary */}
                <rect x="30" y="30" width="940" height="560" rx="4" />
                {/* Halfway Line */}
                <line x1="500" y1="30" x2="500" y2="590" />
                <circle cx="500" cy="310" r="80" />
                <circle cx="500" cy="310" r="4" fill="currentColor" />

                {/* Left Penalty Area (Defensive) */}
                <rect x="30" y="140" width="160" height="340" />
                <rect x="30" y="220" width="60" height="180" />
                <circle cx="130" cy="310" r="3" fill="currentColor" />

                {/* Right Penalty Area (Attacking Zone) */}
                <rect x="810" y="140" width="160" height="340" />
                <rect x="910" y="220" width="60" height="180" />
                <circle cx="870" cy="310" r="3" fill="currentColor" />
                <path d="M 810,230 A 80,80 0 0,0 810,390" />

                {/* Corner Arcs */}
                <path d="M 30,50 A 20,20 0 0,0 50,30" />
                <path d="M 30,570 A 20,20 0 0,1 50,590" />
                <path d="M 970,50 A 20,20 0 0,1 950,30" />
                <path d="M 970,570 A 20,20 0 0,0 950,590" />
              </svg>

              {/* LAYER 1: HEATMAP */}
              {activeLayer === "heatmap" && (
                <div className="absolute inset-0 pointer-events-none">
                  {/* Left Winger Cut-In Heat Zone */}
                  <div className="absolute top-[20%] left-[55%] w-60 h-48 bg-indigo-500/35 rounded-full blur-3xl animate-pulse" />
                  <div className="absolute top-[30%] left-[70%] w-44 h-36 bg-indigo-600/40 rounded-full blur-2xl" />
                  <div className="absolute top-[35%] left-[80%] w-28 h-28 bg-indigo-400/50 rounded-full blur-xl" />
                  <div className="absolute top-[15%] left-[45%] w-72 h-32 bg-sky-500/25 rounded-full blur-3xl" />
                </div>
              )}

              {/* LAYER 2: PASSING NETWORK */}
              {activeLayer === "passing" && (
                <svg className="absolute inset-0 w-full h-full pointer-events-none stroke-indigo-400/80 stroke-2">
                  <line x1="520" y1="200" x2="720" y2="180" strokeDasharray="6 4" className="animate-pulse" />
                  <line x1="720" y1="180" x2="880" y2="280" strokeWidth="3" />
                  <line x1="680" y1="380" x2="880" y2="280" strokeWidth="2.5" />
                  <line x1="720" y1="180" x2="820" y2="450" strokeDasharray="4 4" />

                  {/* Player Nodes */}
                  <g transform="translate(720, 180)">
                    <circle r="16" className="fill-indigo-600 stroke-[#050505] stroke-2" />
                    <text x="0" y="4" textAnchor="middle" className="fill-white font-black text-[11px]">7</text>
                  </g>
                  <g transform="translate(520, 200)">
                    <circle r="12" className="fill-neutral-800 stroke-neutral-400 stroke-2" />
                    <text x="0" y="4" textAnchor="middle" className="fill-white font-bold text-[9px]">8</text>
                  </g>
                  <g transform="translate(880, 280)">
                    <circle r="14" className="fill-sky-400 stroke-[#050505] stroke-2" />
                    <text x="0" y="4" textAnchor="middle" className="fill-[#050505] font-black text-[10px]">9</text>
                  </g>
                  <g transform="translate(680, 380)">
                    <circle r="12" className="fill-neutral-800 stroke-neutral-400 stroke-2" />
                    <text x="0" y="4" textAnchor="middle" className="fill-white font-bold text-[9px]">10</text>
                  </g>
                </svg>
              )}

              {/* LAYER 3: SHOT MAP (Interactive Clickable Points) */}
              {activeLayer === "shotmap" &&
                shotMapData.map((shot) => {
                  const isSelected = selectedShot?.id === shot.id;
                  const colorClass =
                    shot.result === "goal"
                      ? "bg-indigo-500 border-indigo-200 text-white shadow-indigo-500/50"
                      : shot.result === "saved"
                      ? "bg-sky-400 border-sky-200 text-slate-950 shadow-sky-400/50"
                      : "bg-red-400 border-red-200 text-slate-950 shadow-red-400/50";

                  // Size based on xG value
                  const sizePx = Math.max(18, Math.min(36, shot.xG * 38));

                  return (
                    <button
                      key={shot.id}
                      onClick={() => setSelectedShot(shot)}
                      style={{
                        left: `${shot.x}%`,
                        top: `${shot.y}%`,
                        width: `${sizePx}px`,
                        height: `${sizePx}px`,
                      }}
                      className={`absolute -translate-x-1/2 -translate-y-1/2 rounded-full border-2 font-bold text-[10px] flex items-center justify-center transition-all duration-300 shadow-lg hover:scale-125 focus:outline-none ${colorClass} ${
                        isSelected ? "ring-4 ring-white ring-offset-2 ring-offset-neutral-900 scale-125 z-20" : "z-10"
                      }`}
                      title={`${shot.match} (${shot.xG} xG)`}
                    >
                      {shot.result === "goal" ? "⚽" : "🎯"}
                    </button>
                  );
                })}

            </div>

            <div className="text-white/50 text-xs flex items-center justify-between flex-wrap gap-2 pt-1">
              <span className="flex items-center gap-1.5">
                <Info className="w-3.5 h-3.5 text-indigo-400" /> Haz clic en los puntos del mapa para inspeccionar el tiro, xG y partido.
              </span>
              <span>
                xG Promedio en área chica: <strong className="text-indigo-400 font-bold font-mono">0.48 xG</strong>
              </span>
            </div>

          </div>

          {/* Side Inspector & Role Selector Column */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Inspector Panel for Selected Shot */}
            {activeLayer === "shotmap" && selectedShot && (
              <div className="bg-neutral-900/80 border border-white/5 p-6 rounded-3xl space-y-4 shadow-xl">
                <div className="flex items-center justify-between border-b border-white/5 pb-3">
                  <div className="text-indigo-400 font-bold text-xs uppercase tracking-wider flex items-center gap-1.5">
                    <Crosshair className="w-4 h-4" /> Inspección de Tiro Seleccionado
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-indigo-500/10 text-indigo-300 text-[11px] font-mono font-bold border border-indigo-500/20">
                    Minuto {selectedShot.minute}'
                  </span>
                </div>

                <div>
                  <h4 className="text-white font-bold text-base">{selectedShot.match}</h4>
                  <div className="text-white/60 text-xs mt-1">
                    Resultado de la jugada: <span className="text-indigo-300 font-bold uppercase">{selectedShot.result === "goal" ? "Golazo de Villalba" : selectedShot.result}</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="bg-neutral-950 p-3 rounded-2xl border border-white/5">
                    <div className="text-white/40 text-[10px] uppercase font-bold tracking-wider">Valor Probable (xG)</div>
                    <div className="text-sky-400 font-bold font-mono text-xl mt-0.5">{selectedShot.xG} xG</div>
                  </div>

                  <div className="bg-neutral-950 p-3 rounded-2xl border border-white/5">
                    <div className="text-white/40 text-[10px] uppercase font-bold tracking-wider">Distancia al Arco</div>
                    <div className="text-white font-bold font-mono text-xl mt-0.5">{selectedShot.distanceMeters}m</div>
                  </div>

                  <div className="bg-neutral-950 p-3 rounded-2xl border border-white/5 col-span-2">
                    <div className="text-white/40 text-[10px] uppercase font-bold tracking-wider">Superficie de Contacto</div>
                    <div className="text-emerald-400 font-bold text-xs mt-0.5 uppercase">
                      {selectedShot.bodyPart === "left_foot"
                        ? "Pierna Izquierda (Rosca / Potencia)"
                        : selectedShot.bodyPart === "right_foot"
                        ? "Pierna Derecha (Definición de primer toque)"
                        : "Cabezazo Cruzado"}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Tactical Roles Breakdown */}
            <div className="bg-neutral-900/80 border border-white/5 p-6 rounded-3xl space-y-4">
              <h3 className="text-white font-bold text-base uppercase tracking-wider flex items-center gap-2">
                <Shield className="w-4 h-4 text-indigo-400" />
                Sistemas & Roles Tácticos
              </h3>

              <div className="space-y-3">
                {[
                  {
                    id: "inside_forward",
                    title: "Extremo Izquierdo / Inside Forward",
                    teams: "Barcelona (2020-2024) & Selección Argentina",
                    desc: "Arranca pegado a la raya en 4-3-3. Explota el 1v1 contra el lateral rival, recorta en diagonal hacia dentro y busca el arco con zurda al segundo palo o pared rápida con el delantero centro.",
                  },
                  {
                    id: "second_striker",
                    title: "Segundo Delantero / Libre de Ataque",
                    teams: "Misiones & Osaka",
                    desc: "Juega detrás del 9 de área en un esquema 4-2-3-1 o 4-4-2. Aprovecha los rebotes y la segunda jugada, generando rupturas verticales de atrás hacia adelante.",
                  },
                  {
                    id: "false_nine",
                    title: "Falso 9 / Conector Ofensivo",
                    teams: "Berlín & Seúl",
                    desc: "Arrastra marcas saliendo del área chica hacia la zona de gestación, habilitando las diagonales de los extremos opuestos y sumando hombres a la elaboración.",
                  },
                ].map((role) => (
                  <button
                    key={role.id}
                    onClick={() => setSelectedRole(role.id)}
                    className={`w-full text-left p-4 rounded-2xl border transition-all ${
                      selectedRole === role.id
                        ? "bg-indigo-600/10 border-indigo-500/40 text-white shadow-md"
                        : "bg-neutral-950/60 border-white/5 text-white/60 hover:text-white"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-xs uppercase text-indigo-300">{role.title}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-indigo-400" />
                    </div>
                    <div className="text-[10px] text-white/40 font-mono mt-0.5">{role.teams}</div>
                    <p className="text-xs text-white/80 mt-2 leading-relaxed">{role.desc}</p>
                  </button>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
