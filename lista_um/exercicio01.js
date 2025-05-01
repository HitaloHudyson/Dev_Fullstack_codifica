const scanner = require("readline-sync"); 

//ler o valor do tipo Number
let num = Number(scanner.question("Digite um valor: "));

//Verifica se o resto é igual a zero
if (num % 2 == 0) {
        console.log("É par");

} else {
        console.log("É impar");

}
