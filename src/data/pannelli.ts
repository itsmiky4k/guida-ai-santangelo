export interface Pannello {
  id: string;
  numero: number;
  titolo: string;
  sottotitolo?: string;
  testo: string;
  immagine?: string;
  immagineSecondaria?: string;
}

export const PANNELLI: Pannello[] = [
  {
    id: "pannello-101",
    numero: 101,
    titolo: "Introduzione",
    sottotitolo: "Progetto Sant'Angelo 4.0 e Benemeriti",
    testo: `INTRODUZIONE

Nella Murgia, ma anche nel resto della Puglia e dell'Italia Meridionale, sono numerose le grotte dedicate a S. Angelo o a S. Michele, ritenute sinora manifestazione della diffusione del culto dell'Arcangelo Michele dopo la sua apparizione nella grotta di Monte Sant'Angelo sul Gargano nel VI secolo. A Santeramo, il santuario di Sant'Angelo è caratterizzato da una vasta cavità carsica con accesso da una chiesa medievale, oggi inglobata in un fabbricato rurale a uso silvo-pastorale. A partire dal 1971 don Ignazio Fraccalvieri fu il primo che, descrivendo l'invaso, illustrò il ciclo pittorico presente, segnalò la presenza di numerosi graffiti incisi sulle pareti della grotta e richiamò l'attenzione sul potenziale storico e culturale del sito. Nel 1981, al fine di garantire la conservazione del bene, il Ministero per i Beni Culturali e Ambientali acclarò il suo valore culturale con la seguente, seppur sintetica, motivazione:

"notevole documento di architettura medioevale e d'insediamento rurale dei secoli XIII-XV in provincia di Bari. Il complesso è costituito da alcuni corpi di fabbrica a piano terra coperta da volta a botte caratterizzati da un apparato murario in pietraura locale e filari rozzamente regolari, e da grotte sottostanti contenenti tracce di affreschi bizantineggianti".

Bisognerà tuttavia attendere i primi anni Duemila quando, grazie all'interesse dell'architetto Giuseppe Fiorentino, si costituì un gruppo di studio multidisciplinare a cui parteciparono studiosi come Roberto Caprara per l'archeologia e la paleografia, Franco dell'Aquila per la storia del territorio e del rupestre, Domenico Caragnano per lo studio degli affreschi, Luciano Rampino per la storia locale, Umberto Ricci per una puntuale documentazione fotografica e Giuseppe Fiorentino per lo studio delle strutture storiche architettoniche, i rilievi dell'invaso e una proposta di recupero e valorizzazione, inquadrata in un più ampio sistema territoriale nell'ambito dell'allora nascente Parco Nazionale dell'Alta Murgia. La ricognizione di studio e ricerca della grotta e del sito evidenziò una intensa frequentazione e una dedicazione cristiana della grotta, attestata in particolare dalle migliaia di iscrizioni databili dal V secolo d.C. sino al XV secolo, testimonianze di un culto micaelico di primaria importanza in Puglia, e un culto delle acque di stillicidio forse già in epoca preclassica. I contenuti scientifici del percorso espositivo derivano, in particolare, dalle suddette ricerche e dal supporto degli studiosi D. Caragnano, F. dell'Aquila, G. Fiorentino, oltre che dei soci tutti dell'Archeoclub e partner.

PROGETTO SANT'ANGELO 4.0

L'Ufficio Cultura del Comune di Santeramo in Colle, su mandato del Dirigente dott. Arturo Carone, nel maggio 2024 ha indetto il bando di co-progettazione e gestione del sito. A settembre 2024, il progetto vincitore è risultato essere il PROGETTO SANT'ANGELO 4.0 di Archeoclub d'Italia APS "don Ignazio Fraccalvieri" di Santeramo. Da ottobre 2024 sono state avviate tutte le fasi di ultimazione e propedeutiche all'apertura del centro visite, di concerto tra Archeoclub, ufficio Tecnico e ufficio Cultura di Santeramo, in una co-progettazione concreta e complementare tra varie figure e progettualità. Nella primavera del 2025, dopo ben 50 anni da quando si iniziò a discutere della sua importanza e dell'importanza di consegnare alla cittadinanza questo luogo di inestimabile valore storico e archeologico, il complesso di Sant'Angelo viene finalmente aperto al pubblico.

Rete di partenariato: ARCHEOCLUB D'ITALIA "DON IGNAZIO FRACCALVIERI" SANTERAMO IN COLLE (Capofila progetto) • ALIMURGIA • ANTROS EDITORE - MATHERA • ARCHEOCLUB "SANTE ZIRIONI" - ACQUAVIVA DELLE FONTI • ARCHEOGRUPPO E. JACOVELLI DI MASSAFRA • ASSOCIAZIONE LAMALUNGA SANTERAMO • ASSOCIAZIONE TURISTICA PRO LOCO UNPLI "G. TRITTO" SANTERAMO IN COLLE • COLLETTIVO LEN • MUSEO DEL TERRITORIO DI PALAGIANELLO • POLIEDRIKA APS - CASSANO DELLE MURGE • SNONO STUDIO SRL • TRIPECO

Sostenitori: PLASTIC FREE

Si ringrazia: SOPRINTENDENZA ARCHEOLOGIA, BELLE ARTI E PAESAGGIO PER LA CITTÀ METROPOLITANA DI BARI • PARCO NAZIONALE DELL'ALTA MURGIA — GEOPARCO UNESCO

BENEMERITI

Archeoclub Santeramo ricorda due uomini eccezionali, che con i loro studi e la loro dedizione hanno contribuito a riportare alla luce il santuario di Sant'Angelo a Santeramo.

Ignazio Fraccalvieri (1927-2013) — Nato a Santeramo in Colle (Bari). Fu ordinato sacerdote l'11 settembre del 1949; parroco della chiesa di S. Michele Arcangelo di Palese dal 1957. Zelante e premuroso nei vari compiti pastorali svolti, prima come parroco, nel 1980 venne incaricato presso la Basilica metropolitana di Bari come Canonico Penitenziere e poi come Confessore e Bibliotecario presso il Seminario Arcivescovile di Bari, Canonico del Capitolo Metropolitano Primaziale di Bari e Prelato d'onore di Sua Santità. Svelò, con impegno e passione, il valore storico, religioso e culturale del santuario di Sant'Angelo a Santeramo a partire dai primi anni Settanta. Seguì con entusiasmo il progredire degli studi e le attività dell'Archeoclub negli anni duemila.

Roberto Caprara (1930-2018) — Nato a Massafra (Taranto). Fu eclettico glottologo, archeologo, epigrafista, paleografo, storico dell'architettura rupestre, docente di archeologia medievale. Operò in Puglia, in Toscana e in Sardegna, ma rimase tenacemente legato alla Puglia studiando in modo innovativo le chiese rupestri e gli insediamenti dell'arco jonico-tarantino, rivalutandone la portata storica, economica e sociale. Studiò il santuario santermano a partire dal 2004, in particolare per la lettura e interpretazione dei graffiti e iscrizioni; i suoi studi hanno contribuito in modo decisivo a riconoscere la straordinaria portata storica del santuario di Sant'Angelo quale luogo di culto e di pellegrinaggio.`,
    immagine: "/images/pannello-101.jpg",
  },
  {
    id: "pannello-102",
    numero: 102,
    titolo: "Sant'Angelo del Lago Travato",
    sottotitolo: "Toponomastica longobarda",
    testo: `SANT'ANGELO DEL LAGO TRAVATO

Maggio 1136. Il giustiziere di Trani Urso Trabalia, dirime una questione fra il conte Roberto di Conversano e gli abitanti di Bitetto per il terratico, tracciandone i confini:

"Incipientes ab itinere quod venit a gruta de Musca quod item appellatur stratella et ferit ad viam crucem que venit a Matina et vadit Bitectum. Et antea modicum ferit ad viam. Que venit ab ipsa Matina et pergit Bitectum et sic vadit ipsa Stratella postquam separetur ab ipsa via Bitecti et ferit ad viam que venit a Mellito et vadit Materam et in antea quomodo pergit ipsa Stratella iniungitur ad viam que venit Itecto et vadit ad sanctum Eramum et relicta via ipsa acederunt per semitam unam subtus gruttam sancti Canionis et per ispam semitam venerunt ad lamam Stintini Longi que est inter fines Bitecti et sancti Nicandri et per ipsam lamam descederunt usque crucem sancti Angeli de Lacu travato. Et deinde euntes per lama Gravilionis perrexerunt viam que venit a Gravina et vadit ad sanctum Eramum et per eadem viam venerunt ad casale sancte Marie que dicitur de episcopo predicti Bitecti ubi vocatur palus de sepibus postea reversi supra Matinam Bitecti per viam unam que ferit ad parietem antiquam descenderunt ad lamam ubi est petra de sabino supra ipsam matinam Bitecti. A reversi sunt postea per muricem epsam et deduxerunt nos usque predicta Stratellam unde inceperunt."

È questo il documento più antico sinora noto che menziona per la prima volta non solo il santuario di Sant'Angelo di Lago Travato (sancti Angeli de Lacu travato), ma anche il monastero di Sanctum Eramum, evidentemente citati in quanto punti di riferimento noti a tutti nel territorio. Un successivo documento del 1274-1275 ricorda l'esistenza del monastero di S. Angeli de Lacutrabaccu, retto dall'abate fratre Petro. Oltre a testimoniare la vitalità dei luoghi, questi documenti evidenziano chiaramente i fenomeni di persistenza della toponomastica e della rete viaria.

TOPONOMASTICA E PRESENZA LONGOBARDA

Noto in epoca medievale come Sant'Angelo del Lago Travato, il toponimo di Sant'Angelo ricompare nell'anno 1700 come feudo demaniale della Terra di Acquaviva. Dalla fine del Settecento ai primi anni del Novecento la masseria viene denominata come Sant'Angelo in Criptis oppure Sant'Angelo Vecchio: ne troviamo traccia negli atti di compravendita e nella disputa che, a partire dal 1819, vide l'area contesa tra i territori di Santeramo e Cassano e si concluse solo nel 1911.

Nei dintorni di Sant'Angelo si segnala la presenza di toponimi, la cui etimologia rinvia a una probabile origine longobarda. Riferibili a postazioni militari e di presidio del territorio, anche in relazione alla loro altitudine:
• La Guardiola (da warda: posto di guardia in luogo elevato)
• Murgia Sgòlgore (da skulka: posto di osservazione)

Altri toponimi di origine longobarda:
• Corte Finocchia (da corte: piccolo insediamento agricolo fortificato)
• Salacornacchia (da sala: casa per la residenza patronale)

Fino al più esplicito:
• Masseria Parco del Longobardo`,
    immagine: "/images/pannello-102.jpg",
  },
  {
    id: "pannello-103",
    numero: 103,
    titolo: "Viabilità Antica",
    sottotitolo: "Viaggiare nel passato",
    testo: `VIABILITÀ ANTICA

La Grotta di S. Angelo è posta a ridosso del tratturello n. 93 Grumo-Santeramo, che a sua volta si immetteva nell'importante tratturo Melfi-Castellaneta: il percorso di quest'ultimo ricalca in gran parte quello della via Appia antica. Il tracciato del tratturo n. 93 Grumo-Santeramo, utilizzato per l'allevamento transumante, ricalcava la strada che collegava Bari a Matera attraverso il percorso più breve tra i due centri. È questa la strada seguita dal generale bizantino Maniace quando nel 1042, partendo da Bari raggiunse in una sola nottata la zona delle Matine ove fece prigionieri 200 contadini barbaramente uccisi sotto le mura della città di Matera scesa a patti con i normanni. Se nell'VIII-IX secolo Bari e Matera erano piccoli centri, nel corso dei secoli XI-XII erano ormai diventati i centri più importanti della Puglia Centrale. Infatti Matera, dopo l'abbandono di Metaponto nella metà del VI secolo, divenne nel Medioevo il centro più popolato della Murgia; Bari invece, dopo la distruzione di Canosa, accoglierà la sede del Catapano, rivestendo il ruolo di capitale dei domini bizantini in Puglia (Langobardia). Altra strada importante è la via Gravina-Santeramo, frequentata in epoca classica e protostorica, come testimoniano i ritrovamenti archeologici rinvenuti in prossimità del suo percorso.

VIAGGIARE NEL PASSATO

Nel medioevo ci si spostava principalmente a piedi; il mezzo di trasporto utilizzato era il cavallo, il carro, il biroccino, il mulo: già Varrone scriveva delle carovane di muli che dai centri rurali della Puglia trasportavano prodotti della terra verso i porti. Viaggi svolti spesso di notte, guidati dalle stelle, "ad itineris nocturni demonstrationem", dice Jamsilla. Anche la transumanza ha lasciato tracce evidenti con un intreccio di vie e tratturi, di un complesso di infrastrutture occorrenti ad ospitare, durante le soste, la grande massa di bestiame e gli stessi pastori. Per garantire la transumanza occorrono spazi liberi, spazi recintati (gli jazzi), il rifornimento dell'acqua (con pozzi e cisterne, adattamenti di laghetti naturali detti laghi e/o volani), ricoveri per le persone e santuari per lo spirito. Il paesaggio antico in cui si inserisce il Santuario di Sant'Angelo, a differenza di come lo percepiamo oggi, era un tempo occupato dalla selva. Malandrini, briganti e ribelli trovavano rifugio nella selva: le strade impervie e isolate erano il luogo ideale per depredare i viandanti, per razziare beni, derrate alimentari ed animali. Fondamentali erano le fonti d'acqua e i punti di riferimento ove fermarsi e certamente uno di questi era Sant'Angelo situato in un punto impervio tra i boschi della zona murgiana. L'area carsica è priva di idrografia superficiale, in quanto l'acqua viene assorbita velocemente dal suolo calcareo. Tuttavia anche in aree carsiche si trovano piccoli "laghi" localizzati in corrispondenza di depositi di terra rossa impermeabile, come il Lago Travato, citato in un documento del 1136.`,
    immagine: "/images/pannello-103.jpg",
  },
  {
    id: "pannello-104",
    numero: 104,
    titolo: "Geologia e Carsismo",
    sottotitolo: "Forme del rupestre",
    testo: `GEOLOGIA E CARSISMO

La grotta di Sant'Angelo a Santeramo si colloca, a scala regionale, in un'area (piattaforma) la cui origine è avvenuta in ambiente marino a seguito della deposizione di materiale carbonatico (CaCO3) derivato prevalentemente dall'accumulo di resti di organismi a scheletro calcareo o dalla precipitazione di carbonato ad opera dell'attività di organismi viventi (natura biogenica). Localmente, una porzione (subregione) di tale piattaforma, viene identificata con il termine di "Murge", un altopiano carsico, ovvero interessato da forme generate dal deflusso delle acque sia in superficie che in sotterraneo (carsismo) e originato da spostamenti e deformazioni (tettonica), iniziati nel Cretaceo superiore (epoca geologica tra 100,5-66 milioni di anni fa). Il materiale carbonatico della piattaforma delle Murge è suddiviso per i tempi in cui si è depositato e successivamente litificato in due corpi rocciosi (formazioni) denominati: il più antico Calcare di Bari (epoca Turoniano-Barremiano) e il più recente Calcare di Altamura (epoca Senoniano). Queste formazioni presentano fratture, livelli terrosi di "terra rossa" e forme carsiche, con calcare a grana finissima (micritico) o granulare e resti di organismi (fossili). Il territorio in cui si colloca la grotta ha geomorfologia collinare con un'altitudine media di 483 metri sul livello del mare. Qui la tettonica ha favorito la formazione di una piega concava verso l'alto (sinclinale), a sviluppo in direzione NW-SE e di fratture lungo un piano (faglie) a direzione WE e NW-SE, creando, nel complesso dell'ammasso roccioso calcareo, anche per la sua idrosolubilità, condizioni ideali per lo sviluppo di fenomeni carsici intensi che hanno generato cavità e vie preferenziali di deflusso delle acque (inghiottitoi). La permeabilità dell'acqua nell'ammasso roccioso è dovuta pertanto a fratturazione e carsismo, con accumulo della stessa in falde idriche profonde e in più livelli. Il carsismo superficiale (epigeo), favorito anche dalla presenza delle faglie, ha dato vita ad un reticolo fluvio-carsico (idrografia) privo di deflussi per buona parte dell'anno (effimero), sia per la scarsità delle precipitazioni che per le caratteristiche di permeabilità del substrato roccioso, nonché ad altre forme carsiche come le doline.

LE FORME DEL RUPESTRE TRA PUGLIA E MATERA

La geologia del suolo cambia al limitare delle Murge verso la piana delle Matine, dove l'emergere del banco calcarenitico, meno tenace, ha reso possibile lo scavo di ambienti ipogei e insediamenti, analoghi alle più evidenti manifestazioni del rupestre che caratterizzano Matera e le gravine dell'arco ionico tarantino. Qui chiese, case, frantoi, trappeti, stalle, luoghi di lavoro, tombe, hanno dato forma a interi villaggi generalmente lungo gli spalti di lame e gravine.

LA GROTTA DI SANT'ANGELO

Le caverne hanno sempre colpito l'immaginazione dell'uomo per il loro valore simbolico all'origine di numerosi culti, miti e leggende. Nelle grotte sono i più antichi santuari dell'umanità. Nell'immaginario collettivo medievale, la tenebrosità dell'antro e l'inaccessibilità del sito creava un'atmosfera di mistero, di impenetrabilità, di limite, oltre che fisico, psicologico e morale. La grotta di Sant'Angelo è una forma di carsismo nel sottosuolo (ipogeo), poco profonda dal piano campagna, che ha interessato il calcare di Altamura delle Murge. Per semplificare la descrizione possiamo suddividere la grotta in un corridoio principale che dall'ingresso discende verso ovest nella zona più profonda; da questo corridoio si dipartono, quasi ortogonalmente, altri tre corridoi: il primo si diparte dalla nicchia scolpita nella roccia e dopo nove metri circa curva sulla destra unendosi al corridoio parallelo, mentre a est si perde in una diramazione secondaria. Il secondo corridoio, parallelo al primo, termina in corrispondenza del laghetto. Il terzo più interno infine corre parallelo al precedente da cui è diviso da una barriera stallattitico-stalagmitica.`,
    immagine: "/images/pannello-104.jpg",
  },
  {
    id: "pannello-105",
    numero: 105,
    titolo: "La Nave",
    sottotitolo: "Graffito medievale",
    testo: `LA NAVE

Ad un pellegrino giunto da lontano — od in procinto di partire per una meta oltremare — è da attribuire questo graffito, che rappresenta con certezza un'imbarcazione di tradizione nordica e concettualmente altomedievale.

Il confronto è possibile, infatti, con le imbarcazioni rappresentate nella Tapisserie di Bayeux: si noti, in particolare, l'alta prua terminante a testa di drago, oltre che l'attrezzatura velica chiaramente riconducibile a quella giunta ai Normanni per eredità culturale dai Vichinghi.

Il graffito ha una dimensione di 10 cm di base e 5 cm di altezza.`,
    immagine: "/images/pannello-105.jpg",
  },
  {
    id: "pannello-106",
    numero: 106,
    titolo: "La Chiesa",
    sottotitolo: "Architettura",
    testo: `LA CHIESA

La chiesa, di pianta rettangolare, misura esternamente 8,39 m per 16,11 m. Il paramento murario si presenta apparecchiato con blocchi accuratamente squadrati, con minimi giunti di malta, diversamente dagli altri spazi del complesso architettonico. L'ingresso originario è situato a sud-ovest ove è stato inglobato nelle altre costruzioni. Il portale è attualmente privo di elementi decorativi, ma i risarcimenti della cortina muraria sovrastante con una apparecchiatura "a opera incerta" in contrasto con la sagoma in "opera regolare" lasciano pensare che la porta fosse sormontata da un protiro semicircolare o da un arco lunato. Superata la porta si entra nel nartece, tripartito da due arconi poggianti verso l'ingresso su due semipilastri e dalla parte opposta su due pilastri. Anche gli arconi, a tutto sesto e profilo leggermente rialzato, rivelano, nella loro perfetta stereotomia della forma, la stessa cura del paramento murario. Il riuso degli ambienti per finalità silvo-pastorali ha comportato la modifica della spazialità interna, in particolare mediante la separazione del nartece dall'aula. Nell'area presbiterale, sulla parete meridionale della chiesa, si apre l'ingresso dell'ipogeo. L'impianto ecclesiale è tipologicamente affine alle chiese bicellulari con cupola in asse, anche se una serie di indizi fanno ipotizzare la presenza di una sola cellula cupolata in corrispondenza del santuario e della discesa alla grotta. Alcune evidenti soluzioni formali come la pianta dell'abside, la grande attenzione rivolta alla stereotomia delle forme, l'impianto bicellulare, collocherebbero la chiesa di S. Angelo intorno alla metà del XII secolo. Interessanti confronti sono la chiesa di S. Valentino a Bitonto (XI sec), la chiesa di S. Rocco a Turi (XII sec.), la chiesa di Ognissanti a Valenzano (1080) o ancora la chiesa di Santa Margherita a Bisceglie (1198).`,
    immagine: "/images/pannello-106.jpg",
  },
  {
    id: "pannello-107",
    numero: 107,
    titolo: "Grotte Naturali in Puglia Dedicate all'Arcangelo Michele",
    testo: `GROTTE NATURALI IN PUGLIA DEDICATE ALL'ARCANGELO MICHELE

I Longobardi riservarono all'Arcangelo Michele una particolare devozione, tanto che il santuario micaelico di Monte Sant'Angelo, meta di un ininterrotto pellegrinaggio già a partire dal sec. V (ma il culto nella grotta era già esistente nel IV), divenne santuario nazionale dei Longobardi quando questi si insediarono nell'Italia meridionale.

Oltre al noto sacro speco di Monte Sant'Angelo, sono numerose in Puglia le grotte naturali dedicate a San Michele o Sant'Angelo censite anche al catasto grotte:

4 Pu — Putignano (BA): Grotta di San Michele a Monte Laureto
12 Pu — Castellana Grotte (BA): Grave di S. Giacomo (già S. Michele Arcangelo)
30 Pu — Minervino Murge (BT): Grotta di San Michele
202 Pu — Monte Sant'Angelo (FG): Grotta di San Michele
211 Pu — Cagnano Varano (FG): Grotta di San Michele
262 Pu — San Giovanni Rotondo (FG): Grotta dell'Angelo
392 Pu — Statte (TA): Grotta di Sant'Angelo
453 Pu — Lizzano (TA): Grotta di Sant'Angelo
491 Pu — Bari (BA): Grotta di Sant'Angelo di Cammarata
525 Pu — Ceglie Messapica (BR): Grotta di San Michele
653 Pu — Orsara di Puglia (FG): Grotta di San Michele
879 Pu — Santeramo in Colle (BA): Grotta di Sant'Angelo
1096 Pu — Massafra (TA): Grotta di San Michele a Varcauso
1232 Pu — Andria (BT): Grotta di Sant'Angelo a Gurgo
1588 Pu — Altamura (BA): Grotta di Sant'Angelo a Curtaniello
1874 Pu — Mottola (TA): Grotta di San Michele a Casalrotto

Certamente alcune furono frequentate già in epoca preclassica, come la Grotta di Sant'Angelo a Statte (TA); alcune sono state ricavate in primitive grotte naturali e successivamente ampliate, come la Grotta di San Michele a Orsara di Puglia; altre invece risultano distrutte come la Grotta di Sant'Angelo di Cammarata a Bari, abbattuta da un fronte di cava, o la Grave di San Giacomo a Castellana Grotte, prima consacrata a San Michele, che è ora inaccessibile in quanto adibita a ricettacolo di acque reflue.

Localizzazione delle grotte dedicate all'Arcangelo Michele su cartografia della Terra di Bari e Basilicata, attribuita a Fabio Magini di Giovanni Antonio, 1620.`,
    immagine: "/images/pannello-107.jpg",
  },
  {
    id: "pannello-108",
    numero: 108,
    titolo: "L'Ingresso della Grotta",
    testo: `L'INGRESSO DELLA GROTTA

Le caverne hanno sempre colpito l'immaginazione dell'uomo, per il loro valore simbolico all'origine di numerosi culti, miti e leggende. Non a caso, fin da epoca preistorica, nelle grotte sono stati collocati i più antichi santuari dell'umanità.

Nell'immaginario collettivo medievale, per la tenebrosità dell'antro e l'inaccessibilità del sito, si creava un'atmosfera di mistero e impenetrabilità, di limite, oltre che fisico, psicologico e morale.

La porta d'ingresso, in una chiesa costruita o scavata nella roccia, rappresenta la linea di demarcazione che separa lo spazio del sacro da quello del profano, ma anche la linea di passaggio tra queste due dimensioni.

Giovanni evangelista scrive: "Io sono la porta, se uno entra attraverso me, sarà salvo".

Oltrepassare la soglia costituisce di per sé un vero e proprio rito di passaggio, un rito iniziatico, che permette di entrare direttamente in contatto con il divino.

La porta di accesso alla grotta-santuario dell'Arcangelo Michele in territorio di Santeramo, in origine era decorata da un dipinto, racchiuso da una cornice rossa a sfondo giallo, di cui restano pochi frammenti: si riconosce sulla destra il corpo di un pesce.

Si tratta di un simbolo cristiano molto ricorrente, che deriva dall'acrostico IXTUS = pesce, contenente le iniziali della frase «Gesù Cristo figlio di Dio Salvatore».

In questo caso, considerando il complicato percorso devozionale della grotta, irto di difficoltà, potrebbe essere collegato all'iconografia di Giona inghiottito da un grosso pesce, ben documentata fin dall'età paleocristiana ed associata alla morte e alla resurrezione di Cristo. Matteo riporta che "Come Giona rimase nel ventre del pesce per tre giorni e tre notti, così il Figlio dell'Uomo rimarrà nel cuore della terra per tre giorni e tre notti".

Per questo l'ingresso alla grotta rappresenta l'inizio di un viaggio cosmico ed inizia nella "morte" dell'uomo peccatore, che entrando nell'antro discende nell'"oltretomba".`,
    immagine: "/images/pannello-108.jpg",
  },
  {
    id: "pannello-109",
    numero: 109,
    titolo: "L'Iscrizione di Bella Bella",
    sottotitolo: "XV secolo",
    testo: `L'ISCRIZIONE DI BELLA BELLA

Una donna di nome Bella Bella fu forse tra le ultime, nel XV secolo, a chiedere la protezione dell'Arcangelo nella grotta santermana. La sua invocazione, su sette righe, scritta in caratteri umanistici e collocabile nel XV secolo, recita:

"schivami dai mali me a nome bella bella"

Visto il lessico particolarmente curato poteva trattarsi di una donna di cultura, e considerando l'epoca, probabilmente una cortigiana proveniente da una grande città come Roma, Napoli o Venezia. Il graffito, esclusa la croce che si sovrappone parzialmente e che sarebbe collocabile ad epoca successiva, misura appena 6,5 cm di base per 9 cm di altezza.

A parete: apografo del graffito di Bella Bella.`,
    immagine: "/images/pannello-109.jpg",
  },
  {
    id: "pannello-110",
    numero: 110,
    titolo: "Pavimentazione e Percorsi",
    sottotitolo: "Lumi e lucerne",
    testo: `PAVIMENTAZIONE E PERCORSI

Probabilmente nel periodo di massimo splendore, tra l'XI e il XII secolo, il culto nella grotta giunge al culmine. All'esterno si costruisce una chiesa, si modifica il sistema d'ingresso alla cavità, si migliora l'itinerario all'interno della grotta. I percorsi interni vengono regolarizzati mediante la realizzazione di una pavimentazione, formata da lastre calcaree adeguatamente giustapposte, che elimina le asperità del fondo rendendo agevole il cammino. Attualmente queste lastre si presentano quasi completamente divelte, ma giacciono ancora accatastate in quantità nelle zone periferiche delle gallerie.
Anche gli ostacoli costituiti dalle grandi concrezioni rocciose presenti lungo i percorsi vengono abbattuti; i dislivelli più pericolosi vengono eliminati formando dei gradini mediante l'accurato taglio del banco roccioso.

LUMI E LUCERNE

Tra stalattiti, stalagmiti, colonne e pareti concrezionate, si può notare la presenza di nicchie scolpite nella roccia, di piani d'appoggio per lucerne e bicchieri vitrei per l'illuminazione, un certo numero di chiodi di varie dimensioni atti a sostenere lampade. Le macchie di nerofumo ne confermano la funzione.`,
    immagine: "/images/pannello-110.jpg",
  },
  {
    id: "pannello-111",
    numero: 111,
    titolo: "Pellegrini, Edifici e Luoghi di Accoglienza",
    sottotitolo: "Pastori e transumanza",
    testo: `PELLEGRINI, EDIFICI E LUOGHI DI ACCOGLIENZA

Tracce di murature e fondazioni, in particolare emerse durante i lavori nel lamione centrale, attestano la presenza di ulteriori costruzioni, antecedenti all'ultima fase silvo-pastorale.

Si trattava probabilmente di strutture destinate ad accogliere i monaci, ma anche pellegrini e potevano fungere da punto di sosta lungo i tratturi.

Un documento del 1274-1275 ricorda la presenza di un monastero, retto dall'abate Pietro, che versava alla diocesi di Gravina le decime dei proventi dovuti.

PASTORI E TRANSUMANZA

È probabile che a causare un progressivo declino del santuario sia stata la fondazione della nuova città di Altamura, voluta dall'imperatore Federico II di Svevia nel 1236, che portò all'abbandono della vecchia strada Bari-Matera che aveva determinato la fortuna di questo santuario, a vantaggio di un tracciato più diretto verso il nuovo centro. In seguito all'abbandono, la chiesa sovrastante andò in rovina; probabilmente a partire dal XVI-XVII secolo quanto restava delle sue murature fu inglobato nella costruzione di uno jazzo (recinto scoperto per la custodia delle greggi) composto da ampi e lunghi lamioni per ospitare, questa volta, pastori ed animali.

Le strutture murarie dell'ampio jazzo e i grandi ambienti coperti per proteggere il bestiame durante i periodi freddi e piovosi sono elementi peculiari delle masserie predisposte all'allevamento, correlati al fenomeno della transumanza in rapporto anche alla vicinanza del tratturello n. 93 Grumo-Santeramo.

L'acqua continua a essere fondamentale anche per le funzioni silvo-pastorali: un'enorme cisterna, posizionata a est dell'antica chiesa, raccoglie le acque piovane di ruscellamento e convogliate dai tetti, per abbeverare il bestiame.

La masseria del complesso di Sant'Angelo andò incontro ad un destino non diverso da quello di tante altre aziende rurali del territorio, rese obsolete e progressivamente abbandonate a causa delle nuove realtà economiche e produttive affermatesi nei primi decenni del Novecento. Come un fossile, a ricordo dell'antico culto, perdura nella topografia dei luoghi l'antico toponimo Sant'Angelo.`,
    immagine: "/images/pannello-111.jpg",
  },
  {
    id: "pannello-112",
    numero: 112,
    titolo: "Culto delle Acque",
    sottotitolo: "Graffiti e iscrizioni",
    testo: `IL CULTO DELLE ACQUE

Il culto dell'acqua è antico quanto l'uomo, al quale dovette apparire opera divina la presenza di acqua in grotte ubicate in aree povere o addirittura prive di acque superficiali.
Numerose sono le grotte nelle quali è attestato un culto delle acque preistorico, protostorico o di epoca classica, poi cristianizzato con dedicazione a San Michele.
La presenza delle acque nella grotta di Santeramo in Colle induce a pensare che in essa vi fosse praticato un intenso culto delle acque di stillicidio, tramite abluzioni. Usuale doveva essere anche il prelievo dell'acqua che i pellegrini accorsi portavano via con apposite borracce.
Il culto delle acque in grotta è ben documentato in numerosi santuari di Puglia e Basilicata: Rossano di Vaglio, Chiaromonte, Sant'Angelo al Raparo, San Michele a Monticchio, Moliterno, Venosa.
Ricordiamo anche il Sant'Angelo in Grotta (Isernia), ov'è un pozzo per la raccolta dell'acqua di stillicidio, e Sant'Angelo delle Ripe, detto anche Romitorio di San Michele, che è la più vasta grotta abruzzese dedicata al culto dell'Arcangelo e dalla quale provengono numerosi reperti preistorici.
L'acqua di stillicidio si raccoglieva non solo nel laghetto posto sul fondo del secondo corridoio, ma anche in una serie di vaschette alla base delle pareti. L'intensa frequentazione, attestata dalle centinaia di graffiti presenti, lasciano supporre che la grotta santermana fosse oggetto di interesse già in epoca classica o preclassica e che in essa vi fosse praticato un intenso culto delle acque di stillicidio, basato probabilmente sulla "fiducia" nelle acque "salutifere".
Il contatto con la roccia delle pareti, da cui stillava acqua sacra, avrebbe guidato il pellegrino lungo il suo percorso; alla roccia si sarebbe aggrappato per trovare stabilità e sicurezza in un percorso spesso scivoloso; sulla roccia avrebbe inciso il proprio nome o semplicemente una croce o un simbolo, a testimonianza del proprio passaggio o per invocare la protezione divina. Le pareti della grotta conservano numerosissime iscrizioni, molte delle quali sovrapposte l'una all'altra in maniera inestricabile, quasi che l'atto dello scrivere assolvesse la sua funzione di gesto rituale di dedica. La presenza di numerose zone delle pareti lisce, a causa evidentemente di un intenso contatto (il contatto delle superfici rocciose comporta da un lato la lisciatura delle stesse, dall'altro il deposito di grassi con conseguente alterazione della calcificazione propria del fenomeno carsico), lascia supporre che l'atto stesso di toccare la roccia fosse un vero e proprio gesto rituale che consentiva di ottenere una partecipazione materiale diretta di vicinanza ed appartenenza.

GRAFFITI E ISCRIZIONI

Di estremo interesse sono le centinaia di iscrizioni di croci, nomi, simboli, invocazioni, con cui i fedeli richiedevano la protezione divina o semplicemente desideravano lasciare una testimonianza della propria presenza in questo sacra grotta. Proprio la loro numerosità denota la grande frequentazione del sito. Il segno che più comunemente si trova qui, come in altri santuari di pellegrinaggio, è la croce. Rappresentava l'affermazione della identità cristiana del devoto, ma dobbiamo anche pensare al grado di alfabetizzazione: erano poche le persone in grado di leggere e scrivere. Per coloro la firma avveniva mediante l'apposizione di una croce anche nei documenti.

CROCI MONOGRAMMATICHE

Datare una croce graffita è una impresa assai ardua. Alcune, come le croci monogrammatiche presenti nell'antro, secondo la prevalente dottrina si affermerebbero a Roma nella seconda metà del IV secolo, ma in genere non s'incontra dopo il V secolo, fornendo un importante riferimento cronologico per il santuario di Santeramo.
Le croci monogrammatiche presenti nella grotta sono di estremo interesse in quanto, secondo la prevalente dottrina si affermerebbero a Roma nella seconda metà del IV secolo, ma in genere non s'incontrano dopo il V secolo, fornendo un importante riferimento cronologico per il santuario di Sant'Angelo a Santeramo in Colle.
Gli apografi dei graffiti qui riprodotti rappresentano solo una piccola selezione di quelli presenti sulle pareti della Grotta di Sant'Angelo. Sono normalmente di dimensioni estremamente ridotte e qui riproposti ingranditi fuori scala.

I NOMI E LE RICHIESTE DEI PELLEGRINI

Il pellegrino chiedeva la protezione divina. L'invocazione che più di tutte ricorre è mem(ento) d(omine): «Ricordati, Signore», presente anche nel corrispettivo greco, che attesta la frequentazione della grotta da parte di ellenofoni.

Ma non mancano anche richieste rivolte agli altri pellegrini, affinché preghino per lui o per i propri cari defunti:

«Ricordatevi di Mafredo (figlio) di Lupo e del nipote Eliseo. Sono presente io Nandolfo»
«Ricordatevi di Germano»
«Ricordatevi di Mamberto (figlio) di don Onorio»

Conosciamo ancora il nome di altri pellegrini: Colaus (ovvero Nicola) • Sabino • Vitale • Bella Bella`,
    immagine: "/images/pannello-112.jpg",
  },
  {
    id: "pannello-113",
    numero: 113,
    titolo: "I Chirotteri",
    sottotitolo: "Tutela normativa e pipistrelli negli edifici",
    testo: `I CHIROTTERI

I Chirotteri, meglio conosciuti come pipistrelli, rappresentano un terzo delle specie dei mammiferi italiani.
Occupano un ruolo ecologico fondamentale in quanto predatori notturni di insetti: un individuo è in grado di mangiare fino a 3000 insetti in una sola notte (circa 10 Kg di insetti per colonia ogni notte). I chirotteri sono gli unici Mammiferi alati e capaci di volare; l'ala consiste in una membrana cutanea tesa fra i lati del corpo e gli arti posteriore e anteriore, quest'ultimo estremamente allungato soprattutto in corrispondenza della mano. I chirotteri riposano a testa in giù; le dita delle zampe posteriori sono dotate di unghie molto acuminate, che permettono al pipistrello di agganciarsi a qualsiasi piccola asperità.
Si orientano nella notte utilizzando un sistema di ecolocazione: emettono ultrasuoni che, come un segnale sonar, rimbalzano sugli ostacoli e sulle prede tornando all'animale; in questo modo riescono a localizzare gli oggetti circostanti.
Nel Parco Nazionale dell'Alta Murgia sono presenti 13 specie, ripartite nelle famiglie dei Rinolofidi, Vespertilionidi, Miniotteridi e Molossidi. Anche nella grotta di Sant'Angelo sono presenti chirotteri della specie Rhinolophus ferrimequinum (ferro di cavallo maggiore).

LA TUTELA DEI CHIROTTERI

A causa delle alterazioni ambientali provocate dall'uomo sono divenuti uno dei gruppi faunistici più minacciati.
In Italia i Chirotteri, di tutte le specie, sono tutelati da Leggi nazionali e da Direttive e Convenzioni Internazionali.
È vietato abbattere, catturare, detenere e commerciare esemplari di qualsiasi specie di Chirottero italiano (artt. 21 e 30 della L. 157/92; art. III del Bat Agreement - EUROBATS; art. 6 della Convenzione di Berna; art. 8 del D.P.R. 357/1997 e ss.mm.). Le violazioni sono sanzionate penalmente in base all'art. 30 della L. 157/92 e alle successive integrazioni.
È inoltre vietato arrecare disturbo agli esemplari, in particolare durante le varie fasi del periodo riproduttivo e durante l'ibernazione, nonché alterare o distruggere i siti di rifugio (art. 6, cap. III della Convenzione di Berna; art. 8 del D.P.R. 357/97 modificato con D.P.R. 120/2003). Relativamente a quest'ultimo aspetto, sono citati i "siti di riproduzione", "di sosta" e "di riposo", e quindi tutte le tipologie di siti di rifugio utilizzate dai Chirotteri risultano interessate dalla disposizione.

LE SANZIONI

Per le violazioni a tali norme non sono previste sanzioni specifiche, ma comportamenti tali da causare un danno ambientale "significativo" possono essere sanzionati con riferimento alla normativa sul danno ambientale, che si applica a tutte le specie italiane di Chirotteri (Direttiva 2004/35/CE, "Responsabilità ambientale in materia di prevenzione e riparazione del danno ambientale" resa esecutiva in Italia dal D. Lgs. 3 aprile 2006, n. 152.).
Inoltre la Direttiva 2008/99/CE del 19 novembre 2008 "sulla tutela penale dell'ambiente", attuata col D.Lgs. n°121 del 7 luglio 2011, basata sulla Direttiva 2004/35/CE, istituisce un numero di reati gravi ai danni dell'ambiente e obbliga gli Stati membri a prevedere, nella loro legislazione nazionale, sanzioni penali in relazione a gravi violazioni delle disposizioni del diritto comunitario in materia di tutela dell'ambiente.

PIPISTRELLI ED EDIFICI STORICO-MONUMENTALI

Data l'importanza che gli edifici e i siti che fanno parte del patrimonio culturale rivestono per la conservazione dei Chirotteri, si sottolinea l'importanza che all'interno di tali ambiti venga garantita l'applicazione delle norme di tutela citate per i siti di rifugio. Il Codice dei beni culturali e del paesaggio (D.Lgs. 42/2004) non reca disposizioni specifiche relativamente ai Chirotteri, tuttavia, riconosce i valori naturali quali elementi che concorrono all'individuazione dei beni da tutelare.
Più in generale, legislazione ambientale e legislazione relativa al patrimonio culturale mirano al comune obiettivo fondamentale della conservazione del patrimonio "a beneficio delle generazioni presenti e future".
A fronte di tali motivazioni il Ministero dell'Ambiente e della Tutela del Territorio e del Mare e il Ministero per i Beni e le Attività Culturali hanno siglato nel 2006 un Protocollo biennale d'Intesa per la redazione di Linee guida per la conservazione dei chirotteri negli edifici. Questo protocollo è sfociato nella pubblicazione delle Linee guida per la conservazione dei chirotteri nelle costruzioni antropiche e la risoluzione degli aspetti conflittuali connessi.
Nel rispetto di tutte le misure di conservazione per i chirotteri di cui al Regolamento Regionale n. 06/2016, in particolare è fatto divieto di accedere alla grotta nel periodo tra l'1 novembre e il 31 marzo, in coincidenza con il periodo di ibernazione dei chirotteri, e tra il 15 maggio e il 15 agosto, in coincidenza con il periodo riproduttivo, salvo per l'attività di ricerca e studio debitamente autorizzate dall'Ente Gestore in quanto l'uso e la gestione del manufatto nella parte relativa alla grotta deve avvenire in modo da non arrecare disturbo alla chirotterofauna.`,
    immagine: "/images/pannello-113.jpg",
  },
  {
    id: "pannello-114",
    numero: 114,
    titolo: "La Discesa dello Spirito Santo e Cristo Pantocratore",
    sottotitolo: "Affreschi",
    testo: `LA DISCESA DELLO SPIRITO SANTO E CRISTO PANTOCRATORE

Varcando la porta d'accesso si nota in alto il soffitto a volta e, sopra il descensio, una grande lunetta a forma di catino absidale.
La volta e le pareti sono decorate dalla rappresentazione della Discesa dello Spirito Santo, mentre sulla grande lunetta troneggia il Cristo Pantocratore.
Il dipinto presenta uno stato di avanzato degrado, con estese lacune. Larghe fasce rosse si diramano verso gli apostoli seduti in numero di sei e sei ai due lati del Cristo Pantocratore.
Al centro della volta v'è lo Spirito Santo rappresentato da una colomba bianca, con aureola e le ali chiuse.
Più in basso, in posizione centrale, vi è il Cristo Pantocratore, seduto in trono sotto un baldacchino sormontato da due colonne scanalate di colore rosso e coperto da una tenda, la cui cimasa termina con una decorazione ornamentale a forma di giglio.
Il volto del Cristo ha subito dal 1975 la mutilazione della parte centrale con la distruzione degli occhi e delle arcate sopraccigliari, parte del naso; parte della guancia destra e parte sinistra dell'aureola. Sono ancora ben riconoscibili i capelli chiari e lisci, che si muovono all'altezza delle gote e scendono sul collo, parte della barba sinistra e la bocca.
La testa è circondata da un'aureola color ocra, crocifera, profilata da doppia linea: nera all'esterno e bianca all'interno.
Le lacune del volto del Pantocratore hanno messo in evidenza uno strato sottostante più antico, raffigurante la testa di dimensioni più grandi di una precedente raffigurazione del Cristo.
Il Cristo Pantocratore più recente indossa un manto azzurro, posto sulla spalla sinistra che lo avvolge in basso, coprendo la tunica manicata di color porpora, decorata allo scollo da una linea nera puntinata in bianco.
I piedi nudi calzano dei sandali aperti.
La mano sinistra regge un libro aperto in cui si leggono le seguenti 5 righe tratte dal Vangelo di Giovanni:

Ego Sum / Lux Mundi: «Io sono la luce del mondo, chi segue me non camminerà nelle tenebre».

Le parole leggibili per i primi tre righi presentano un ductus curato, con lettere in uso tra la seconda metà del XIII e gli inizi del XIV secolo. La caduta dell'intonaco ha messo in luce il palinsesto con libro del Cristo Pantocratore più antico, dove si può leggere solo parte del primo rigo: «Ego». I caratteri paleografici sono tipici della fine del XII e il XIII secolo.
Lo strato più recente della Discesa dello Spirito Santo e del Cristo Pantocratore deve essere collocato tra la fine del XIII e la prima metà del XIV secolo, mentre l'affresco sottostante è probabilmente attribuibile alla fine del XII - inizi del XIII secolo.
L'autore dell'ultimo lavoro pittorico ha riproposto, con poche varianti un'iconografia simile alla precedente. Si potrebbe ipotizzare che il complesso micro-clima presente all'interno della grotta-santuario, alterato probabilmente anche dal continuo via vai di pellegrini, avesse causato il deterioramento del precedente affresco. L'indagine archeometrica sugli strati pittorici ha evidenziato l'uso di pochi pigmenti comuni, quali l'ocra rossa e gialla, nerofumo e bianco di calce, tra loro abilmente mescolati, o sovrapposti, per produrre effetti cromatici e sfumature. Sorprende la presenza del prezioso cinabro, steso sulla superficie in ocra rossa corrispondente allo strato più antico del mantello di Cristo Pantocratore, che denoterebbe la ricchezza del sito all'epoca di realizzazione del ciclo pittorico. Alla destra e alla sinistra del Cristo Pantocratore si dispongono in gruppi di sei gli Apostoli, seduti su degli scanni coperti da drappi. Le aureole degli apostoli sono colpite dai raggi divini. Giovanni, il primo apostolo, alla sinistra di Cristo, indossa un mantello rosso e una tunica azzurra mentre i piedi calzano dei sandali leggeri. La mano sinistra stringe un rotolo chiuso, mentre la destra benedice alla greca.
La testa, circondata da un'aureola ocra profilata da un rigo nero, è caratterizzata da un volto giovanile e imberbe, occhi stretti e allungati verso le tempie con sopracciglia arcuate, naso lungo e sottile e bocca piccola. Lo sguardo è rivolto verso Cristo. La parte sinistra della testa e del volto è andata perduta nell'ultimo trentennio, mettendo in evidenza tracce di un dipinto sottostante.
Sull'aureola, ben impostata su un rigo orizzontale, v'è l'iscrizione latina che lo identifica: Ioannes E.

FOTOMOSAICO DE LA DISCESA DELLO SPIRITO SANTO E CRISTO PANTOCRATORE

A. Cristo Pantocratore (1970)
B. Cimasa del baldacchino
C. Colomba

Apostoli:
1. Giovanni
2. Giacomo
3. Simone
7. Pietro
8. Andrea`,
    immagine: "/images/pannello-114a.jpg",
    immagineSecondaria: "/images/pannello-114b.jpg",
  },
  {
    id: "pannello-115",
    numero: 115,
    titolo: "Fotomosaico della Discesa dello Spirito Santo",
    sottotitolo: "L'Arcangelo Michele che trafigge il drago",
    testo: `L'ARCANGELO MICHELE CHE TRAFIGGE IL DRAGO

Quasi in asse con la porta d'ingresso v'è una nicchia a fondo piano chiusa in alto da un arco a tutto sesto e profilo superiore rialzato, sorretta da semicolonne con capitello tronco-piramidale e pulvino "a libro". Questa nicchia, scavata nella roccia e disposta in posizione privilegiata, accoglie il dipinto dell'Arcangelo Michele, protettore della grotta. Ai lati si trovano sedili ricavati nel banco roccioso.
L'arco è decorato da una decorazione di fiori rossi su fondo giallo, contornati da una larga cornice rossa tra due più piccole bianche. La nicchia conserva tracce di un dipinto, monostrato, molto rovinato, contornato da una fascia rossa, bianca e nera. È possibile riconoscere l'immagine dell'Arcangelo Michele in posizione frontale, con le ali aperte, il globo nella mano sinistra e nella mano destra la lancia che trafigge la bocca del drago. Della testa, che è andata quasi del tutto perduta, resta la parte destra dell'aureola, realizzata mediante un compasso, e tracce dei capelli. Il braccio sinistro è alzato, la mano impugna una lancia che verticalmente si conficca nella bocca del drago dalla testa canina e il corpo serpentiforme. La nicchia volutamente è stata scavata con cura per l'alloggio del dipinto dell'Arcangelo Michele, protettore della grotta, e disposta in posizione privilegiata per i pellegrini. L'iconografia dell'Arcangelo Michele con postura centrale che trafigge il drago è scolpita su una formella inglobata nella muratura della chiesa-grotta del santuario di San Michele Arcangelo a Monte Sant'Angelo, datata alla fine dell'XI — inizi del XII secolo, e costituisce un modello che con pochissime variazioni si protrae fino al XIII — prima metà del XIV secolo.`,
    immagine: "/images/pannello-115.jpg",
  },
  {
    id: "pannello-116",
    numero: 116,
    titolo: "Vergine col Bambino fra l'Arcangelo Michele e S. Giovanni Battista",
    testo: `VERGINE COL BAMBINO FRA L'ARCANGELO MICHELE E S. GIOVANNI BATTISTA

Il dipinto, racchiuso da una triplice cornice (con larga fascia rossa all'esterno, bianca nel mezzo e nera all'interno), per le precarie condizioni non è di facile lettura.
La Vergine è seduta su un trono senza spalliera impreziosito da cuscini fusiformi di colore rosso, ornati alle estremità da galloni dorati. Indossa la tunica manicata azzurra con sopra il maphoprion rosso, che le avvolge il capo e scende lungo tutta la persona; con il braccio sinistro regge il Bambino, cui rivolge la mano destra; i piedi calzano delle scarpe rosse.
Il volto, leggermente reclinato a sinistra verso il figlio è ovale; appare segnato da lumeggiature che si addensano intorno agli occhi e seguono il movimento delle sopracciglia arcuate e delle palpebre; gli occhi a mandorla; il naso lungo, ben profilato e ricurvo in punta; la bocca piccola conferisce al viso un'aria dolce e mesta.
Il Bambino siede sul braccio sinistro della Madre, che lo sostiene con la mano; benedice con la mano destra e con la sinistra stringe un rotolo di pergamena chiuso.
Indossa una tunica rossa. Il viso è caratterizzato da corti capelli ricciolutì castani, orecchio ben modellato, fronte alta, bocca piccola, naso sottile, sopracciglia arcuate che conferiscono compostezza all'immagine.
San Giovanni Battista è rappresentato in piedi, posto di tre quarti e rivolto verso sinistra.
La testa, circondata dall'aureola, è di difficile interpretazione: è possibile intuire i capelli leggermente lunghi di colore bianco, la fronte alta. Il Precursore indossa una veste rossa manicata e un mantello azzurro; con la mano destra benedice e con la sinistra tiene un cartiglio aperto, purtroppo illeggibile.
Il piede destro calza un sandalo aperto del tipo romano.
Nelle parti in cui si nota la caduta di parte di affresco si intravede uno strato pittorico più antico, di difficile interpretazione.

L'Arcangelo Michele, identificato grazie ai resti della scritta esegetica in latino S(anctus) MI collocata nell'angolo superiore sinistro, è rappresentato in piedi, posto di tre quarti e rivolto verso destra; con la mano destra stringe le catenelle di un incensiere con cui asperge incenso sulla Madonna e il Bambino.

Un'immagine che contrasta con quella terrificante racchiusa nella nicchia, del «guerriero» che trafigge il drago. Ha deposto le armi, quasi a voler trasmettere un senso di fiducia e serenità al pellegrino che, ormai giunto alla fine del proprio percorso mistico, non avrebbe più temuto le tenebre. Questa visione segna l'uscita dall'antro buio della grotta.`,
    immagine: "/images/pannello-116.jpg",
  },
];
