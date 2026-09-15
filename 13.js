const prompt = require("prompt-sync")({sigint: true});

let hm = Number(prompt("Harga Makan : "))
let pajak = 0.10 
let fee = 0.05
let bayar = hm + 0.10 + 0.05

console.log(`
Pajak = ${ hm * 0.10}
Fee = ${ hm * 0.05}
Harga Bayar = ${hm + (hm * 0.10) + (hm * 0.05)}`)
