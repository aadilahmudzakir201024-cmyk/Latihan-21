const prompt = require("prompt-sync")({sigint :true}); 

let harga = Number(prompt("Harga Barang : ")) 
let diskon = 7.5

if ( harga >= 200000) 
    totalHarga = harga * 7.5 / 100 
console.log(totalHarga - harga)