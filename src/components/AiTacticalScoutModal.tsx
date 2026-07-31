import React, { useState } from "react";
import { Sparkles, X, Send, Bot, User, Copy, Check, ShieldAlert, Zap } from "lucide-react";

interface AiTacticalScoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AiTacticalScoutModal: React.FC<AiTacticalScoutModalProps> = ({ isOpen, onClose }) => {
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const presetQuestions = [
    "¿Cómo нейтраlizar la diagonal hacia adentro de zurda de Villalba desde la banda izquierda?",
    "Realiza un análisis táctico detallado de su rendimiento en la Copa Mundial 2023 con Argentina.",
    "Compara el rendimiento de Villalba en el Barcelona (2021) frente a su etapa en Osaka (2027).",
    "¿Qué ajustes defensivos debe hacer un rival que juega con bloque bajo 5-3-2 frente a Villalba?",
  ];

  const handleSend = async (userQuestion?: string) => {
    const q = userQuestion || prompt;
    if (!q.trim()) return;

    setLoading(true);
    setError(null);
    setResponse(null);

    try {
      const res = await fetch("/api/tactical-scout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: q }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Error al generar informe.");
      }

      setResponse(data.analysis);
    } catch (err: any) {
      setError(err.message || "No se pudo conectar con el asistente de Scouting IA.");
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = () => {
    if (response) {
      navigator.clipboard.writeText(response);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in">
      <div className="bg-[#050505] border border-white/10 w-full max-w-3xl rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Modal Header */}
        <div className="p-5 sm:p-6 bg-neutral-900/80 border-b border-white/5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-2xl bg-indigo-600 text-white shadow-lg shadow-indigo-600/20">
              <Bot className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                Asistente de Scouting IA <span className="text-indigo-400 font-mono text-[10px] bg-indigo-500/10 px-2 py-0.5 rounded-full border border-indigo-500/20">Gemini 2.5</span>
              </h3>
              <p className="text-white/60 text-xs">
                Genera informes técnicos tácticos avanzados sobre Luciano Villalba al instante.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-2xl bg-neutral-900 border border-white/5 text-white/60 hover:text-white hover:bg-white/5 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-6 flex-1 text-slate-200 text-sm">
          
          {/* Preset Chips */}
          <div className="space-y-2">
            <div className="text-[10px] text-white/40 font-bold uppercase tracking-widest flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5 text-indigo-400" /> Consultas Rápidas Recomendadas:
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {presetQuestions.map((q, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setPrompt(q);
                    handleSend(q);
                  }}
                  disabled={loading}
                  className="text-left p-3 rounded-2xl bg-neutral-900/80 hover:bg-neutral-800 border border-white/5 text-xs text-white/80 hover:text-indigo-300 transition-all font-medium disabled:opacity-50"
                >
                  💬 {q}
                </button>
              ))}
            </div>
          </div>

          {/* Loading Indicator */}
          {loading && (
            <div className="p-8 bg-neutral-900/50 rounded-3xl border border-white/5 text-center space-y-3">
              <Sparkles className="w-8 h-8 text-indigo-400 animate-spin mx-auto" />
              <p className="text-indigo-300 font-bold text-sm">Analizando datos biomecánicos y xG de Luciano Villalba...</p>
              <p className="text-white/40 text-xs">Procesando modelos de juego y métricas Opta con Gemini 2.5 Flash</p>
            </div>
          )}

          {/* Error Message */}
          {error && (
            <div className="p-4 bg-red-950/50 border border-red-500/30 text-red-300 rounded-2xl text-xs flex items-center gap-3">
              <ShieldAlert className="w-5 h-5 text-red-400 shrink-0" />
              <span>{error}</span>
            </div>
          )}

          {/* AI Response Output */}
          {response && (
            <div className="bg-neutral-900/90 border border-white/5 rounded-3xl p-5 space-y-4 shadow-inner">
              <div className="flex items-center justify-between border-b border-white/5 pb-3">
                <span className="text-xs font-bold text-indigo-400 uppercase tracking-widest flex items-center gap-1.5">
                  <Bot className="w-4 h-4" /> Informe Técnico Táctico Generado
                </span>
                <button
                  onClick={handleCopy}
                  className="flex items-center gap-1.5 px-3 py-1 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-white/80 text-xs transition-colors"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? "Copiado" : "Copiar Informe"}</span>
                </button>
              </div>

              <div className="whitespace-pre-wrap leading-relaxed text-white/90 font-sans text-xs sm:text-sm">
                {response}
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer / Custom Input */}
        <div className="p-4 bg-neutral-900/80 border-t border-white/5 flex gap-2">
          <input
            type="text"
            placeholder="Escribe tu consulta táctica sobre Villalba..."
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            disabled={loading}
            className="flex-1 bg-neutral-950 border border-white/5 rounded-2xl px-4 py-3 text-xs sm:text-sm text-white placeholder-white/40 focus:outline-none focus:border-indigo-500"
          />
          <button
            onClick={() => handleSend()}
            disabled={loading || !prompt.trim()}
            className="px-5 py-3 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-md shadow-indigo-600/20 disabled:opacity-50 transition-all"
          >
            <Send className="w-4 h-4" />
            <span className="hidden sm:inline">Enviar</span>
          </button>
        </div>

      </div>
    </div>
  );
};
