'use strict';


function getShippingCost(country){
switch (country) {
  case `China`:
    const priceChina = 100;
    const messageChina = `Shipping to ${country} will cost ${priceChina} credits`
    return messageChina
    
    break;
  case `Chile`:
    const priceChile = 250;
    const messageChile = `Shipping to ${country} will cost ${priceChile} credits`
    return messageChile
    
    break;
  case `Australia`:
    const priceAustralia = 170;
    const messageAustralia = `Shipping to ${country} will cost ${priceAustralia} credits`
    return messageAustralia
    
    break;
  case `Jamaica`:
    const priceJamaica = 120;
    const messageJamaica = `Shipping to ${country} will cost ${priceJamaica} credits`
    return messageJamaica
    
    break;
  
  default:
    const message = "Sorry, there is no delivery to your country"
    return message
    
}
}

console.log (getShippingCost("Australia")); // "Shipping to Australia will cost 170 credits" 
console.log (getShippingCost("Germany")); // "Sorry, there is no delivery to your country"
console.log (getShippingCost("China")); // "Shipping to China will cost 100 credits" 
console.log (getShippingCost("Chile")); // "Shipping to Chile will cost 250 credits" 
console.log (getShippingCost("Jamaica")); // "Shipping to Jamaica will cost 120 credits" 
console.log(getShippingCost("Sweden")); // "Sorry, there is no delivery to your country"


