const readlineSync = require("readline-sync"); //leitor

let num;
let soma = 0;

for(let i = 0; i < 5; i++) { //for para ler os 5 valores a serem somados

	num = Number(readlineSync.question());
	soma += num;

}

console.log("SOMA: " + soma); //exibe a soma dos valores lidos
