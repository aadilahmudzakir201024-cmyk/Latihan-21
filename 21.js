const prompt = require("prompt-sync")({sigint: true});

let nilai = Number(prompt("Masukkan nilai : "))

if ( nilai >= 90 && nilai <= 100 )
    console.log("Nilai A"); 
else if ( nilai >= 80 && nilai <= 90)
    console.log("Nilai B");
else if ( nilai >= 70 && nilai <= 80)
    console.log("Nilai C");
else if ( nilai >= 60 && nilai <= 70)
    console.log("Nilai D");
else if ( nilai >= 0 && nilai <= 60)
    console.log("Nilai E")
