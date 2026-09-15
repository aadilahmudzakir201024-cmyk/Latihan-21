const prompt = require("prompt-sync")({sigint: true });

let phi = Number(prompt("Masukkan nilai phi : "));
let r = Number(prompt("Jari - Jari : "));
let volume = 4/3 * phi * r * r * r 
let luasPermukaan = 4 * phi * r * r

console.log(`
Volume = ${ 4/3 * phi * r * r * r} cm
Luas Permukaan = ${ 4 * phi * r * r } cm 
`);