const prompt = require("prompt-sync")({sigint: true});

let hm = Number(prompt("Harga Makan : "))
let pajak = 10/100 
let fee = 5/100
let bayar = hm + pajak + fee

console.log(`
Pajak = ${pajak}
Fee = ${fee}
Harga Bayar = ${bayar}`)
