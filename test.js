

function findFirstNumberIndex(str) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] >= '0' && str[i] <= '9') {
      return i;
    }
  }
  return -1;
}

console.log(findFirstNumberIndex("AbCef4hij"));




function getAsciiValue(char) {
  if (typeof char !== "string" || char.length !== 1) {
    return -1;
  }

  return char.charCodeAt(0);
}


console.log(getAsciiValue("b")); 




const cart = [
  { name: "Arsenal cap", price: 20, quantity: 2 },
  { name: "Arsenal Mug", price: 25, quantity: 1 },
  { name: "Arsenal Jersey", price: 5, quantity: 4 }
];

let total = 0;

for (let i = 0; i < cart.length; i++) {
  total += cart[i].price * cart[i].quantity;
}

if (total > 100) {
  total = total * 0.9;
}

console.log("Final Total: $" + total);
