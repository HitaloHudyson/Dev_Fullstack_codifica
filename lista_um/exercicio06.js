const readlineSync = require("readline-sync"); //leitor

let a = Number(readlineSync.question());
let b = Number(readlineSync.question());
let c = Number(readlineSync.question());

//booleano -- true --> forma triangulo
let triangulo = ((a < b + c) && (b < a + c) && (c < a + b));

if(triangulo == true) { //analise se é triangulo

	//verifica o tipo de triangulo
	if((a == b) || (a == c) || (b == c)){
		console.log("TRIANGULO ISOSCELES");

	}else if((a != b) && (b != c)){
		console.log("TRIANGULO ESCALENO");

	} else if((a == b) && (b == c)) {
		console.log("TRIANGULO EQUILATERO");
	}

} else { // caso nao forme triangulo imprime >>
	console.log("NÃO FORMA TRIANGULO");
}
