$(document).ready(function(){
    //The random number shown at the start of the game should be between 19 - 120.
    //Each crystal should have a random hidden value between 1 - 12.

var randomNumber=Math.floor(Math.random()*101 + 19);

//create random target number and gem variables
$('#targetNumber').text(randomNumber);
console.log(randomNumber);

var crystal1= Math.floor(Math.random()*11+1)
var crystal2= Math.floor(Math.random()*11+1)
var crystal3= Math.floor(Math.random()*11+1)
var crystal4= Math.floor(Math.random()*11+1)
var userCurrentScore=0;
var wins=0;
var losses=0;

//link losses and wins to variables in html
$('#howManyWins').text(wins)
$('#howManyLosses').text(losses)

//reset game function
function resetGame(){
    userCurrentScore=0;
    randomNumber=Math.floor(Math.random()*101 + 19);
    console.log(randomNumber);
    $('#targetNumber').text(randomNumber);
    crystal1= Math.floor(Math.random()*11+1);
    crystal2= Math.floor(Math.random()*11+1);
    crystal3= Math.floor(Math.random()*11+1);
    crystal4= Math.floor(Math.random()*11+1);
    $('#yourTotalScore').text(userCurrentScore);
}

//win function
function win(){
    alert("BRO/SIS, YOU WIN!");
    wins++;
    $('#howManyWins').text(wins);
    resetGame()
}
//lose function
function lose(){
    alert("BRO/SIS, YOU LOST, THAT REALLY SUCKS, GO GET ICE CREAM TO CHEER YOU UP");
    losses++;
    $('#howManyLosses').text(losses);
    resetGame()
}

//crystal 1
$('#crystal1').on('click', function(){
    userCurrentScore = userCurrentScore + crystal1;
    console.log("Current total: " + userCurrentScore);
    $('#yourTotalScore').text(userCurrentScore);
        
    if(userCurrentScore === randomNumber){
        win()
    }

    else if (userCurrentScore >= randomNumber){
        lose()
    }
})
//crystal 2
 $('#crystal2').on('click', function(){
    userCurrentScore = userCurrentScore + crystal2;
    console.log("Current total: " + userCurrentScore);
    $('#yourTotalScore').text(userCurrentScore);
            
     if(userCurrentScore === randomNumber){
          win()
    }
    
     else if (userCurrentScore >= randomNumber){
        lose()
    }
 })
//crystal 3
$('#crystal3').on('click', function(){
    userCurrentScore = userCurrentScore = crystal3;
    console.log("Current Total: " + userCurrentScore);
    $('#yourTotalScore').text(userCurrentScore);

    if(userCurrentScore === randomNumber){
        win()
    }
    else if (userCurrentScore >= randomNumber){
        lose()
    }
})
//crystal4
$('#crystal4').on('click', function(){
    userCurrentScore = userCurrentScore + crystal4;
    console.log("Current Total: " + userCurrentScore);
    $('#yourTotalScore').text(userCurrentScore);

    if(userCurrentScore === randomNumber){
        win()
    }
    else if (userCurrentScore >= randomNumber){
        lose()
    }})
})