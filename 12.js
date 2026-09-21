const prompt = require("prompt-sync")({sigint: true });

let phi = Number(prompt("Masukkan nilai phi : "));
let r = Number(prompt("Jari - Jari : "));
let volume = 4/3 * phi * r * r * r 
let luasPermukaan = 4 * phi * r * r

console.log(`
Volume = ${volume} cm
Luas Permukaan = ${luasPermukaan} cm 
`);