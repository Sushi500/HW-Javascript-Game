// jason added this to verify javascript is working
// alert('hello');

var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l',
    'm','n','o','p','q','r','s','t','u','v','w','x','y','z'];

var wins = 0;
var losses = 0;
var guesses = 10;

 
var choice = alphabet[Math.floor(Math.random() * alphabet.length)];
var word = alphabet[choice];
    
   document.addEventListener("keypress", function(event) {
    var userGuess = String.fromCharCode(event.keyCode);

console.log(event)
    if(userGuess === choice){
        var winsDoc= document.getElementById("wins-span");
       winsDoc.innerHTML = wins++;
       console.log(choice);
    }
    else{
        var guessesDoc= document.getElementById("guesses-span");
        guessesDoc.innerHTML= guesses--;
    }

    if(guesses = 0){
        var lossesDoc= document.getElementById("losses-span");
        lossesDO.innerHTML = losses++;
    }

    var html = "<p>win times</p>"
    

}   );
    
