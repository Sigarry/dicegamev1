const button = document.querySelector('button');

// Define random numbers outside of the event listener so they can be accessed globally
let randomNumberOne;
let randomNumberTwo;

// Change the button text on click
button.addEventListener('click', function() {
    if (button.textContent === "Roll the dice") {
        button.textContent = "Roll again";
    }
});

// Roll Player 1 Dice
button.addEventListener('click', function rollDiceOne() {
    randomNumberOne = Math.floor(Math.random() * 6) + 1;
    const newLocationOne = "images/dice" + randomNumberOne + ".png";
    const imageOne = document.querySelectorAll("img")[0];
    imageOne.setAttribute("src", newLocationOne);
});

// Roll Player 2 Dice
button.addEventListener('click', function rollDiceTwo() {
    randomNumberTwo = Math.floor(Math.random() * 6) + 1;
    const newLocationTwo = "images/dice" + randomNumberTwo + ".png";
    const imageTwo = document.querySelectorAll("img")[1];
    imageTwo.setAttribute("src", newLocationTwo);
});

// Display the result
button.addEventListener('click', function results() {
    if (randomNumberOne > randomNumberTwo) {
        document.querySelector("h2").textContent = "Player 1 wins";
    } else if (randomNumberOne < randomNumberTwo) {
        document.querySelector("h2").textContent = "Player 2 wins";
    } else {
        document.querySelector("h2").textContent = "Draw";
    }
});