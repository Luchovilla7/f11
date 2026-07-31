import React, { useState } from "react";
import { Navbar } from "./components/Navbar";
import { HeroHeader } from "./components/HeroHeader";
import { AdvancedStatsOverview } from "./components/AdvancedStatsOverview";
import { InteractivePitch } from "./components/InteractivePitch";
import { CareerTimeline } from "./components/CareerTimeline";
import { PalmaresSection } from "./components/PalmaresSection";
import { NationalTeamSection } from "./components/NationalTeamSection";
import { ArgentineFootballSection } from "./components/ArgentineFootballSection";
import { SouthAmericanFootballSection } from "./components/SouthAmericanFootballSection";
import { AiTacticalScoutModal } from "./components/AiTacticalScoutModal";

export default function App() {
  const [activeTab, setActiveTab] = useState<string>("profile");
  const [isAiModalOpen, setIsAiModalOpen] = useState<boolean>(false);

  return (
    <div className="min-h-screen bg-[#050505] text-slate-100 font-sans selection:bg-indigo-500 selection:text-white">
      
      {/* Top Navbar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenAiScout={() => setIsAiModalOpen(true)}
      />

      {/* Main Content Area */}
      <main className="space-y-4">
        
        {/* Player Profile Hero Section */}
        <HeroHeader onOpenAiScout={() => setIsAiModalOpen(true)} />

        {/* Advanced Stats & xG Charts */}
        <AdvancedStatsOverview />

        {/* Interactive Tactical Pitch & Shot Map */}
        <InteractivePitch />

        {/* Career Timeline (17 Seasons) */}
        <CareerTimeline />

        {/* Club Palmares */}
        <PalmaresSection />

        {/* Selección Argentina Section (Includes 2018 Amistosos) */}
        <NationalTeamSection />

        {/* Fútbol Argentino (Liga, Copa, Supercopa) */}
        <ArgentineFootballSection />

        {/* Fútbol Sudamericano (Campeonato Sudamericano) */}
        <SouthAmericanFootballSection />

      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 bg-neutral-950 py-10 mt-16 text-center text-xs text-white/40 space-y-2">
        <div className="flex items-center justify-center gap-2 font-bold text-white/70">
          ⚽ FootStats Analytics — Hub Profesional de Luciano Villalba & Estadísticas Oficiales
        </div>
        <div>
          Liga Argentina · Copa Argentina · Campeonato Sudamericano · FIFA World Cup · 1965–2025
        </div>
        <div className="text-[11px] text-white/30 font-mono">
          Desarrollado con analítica avanzada StatsBomb / Opta e Inteligencia Artificial
        </div>
      </footer>

      {/* AI Scouting Drawer / Modal */}
      <AiTacticalScoutModal
        isOpen={isAiModalOpen}
        onClose={() => setIsAiModalOpen(false)}
      />

    </div>
  );
}
