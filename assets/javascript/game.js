//Crystal variables
var blue = Math.floor(Math.random() * 12) + 1;
var green = Math.floor(Math.random() * 12) + 1;
var pink = Math.floor(Math.random() * 12) + 1;
var red = Math.floor(Math.random() * 12) + 1;
var buttons= ["#buttonBlue", "#buttonPink", "#buttonGreen", "#buttonRed"];
//counters
var win = 0;
var loss = 0;
var finalScore
var finalNumba;
var goalNumba = Math.floor(Math.random() * 120) + 30;
//Functions---------------
function reset() 
{

    goalNumba = Math.floor(Math.random() * 120) + 30;
    document.getElementById("guess").innerHTML= goalNumba;
    var blue = Math.floor(Math.random() * 12) + 1;
    document.getElementById("buttonBlue").innerHTML = blue;
    var green = Math.floor(Math.random() * 12) + 1;
    document.getElementById("buttonGreen").innerHTML = green;
    var pink = Math.floor(Math.random() * 12) + 1;
    document.getElementById("buttonPink").innerHTML = pink;
    var red = Math.floor(Math.random() * 12) + 1;
    document.getElementById("buttonRed").innerHTML = red;
    finalScore = 0;
    start();
}

function start ()
{
    goalNumba = Math.floor(Math.random() * 120) + 30;
    document.getElementById("guess").innerHTML = goalNumba;
    var blue = Math.floor(Math.random() * 12) + 1;
    document.getElementById("buttonBlue").innerHTML = blue;
    var green = Math.floor(Math.random() * 12) + 1;
    document.getElementById("buttonGreen").innerHTML = green;
    var pink = Math.floor(Math.random() * 12) + 1;
    document.getElementById("buttonPink").innerHTML = pink;
    var red = Math.floor(Math.random() * 12) + 1;
    document.getElementById("buttonRed").innerHTML = red;
    finalScore = 0;

}
start()

    

//a game with 4 crystals and random result
//every crystal needs to have a random number between 1-12
//a new ranndom number should be generated every single to we win or lose
//to those 4 crytals
//when clicking any crystal, it should be adding the value to the previous result

//until it is equal or greater than the random result
//if it is equal, increment the wins
if(goalNumba === finalNumba)
{
    win++;
    $('.win').html(win);
    reset();
    
}
//if it is greater than the random result, increment the losses
else if (finalNumba < goalNumba){
    losses++;
    $('.losses').html(losses);   
    reset();

}