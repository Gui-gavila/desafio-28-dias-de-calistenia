import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Shared Gemini AI client initialized lazily
  let aiClient: GoogleGenAI | null = null;
  function getAiClient(): GoogleGenAI {
    if (!aiClient) {
      const apiKey = process.env.GEMINI_API_KEY;
      aiClient = new GoogleGenAI({
        apiKey: apiKey || '',
        httpOptions: {
          headers: {
            'User-Agent': 'aistudio-build',
          },
        },
      });
    }
    return aiClient;
  }

  // Health check endpoint
  app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString() });
  });

  // Calisthenics Master Coach AI chat endpoint
  app.post('/api/coach/chat', async (req, res) => {
    try {
      const { message, profile, day, history } = req.body;

      if (!message) {
        return res.status(400).json({ error: 'Mensagem é obrigatória' });
      }

      const isMale = profile?.gender === 'male';
      const userContext = isMale
        ? `Perfil do Aluno: Homem, Altura: 1,75m, Peso: 86kg. Foco principal: Definição abdominal (queima de gordura visceral/subcutânea e fortalecimento do core) e Hipertrofia do Peitoral com calistenia e peso corporal. Rotina: 30 min de treino + 15 min de caminhada diária.`
        : `Perfil da Aluna: Mulher, Altura: 1,53m, Peso: 62kg. Foco principal: Hipertrofia e definição de Glúteos (bumbum redondo e empinado), Posterior de coxa, Quadríceps e Core firme. Rotina: 30 min de treino + 15 min de caminhada diária.`;

      const systemInstruction = `Você é o "Mestre Calistenia AI" — um treinador de elite especialista em Calistenia, Biomecânica e Preparação Física Funcional.
Você está orientando uma pessoa no Desafio de 28 Dias de Calistenia.

Contexto Atual:
${userContext}
Dia atual do desafio: Dia ${day || 1} de 28.

Suas diretrizes:
1. Responda em Português do Brasil com entusiasmo, clareza técnica e encorajamento prático.
2. Dê dicas biomecânicas precisas (ex: retração escapular, inclinação pélvica posterior/hollow body, amplitude completa de movimento, cadência 3-1-1).
3. Se o usuário relatar dores articulares ou dificuldade, ensine regressões seguras (ex: flexão inclinada na parede/mesa antes da flexão de solo; ponte de glúteo bipodal antes da unilateral).
4. Explique a importância dos 15 minutos de caminhada diária (ativação de NEAT, circulação, queima lipídica sem fadiga do SNC).
5. Mantenha as respostas concisas, diretas e formatadas com tópicos e negrito para fácil leitura no celular ou computador.
6. Nunca recomende medicamentos ou dietas extremas; foque em nutrição limpa, hidratação adequada (35-40ml por kg de peso) e consistência.`;

      const ai = getAiClient();

      // Format previous chat history if available
      const formattedContents = [];
      if (Array.isArray(history) && history.length > 0) {
        for (const item of history.slice(-6)) {
          formattedContents.push({
            role: item.role === 'user' ? 'user' : 'model',
            parts: [{ text: item.content }],
          });
        }
      }
      formattedContents.push({
        role: 'user',
        parts: [{ text: message }],
      });

      const response = await ai.models.generateContent({
        model: 'gemini-3.7-flash',
        contents: formattedContents,
        config: {
          systemInstruction,
          temperature: 0.7,
        },
      });

      const replyText = response.text || 'Continue firme no treino!';
      return res.json({ reply: replyText });
    } catch (err: any) {
      console.error('Error in coach chat API:', err);
      // Fallback friendly message if API key is missing or errored
      return res.json({
        reply: `Dica do Especialista em Calistenia:\n\nPara o seu perfil, concentre-se na conexão mente-músculo e na cadência controlada (2s na descida, 1s de contração no pico). Lembre-se que a consistência nos 30 min de treino e nos 15 min de caminhada diária é o segredo para transformar sua composição corporal nos 28 dias!`,
      });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Calisthenics 28-Day Challenge server running on http://localhost:${PORT}`);
  });
}

startServer();
