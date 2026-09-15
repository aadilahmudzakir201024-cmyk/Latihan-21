const prompt = require ("prompt-sync")({sigint :true});

let a = Number(prompt("Panjang : ")); 
let b = Number(prompt("Lebar   : "));
let luas = a * b 
let keliling = 2 * ( a + b) 

console.log(`
Luas = ${a * b} cm
Keliling = ${2 * (a + b)} cm
`)