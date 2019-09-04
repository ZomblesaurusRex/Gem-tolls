//a game with 4 crystals and a random goal#

var goal_result;
var lost = 0;
var win = 0;
var previous = 0;
var blue;
var green;
var red;
var pink;
//
//a new random number is generated as the ultimate number to achieve
function goalNumber() {
    var goal_result = Math.floor(Math.random() * 120) + 30;
    document.getElementById('number-to-guess').innerHTML = goal_result;
};

var numberOptions = [5, 2, 8, 4, 1, 10, 7, 12, 9, 6, 11, 3];
var crystalSrc = ["assets/images/bluejewel.png", "assets/images/greenjewel.png", "assets/images/pinkjewel.png", "assets/images/redjewel.png"]
//var rando = {numberOptions: [Math.floor(Math.random() * numberOptions.length)]}
//every crystal needs to have a random number between 1-12
// Next we create a for loop to create crystals for every numberOption.
for (var i = 0; i < crystalSrc.length; i++) {

    // For each iteration, we will create an imageCrystal
    var imageCrystal = $("<img>");

    // First each crystal will be given the class ".crystal-image".
    // This will allow the CSS to take effect.
    imageCrystal.addClass("button");

    // Each imageCrystal will be given a src link to the crystal image
    imageCrystal.attr("src", crystalSrc[i]);

    // Each imageCrystal will be given a data attribute called data-crystalValue.
    // This data attribute will be set equal to the array value.
    imageCrystal.attr("data-crystalvalue", numberOptions[i]);


    // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
    $("#crystals").append(imageCrystal);
}
//a new random number should be generated every single to we win or lose
//to those 4 crytals
//for(var i = 0; i<1 ; i++) {}

//generates the number in number to guess section 
goalNumber()


//var random = Math.floor(Math.random() * 12) + 1; 
//when clicking any crystal, it should be adding the value to the previous result
$("#crystals").on("click", function () {
    //
    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    // We then add the crystalValue to the user's "counter" which is a global variable.
    // Every click, from every crystal adds to the global counter.
    previous += crystalValue

    $("#previousNum").html(+ previous);

    alert("New score: " + previous);

    if (previous === goal_result) {
        alert("You win!");
    }

    else if (previous >= goal_number) {
        alert("You lose!!");
    }
    //document.getElementById("previousNum").innerHTML = previous;


    //until it is equal or greater than the random result
    //if it is greater than the random result, increment the losses
    //if (previous > goal_result) {
    //  lost++;
    //$("#lost").html(+ lost);
    // alert("Better luck next time!");
    ///   previous = 0;
    /// goalNumber();

    //if it is equal, increment the wins
    //else if (previous === goal_result) {
    //  win++;
    //$("#win").text(+ win);
    // alert("You did it!");
    // previous = 0;
    //goalNumber();
}
);