const prompt = require("prompt-sync")({sigint :true}); 

let harga = Number(prompt("Harga Barang : ")) 
let diskon = 7.5 / 100

if ( harga >= 200000) 
    totalHarga = harga * diskon
console.log(totalHarga - harga)