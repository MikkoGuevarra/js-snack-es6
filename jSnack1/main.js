$(document).ready(function() {
// JSnack1: Creare un array di oggetti: ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. Stampare a schermo la bici con peso minore.

//creo oggetti bici
let bike = [
    {
        nome : 'Shava',
        peso : 7
    },
    {
        nome : 'Atala',
        peso : 3
    },
    {
        nome : 'Scott',
        peso : 6
    }
];
console.log(bike);


//inizializzo due variabili con peso minore e relativo nome
let minorWeight = bike[0].peso;
let minorName = bike[0].nome;

//ciclo array per ogni singlo oggetto
bike.forEach((thisBike) => {
    console.log(thisBike);
    const {nome, peso} = thisBike;
    console.log(nome, peso);
    if (peso  < minorWeight) {
        minorWeight = peso;
        minorName = nome;
        console.log(peso);
    }
});

console.log(`${minorName} ha un peso di ${minorWeight}kg ed è quella minore tra tutte`);

});
