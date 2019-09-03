//a game with 4 crystals and a random goal#

var goal_result;
var lost = 0;
var win = 0;
var previous = 0;


//every crystal needs to have a random number between 1-12
//a new ranndom number should be generated every single to we win or lose
//to those 4 crytals
function resetAndStart() {
    var goal_result = Math.floor(Math.random() * 120) + 30;
    document.getElementById('number-to-guess').innerHTML = goal_result;
};

    //for(var i = 0; i<1 ; i++) {}

    //var random = Math.floor(Math.random() * 12) + 1;

//<button onclick="document.getElementById('demo').innerHTML = Date()">The time is?</button>
    
    resetAndStart()


$(document).on('click', ".crystal", function () {
    
    var num = parseInt($(this).attr('data-random'));
    
    //when clicking any crystal, it should be adding the value to the previous result
    previous += num;
    
    $("#previous").html(+ previous);
    
    console.log(previous);

    //until it is equal or greater than the random result
    
    //if it is greater than the random result, increment the losses
    if (previous > goal_result) {
        lost--;
        $("#lost").html(+ lost);
        previous = 0;
        alert("Better luck next time!");
        resetAndStart();
    }
    //if it is equal, increment the wins
    else if (previous === goal_result) {
        win++;
        $("#win").html(+ win);
        previous = 0;
        alert("You did it!");
        resetAndStart();
    }
});

