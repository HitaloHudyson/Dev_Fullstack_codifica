const readlineSync = require("readline-sync"); //leitor

let num = Number(readlineSync.question("Digite um Número: "));
let fatorial = 1;

	
if(num != 0) {

	for(let i = num; i >= 1; i--) { // faz o fatorial
		fatorial *= i;

	}
}
console.log("FATORIAL: " + fatorial); // imprime o fatorial
