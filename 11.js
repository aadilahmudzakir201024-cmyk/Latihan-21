const prompt = require("prompt-sync")({sigint :true});

let xRPL1 = Number(prompt("Jumlah Siswa X RPL 1 : "));
let xRPL2 = Number(prompt("Jumlah Siswa X RPL 2 : "));
let xTKJ1 = Number(prompt("Jumlah Siswa X TKJ 1 : "));
let xTKJ2 = Number(prompt("Jumlah Siswa X TKJ 2 : "));

let JumlahSeluruhTotalSiswa = xRPL1 + xRPL2 + xTKJ1 + xTKJ2

console.log(`
Jumlah Seluruh Total Siswa ${JumlahSeluruhTotalSiswa} siswa
`) 