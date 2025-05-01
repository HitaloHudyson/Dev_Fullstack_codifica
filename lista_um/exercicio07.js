const readlineSync = require("readline-sync"); //leitor
let resultado = 0;

let num = Number(readlineSync.question("Quantas maçãs foram compradas?\n"));

if (num < 12) {
    resultado = num * 0.30;
} else {
    resultado = num * 0.25;
}

console.log("R$ " + resultado.toFixed(2));
