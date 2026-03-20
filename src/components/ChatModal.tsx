"use client";

import { useState, useRef, useEffect } from "react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

interface ChatModalProps {
  onClose: () => void;
  pannelloContesto?: string;
}

export default function ChatModal({ onClose, pannelloContesto }: ChatModalProps) {
  const welcome = pannelloContesto
    ? `Ciao! Stai visitando il pannello "${pannelloContesto}". Hai domande su questo o su qualsiasi altro aspetto della Grotta di Sant'Angelo?`
    : "Benvenuto! Sono Angelo, la tua guida virtuale. Come posso aiutarti?";

  const [messages, setMessages] = useState<Message[]>([{ role: "assistant", content: welcome }]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
    inputRef.current?.focus();
  }, [messages]);

  const send = async (text: string) => {
    if (!text.trim() || isLoading) return;
    const updated = [...messages, { role: "user" as const, content: text }];
    setMessages(updated);
    setInput("");
    setIsLoading(true);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: updated }),
      });
      const data = await res.json();
      if (data.message) setMessages([...updated, { role: "assistant", content: data.message }]);
    } catch {
      setMessages([...updated, { role: "assistant", content: "Errore di connessione. Riprova." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <style>{`
        .modal-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.75); z-index: 200; display: flex; align-items: flex-end; }
        .modal-panel { width: 100%; height: 75vh; background: #04002A; border-radius: 20px 20px 0 0; border-top: 1px solid rgba(28,117,187,0.25); display: flex; flex-direction: column; animation: slide-up 0.3s cubic-bezier(0.34,1.56,0.64,1); }
        @keyframes slide-up { from { transform: translateY(100%); } to { transform: translateY(0); } }
        .modal-handle { width: 36px; height: 4px; background: rgba(255,255,255,0.12); border-radius: 2px; margin: 12px auto 0; flex-shrink: 0; }
        .modal-header { padding: 14px 20px 12px; display: flex; align-items: center; justify-content: space-between; border-bottom: 1px solid rgba(28,117,187,0.12); flex-shrink: 0; }
        .modal-title { font-family: 'Cormorant Garamond', serif; font-size: 18px; color: #FFFFFF; }
        .modal-close { background: none; border: none; color: rgba(255,255,255,0.35); cursor: pointer; padding: 4px; transition: color 0.15s; }
        .modal-close:hover { color: #FFFFFF; }
        .modal-msgs { flex: 1; overflow-y: auto; padding: 16px; display: flex; flex-direction: column; gap: 10px; scrollbar-width: none; }
        .modal-msgs::-webkit-scrollbar { display: none; }
        .msg-bubble { max-width: 85%; padding: 10px 14px; border-radius: 14px; font-size: 14px; line-height: 1.55; white-space: pre-wrap; font-family: 'Jost', sans-serif; font-weight: 300; }
        .msg-ai { background: rgba(28,117,187,0.1); border: 1px solid rgba(28,117,187,0.2); color: rgba(255,255,255,0.85); align-self: flex-start; border-bottom-left-radius: 4px; }
        .msg-user { background: #1C75BB; color: #FFFFFF; align-self: flex-end; border-bottom-right-radius: 4px; }
        .typing { display: flex; gap: 4px; align-items: center; padding: 12px 14px; background: rgba(28,117,187,0.1); border: 1px solid rgba(28,117,187,0.2); border-radius: 14px; border-bottom-left-radius: 4px; align-self: flex-start; }
        .dot { width: 5px; height: 5px; border-radius: 50%; background: #1C75BB; animation: bounce 1.2s ease-in-out infinite; }
        .dot:nth-child(2) { animation-delay: 0.2s; }
        .dot:nth-child(3) { animation-delay: 0.4s; }
        @keyframes bounce { 0%,60%,100% { transform: translateY(0); opacity: 0.4; } 30% { transform: translateY(-4px); opacity: 1; } }
        .modal-input-area { padding: 12px 16px; border-top: 1px solid rgba(28,117,187,0.12); display: flex; gap: 8px; align-items: center; flex-shrink: 0; }
        .modal-input { flex: 1; background: rgba(255,255,255,0.05); border: 1px solid rgba(28,117,187,0.2); border-radius: 22px; padding: 10px 16px; color: #FFFFFF; font-family: 'Jost', sans-serif; font-size: 14px; outline: none; transition: border-color 0.15s; }
        .modal-input:focus { border-color: #1C75BB; }
        .modal-input::placeholder { color: rgba(255,255,255,0.2); }
        .modal-send { width: 40px; height: 40px; border-radius: 50%; background: #1C75BB; border: none; cursor: pointer; display: flex; align-items: center; justify-content: center; flex-shrink: 0; transition: opacity 0.15s; color: #FFFFFF; }
        .modal-send:disabled { opacity: 0.3; cursor: not-allowed; }
      `}</style>

      <div className="modal-overlay" onClick={(e) => e.target === e.currentTarget && onClose()}>
        <div className="modal-panel">
          <div className="modal-handle" />
          <div className="modal-header">
            <div className="modal-title">Angelo</div>
            <button className="modal-close" onClick={onClose}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
            </button>
          </div>
          <div className="modal-msgs">
            {messages.map((m, i) => (
              <div key={i} className={`msg-bubble ${m.role === "assistant" ? "msg-ai" : "msg-user"}`}>{m.content}</div>
            ))}
            {isLoading && <div className="typing"><div className="dot" /><div className="dot" /><div className="dot" /></div>}
            <div ref={endRef} />
          </div>
          <div className="modal-input-area">
            <input ref={inputRef} className="modal-input" value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => e.key === "Enter" && send(input)} placeholder="Fai una domanda…" disabled={isLoading} />
            <button className="modal-send" onClick={() => send(input)} disabled={!input.trim() || isLoading}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" /></svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
