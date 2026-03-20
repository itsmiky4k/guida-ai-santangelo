"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { PANNELLI, CATEGORIE_LABEL } from "@/data/pannelli";
import ChatModal from "@/components/ChatModal";

export default function Home() {
  const [chatOpen, setChatOpen] = useState(false);
  const [filtro, setFiltro] = useState<string>("tutti");
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

  const categorie = Array.from(new Set(PANNELLI.map((p) => p.categoria)));
  const pannelliFiltrati = filtro === "tutti" ? PANNELLI : PANNELLI.filter((p) => p.categoria === filtro);

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

        .filtri { display: flex; gap: 8px; padding: 14px 20px; overflow-x: auto; scrollbar-width: none; border-bottom: 1px solid rgba(28,117,187,0.12); }
        .filtri::-webkit-scrollbar { display: none; }
        .filtro-btn { background: none; border: 1px solid rgba(4,0,42,0.15); border-radius: 20px; padding: 6px 14px; font-size: 12px; color: rgba(4,0,42,0.4); cursor: pointer; white-space: nowrap; font-family: 'Jost', sans-serif; transition: all 0.2s; flex-shrink: 0; }
        .filtro-btn.active { background: #1C75BB; border-color: #1C75BB; color: #FFFFFF; }

        .pannelli-grid { padding: 16px 16px 100px; display: flex; flex-direction: column; gap: 10px; }

        .pannello-card { background: rgba(4,0,42,0.03); border: 1px solid rgba(28,117,187,0.2); border-radius: 14px; overflow: hidden; text-decoration: none; display: flex; align-items: stretch; transition: all 0.2s; cursor: pointer; }
        .pannello-card:hover, .pannello-card:active { background: rgba(28,117,187,0.07); border-color: rgba(28,117,187,0.4); }
        .pannello-numero { width: 52px; flex-shrink: 0; display: flex; align-items: center; justify-content: center; font-family: 'Cormorant Garamond', serif; font-size: 28px; color: rgba(28,117,187,0.35); border-right: 1px solid rgba(28,117,187,0.1); }
        .pannello-body { padding: 14px 16px; flex: 1; }
        .pannello-categoria { font-size: 10px; letter-spacing: 1.5px; text-transform: uppercase; font-weight: 500; margin-bottom: 5px; color: #1C75BB; }
        .pannello-titolo { font-family: 'Cormorant Garamond', serif; font-size: 18px; font-weight: 500; color: #04002A; line-height: 1.25; margin-bottom: 4px; }
        .pannello-anteprima { font-size: 12px; color: rgba(4,0,42,0.4); line-height: 1.5; font-weight: 300; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
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

      <div className="filtri">
        <button className={`filtro-btn ${filtro === "tutti" ? "active" : ""}`} onClick={() => setFiltro("tutti")}>Tutti ({PANNELLI.length})</button>
        {categorie.map((cat) => (
          <button key={cat} className={`filtro-btn ${filtro === cat ? "active" : ""}`} onClick={() => setFiltro(cat)}>
            {CATEGORIE_LABEL[cat]}
          </button>
        ))}
      </div>

      <div className="pannelli-grid">
        {pannelliFiltrati.map((pannello) => (
          <Link key={pannello.id} href={`/pannello/${pannello.id}`} className="pannello-card">
            <div className="pannello-numero">{pannello.numero}</div>
            <div className="pannello-body">
              <div className="pannello-categoria">{CATEGORIE_LABEL[pannello.categoria]}</div>
              <div className="pannello-titolo">{pannello.titolo}</div>
              <div className="pannello-anteprima">{pannello.testo.slice(0, 100)}…</div>
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
