const prompt = require("prompt-sync")({sigint :true});
let angka = Number(prompt("Masukkan angka : "))
if (angka === 78821)
    console.log("You are authenticated") 
else 
     console.log("You have no access")

