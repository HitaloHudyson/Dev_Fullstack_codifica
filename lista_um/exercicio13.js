const readlineSync = require("readline-sync"); //leitor

let stop = 1;
let num;
let soma = 0; //variavel responsavel por parar o while

while(stop != 0){

	num = Number(readlineSync.question());

	if(num != 0) {
		soma += num; // soma o valor caso seja diferente de 0

	} else {
		stop = 0; // para o while

	}

}

console.log("SOMA: " + soma); //imprime na tela a soma total dos num != 0	
