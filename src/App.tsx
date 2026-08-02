import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Navbar } from "./components/Navbar";
import { HeroHeader } from "./components/HeroHeader";
import { PageHeader } from "./components/PageHeader";
import { AdvancedStatsOverview } from "./components/AdvancedStatsOverview";
import { InteractivePitch } from "./components/InteractivePitch";
import { CareerTimeline } from "./components/CareerTimeline";
import { PalmaresSection } from "./components/PalmaresSection";
import { NationalTeamSection } from "./components/NationalTeamSection";
import { ArgentineFootballSection } from "./components/ArgentineFootballSection";
import { SouthAmericanFootballSection } from "./components/SouthAmericanFootballSection";
import { InternationalPalmaresSection } from "./components/InternationalPalmaresSection";
import { AiTacticalScoutModal } from "./components/AiTacticalScoutModal";

export default function App() {
  const [activeTab, setActiveTab] = useState<string>("profile");
  const [isAiModalOpen, setIsAiModalOpen] = useState<boolean>(false);

  return (
    <div className="min-h-screen bg-[#050505] text-slate-100 font-sans selection:bg-indigo-500 selection:text-white flex flex-col justify-between">
      
      <div>
        {/* Top Navbar */}
        <Navbar
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          onOpenAiScout={() => setIsAiModalOpen(true)}
        />

        {/* Main Content Area — Separate Pages per Tab */}
        <main className="py-6">
          <AnimatePresence mode="wait">
            {activeTab === "profile" && (
              <motion.div
                key="profile"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.2 }}
                className="space-y-8"
              >
                <HeroHeader onOpenAiScout={() => setIsAiModalOpen(true)} />
                <CareerTimeline />
                <PalmaresSection />
              </motion.div>
            )}

            {activeTab === "advanced-stats" && (
              <motion.div
                key="advanced-stats"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.2 }}
                className="space-y-6"
              >
                <PageHeader
                  title="Estadísticas Avanzadas & xG"
                  subtitle="Analítica biomecánica, rendimiento xG vs Goles reales, radar de atributos y métricas Opta/StatsBomb de Luciano Villalba."
                  badge="Analítica Opta / xG"
                  badgeColor="indigo"
                  onGoToProfile={() => setActiveTab("profile")}
                  onOpenAiScout={() => setIsAiModalOpen(true)}
                />
                <AdvancedStatsOverview />
              </motion.div>
            )}

            {activeTab === "tactical-pitch" && (
              <motion.div
                key="tactical-pitch"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.2 }}
                className="space-y-6"
              >
                <PageHeader
                  title="Pizarra Táctica & Mapa de Tiros"
                  subtitle="Visualización interactiva en 2D de zonas de remate, mapas de calor, perfil de disparos y rol táctico ofensivo."
                  badge="Mapa de Tiros 2D"
                  badgeColor="amber"
                  onGoToProfile={() => setActiveTab("profile")}
                  onOpenAiScout={() => setIsAiModalOpen(true)}
                />
                <InteractivePitch />
              </motion.div>
            )}

            {activeTab === "seleccion" && (
              <motion.div
                key="seleccion"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.2 }}
                className="space-y-6"
              >
                <PageHeader
                  title="Selección Argentina 🇦🇷"
                  subtitle="Paso histórico de Luciano Villalba por la Albiceleste: Campeón del Mundo FIFA 2023, Bicampeón Sudamericano y debut 2018."
                  badge="Carrera Internacional"
                  badgeColor="sky"
                  onGoToProfile={() => setActiveTab("profile")}
                  onOpenAiScout={() => setIsAiModalOpen(true)}
                />
                <NationalTeamSection />
              </motion.div>
            )}

            {activeTab === "fútbol-argentino" && (
              <motion.div
                key="fútbol-argentino"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.2 }}
                className="space-y-6"
              >
                <PageHeader
                  title="Fútbol Argentino — Dominancia Provincial"
                  subtitle="Estadísticas históricas oficiales del palmarés provincial en la Liga Argentina, Copa Argentina y Supercopa Argentina (1965–2025)."
                  badge="Palmarés AFA"
                  badgeColor="indigo"
                  onGoToProfile={() => setActiveTab("profile")}
                  onOpenAiScout={() => setIsAiModalOpen(true)}
                />
                <ArgentineFootballSection />
              </motion.div>
            )}

            {activeTab === "fútbol-sudamericano" && (
              <motion.div
                key="fútbol-sudamericano"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.2 }}
                className="space-y-6"
              >
                <PageHeader
                  title="Fútbol Sudamericano por Regiones"
                  subtitle="Tabla general de títulos sudamericanos CONMEBOL conseguidos por regiones y departamentos de América del Sur."
                  badge="CONMEBOL Stats"
                  badgeColor="emerald"
                  onGoToProfile={() => setActiveTab("profile")}
                  onOpenAiScout={() => setIsAiModalOpen(true)}
                />
                <SouthAmericanFootballSection />
              </motion.div>
            )}

            {activeTab === "palmares-internacional" && (
              <motion.div
                key="palmares-internacional"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.2 }}
                className="space-y-6"
              >
                <PageHeader
                  title="Palmarés Internacional de Selecciones"
                  subtitle="Historial oficial de títulos de la Copa Mundial de la FIFA y los 6 torneos continentales de selecciones nacionales."
                  badge="FIFA & Confederaciones"
                  badgeColor="amber"
                  onGoToProfile={() => setActiveTab("profile")}
                  onOpenAiScout={() => setIsAiModalOpen(true)}
                />
                <InternationalPalmaresSection />
              </motion.div>
            )}
          </AnimatePresence>
        </main>
      </div>

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
