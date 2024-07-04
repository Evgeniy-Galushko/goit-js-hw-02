'use strict';

function makeTransaction(quantity, pricePerDroid, customerCredits) {
  const orderPrice = pricePerDroid * quantity;
  if (orderPrice > customerCredits) {
    const note = "Insufficient funds!";
    return note
    console.log(note)
  } else {
    const noteIf = `You ordered ${quantity} droids worth ${orderPrice} credits!`
    return noteIf
    console.log(noteIf)
  }
}

// function makeTransaction(quantity, pricePerDroid, customerCredits) {
//   const orderPrice = pricePerDroid * quantity;
//   const note = orderPrice > customerCredits ? "Insufficient funds!" : `You ${quantity} droids worth ${orderPrice} credits!`;
//   return note
//   console.log(note);
// }



console .log(makeTransaction( 5 , 3000 , 23000 )); // "You ordered 5 droids worth 15000 credits!" 
console .log(makeTransaction( 3 , 1000 , 15000 )); // "You ordered 3 droids worth 3000 credits!" 
console .log(makeTransaction( 10 , 5000 , 8000 )); // "Insufficient funds!" 
console .log(makeTransaction( 8 , 2000 , 10000 )); // "Insufficient funds!" 
console .log(makeTransaction( 10 , 500 , 5000 )); // "You ordered 10 droids worth 5000 credits!"