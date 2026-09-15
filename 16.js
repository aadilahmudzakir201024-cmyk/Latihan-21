const prompt = require("prompt-sync")({sigint :true});

let angka = Number(prompt("Juara : "))

if (angka == 1 )
    console.log("Selamat Anda Juara Utama"); 
if (angka == 2)
     console.log("Selamat Anda Runner Up"); 
if (angka == 3 )
    console.log("Selamat Anda Juara Ketiga");
else 
    console.log("Inputan Anda Salah!");