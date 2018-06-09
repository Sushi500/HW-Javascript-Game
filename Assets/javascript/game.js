// jason added this to verify javascript is working
// alert('hello');


var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l',
    'm','n','o','p','q','r','s','t','u','v','w','x','y','z'];

var wins = 0;
var losses = 0;
var guesses = 10;
console.log(guesses);
 
var choice = alphabet[Math.floor(Math.random() * alphabet.length)];
var word = alphabet[choice];
   console.log(choice);
  
   document.getElementById("guesses-span").textContent=guesses;
   document.getElementById("wins-span").textContent=wins;
   document.getElementById("losses-span").textContent=losses;
   document.addEventListener("keypress", function(event) {
    var userGuess = event.key;


    
console.log(userGuess);
    if(userGuess === choice){ 
        wins++;
        console.log(wins);
       document.getElementById("wins-span").innerHTML=wins;
       
       
    }
    
    else{
        // var guessesDoc= document.getElementById("guesses-span");
        guesses=guesses-1;
        document.getElementById("guesses-span").innerHTML=guesses;
    }

    if(guesses === 0){
        var lossesDoc= document.getElementById("losses-span");
        lossesDO.html = losses++;
    }

    var html = "<p>win times</p>"
    

}   );
    
