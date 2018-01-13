$(document).ready(function(){
    //The random number shown at the start of the game should be between 19 - 120.
    //Each crystal should have a random hidden value between 1 - 12.

var randomNumber=Math.floor(Math.random()*101 + 19);

$('#targetNumber').text(randomNumber);
console.log(randomNumber);

var crystal1= Math.floor(Math.random()*11+1)
var crystal2= Math.floor(Math.random()*11+1)
var crystal3= Math.floor(Math.random()*11+1)
var crystal4= Math.floor(Math.random()*11+1)
var userCurrentScore=0;
var wins=0;
var losses=0;

$('#howManyWins').text(wins)
$('#howManyLosses').text(losses)

function resetGame(){
    randomNumber=Math.floor(Math.random()*101 + 19);
    console.log(randomNumber);
    $('#targetNumber').text(randomNumber);
    crystal1= Math.floor(math.random()*11+1)
    crystal2= Math.floor(math.random()*11+1)
    crystal3= Math.floor(math.random()*11+1)
    crystal4= Math.floor(math.random()*11+1)
    userCurrentScore=0;
    $('#yourTotalScore').text(userCurrentScore);
}

function win(){
    alert("BRO/SIS, YOU WIN!");
    wins++;
    $('#howManyWins').text(wins);
    resetGame();
}

function lose(){
    alert("BRO/SIS, YOU LOST, THAT REALLY SUCKS, GO GET ICE CREAM TO CHEER YOU UP");
    howManyLosses++;
    $('#howManyLosses').text(losses);
    resetGame();
}

$('#crystal1').on('click', function(){
    userCurrentScore = userCurrentScore + crystal1;
    console.log("Current total: " + userCurrentScore);
    $('#yourTotalScore').text(userCurrentScore);
        
    if(userCurrentScore === randomNumber){
        win()
    }

    else if (userCurrentScore > randomNumber){
        lose()
    }

 $('#crystal2').on('click', function(){
    userCurrentScore = userCurrentScore + crystal2;
    console.log("Current total: " + userCurrentScore);
    $('#yourTotalScore').text(userCurrentScore);
            
     if(userCurrentScore === randomNumber){
          win()
    }
    
     else if (userCurrentScore > randomNumber){
        lose()
    }

$('#crystal3').on('click', function(){
    userCurrentScore = userCurrentScore = crystal3;
    console.log("Current Total: " + userCurrentScore);
    $('#yourTotalScore').text(userCurrentScore);

    if(userCurrentScore === randomNumber){
        win()
    }
    else if (userCurrentScore > randomNumber){
        lose()
    }

$('#crystal4').on('click', function(){
    userCurrentScore = userCurrentScore + crystal4;
    console.log("Current Total: " + userCurrentScore);
    $('#yourTotalScore').text(userCurrentScore);

    if(userCurrentScore === randomNumber){
        win()
    }
    else if (userCurrentScore > randomNumber){
        lose();
    }
})
})

})
})
})