const readlineSync = require("readline-sync");

//pede ao usuario um numero
let num_one = Number(readlineSync.question("DIGITE UM NUMERO: "));
let num_two = Number(readlineSync.question("DIGITE UM NUMERO: "));

if(num_one != num_two){ //verifica se são diferentes

	if(num_one < num_two){
		console.log("ORDEM: " + num_one + " " + num_two); //imprime na ordem

	} else {
		console.log("ORDEM: " + num_two + " " + num_one); //imprime na ordem
	}
}
