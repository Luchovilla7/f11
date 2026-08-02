import React, { useState } from "react";
import { Sparkles, Menu, X, Trophy, BarChart3, Activity, Shield, Users, Globe } from "lucide-react";
import villalbaImage from "../assets/images/luciano_villalba_portrait_1785510513962.jpg";

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenAiScout: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab, onOpenAiScout }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: "profile", label: "LUCIANO VILLALBA", icon: Activity },
    { id: "advanced-stats", label: "ESTADÍSTICAS AVANZADAS & xG", icon: BarChart3 },
    { id: "tactical-pitch", label: "PIZARRA TÁCTICA & TIROS", icon: Shield },
    { id: "seleccion", label: "SELECCIÓN ARGENTINA", icon: Users },
    { id: "fútbol-argentino", label: "FÚTBOL ARGENTINO", icon: Trophy },
    { id: "fútbol-sudamericano", label: "FÚTBOL SUDAMERICANO", icon: Trophy },
    { id: "palmares-internacional", label: "PALMARÉS INTERNACIONAL", icon: Globe },
  ];

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="sticky top-0 z-50 bg-[#050505]/95 backdrop-blur-md border-b border-white/10 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Logo with Player Photo Avatar */}
        <button
          onClick={() => handleNavClick("profile")}
          className="flex items-center gap-3 text-left group focus:outline-none"
        >
          <div className="w-11 h-11 rounded-2xl border border-indigo-500/40 overflow-hidden shadow-lg shadow-indigo-600/20 group-hover:scale-105 group-hover:border-indigo-400 transition-all bg-neutral-900 shrink-0">
            <img src={villalbaImage} alt="Luciano Villalba" className="w-full h-full object-cover object-top" />
          </div>
          <div>
            <div className="font-extrabold text-base tracking-tight text-white uppercase flex items-center gap-2">
              Luciano Villalba <span className="text-indigo-400 font-bold text-[10px] bg-indigo-500/10 px-2 py-0.5 rounded-full border border-indigo-500/20">PRO PROFILE</span>
            </div>
            <div className="text-[10px] text-white/40 font-bold tracking-[0.15em] uppercase">
              FootStats Analytics Hub
            </div>
          </div>
        </button>

        {/* Desktop Nav Items */}
        <nav className="hidden xl:flex items-center gap-1.5 bg-neutral-900/60 p-1.5 rounded-2xl border border-white/5">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-3.5 py-1.5 rounded-xl text-[11px] font-bold tracking-wider transition-all flex items-center gap-2 uppercase ${
                  isActive
                    ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/20"
                    : "text-white/60 hover:text-white hover:bg-white/5"
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? "text-white" : "text-white/40"}`} />
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* AI Tactical Scout Button & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenAiScout}
            className="flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs tracking-wider uppercase shadow-md shadow-indigo-600/20 hover:scale-[1.02] active:scale-[0.98] transition-all border border-indigo-400/30"
          >
            <Sparkles className="w-4 h-4 text-amber-300 animate-pulse" />
            <span className="hidden sm:inline">IA Scouting Táctico</span>
            <span className="sm:hidden">IA Scout</span>
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 rounded-xl bg-neutral-900 text-white/70 hover:text-white border border-white/10"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#050505] border-b border-white/10 px-4 pt-3 pb-6 space-y-2 animate-in slide-in-from-top-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full text-left px-4 py-3 rounded-xl text-xs font-bold tracking-wider flex items-center gap-3 uppercase transition-all ${
                  isActive
                    ? "bg-indigo-600 text-white border border-indigo-400/30"
                    : "text-white/60 hover:bg-neutral-900"
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? "text-white" : "text-white/40"}`} />
                {item.label}
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
};
