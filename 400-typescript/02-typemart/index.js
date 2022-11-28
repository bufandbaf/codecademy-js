"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const products_1 = require("./products");
let productName = "tote bag";
let shipping;
let taxPercent;
let taxTotal;
let total;
let shippingAddress = "575 Prague";
let product = products_1.default.filter((product) => {
  return product.name === productName;
})[0];
if (product.preOrder) {
  console.log("We will send you a message when your product ships.");
}
if (product.price > 25) {
  console.log("Your request is free of shipping charge.");
  shipping = 0;
} else {
  shipping = 5;
}
if (shippingAddress.match("New York")) {
  taxPercent = 0.1;
} else {
  taxPercent = 0.05;
}
taxTotal = product.price * taxPercent;
total = product.price + taxTotal + shipping;
console.log(`
Product:  ${product.name}
Address:  ${shippingAddress}
Price:    $${product.price}
Tax:      $${taxTotal.toFixed(2)}
Shipping: $${shipping.toFixed(2)}
Total:    $${total.toFixed(2)}
`);
