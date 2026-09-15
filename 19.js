const prompt = require("prompt-sync")({sigint: true});

let x = Number(prompt("Masukkan Nilai x : "))
let y = Number(prompt("Masukkan nilai y : "))
let z = Number(prompt("Masukkan nilai z : "))

if (x > y && x > z) 
    console.log("lebih besar nilai x ");
else if (y > x && y > z)
    console.log("lebih besar nilai y ");
else if (z > y && z > x) 
    console.log("lebih besar nilai z ")

if (x < y && x < z) 
    console.log("lebih kecil nilai x ");
else if (y < x && y < z) 
    console.log("lebih kecil nilai y ");
else if (z < y && z < x)
    console.log("lebih kecil nilai z ")