const prezzo_Km = 0.21;
const numero_km = parseInt(prompt("quanti chilometri devi viaggiare? "));
const eta_utente = parseInt(prompt("inserire l'età dell'utente: "));
let prezzo = numero_km * prezzo_Km;
console.log(prezzo)
if(eta_utente < 18){
    prezzo = prezzo - (prezzo * 0.20);
    prezzo = prezzo.toFixed(2);
    console.log(`totale prezzo con sconto minorenni (dal momento che ha ${eta_utente} anni): ${prezzo} euro`)
}
else if(eta_utente > 65){
    prezzo = prezzo-(prezzo * 0.40);
    prezzo = prezzo.toFixed(2);
    console.log(`totale prezzo con sconto over 65 (dal momento che ha ${eta_utente} anni): ${prezzo} euro`)
}
else{
    console.log(`prezzo senza sconto (dal momento che ha ${eta_utente} anni): ${prezzo} euro`);
}