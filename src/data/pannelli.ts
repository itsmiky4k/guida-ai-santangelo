export type Categoria = "storia" | "architettura" | "arte" | "natura" | "spiritualita";

export interface Pannello {
  id: string;
  numero: number;
  titolo: string;
  sottotitolo?: string;
  testo: string;
  immagine?: string;
  immagineSecondaria?: string;
  categoria: Categoria;
}

export const pannelli: Pannello[] = [
  {
    id: "pannello-101",
    numero: 101,
    titolo: "Introduzione al Percorso",
    sottotitolo: "Progetto Sant'Angelo 4.0 e Benemeriti",
    testo: "[DA COMPLETARE CON DOCX]",
    immagine: "/images/pannello-101.jpg",
    categoria: "storia",
  },
  {
    id: "pannello-102",
    numero: 102,
    titolo: "Sant'Angelo del Lago Travato",
    sottotitolo: "Toponomastica longobarda",
    testo: "[DA COMPLETARE CON DOCX]",
    immagine: "/images/pannello-102.jpg",
    categoria: "storia",
  },
  {
    id: "pannello-103",
    numero: 103,
    titolo: "Viabilità Antica",
    sottotitolo: "Viaggiare nel passato",
    testo: "[DA COMPLETARE CON DOCX]",
    immagine: "/images/pannello-103.jpg",
    categoria: "storia",
  },
  {
    id: "pannello-104",
    numero: 104,
    titolo: "Geologia e Carsismo",
    sottotitolo: "Forme del rupestre",
    testo: "[DA COMPLETARE CON DOCX]",
    immagine: "/images/pannello-104.jpg",
    categoria: "natura",
  },
  {
    id: "pannello-105",
    numero: 105,
    titolo: "La Nave",
    sottotitolo: "Graffito medievale",
    testo: "[DA COMPLETARE CON DOCX]",
    immagine: "/images/pannello-105.jpg",
    categoria: "storia",
  },
  {
    id: "pannello-106",
    numero: 106,
    titolo: "La Chiesa",
    sottotitolo: "Architettura",
    testo: "[DA COMPLETARE CON DOCX]",
    immagine: "/images/pannello-106.jpg",
    categoria: "architettura",
  },
  {
    id: "pannello-107",
    numero: 107,
    titolo: "Grotte Naturali Dedicate all'Arcangelo Michele in Puglia",
    testo: "[DA COMPLETARE CON DOCX]",
    immagine: "/images/pannello-107.jpg",
    categoria: "spiritualita",
  },
  {
    id: "pannello-108",
    numero: 108,
    titolo: "L'Ingresso della Grotta",
    testo: "[DA COMPLETARE CON DOCX]",
    immagine: "/images/pannello-108.jpg",
    categoria: "architettura",
  },
  {
    id: "pannello-109",
    numero: 109,
    titolo: "Iscrizione di Bella Bella",
    sottotitolo: "XV secolo",
    testo: "[DA COMPLETARE CON DOCX]",
    immagine: "/images/pannello-109.jpg",
    categoria: "storia",
  },
  {
    id: "pannello-110",
    numero: 110,
    titolo: "Pavimentazione e Percorsi",
    sottotitolo: "Lumi e lucerne",
    testo: "[DA COMPLETARE CON DOCX]",
    immagine: "/images/pannello-110.jpg",
    categoria: "architettura",
  },
  {
    id: "pannello-111",
    numero: 111,
    titolo: "Pellegrini, Edifici e Luoghi di Accoglienza",
    sottotitolo: "Pastori e transumanza",
    testo: "[DA COMPLETARE CON DOCX]",
    immagine: "/images/pannello-111.jpg",
    categoria: "storia",
  },
  {
    id: "pannello-112",
    numero: 112,
    titolo: "Culto delle Acque",
    sottotitolo: "Graffiti e iscrizioni",
    testo: "[DA COMPLETARE CON DOCX]",
    immagine: "/images/pannello-112.jpg",
    categoria: "spiritualita",
  },
  {
    id: "pannello-113",
    numero: 113,
    titolo: "I Chirotteri",
    sottotitolo: "Tutela normativa e pipistrelli negli edifici",
    testo: "[DA COMPLETARE CON DOCX]",
    immagine: "/images/pannello-113.jpg",
    categoria: "natura",
  },
  {
    id: "pannello-114",
    numero: 114,
    titolo: "Discesa dello Spirito Santo e Cristo Pantocratore",
    sottotitolo: "Affreschi",
    testo: "[DA COMPLETARE CON DOCX]",
    immagine: "/images/pannello-114a.jpg",
    immagineSecondaria: "/images/pannello-114b.jpg",
    categoria: "arte",
  },
  {
    id: "pannello-115",
    numero: 115,
    titolo: "Fotomosaico della Discesa dello Spirito Santo",
    testo: "[DA COMPLETARE CON DOCX]",
    immagine: "/images/pannello-115.jpg",
    categoria: "arte",
  },
  {
    id: "pannello-116",
    numero: 116,
    titolo: "L'Arcangelo Michele che Trafigge il Drago",
    sottotitolo: "Vergine col Bambino",
    testo: "[DA COMPLETARE CON DOCX]",
    immagine: "/images/pannello-116.jpg",
    categoria: "arte",
  },
];
