# Guida AI Santangelo
## PWA per i visitatori del Centro Visite · Progetto Sant'Angelo 4.0

App mobile installabile (PWA) con pannelli espositivi, riproduzione vocale multilingua e chat con Angelo.

---

## Setup locale

```bash
npm install
cp .env.example .env.local
# inserisci ANTHROPIC_API_KEY in .env.local
npm run dev
```

Apri http://localhost:3000

---

## Aggiungere i contenuti reali dei pannelli

Apri `src/data/pannelli.ts` e modifica l'array `PANNELLI`.
Per ogni pannello espositivo reale, aggiungi un oggetto:

```typescript
{
  id: "01-nome-pannello",        // slug unico, senza spazi
  numero: 1,                     // numero progressivo
  titolo: "Titolo del pannello", // dal file Word
  sottotitolo: "Sottotitolo",    // opzionale
  testo: `Testo completo...`,    // copia dal file Word
  immagine: "/images/nome.jpg",  // metti l'immagine in /public/images/
  categoria: "storia",           // storia | architettura | arte | natura | spiritualita
},
```

---

## Aggiungere le immagini

Metti i file immagine dei pannelli in `public/images/`:
- Formato consigliato: JPG, max 500KB per immagine
- Nome file: `pannello-01.jpg`, `pannello-02.jpg`, ecc.

Per le icone PWA, aggiungi in `public/icons/`:
- `icon-192.png` (192×192px)
- `icon-512.png` (512×512px)
Usa il logo della grotta come base.

---

## Deploy su Vercel

```bash
git init
git add .
git commit -m "feat: init Guida AI Santangelo"
git remote add origin https://github.com/itsmiky4k/guida-ai-santangelo.git
git branch -M main
git push -u origin main
```

Su Vercel: importa il repo, aggiungi `ANTHROPIC_API_KEY` nelle variabili d'ambiente, deploy.

---

## QR Code per l'ingresso

Dopo il deploy, il QR code deve puntare a:
`https://guida-ai-santangelo.vercel.app`

Genera il QR su qr-code-generator.com e stampalo in formato A5 da affiggere all'ingresso del Centro Visite.

---

## Stack
- Next.js 15 · React 19 · TypeScript
- Web Speech API (TTS nativa, gratuita, 7 lingue)
- Claude claude-sonnet-4-5 via Anthropic SDK
- PWA con manifest e icone
