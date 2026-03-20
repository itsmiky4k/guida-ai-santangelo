"use client";

import { useState, useEffect, useRef } from "react";
import { useParams, useRouter } from "next/navigation";
import { PANNELLI, CATEGORIE_LABEL } from "@/data/pannelli";
import ChatModal from "@/components/ChatModal";

const LINGUE = [
  { code: "it-IT", label: "IT" },
  { code: "en-US", label: "EN" },
  { code: "fr-FR", label: "FR" },
  { code: "de-DE", label: "DE" },
  { code: "es-ES", label: "ES" },
  { code: "ja-JP", label: "JA" },
  { code: "zh-CN", label: "ZH" },
];

export default function PannelloPage() {
  const params = useParams();
  const router = useRouter();
  const pannello = PANNELLI.find((p) => p.id === params.id);

  const [isPlaying, setIsPlaying] = useState(false);
  const [lingua, setLingua] = useState("it-IT");
  const [chatOpen, setChatOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const [testoTradotto, setTestoTradotto] = useState<string | null>(null);
  const [isTranslating, setIsTranslating] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    return () => {
      window.speechSynthesis?.cancel();
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  useEffect(() => {
    if (!pannello) return;
    fermaLettura();
    setTestoTradotto(null);
    setProgress(0);
  }, [lingua]);

  if (!pannello) {
    return (
      <div style={{ padding: 40, textAlign: "center", color: "#04002A", fontFamily: "Jost, sans-serif", background: "#FFFFFF", minHeight: "100vh" }}>
        Pannello non trovato.
        <br />
        <button onClick={() => router.push("/")} style={{ marginTop: 16, color: "#1C75BB", background: "none", border: "none", cursor: "pointer", fontSize: 14 }}>
          ← Torna alla guida
        </button>
      </div>
    );
  }

  const indice = PANNELLI.findIndex((p) => p.id === pannello.id);
  const precedente = indice > 0 ? PANNELLI[indice - 1] : null;
  const successivo = indice < PANNELLI.length - 1 ? PANNELLI[indice + 1] : null;

  const getTesto = () => testoTradotto ?? pannello.testo;

  const avviaLettura = async () => {
    let testo = testoTradotto;
    if (!testo && lingua !== "it-IT") {
      setIsTranslating(true);
      try {
        const res = await fetch("/api/traduci", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ testo: `${pannello.titolo}. ${pannello.testo}`, lingua }),
        });
        const data = await res.json();
        testo = data.traduzione;
        setTestoTradotto(testo);
      } catch {
        testo = pannello.testo;
      } finally {
        setIsTranslating(false);
      }
    } else if (!testo) {
      testo = pannello.testo;
    }

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(testo!);
    utterance.lang = lingua;
    utterance.rate = 0.95;

    const parole = testo!.split(" ").length;
    const durata = (parole / 150) * 60 * 1000;
    const inizio = Date.now();

    utterance.onstart = () => {
      setIsPlaying(true);
      setProgress(0);
      intervalRef.current = setInterval(() => {
        setProgress(Math.min(((Date.now() - inizio) / durata) * 100, 99));
      }, 200);
    };
    utterance.onend = () => {
      setIsPlaying(false);
      setProgress(100);
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
    utterance.onerror = () => {
      setIsPlaying(false);
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
    window.speechSynthesis.speak(utterance);
  };

  const fermaLettura = () => {
    window.speechSynthesis?.cancel();
    setIsPlaying(false);
    setProgress(0);
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  const toggleLettura = () => { if (isPlaying) fermaLettura(); else avviaLettura(); };
  const testoVisibile = getTesto();

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400&family=Jost:wght@300;400;500&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #FFFFFF; font-family: 'Jost', sans-serif; color: #04002A; min-height: 100vh; }

        .topbar { display: flex; align-items: center; justify-content: space-between; padding: 16px 20px; background: #FFFFFF; position: sticky; top: 0; z-index: 100; border-bottom: 1px solid rgba(28,117,187,0.15); }
        .back-btn { background: none; border: none; color: rgba(4,0,42,0.4); cursor: pointer; display: flex; align-items: center; gap: 6px; font-family: 'Jost', sans-serif; font-size: 13px; padding: 4px; transition: color 0.2s; }
        .back-btn:hover { color: #04002A; }
        .topbar-num { font-family: 'Cormorant Garamond', serif; font-size: 13px; color: rgba(4,0,42,0.25); letter-spacing: 1px; }

        .hero { padding: 28px 20px 24px; border-bottom: 1px solid rgba(28,117,187,0.1); }
        .pannello-cat { font-size: 10px; letter-spacing: 2px; text-transform: uppercase; font-weight: 500; margin-bottom: 10px; color: #1C75BB; }
        .pannello-title { font-family: 'Cormorant Garamond', serif; font-size: 32px; font-weight: 500; line-height: 1.15; margin-bottom: 6px; color: #04002A; }
        .pannello-sub { font-size: 14px; color: rgba(4,0,42,0.4); font-weight: 300; font-style: italic; }

        .audio-section { padding: 20px; border-bottom: 1px solid rgba(28,117,187,0.1); }
        .audio-label { font-size: 10px; letter-spacing: 2px; text-transform: uppercase; color: rgba(4,0,42,0.25); margin-bottom: 12px; }
        .lingue-row { display: flex; gap: 6px; margin-bottom: 16px; flex-wrap: wrap; }
        .lingua-btn { background: none; border: 1px solid rgba(4,0,42,0.12); border-radius: 6px; padding: 5px 10px; font-size: 11px; color: rgba(4,0,42,0.35); cursor: pointer; font-family: 'Jost', sans-serif; font-weight: 500; transition: all 0.15s; }
        .lingua-btn.active { border-color: #1C75BB; color: #1C75BB; background: rgba(28,117,187,0.07); }
        .play-row { display: flex; align-items: center; gap: 14px; }
        .play-btn { width: 52px; height: 52px; border-radius: 50%; border: none; cursor: pointer; display: flex; align-items: center; justify-content: center; background: #1C75BB; flex-shrink: 0; transition: transform 0.15s, opacity 0.15s; }
        .play-btn:hover { transform: scale(1.06); }
        .play-btn:disabled { opacity: 0.4; cursor: not-allowed; transform: none; }
        .progress-wrap { flex: 1; }
        .progress-bar-bg { height: 3px; background: rgba(4,0,42,0.08); border-radius: 2px; overflow: hidden; margin-bottom: 6px; }
        .progress-bar-fill { height: 100%; background: #1C75BB; border-radius: 2px; transition: width 0.2s linear; }
        .progress-label { font-size: 11px; color: rgba(4,0,42,0.35); font-weight: 300; }

        .testo-section { padding: 24px 20px; }
        .testo-label { font-size: 10px; letter-spacing: 2px; text-transform: uppercase; color: rgba(4,0,42,0.2); margin-bottom: 16px; }
        .testo-tradotto-badge { display: inline-block; font-size: 10px; letter-spacing: 1px; text-transform: uppercase; color: #1C75BB; border: 1px solid rgba(28,117,187,0.3); border-radius: 4px; padding: 2px 8px; margin-bottom: 14px; }
        .testo-corpo { font-size: 15px; line-height: 1.75; color: rgba(4,0,42,0.75); font-weight: 300; white-space: pre-wrap; }

        .nav-pannelli { display: flex; gap: 10px; padding: 20px; border-top: 1px solid rgba(28,117,187,0.1); margin-top: 8px; margin-bottom: 20px; }
        .nav-btn { flex: 1; background: rgba(28,117,187,0.05); border: 1px solid rgba(28,117,187,0.2); border-radius: 12px; padding: 14px; color: #04002A; cursor: pointer; font-family: 'Jost', sans-serif; font-size: 13px; display: flex; align-items: center; gap: 8px; transition: all 0.2s; text-decoration: none; }
        .nav-btn:hover { background: rgba(28,117,187,0.1); }
        .nav-btn.next { justify-content: flex-end; flex-direction: row-reverse; text-align: right; }
        .nav-btn-label { font-size: 10px; color: rgba(4,0,42,0.3); display: block; margin-bottom: 2px; letter-spacing: 1px; text-transform: uppercase; }

        .fab-chat { position: fixed; bottom: 24px; right: 20px; width: 54px; height: 54px; border-radius: 50%; background: #1C75BB; border: none; cursor: pointer; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 20px rgba(28,117,187,0.35); transition: transform 0.2s; z-index: 99; color: #FFFFFF; }
        .fab-chat:hover { transform: scale(1.08); }
      `}</style>

      <div className="topbar">
        <button className="back-btn" onClick={() => router.push("/")}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg>
          Guida
        </button>
        <div className="topbar-num">Pannello {pannello.numero} / {PANNELLI.length}</div>
        <div style={{ width: 60 }} />
      </div>

      <div className="hero">
        <div className="pannello-cat">{CATEGORIE_LABEL[pannello.categoria]}</div>
        <div className="pannello-title">{pannello.titolo}</div>
        {pannello.sottotitolo && <div className="pannello-sub">{pannello.sottotitolo}</div>}
      </div>

      <div className="audio-section">
        <div className="audio-label">Ascolto audio</div>
        <div className="lingue-row">
          {LINGUE.map((l) => (
            <button key={l.code} className={`lingua-btn ${lingua === l.code ? "active" : ""}`} onClick={() => setLingua(l.code)}>
              {l.label}
            </button>
          ))}
        </div>
        <div className="play-row">
          <button className="play-btn" onClick={toggleLettura} disabled={isTranslating}>
            {isTranslating ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round">
                <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83">
                  <animateTransform attributeName="transform" type="rotate" from="0 12 12" to="360 12 12" dur="1s" repeatCount="indefinite"/>
                </path>
              </svg>
            ) : isPlaying ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="#fff" stroke="none"><rect x="6" y="4" width="4" height="16" rx="1" /><rect x="14" y="4" width="4" height="16" rx="1" /></svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="#fff" stroke="none"><polygon points="5 3 19 12 5 21 5 3" /></svg>
            )}
          </button>
          <div className="progress-wrap">
            <div className="progress-bar-bg">
              <div className="progress-bar-fill" style={{ width: `${progress}%` }} />
            </div>
            <div className="progress-label">
              {isTranslating ? "Traduzione in corso…" : isPlaying ? "In riproduzione…" : progress === 100 ? "Lettura completata" : "Premi play per ascoltare"}
            </div>
          </div>
        </div>
      </div>

      <div className="testo-section">
        <div className="testo-label">Testo del pannello</div>
        {testoTradotto && lingua !== "it-IT" && (
          <div className="testo-tradotto-badge">{LINGUE.find(l => l.code === lingua)?.label} — Tradotto</div>
        )}
        <div className="testo-corpo">{testoVisibile}</div>
      </div>

      <div className="nav-pannelli">
        {precedente ? (
          <a href={`/pannello/${precedente.id}`} className="nav-btn">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg>
            <span><span className="nav-btn-label">Precedente</span>{precedente.titolo}</span>
          </a>
        ) : <div style={{ flex: 1 }} />}
        {successivo ? (
          <a href={`/pannello/${successivo.id}`} className="nav-btn next">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
            <span><span className="nav-btn-label">Successivo</span>{successivo.titolo}</span>
          </a>
        ) : <div style={{ flex: 1 }} />}
      </div>

      <button className="fab-chat" onClick={() => setChatOpen(true)}>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
      </button>

      {chatOpen && <ChatModal onClose={() => setChatOpen(false)} pannelloContesto={pannello.titolo} />}
    </>
  );
}
