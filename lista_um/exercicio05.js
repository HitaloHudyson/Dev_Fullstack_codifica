const readlineSync = require("readline-sync"); //leitor

//leitura do peso e altura
let peso = Number(readlineSync.question("Seu peso\nex[70kg]:"));
let altura = Number(readlineSync.question("sua altura\nex.:[1.75m]:"));

//calculo
let resultado = (peso / (altura * altura));

//mostra o resultado
console.log("Seu imc é: " + resultado);

//verifica o imc
if(resultado < 18.5){
    console.log("MAGREZA");

} else if(resultado > 18.5 && resultado <= 24.9){
    console.log("NORMAL");

} else if(resultado > 24.9 && resultado <= 30){
    console.log("SOBREPESO");

} else if(resultado > 30){
    console.log("OBESIDADE");
}

