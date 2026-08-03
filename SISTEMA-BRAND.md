# Sistema di brand — Rilievo Contract

Colori, caratteri e misure. Questo file è la fonte per tutto ciò che sta
**fuori** dal sito: slide, social, PDF, sottotitoli, biglietti da visita.

Dentro il sito la fonte è `src/index.css`, blocco `@theme`. Se un valore
cambia lì, va cambiato anche qui — e se i due divergono, ha ragione il CSS.

---

## Colori

| Nome | Esadecimale | RGB | A cosa serve |
|---|---|---|---|
| **Scuro** | `#1C1C1A` | 28, 28, 26 | Fondo dell'apertura, dei progetti, dei materiali. Colore del testo sul crema. |
| **Crema** | `#F8F5EF` | 248, 245, 239 | Fondo di tutte le sezioni chiare. Colore del testo sullo scuro. |
| **Oro** | `#B8954E` | 184, 149, 78 | L'accento. Filetti, numeri, stati attivi, passaggi del puntatore. |
| **Spento** | `#55524A` | 85, 82, 74 | Grigio caldo di servizio. Usato pochissimo. |
| **Bordo** | `#D9D2C4` | 217, 210, 196 | Filetti e separatori sul crema. |
| **Attesa** | `#E5DFD2` | 229, 223, 210 | Blocco pieno dove un'immagine non c'è ancora. |

### Le due regole che tengono in piedi la palette

**L'oro non è mai un riempimento.** Vive su un filetto da un pixel, su un
numero, su un bordo al passaggio del puntatore. Nel momento in cui diventa il
fondo di un pulsante, la pagina smette di sembrare progettata e comincia a
sembrare un modello con un tema dorato applicato sopra.

L'unica eccezione in tutto il sito è il pulsante di contatto che passa a oro
quando ci si passa sopra — e dura mezzo secondo.

**Il testo secondario è opacità, non un colore nuovo.** Non esiste un grigio
chiaro e un grigio medio: esiste il crema al 50% e il crema al 30%. Sei grigi
diversi sono il modo in cui muore una palette.

Le opacità realmente in uso, in ordine di frequenza:

| Uso | Valore |
|---|---|
| Testo secondario su crema | scuro al 40% |
| Testo secondario su scuro | crema al 50% |
| Testo terziario su scuro | crema al 40% e al 30% |
| Corpo lungo su crema | scuro al 70% |
| Filetti sullo scuro | crema al 15% |
| Bordi di pulsante sullo scuro | crema al 20% |

Fuori dal web, se lo strumento non gestisce l'opacità, questi sono i valori
già composti — calcolati, non stimati a occhio:

| Equivalente | Esadecimale |
|---|---|
| Scuro 70% su crema | `#5E5D5A` |
| Scuro 50% su crema | `#8A8884` |
| Scuro 40% su crema | `#A09E9A` |
| Crema 50% su scuro | `#8A8884` |
| Crema 40% su scuro | `#74736F` |
| Crema 30% su scuro | `#5E5D5A` |

Non è un caso che «scuro al 70% sul crema» e «crema al 30% sullo scuro» diano
lo stesso colore: sono la stessa miscela, guardata dai due lati. Se un giorno
questi numeri non tornano più, vuol dire che qualcuno ha cambiato uno dei due
colori di fondo.

---

## Caratteri

Due famiglie, entrambe da Google Fonts, entrambe gratuite anche per uso
commerciale (licenza SIL Open Font).

### Playfair Display — i titoli

Serif ad alto contrasto. Si usa **solo** per titoli, cifre e dichiarazioni.
Mai per il corpo del testo, mai per le etichette.

- Pesi in uso: **800** (extrabold) per i titoli, **700** (bold) per le cifre,
  **600** (semibold) per i sottotitoli
- Corsivo: solo nel titolo dell'apertura, dove esiste ancora nel codice
- Interlinea molto stretta: da 0,86 a 0,98. È la cosa che rende quei titoli
  riconoscibili — un Playfair a interlinea normale sembra un altro carattere

### Inter — tutto il resto

Sans neutro. Corpo, etichette, note, voci di menu, numeri di servizio.

- Pesi in uso: **400** (normale) per il corpo, **500** (medium) e **600**
  (semibold) per le voci in evidenza
- Interlinea larga sul corpo: da 1,7 a 1,75

### Le etichette in maiuscolo

Sono la firma tipografica del sito e vanno riprodotte esattamente:

- Inter, peso 400 o 500
- **Tutto maiuscolo**
- Spaziatura fra le lettere: **0,28em** — su un'etichetta larga, **0,42em**
- Corpo piccolo: 10-11 px

Senza quella spaziatura non sono la stessa cosa. È il dettaglio che fa
sembrare fatta bene un'etichetta di dieci pixel.

### Da caricare

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,500;0,600;0,700;0,800;1,500&display=swap" rel="stylesheet">
```

Ripiego se i font non arrivano: **Georgia** al posto di Playfair Display, il
sans di sistema al posto di Inter.

---

## Misure del testo

Sul sito ogni misura è fluida: cresce con la larghezza della finestra fra un
minimo e un massimo. Fuori dal web servono numeri fissi, quindi qui ci sono
tutti e due gli estremi — la colonna a 390 px è quella da usare per i social
verticali, quella a 1440 px per slide e desktop.

| Token | Telefono (390 px) | Desktop (1440 px) | Carattere | Dove si usa |
|---|---:|---:|---|---|
| `monumentale` | 44 px | 120 px | Playfair 800 | Titolo dell'apertura |
| `titolo` | 34 px | 74 px | Playfair 800 | Titoli di pagina e di capitolo |
| `titolo-medio` | 30 px | 54 px | Playfair 800 | Titoli di sezione |
| `cifra` | 32 px | 54 px | Playfair 700 | Numeri fuori scala |
| `dichiarazione` | 26 px | 49 px | Playfair 700 | Prima frase del manifesto |
| `dichiarazione-minore` | 20 px | 32 px | Playfair 700 | Frasi del manifesto, voci del menu |
| `sottotitolo` | 22 px | 27 px | Playfair 600 | Nomi delle fasi |
| `voce` | 18 px | 22 px | Playfair 600 | Contatti, titoli brevi |
| `corpo` | 15 px | 16 px | Inter 400 | Testo corrente |
| `corpo-minore` | 14 px | 14 px | Inter 400 | Testo secondario |
| `nota` | 12 px | 13 px | Inter 400 | Note e didascalie |
| `etichetta` | 10 px | 11 px | Inter 400/500 | Etichette maiuscole |

**Il corpo non scende mai sotto i 15 px.** Sotto quella misura non si legge su
un telefono, e non c'è ragione di design che lo giustifichi.

---

## Spazi

| Token | Telefono | Desktop | Cos'è |
|---|---:|---:|---|
| `spazio-sezione` | 64 px | 130 px | Sopra e sotto ogni sezione |
| `spazio-blocco` | 40 px | 72 px | Fra blocchi dentro una sezione |
| `spazio-elemento` | 24 px | 43 px | Fra elementi vicini |
| `gutter` | 20 px | 40 px | Margine laterale della pagina |

**Il gutter è uno solo.** Ogni sezione lo usa, e nessuna ha margini propri.
È la ragione per cui i bordi sinistri di tutta la pagina sono allineati.

---

## Come si riconosce il marchio

Se qualcuno dovesse rifare qualcosa senza avere questo file, sono cinque
cose:

1. **Fondo crema o fondo scuro pieno**, mai bianco e mai nero puro.
2. **Titoli serif giganti con interlinea strettissima**, spesso allineati a
   sinistra e mai centrati.
3. **Etichette maiuscole minuscolissime con spaziatura larghissima.**
4. **Un filetto dorato da un pixel** come unico accento colorato.
5. **Molto vuoto**, e il vuoto non è simmetrico.

---

## Il nome

**Rilievo Contract**, sempre così. Nei documenti web va marcato
`translate="no"` — insieme a *Contract* e *Sudlegno* — perché la traduzione
automatica del browser trasforma "Contract" in "Contratto" e il marchio
sparisce.

La casa madre si scrive **Sudlegno**, una parola sola.

Indirizzo, telefono e email stanno in `src/data/contatti.js` e vanno presi da
lì, non ricopiati a mano.
