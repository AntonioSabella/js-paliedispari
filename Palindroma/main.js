/* Chiedere all’utente di inserire una parola
 Creare una funzione per capire se la parola inserita è palindroma */

 //Chiedo all'utente una parola
 let word = prompt('Inserisci una parola a tua scelta:');
 
 //Scrivo una funzione per verificare che una parola sia palindroma
 
 function palindroma(word){
   let reverseWord ='';
   //Imposto un ciclo for che vada a verificare a ritroso le lettere della parola per generare il contrario della stessa
   for (let i = word.length - 1; i >= 0; i--) {
     reverseWord += word[i];
   }
   //Sancendo una condizione verifico che sia la parola inserita che il suo inverso siano uguali
   if(word == reverseWord){
     reverseWord = true;
   }else{
     reverseWord = false;
   }
   return reverseWord;
 }

 let result = palindroma(word);

  //Sancisco le condizioni che mi serviranno a mostrare se la parola prescelta sia palindroma o meno
  if (result == true){
    console.log(`La parola: "${word}" prescelta è palindroma`);
  } else {
    console.log(`Spiacente! La parola: "${word}" prescelta non è palindroma`);
  }

 /* checkwords palindromi:
 - eroadirottartrattoridaore;
 - itopinonavevanonipoti; 
 - ereggere; 
 - etnagigante; 
 - ossesso; 
 - eletazzineigienizzatele; 
 */