const scanner = require("readline-sync"); // leitor

let nota = Number(scanner.question("Digite a nota do aluno: ")) //ler a nota

if (nota >= 0 && nota <= 3) {
        console.log("Reprovado.")

} else if (nota > 3 && nota < 7) {
        console.log("Recuperação.")

} else if (nota >= 7 && nota <= 10) {
        console.log("Aprovado.")

} else { //caso a nota não esteja entre 0 a 10
        console.log("Essa nota não vale.")

}
