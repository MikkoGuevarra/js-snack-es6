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

if (firstNumber < secondNumber) {
    minorValue = firstNumber;
    maxValue = secondNumber;
} else if ( firstNumber > secondNumber) {
    minorValue = secondNumber;
    maxValue = firstNumber;

}
console.log('the minor is: ' + minorValue);
console.log('the max is: ' + maxValue);
const newArray = names.filter((element, index) => {
    return minorValue <= index && maxValue >= index;


    // console.log(newArray);



});
// console.log(`the old array is ${names`);
// console.log(`the new array is ${newArray}`);
});
