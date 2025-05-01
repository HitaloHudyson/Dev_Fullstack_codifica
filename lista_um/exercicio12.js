const readlineSync = require("readline-sync");

let num = Number(readlineSync.question());

for(let i = 1; i <= 10; i++) {
	console.log(num + " * " + i + " = " + num * i );	
}
