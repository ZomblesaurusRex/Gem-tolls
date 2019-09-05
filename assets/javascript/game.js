//a game with 4 crystals and a random goal#

var goal_result = goalNumber();
var lost = 0;
var win = 0;
var previous = 0;
var crystalSrc = ["assets/images/bluejewel.png", "assets/images/greenjewel.png", "assets/images/pinkjewel.png", "assets/images/redjewel.png"]

function goalNumber() {
    var goal_result = Math.floor(Math.random() * 120) + 30;
    document.getElementById('number-to-guess').innerHTML = goal_result;
};


for (var i = 0; i < crystalSrc.length; i++) {

    var imageCrystal = $("<img>");
    var randomCrystalVal = Math.floor((Math.random() * 12) + 1)
    imageCrystal.addClass("button clicker");

    imageCrystal.attr("src", crystalSrc[i]);

    imageCrystal.attr("data-crystalvalue", randomCrystalVal);

    $(".crystals").append(imageCrystal);
}
$(".clicker").click(function () {
    var crystalValue = parseInt($(this).attr("data-crystalvalue"));
    
    previous += crystalValue;

    $("#previousNum").html(previous);

    if (previous === goal_result); {
        win++;
        $("#win").text(win);
        previous = 0;
    }
    if (previous > goal_result) {
        console.log(lost++);
        $("#lost").text(lost);
        previous = 0;
        //if it is equal, increment the wins
    }
})
goalNumber()
//
//every crystal needs to have a random number between 1-12
//a new random number is generated as the ultimate number to achieve
// Next we create a for loop to create crystals for every numberOption.
// For each iteration, we will create an imageCrystal
// First each crystal will be given the class ".crystal-image".
// This will allow the CSS to take effect.
// Each imageCrystal will be given a src link to the crystal image
// Each imageCrystal will be given a data attribute called data-crystalValue.
// This data attribute will be set equal to the array value.
// console.log('This: ' + $(this).attr("data-crystalvalue"));
// We then add the crystalValue to the user's "counter" which is a global variable.
// Every click, from everyS crystal adds to the global counter.
// Lastly, each crystal image (with all it classes and attributes) will get added to the page.
//a new random number should be generated every single to we win or lose
//to those 4 crystals
//when clicking any crystal, it should be adding the value to the previous result
//generates the number in number to guess section 
// alert("New score: " + previous);

// if (previous === goal_result) {
    //     alert("You win!");
    // }

    // else if (previous >= goal_result) {
        //     alert("You lose!!");
        // }


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
// }
// );