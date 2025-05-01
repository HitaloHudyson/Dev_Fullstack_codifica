const readlineSync = require("readline-sync");

let num = Number(readlineSync.question("Digite um numero inteiro: "));

for(let i = 0; i <= 9; i++) {
	console.log(num);
}
