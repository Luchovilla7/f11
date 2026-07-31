import React from "react";
import villalbaImage from "../assets/images/luciano_villalba_portrait_1785510513962.jpg";
import { villalbaProfile } from "../data/villalbaData";
import { ArrowLeft, Sparkles, Trophy, Activity } from "lucide-react";

interface PageHeaderProps {
  title: string;
  subtitle: string;
  badge: string;
  badgeColor?: "indigo" | "sky" | "emerald" | "amber";
  onGoToProfile: () => void;
  onOpenAiScout: () => void;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  subtitle,
  badge,
  badgeColor = "indigo",
  onGoToProfile,
  onOpenAiScout,
}) => {
  const badgeClasses = {
    indigo: "bg-indigo-500/10 border-indigo-500/20 text-indigo-400",
    sky: "bg-sky-500/10 border-sky-500/20 text-sky-400",
    emerald: "bg-emerald-500/10 border-emerald-500/20 text-emerald-400",
    amber: "bg-amber-500/10 border-amber-500/20 text-amber-400",
  }[badgeColor];

  return (
    <div className="relative pt-4 pb-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-neutral-900/80 border border-white/10 rounded-3xl p-6 shadow-2xl backdrop-blur-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          
          {/* Player & Title Info */}
          <div className="flex items-center gap-4">
            <button
              onClick={onGoToProfile}
              title="Ver Perfil Completo"
              className="relative group shrink-0"
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border-2 border-indigo-500/40 shadow-lg shadow-indigo-600/20 group-hover:scale-105 group-hover:border-indigo-400 transition-all bg-neutral-950">
                <img
                  src={villalbaImage}
                  alt="Luciano Villalba"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <span className="absolute -bottom-1 -right-1 px-1.5 py-0.5 bg-indigo-600 text-[9px] font-bold text-white rounded-md shadow">
                #7
              </span>
            </button>

            <div className="space-y-1">
              <div className="flex items-center gap-2 flex-wrap">
                <span className={`inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full border text-[10px] font-extrabold uppercase tracking-widest ${badgeClasses}`}>
                  <Activity className="w-3 h-3" /> {badge}
                </span>
                <span className="text-white/40 text-[11px] font-mono">
                  Luciano Villalba • {villalbaProfile.totalClubGoals + villalbaProfile.totalSeleccionGoals} Goles
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">
                {title}
              </h1>
              <p className="text-white/60 text-xs sm:text-sm max-w-2xl font-normal">
                {subtitle}
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3 w-full md:w-auto justify-end">
            <button
              onClick={onGoToProfile}
              className="flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-neutral-800 hover:bg-neutral-700 text-white text-xs font-bold uppercase tracking-wider border border-white/10 transition-all"
            >
              <ArrowLeft className="w-4 h-4 text-indigo-400" />
              <span className="hidden sm:inline">Perfil Principal</span>
              <span className="sm:hidden">Perfil</span>
            </button>

            <button
              onClick={onOpenAiScout}
              className="flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs tracking-wider uppercase shadow-md shadow-indigo-600/20 border border-indigo-400/30 transition-all"
            >
              <Sparkles className="w-4 h-4 text-amber-300 animate-pulse" />
              <span>Scout IA</span>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
