const readlineSync = require("readline-sync"); //leitor
	
let selecao; 
let num_one;
let num_two;
let resultado;
let stop = 0;

do {
    console.log("[1] SOMAR\n[2] MULTIPLICAR\n[3] DIVIDIR\n[4] DESLIGAR");
    selecao = Number(readlineSync.question());

    switch (selecao){

        case 1: //soma
            num_one = Number(readlineSync.question());
            num_two = Number(readlineSync.question());
            resultado = num_one + num_two;
            console.log("A SOMA É: " + resultado);
            break;

        case 2: //multiplicacao
            num_one = Number(readlineSync.question());
            num_two = Number(readlineSync.question());
            resultado = num_one * num_two;
            console.log("A MULTIPLICAÇÃO É: " + resultado);
            break;
        
        case 3: //divisao
            num_one = Number(readlineSync.question());
            num_two = Number(readlineSync.question());
            resultado = (num_one / num_two);
            console.log("A DIVISÃO É: " + resultado);
            break;
            
        case 4:
            stop = 1; // variavel para desligar o programa
            break;

    }

} while (stop === 0); // verifica caso o usario nao tenha digitado [4]
