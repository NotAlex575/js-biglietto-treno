const prezzo_Km = 0.21;
const numero_km = parseInt(prompt("quanti chilometri devi viaggiare? "));
const eta_utente = parseInt(prompt("inserire l'età dell'utente: "));
let prezzo = numero_km * prezzo_Km;
console.log(prezzo)
if(eta_utente < 18){
    prezzo = prezzo - (prezzo * 0.20);
}
else if(eta_utente > 65){
    prezzo = prezzo-(prezzo * 0.40);
}
else{
    console.log("prezzo senza sconto totale: "+prezzo);
}