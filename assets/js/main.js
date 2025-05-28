console.log("Hello");
/*Consegna:
Scrivi un programma che stampi i numeri da 1 a 100, ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz. Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
Prima di partire a scrivere codice poniamoci qualche domanda: Come faccio a sapere se un numero è divisibile per? Abbiamo visto qualcosa di particolare che possiamo usare?
Consigli del giorno:
scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"*/

/*For Loop

//Sintax only

for(counter; container; increment/decrement){
//you code here
}
-keyword: for
-{}
-counter: initialize a variable 'let i=0'
-condition: i < 10
-increment/decrement: i++ or i--
-{//code inside the block}

 */

//Scrivi un programma che stampi i numeri da 1 a 100
for (let i = 1; i <= 100; i++) {
    console.log(i)
    // Se il numero è multiplo di 3 
    //Un numero è divisibile per 3 se la somma delle sue cifre è divisibile per 3
    if (i % 3 === 0) {
        console.log("Fizz"); //deve stampare “Fizz” al posto del numero
    }
    // Se il numero è multiplo di 5
    // Un numero è divisibile per 5 se la cifra delle unità è 0 oppure 5
    if (i % 5 === 0) {
        console.log("Buzz"); //deve stampare “Buzz” al posto del numero
    }
}
