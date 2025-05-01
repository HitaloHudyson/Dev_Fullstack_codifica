const scanner = require("readline-sync"); //leitor

let idade = Number(scanner.question("Digite a idade: ")) //ler idade

if (idade >=  0 && idade < 13) { 
        console.log("Criança")

} else if (idade >= 13 && idade < 18) {
        console.log("Adolescente")

} else if (idade >= 18 && idade < 60) {
        console.log("Adulto")

} else if (idade >= 60 && idade < 130) {
        console.log("Idoso")

} else { //caso a pessoa digite uma idade que não seja entre 0 a 130	
        console.log("Não é uma idade de pessoa")

}
