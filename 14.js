const prompt = require("prompt-sync")({sigint :true});
let angka = Number(prompt("Masukkan angka : "));
//if (angka > 100)
    //console.log('Nilai kamu Sempurna')

//ternary operator == short hand if
console.log(angka > 100 ? 'Nilai kamu Sempurna' : 'Nilai kamu Kurang Sempurna')

