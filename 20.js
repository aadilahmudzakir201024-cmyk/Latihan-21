const prompt = require("prompt-sync")({sigint: true});
let huruf = String(prompt("Masukkan huruf : "))

const vokal = "A I U E O"
const konsonan = "B C D F G H J K L M N P Q R S T V W X Y Z" 

if ( huruf == "A" || huruf == "I" || huruf == "E" || huruf == "O")
    console.log("Termasuk huruf vokal")
else 
    console.log("Termasuk huruf konsonan atau Bukan termasuk huruf")