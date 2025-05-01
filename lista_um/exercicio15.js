let a = 0, b = 1;

console.log("Sequência de Fibonacci: ");

for (let i = 0; i < 10; i++) { //loop para os 10 valores
    console.log(a);
    let temp = a;
    a = b;
    b = temp + b;
}
