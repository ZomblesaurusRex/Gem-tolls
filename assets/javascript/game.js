//when the document is ready load this page

// targetNumber keeps track of target number to be reached

// guessNumber keeps track of number as we guess
//guessNumber is the sum of each gem clicked

// gems blue green pink red keeps track of each button

// wins keeps track of wins = 0

// losses keeps track of loses = 0

//---------------------------------------------------------

//targetNumber number is randomly generated
//gems generates a random number for each gem 

//if guessNumber is equal to the TargetNumber
//add one to wins
//start over again

//if guessNumber is more than the targetNumber
//add one to the losses
//start over again
//----------------------------------------------

//each gem is listening for a click
//if it hears a click add the value of itself to guessNumber
















//THIS IS THE CRYSTAL ACTIVITY CHEAT SHEET


var targetNumber = 53;

$("#number-to-guess").text(targetNumber);

var counter = 0;

// Now for the hard part. Creating multiple crystals each with their own unique number value.

// We begin by expanding our array to include four options.
var numberOptions = [10, 5, 3, 7];

// Next we create a for loop to create crystals for every numberOption.
for (var i = 0; i < numberOptions.length; i++) {

    // For each iteration, we will create an imageCrystal
    var imageCrystal = $("<img>");

    // First each crystal will be given the class ".crystal-image".
    // This will allow the CSS to take effect.
    imageCrystal.addClass("crystal-image");

    // Each imageCrystal will be given a src link to the crystal image
    imageCrystal.attr("src", "http://cdn.playbuzz.com/cdn/35910209-2844-45c0-b099-f4d82878d54f/00261fda-4062-4096-81fd-8cf96b9034e8.jpg");

    // Each imageCrystal will be given a data attribute called data-crystalValue.
    // This data attribute will be set equal to the array value.
    imageCrystal.attr("data-crystalvalue", numberOptions[i]);

    // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
    $("#crystals").append(imageCrystal);
}

// This time, our click event applies to every single crystal on the page. Not just one.
$(".crystal-image").on("click", function () {

    // Determining the crystal's value requires us to extract the value from the data attribute.
    // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
    // Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
    // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter

    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    // We then add the crystalValue to the user's "counter" which is a global variable.
    // Every click, from every crystal adds to the global counter.
    counter += crystalValue;

    // All of the same game win-lose logic applies. So the rest remains unchanged.
    alert("New score: " + counter);

    if (counter === targetNumber) {
        alert("You win!");
    }

    else if (counter >= targetNumber) {
        alert("You lose!!");
    }

});