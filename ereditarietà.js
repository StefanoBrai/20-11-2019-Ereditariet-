/*
Ogni oggetto in JavaScript ha un prototipo
Le funzioni sono oggetti
All'inizio del programma ci sono sempre due oggetti, object e un altro senza nome(1)

//Object literal --> hai direttamente il suo valore alla creazione

Object ha una proprietà chiamata prototype che collega l'altro oggetto (1) e quest'ultimo ha un puntatore
a primo ed è un costruttore
prototype --> equivale a new object --> l'oggetto è la madre di tutti gli oggetti
Quando Object crea un nuovo oggetto, questo eredita da (1)

Se voglio definire un nuovo metodo lavora dentro oggetto impiegati
    --> impiegati.prototype.lavora = ...;
*/

//////////////////////////////////////////////////////////////////////////////
//Costruttore Impiegato
//////////////////////////////////////////////////////////////////////////////
function Impiegato(nome) {
    this.nome = nome;   //il this ci va lo stesso, anche se le variabili hanno nomi diversi
}
//Accesso al prototipo
let prototipoImpiegato = Impiegato.prototype;
//Aggiunta metodo
prototipoImpiegato.lavora = function (numeroOre) {
    console.log(`${this.nome}: Che fatica lavorare per ${numeroOre} ore!`);
}

let i = new Impiegato("Pippo");
i.lavora(50);

//////////////////////////////////////////////////////////////////////////////
//Costruttore Programmatore
//////////////////////////////////////////////////////////////////////////////
function Programmatore(nome, linguaggioPreferito) {
    //this.nome = nome;
    Impiegato.call(this, nome);
    this.linguaggioPreferito = linguaggioPreferito;
}
//Creazione oggetto che diventerà prototype di Programmatore
let ip = new Impiegato("Gino");
ip.programma = function () {
    console.log(`${this.nome}: Che bello programare!`);
}
//Cambio prototype Programmatore
Programmatore.prototype = ip;

let pr = new Programmatore("Ciccio", "JavaScript");
//pr.nome = "Ciccio";
pr.lavora(3);
pr.programma();