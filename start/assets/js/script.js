/*
REGOLE
- Le risposte vanno scritte in JavaScript sotto ogni commento.
- Puoi testare aprendo index.html nel browser e guardando la console (DevTools).
- In alternativa: nel terminale, `node script.js`.
- Cerca solo cose non viste a lezione. Tutto il necessario è già stato spiegato stamattina.
*/

/* ESERCIZIO 1 — Oggetto persona
   Crea un oggetto 'persona' con: nome, cognome, eta, citta.
   Stampa: 'Mario Rossi, 25 anni, vive a Roma.'
*/
const persona = {
  nome: "Mario",
  cognmome: "Rossi",
  eta: 25,
  citta: "Roma",
};

console.log(
  `${persona.nome} ${persona.cognmome}, ${persona.eta} anni, vive a ${persona.citta}`,
);

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 2 — Aggiungi e rimuovi
   Sull'oggetto 'persona': aggiungi 'email', poi rimuovi 'eta'.
   Stampa l'oggetto risultante.
*/

persona.email = "mario.rossi@gmail.com";
console.log(persona.email);

delete persona.eta;
console.log(persona);

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 3 — Oggetto annidato
   Oggetto 'utente' con una proprietà 'indirizzo' (oggetto con via, citta, cap).
   Stampa solo il CAP con dot notation.
*/

const utente ={
   nome: "Matteo",
   indirizzo: {
      via: "Largo Santo Stefano",
      citta: "Anguillara Sabazia",
      cap: "00061",
   }
}

console.log(utente);
console.log(utente.indirizzo.cap);

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 4 — Bracket dinamica
   Sull'oggetto 'persona', variabile chiave = 'nome'.
   Stampa il valore con bracket notation usando la variabile chiave.
*/

const key = "nome"; 
console.log(persona[key]); //Legge prima il valore della variabile key = "nome" e poi accede a persona.nome

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 5 — Numero più grande
   Tre numeri a, b, c.
   Con if/else if, stampa il più grande. Se pareggio al massimo, stampa 'Pareggio'.
*/

let a = 65;
let b = 84;
let c = 36;

if (a > b && a > c) {
   console.log(`Il numero maggiore è: ${a}`);
} else if(b > c && b > a){
   console.log(`Il numero maggiore è: ${b}`);
} else if (c > a && c > b) {
   console.log(`Il numero maggiore è: ${c}`);
} else if (a === b && a === c && b === c){
   console.log("Pareggio");
}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 6 — E-commerce: spedizione
   Variabile 'totale'.
   Se totale >= 50 spedizione gratuita, altrimenti 9.90.
   Stampa: 'Totale carrello: 35€ — Spedizione: 9.90€ — Totale finale: 44.90€'
   Risolvi una volta con if/else e una volta con ternario.
*/

let total;
total = 49;
let shipping;
shipping = 9.90;

if (total >= 50) {
   console.log("Spedizione gratuita");
} else {
   console.log(`Totale carrello: ${total}€ — Spedizione: ${shipping}€ — Totale finale: ${total + shipping}€`);
}

// const ordine = total >= 50 ?"Spedizione gratuita" :

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 7 — typeof check
   Crea un array con 3 valori diversi (es. [42, 'ciao', true]).
   Con un for + if, per ogni elemento stampa 'x è un numero' o 'x non è un numero'.
*/

const array = [15, "Giuseppe", false];
console.log(array);

/* SCRIVI QUI LA TUA RISPOSTA */
/* ESERCIZIO 8 — Array dei numeri
   Array vuoto. Aggiungi 1..5 con push. Aggiungi 0 all'inizio con unshift.
   Stampa array e length.
*/

const numeri = [];
numeri.push(1, 2, 3, 4, 5);
console.log(numeri);

numeri.unshift(0);
console.log(numeri);
console.log(numeri.length);


/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 9 — Carrello con splice
   Array ['Penna', 'Quaderno', 'Zaino', 'Astuccio'].
   Con splice: rimuovi 'Quaderno', poi inserisci 'Diario' al suo posto.
   Stampa dopo ogni operazione.
*/

const carrello = ["Penna", "Quaderno", "Zaino", "Astuccio"];
console.log(carrello);
carrello.splice(1, 1);
console.log(carrello);
carrello.splice(1, 0, "Diario")
console.log(carrello);

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10 — Cerca un articolo
   Array prodotti = ['Penna', 'Quaderno', 'Zaino'].
   cercato = 'Zaino'.
   Con includes: stampa 'Zaino è in carrello: true'.
   Con indexOf: stampa la posizione, o 'Non in carrello'.
*/

const prodotti = ['Penna', 'Quaderno', 'Zaino'];
const cercato = "Zaino";
console.log(`${cercato} è nel carrello: ${prodotti.includes(cercato)}`);
console.log(prodotti.indexOf(cercato));


/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 11 — Lista utenti
   Array utenti di 3 oggetti { nome, eta }.
   Con un for, stampa ogni utente: 'Mario (25 anni)'.
   Aggiungi console.table(utenti) alla fine.
*/

const utenti = [
   {nome: "Matteo", eta: 23},
   {nome: "Giulia", eta: 40},
   {nome: "Luca", eta: 35},
]

for (let i = 0; i < array.length; i++) {
      console.log(utenti[i]);  
}
console.table(utenti);

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 12 — Inventario disponibili
   Array prodotti di 4 oggetti { nome, prezzo, disponibile }.
   Con for, per ogni prodotto:
   - disponibile && prezzo < 10 → 'OFFERTA: nome (prezzo€)'
   - disponibile && prezzo >= 10 → 'nome — prezzo€'
   - !disponibile → 'nome — esaurito'
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* --EXTRA-- ESERCIZIO 13 — Reverse manuale
   Array [1, 2, 3, 4, 5].
   Nuovo array 'inverso', riempilo con un for (dall'ultimo al primo) usando push.
   Stampa 'inverso'.
   Vincolo: niente metodo .reverse() di JavaScript.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
