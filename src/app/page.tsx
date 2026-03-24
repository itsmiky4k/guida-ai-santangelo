"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { PANNELLI } from "@/data/pannelli";
import ChatModal from "@/components/ChatModal";

export default function Home() {
  const [chatOpen, setChatOpen] = useState(false);
  const [installPrompt, setInstallPrompt] = useState<Event | null>(null);
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("/sw.js").catch(console.error);
    }
    const handler = (e: Event) => { e.preventDefault(); setInstallPrompt(e); };
    window.addEventListener("beforeinstallprompt", handler);
    if (window.matchMedia("(display-mode: standalone)").matches) setIsInstalled(true);
    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  const handleInstall = async () => {
    if (installPrompt) {
      const p = installPrompt as Event & { prompt: () => void; userChoice: Promise<{ outcome: string }> };
      p.prompt();
      const { outcome } = await p.userChoice;
      if (outcome === "accepted") setIsInstalled(true);
      setInstallPrompt(null);
    } else {
      alert("Per installare su iPhone: tocca il pulsante Condividi → 'Aggiungi a schermata Home'");
    }
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400&family=Jost:wght@300;400;500&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #FFFFFF; font-family: 'Jost', sans-serif; color: #04002A; min-height: 100vh; }

        .header { background: #FFFFFF; padding: 24px 20px 20px; text-align: center; border-bottom: 1px solid rgba(28,117,187,0.2); position: sticky; top: 0; z-index: 100; }
        .header-logo { font-size: 10px; letter-spacing: 3px; text-transform: uppercase; color: rgba(4,0,42,0.35); margin-bottom: 6px; }
        .header-title { font-family: 'Cormorant Garamond', serif; font-size: 26px; font-weight: 500; color: #04002A; line-height: 1.2; }
        .header-dot { display: inline-block; width: 6px; height: 6px; border-radius: 50%; background: #1C75BB; margin: 0 8px; vertical-align: middle; }
        .header-subtitle { font-size: 12px; color: rgba(4,0,42,0.35); margin-top: 4px; font-weight: 300; letter-spacing: 0.5px; }

        .pannelli-grid { padding: 16px 16px 100px; display: flex; flex-direction: column; gap: 10px; }

        .pannello-card { background: rgba(4,0,42,0.03); border: 1px solid rgba(28,117,187,0.2); border-radius: 14px; overflow: hidden; text-decoration: none; display: flex; align-items: stretch; transition: all 0.2s; cursor: pointer; }
        .pannello-card:hover, .pannello-card:active { background: rgba(28,117,187,0.07); border-color: rgba(28,117,187,0.4); }
        .pannello-numero { width: 52px; flex-shrink: 0; display: flex; align-items: center; justify-content: center; font-family: 'Cormorant Garamond', serif; font-size: 28px; color: rgba(28,117,187,0.35); border-right: 1px solid rgba(28,117,187,0.1); }
        .pannello-body { padding: 14px 16px; flex: 1; }
        .pannello-titolo { font-family: 'Cormorant Garamond', serif; font-size: 18px; font-weight: 500; color: #04002A; line-height: 1.25; margin-bottom: 4px; }
        .pannello-sottotitolo { font-size: 12px; color: rgba(4,0,42,0.4); line-height: 1.5; font-weight: 300; }
        .pannello-arrow { width: 40px; flex-shrink: 0; display: flex; align-items: center; justify-content: center; color: rgba(28,117,187,0.4); }

        .bottom-bar { position: fixed; bottom: 0; left: 0; right: 0; background: rgba(255,255,255,0.97); backdrop-filter: blur(12px); border-top: 1px solid rgba(28,117,187,0.2); padding: 12px 20px; display: flex; gap: 10px; z-index: 100; }
        .btn-angelo { flex: 1; background: #1C75BB; border: none; border-radius: 12px; padding: 13px; color: #FFFFFF; font-family: 'Jost', sans-serif; font-size: 14px; font-weight: 500; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 8px; transition: all 0.2s; }
        .btn-angelo:hover { background: #1560a0; }
        .btn-install { background: rgba(4,0,42,0.04); border: 1px solid rgba(4,0,42,0.12); border-radius: 12px; padding: 13px 16px; color: rgba(4,0,42,0.45); font-family: 'Jost', sans-serif; font-size: 12px; cursor: pointer; white-space: nowrap; transition: all 0.2s; }
        .btn-install:hover { color: #04002A; border-color: rgba(4,0,42,0.25); }
      `}</style>

      <div className="header">
        <div className="header-logo">Progetto Sant'Angelo 4.0</div>
        <div className="header-title">Guida AI<span className="header-dot" />Santangelo</div>
        <div className="header-subtitle">Centro Visite · Santeramo in Colle</div>
      </div>

      <div className="pannelli-grid">
        {PANNELLI.map((pannello) => (
          <Link key={pannello.id} href={`/pannello/${pannello.id}`} className="pannello-card">
            <div className="pannello-numero">{pannello.numero}</div>
            <div className="pannello-body">
              <div className="pannello-titolo">{pannello.titolo}</div>
              {pannello.sottotitolo && (
                <div className="pannello-sottotitolo">{pannello.sottotitolo}</div>
              )}
            </div>
            <div className="pannello-arrow">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
            </div>
          </Link>
        ))}
      </div>

      <div className="bottom-bar">
        <button className="btn-angelo" onClick={() => setChatOpen(true)}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
          Chiedi ad Angelo
        </button>
        {!isInstalled && <button className="btn-install" onClick={handleInstall}>Installa App</button>}
      </div>

      {chatOpen && <ChatModal onClose={() => setChatOpen(false)} />}
    </>
  );
}
