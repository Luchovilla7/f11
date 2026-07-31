import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Health check
  app.get("/api/health", (_req, res) => {
    res.json({ status: "ok", app: "FootStats Luciano Villalba" });
  });

  // AI Tactical Scout Endpoint using Gemini
  app.post("/api/tactical-scout", async (req, res) => {
    try {
      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        return res.status(500).json({
          error: "GEMINI_API_KEY no configurada en el servidor.",
        });
      }

      const { prompt, context } = req.body;

      const ai = new GoogleGenAI({ apiKey });

      const systemInstruction = `
Eres un Analista Táctico de Elite y Director de Scouting Deportivo (estilo StatsBomb / Opta / Pep Guardiola analysis).
Tu tarea es proporcionar análisis tácticos avanzados sobre el jugador profesional Luciano Villalba (#7), ex-Barcelona, Misiones, Berlín, Osaka, Seúl y figura destacada de la Selección Argentina (Campeón del Mundo 2023, Bicampeón Copa Sudamérica 2022/2025).

Contexto del jugador:
- Posición: Extremo Izquierdo / Inside Forward / Falso 9 / Segundo Delantero.
- Estadísticas de carrera a nivel de clubes: 568 partidos, 338 goles (promedio 0.60 G/P). xG acum: 312.4 (+25.6 sobrerendimiento de xG).
- Selección Argentina: 35 partidos, 27 goles (promedio 0.77 G/P). 8 goles en Copa Mundial 2023.
- Características principales:
  * Regate hacia dentro desde la banda izquierda con aceleración explosiva (68.4% regates completados).
  * Remate de media y corta distancia con pierna hábil y definición de primer toque en área chica (xG/Tiro = 0.17).
  * Movimiento entre líneas buscando el espacio a la espalda de los laterales opuestos.
  * Presión alta tras pérdida (82.1% de efectividad en recuperación en zona de ataque).

Genera respuestas profesionales en español, bien estructuradas con secciones, viñetas, términos tácticos precisos (xG, xA, bloque bajo, líneas de pase, sobrecarga, tercer hombre, etc.) y consejos estratégicos.
`;

      const userMessage = prompt || "Genera un informe técnico completo sobre las fortalezas tácticas de Luciano Villalba, cómo enfrentarlo o cómo maximizar su rendimiento en un esquema 4-3-3 o 4-2-3-1.";

      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: [
          { role: "user", parts: [{ text: `${systemInstruction}\n\nConsulta del usuario: ${userMessage}\n\nContexto adicional enviado: ${JSON.stringify(context || {})}` }] }
        ],
        config: {
          temperature: 0.7,
        }
      });

      return res.json({ analysis: response.text });
    } catch (err: any) {
      console.error("Error en /api/tactical-scout:", err);
      return res.status(500).json({
        error: "Error procesando el análisis táctico con IA.",
        details: err?.message || String(err),
      });
    }
  });

  // Vite Development / Production Setup
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`⚽ Server FootStats running on http://0.0.0.0:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error("Failed to start server:", err);
});
