$(document).ready(function() {
// JSnack2: Creare un array di nomi e chiedere all'utente due numeri. Creare un nuovo array con i valori che si trovano in una posizione compresa tra i due numeri inseriti dall'utente.

//creo array di nomi
const names = ['pippo', 'pluto', 'paperino', 'minnie', 'mickey', 'theo', 'franck', 'giggio', 'mario', 'carlo'];
const firstNumber = parseInt(prompt('Inserisci il primo numero'));
console.log(firstNumber);

const secondNumber = parseInt(prompt('Inserisci il secondo numero'));
console.log(secondNumber);

let minorValue;
let maxValue;

if (firstNumber<secondNumber) {
    minorValue = firstNumber;
    maxValue = secondNumber;
} else if (firstNumber > secondNumber) {
    minorValue = secondNumber;
    maxValue = firstNumber;
}

console.log('il min è ' + minorValue + ' ed il max è ' + maxValue );
// creo nuovo array che si trovano in una posizione  compresa tra i due numeri inseriti dall'utente.

console.log(names);
// var newArray = [];
// for (var i = (minorValue-1); i <= (maxValue-1); i++) {
//     newArray.push(names[i]);
//
// }
// console.log(newArray);
let firstName = names[names.minorValue];
console.log(firstName);
const newArray = [...names]
console.log(newArray);
});
