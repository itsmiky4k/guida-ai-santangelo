export interface Pannello {
  id: string;
  numero: number;
  titolo: string;
  sottotitolo?: string;
  testo: string;
  immagine?: string; // path relativo in /public/images/
  categoria: "storia" | "architettura" | "arte" | "natura" | "spiritualita";
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// SOSTITUISCI QUESTI DATI CON I CONTENUTI REALI
// dei file Word che hai. Un oggetto per pannello.
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export const PANNELLI: Pannello[] = [
  {
    id: "01-introduzione",
    numero: 1,
    titolo: "La Grotta di Sant'Angelo in Criptis",
    sottotitolo: "Un crocevia di storia, fede e cultura",
    testo: `Tra antichi tratturi e lungo la storica via Bari-Matera, sorge la Grotta di Sant'Angelo a Santeramo. Da secoli, questa via simbolo della transumanza ha visto il passaggio di pellegrini, pastori e bestiame, dando vita a strutture che ancora oggi raccontano storie di devozione.

In un territorio quasi privo di sorgenti, la presenza di acqua nella grotta appariva come un miracolo divino. L'acqua di stillicidio, raccolta in naturali vasche e laghetti, era considerata miracolosa e veniva utilizzata nei rituali di abluzione.`,
    immagine: "/images/pannello-01.jpg",
    categoria: "storia",
  },
  {
    id: "02-architettura",
    numero: 2,
    titolo: "Architettura e Sacralità",
    sottotitolo: "La chiesa del XII secolo",
    testo: `Attorno alla grotta sorsero numerosi edifici destinati ad accogliere chi viaggiava lungo i tratturi. La chiesa di Sant'Angelo, risalente a metà del XII secolo, con la sua pianta bicellulare e la cupola in asse, testimonia il culmine del culto micaelico nel luogo.

Le modifiche apportate agli accessi e la pavimentazione dei percorsi interni ne esaltavano il valore mistico.`,
    immagine: "/images/pannello-02.jpg",
    categoria: "architettura",
  },
  {
    id: "03-iscrizioni",
    numero: 3,
    titolo: "Le Iscrizioni sulle Pareti",
    sottotitolo: "Voci dal passato",
    testo: `Le migliaia di iscrizioni incise sulle pareti della grotta, datate dal V al XV secolo, rappresentano una testimonianza unica della devozione popolare. I pellegrini lasciavano il loro segno pronunciando preghiere come "Memento Domine" e "ricordati di me Signore".

Un'affascinante iscrizione risale al XV secolo: "Schivami dai mali me a nome Bella Bella". I caratteri umanistici suggeriscono che una cortigiana di grandi città abbia lasciato la sua testimonianza.`,
    immagine: "/images/pannello-03.jpg",
    categoria: "arte",
  },
  {
    id: "04-transumanza",
    numero: 4,
    titolo: "La Via della Transumanza",
    sottotitolo: "Il tratturo Bari-Matera",
    testo: `La Grotta di Sant'Angelo sorgeva lungo uno dei principali tratturi pugliesi, la via Bari-Matera. Questi percorsi millenari erano le grandi arterie della transumanza — il movimento stagionale delle greggi tra le pianure invernali e i pascoli estivi.

Pastori, pellegrini e mercanti percorrevano questa via, trasformando la grotta in un punto di sosta spirituale e pratico lungo il cammino.`,
    immagine: "/images/pannello-04.jpg",
    categoria: "storia",
  },
  {
    id: "05-acqua-sacra",
    numero: 5,
    titolo: "L'Acqua Miracolosa",
    sottotitolo: "Il dono divino nella pietra",
    testo: `In un territorio quasi privo di sorgenti naturali, la presenza di acqua nella grotta era considerata un vero miracolo. L'acqua di stillicidio — quella che filtra lentamente attraverso la roccia — si raccoglieva in vasche naturali e piccoli laghetti interni.

I pellegrini utilizzavano quest'acqua nei rituali di abluzione, convinti del suo potere purificante e terapeutico. La sua presenza contribuì enormemente alla sacralità del luogo.`,
    immagine: "/images/pannello-05.jpg",
    categoria: "spiritualita",
  },
];

export const CATEGORIE_LABEL: Record<Pannello["categoria"], string> = {
  storia: "Storia",
  architettura: "Architettura",
  arte: "Arte e Iscrizioni",
  natura: "Natura",
  spiritualita: "Spiritualità",
};

export const CATEGORIE_COLORE: Record<Pannello["categoria"], string> = {
  storia: "#8B4513",
  architettura: "#5C6B73",
  arte: "#7B5EA7",
  natura: "#4A7C59",
  spiritualita: "#C8843A",
};
