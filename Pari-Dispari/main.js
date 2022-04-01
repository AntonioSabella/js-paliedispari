/* L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto. */

//Chiedo all'utente il suo nome
let userName = prompt('Inserisci il tuo nome di gioco:')

//Chiedo all'utente di scegliere tra pari o dispari
let userEvenOdd = prompt('Scegli pari o dispari');

//Chiedo all'utente di scegliere un numero compreso tra 1 e 5
let userNumber = parseInt(prompt('Inserisci un numero compreso tra "1" e "5"'));

//Creo una funzione per generare un numero random per il computer
function pcRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

  let pcNumber = pcRandomNumber(1,5);

//Creo una funzione che effettui la somma e sancisca se sia pari o dispari, associando il condizionale alla scelta appropriata effettuata dall'utente
function sumAndControl(first_number, second_number){
    let result='';
    let sum = first_number + second_number;

    if(sum % 2 == 0 && userEvenOdd == 'pari'){
      result = true;
    }else if (sum % 2 != 0 && userEvenOdd == 'dispari') {
      result = true;
    }else{
      result = false;
    }
    return result;
  }

  let checkEvenOdd = sumAndControl(userNumber, pcNumber);

  //Imposto un condizionale per sancire se l'utente ha vinto oppure perso
  if(checkEvenOdd == true){
    console.log(`Complimenti ${userName}!! Sei il vincitore 😎`);
  }else{
    console.log(`Spiacente ${userName}!! Hai perso😭`);
  }