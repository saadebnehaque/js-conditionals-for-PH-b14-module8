/**
 * binary --> two
 * Ternary --> three
 * 
 * 
 * condition ? if true : if false
*/

const age = 20;
// if (age >= 18) {
//     console.log('please vote');
// }
// else {
//     console.log('grow up kid');
// }

age >= 18 ? console.log('Please VOTE') : console.log('Grow Up Kid')


let price = 500;
const isLeader = true;

// if (isLeader) {
//     price = 0;
// }
// else {
//     price = price + 100;
// }

// console.log('price is: ', price);

price = isLeader ? 0 : price + 100;

console.log('Price now: ', price)