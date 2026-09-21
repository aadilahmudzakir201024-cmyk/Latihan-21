const prompt = require("prompt-sync")({sigint: true});

let nilai = Number(prompt('Nilai (1-100) : '))
if(nilai >= 90 && nilai <= 100)
    console.log('Predikat "A"')
else if(nilai >= 80 && nilai <= 90)
    console.log('Predikat "B"')
else if(nilai >= 70 && nilai <= 80)
    console.log('Predikat "C"')
else if(nilai >= 60 && nilai <= 70)
    console.log('Predikat "D"')
else if(nilai <= 60)
    console.log('Predikat "E"')