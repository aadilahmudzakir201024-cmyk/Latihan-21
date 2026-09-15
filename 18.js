const prompt = require("prompt-sync")({ sigint: true });

let angka = Number(prompt("Masukkan bilangan bulat: "));

if (angka % 7 === 0) 
  console.log(`${angka} adalah kelipatan 7`);
else 
  console.log("Anda belum beruntung");
