Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.

Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:

il prezzo del biglietto è definito in base ai km (0.21 € al km),
va applicato uno sconto del 20% per i minorenni,
va applicato uno sconto del 40% per gli over 65.,
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.,

Realizzate prima un file README.md in cui mettere il testo dell'esercizio e scomponente il problema in sotto problemi. 
Numero minimo di push: 5

TIP:
per controllare che la vostra logica sui prezzi funzioni correttamente, provate a verificare quanto segue:

100km, 10 anni => prezzo corretto:  €16.80,
100km, 70 anni => prezzo corretto: €12.60,


1  chiediamo all'utente quanti chilometri deve percorrere (numero_ore) 

2  mettiamo in input quanti chilometri deve percorrere (usando il prompt)

3  usiamo il parseInt() per convertire il valore inserito in input da stringa a int

4  chiediamo all'utente la sua età (per vedere se applicare lo sconto)

5  mettiamo in input l'età dell'utente (usando il prompt)

6  usiamo il parseInt() per convertire il valore inserito in input da stringa a int

7  ? se l'utente ha un'età inferiore a 18 (minorenne) allora:

  7.1  calcola il prezzo del biglietto con il 20% di sconto [(0.21 * numero_ore_viaggio) * 20] / 100

8  altrimenti ? se l'utente ha un'età maggiore ai 65 anni (over 65) allora:

  8.1 calcola il prezzo del biglietto con il 40% di sconto [(0.21 * numero_ore_viaggio) * 20] / 100

9  altrimenti:

  9,1  calcola il prezzo in base ai chilometri da percorrere moltiplicato 0.21 -> numero_ore_viaggio * 0.21

10  calcolato il prezzo totale, stampiamo il valore, ottenendo in output solo il valore con al massimo 2 valori decimali (utilizzando il toFixed)
