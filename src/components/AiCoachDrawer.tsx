import React, { useState, useRef, useEffect } from 'react';
import { UserProfile, ChatMessage } from '../types';
import { Bot, Send, X, Sparkles, User, RefreshCw, MessageSquare, Dumbbell } from 'lucide-react';

interface AiCoachDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  profile: UserProfile;
  currentDay: number;
}

export const AiCoachDrawer: React.FC<AiCoachDrawerProps> = ({
  isOpen,
  onClose,
  profile,
  currentDay,
}) => {
  const isMale = profile.gender === 'male';

  const defaultWelcomeMessage: ChatMessage = {
    id: 'welcome',
    role: 'assistant',
    content: isMale
      ? `Olá, guerreiro! Sou seu **Mestre de Calistenia & Biomecânica**. Estou aqui para guiar seu desafio de 28 dias focado em **peitoral volumoso e abdômen definido** para sua estrutura (1,75m e 86kg).\n\nComo posso te ajudar hoje no **Dia ${currentDay}**? Posso ajustar exercícios se sentir dor, ensinar técnicas para proteger os punhos/ombros ou dar dicas de queima de gordura!`
      : `Olá! Sou seu **Mestre de Calistenia & Biomecânica**. Estou pronta para acompanhar sua evolução de 28 dias focada em **glúteos empinados, pernas firmes e cintura fina** para sua estrutura (1,53m e 62kg).\n\nComo posso te ajudar hoje no **Dia ${currentDay}**? Posso te ensinar a isolar mais o bumbum nos agachamentos, tirar dúvidas de execução ou ajustar sua rotina!`,
    timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
  };

  const [messages, setMessages] = useState<ChatMessage[]>([defaultWelcomeMessage]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Quick suggestion prompts
  const suggestions = isMale
    ? [
        'Como evitar dores nos ombros e punhos nas flexões?',
        'Como isolar o peitoral superior na flexão declinada?',
        'Técnica para não arquear a lombar no Hollow Body',
        'Variação mais fácil para o treino de hoje',
        'Melhor horário para a caminhada de 15 min?',
      ]
    : [
        'Como sentir mais o glúteo no agachamento búlgaro?',
        'Como empinar o bumbum sem sobrecarregar os joelhos?',
        'Dica para afinar a cintura com as pranchas',
        'Variação mais fácil para o treino de hoje',
        'O que comer após os 30 min de treino + caminhada?',
      ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSendMessage = async (textToSend?: string) => {
    const messageContent = (textToSend || inputText).trim();
    if (!messageContent || isLoading) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      content: messageContent,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages(prev => [...prev, userMsg]);
    if (!textToSend) setInputText('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/coach/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: messageContent,
          profile,
          day: currentDay,
          history: messages.map(m => ({ role: m.role, content: m.content })),
        }),
      });

      const data = await response.json();
      const assistantMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: data.reply || 'Continue firme no seu treino!',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages(prev => [...prev, assistantMsg]);
    } catch (err) {
      console.error('Error fetching coach reply:', err);
      const errorMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content:
          'Lembre-se da regra de ouro da calistenia: controle a fase excêntrica (descida de 2 a 3 segundos) e aperte os músculos alvos no pico da contração!',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages(prev => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div id="ai-coach-drawer-overlay" className="fixed inset-0 z-50 flex justify-end bg-[#2c332b]/40 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-md h-full shadow-2xl border-l border-[#8fa38e]/20 flex flex-col animate-in slide-in-from-right duration-300">
        {/* Header */}
        <div className="px-5 py-4 bg-[#fbfaf7] border-b border-[#8fa38e]/15 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className={`w-9 h-9 rounded-xl flex items-center justify-center font-bold text-white shadow-2xs ${
              isMale ? 'bg-[#8fa38e]' : 'bg-[#c89f83]'
            }`}>
              <Bot className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <h3 className="font-bold text-sm text-[#3a3a38]">Mestre Calistenia AI</h3>
                <span className="w-2 h-2 rounded-full bg-[#8fa38e] animate-pulse"></span>
              </div>
              <p className="text-[11px] text-[#6d6d6b]">
                Consultor Especialista • Dia {currentDay} de 28
              </p>
            </div>
          </div>

          <button
            id="btn-close-coach-drawer"
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#6d6d6b] hover:text-[#3a3a38] hover:bg-[#eef3ed] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quick Suggestion Chips */}
        <div className="px-4 py-2 bg-[#fbfaf7]/60 border-b border-[#8fa38e]/10 overflow-x-auto flex gap-1.5 no-scrollbar">
          {suggestions.map((sug, idx) => (
            <button
              key={idx}
              id={`btn-suggestion-chip-${idx}`}
              onClick={() => handleSendMessage(sug)}
              disabled={isLoading}
              className="text-[11px] px-2.5 py-1 rounded-full bg-white border border-[#8fa38e]/20 text-[#6d6d6b] hover:border-[#8fa38e]/50 hover:bg-[#eef3ed]/50 whitespace-nowrap transition-colors flex items-center gap-1 shrink-0 shadow-2xs"
            >
              <Sparkles className="w-3 h-3 text-[#c89f83]" />
              <span>{sug}</span>
            </button>
          ))}
        </div>

        {/* Messages List */}
        <div className="flex-1 p-4 overflow-y-auto space-y-4">
          {messages.map(msg => {
            const isUser = msg.role === 'user';
            return (
              <div
                key={msg.id}
                className={`flex gap-2.5 ${isUser ? 'justify-end' : 'justify-start'}`}
              >
                {!isUser && (
                  <div className={`w-7 h-7 rounded-lg flex items-center justify-center text-white shrink-0 mt-0.5 text-xs font-bold ${
                    isMale ? 'bg-[#8fa38e]' : 'bg-[#c89f83]'
                  }`}>
                    <Bot className="w-4 h-4" />
                  </div>
                )}

                <div
                  className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-xs leading-relaxed ${
                    isUser
                      ? isMale
                        ? 'bg-[#8fa38e] text-white rounded-br-xs'
                        : 'bg-[#c89f83] text-white rounded-br-xs'
                      : 'bg-[#fbfaf7] text-[#4a4a48] rounded-bl-xs border border-[#8fa38e]/20'
                  }`}
                >
                  <div className="whitespace-pre-wrap">{msg.content}</div>
                  <div
                    className={`text-[9px] mt-1 text-right ${
                      isUser ? 'text-white/75' : 'text-[#999]'
                    }`}
                  >
                    {msg.timestamp}
                  </div>
                </div>

                {isUser && (
                  <div className="w-7 h-7 rounded-lg bg-[#555] text-white flex items-center justify-center shrink-0 mt-0.5 text-xs">
                    <User className="w-4 h-4" />
                  </div>
                )}
              </div>
            );
          })}

          {isLoading && (
            <div className="flex items-center gap-2 text-[#6d6d6b] text-xs pl-9">
              <RefreshCw className="w-3.5 h-3.5 animate-spin text-[#8fa38e]" />
              <span>Mestre de Calistenia pensando...</span>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input Box */}
        <div className="p-3.5 bg-[#fbfaf7] border-t border-[#8fa38e]/15">
          <form
            onSubmit={e => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="flex items-center gap-2"
          >
            <input
              id="input-coach-chat"
              type="text"
              placeholder="Pergunte sobre postura, regressões ou dieta..."
              value={inputText}
              onChange={e => setInputText(e.target.value)}
              disabled={isLoading}
              className="flex-1 text-xs px-3.5 py-2.5 bg-white rounded-xl border border-[#8fa38e]/20 focus:outline-none focus:ring-1 focus:ring-[#8fa38e] text-[#4a4a48]"
            />
            <button
              id="btn-send-coach-msg"
              type="submit"
              disabled={!inputText.trim() || isLoading}
              className={`p-2.5 rounded-xl text-white font-bold transition-all disabled:opacity-40 disabled:cursor-not-allowed shadow-2xs ${
                isMale ? 'bg-[#8fa38e] hover:bg-[#7e937d]' : 'bg-[#c89f83] hover:bg-[#b88f73]'
              }`}
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
