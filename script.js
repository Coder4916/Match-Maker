/* All html elements within the DOM with 
the class of card are stored in the 
'cards' variable:*/
let cards = document.querySelectorAll(".card");

/* A click event listener is added to 
each card, and the flipCard function 
is also applied to them:*/
cards.forEach((card) => card.addEventListener("click", flipCard));


/* cardFlipped is initially set to false*/
let cardFlipped = false;

/* The game grid is initially locked, 
prevents a pair of cards from being 
flipped:*/
let lockBoard = false;

/* A variable, which initiates 
firstCard and secondCard:*/
let firstCard, secondCard;

let moves = 0;
let score = 0;
let seconds = 0;
let minutes = 0;

document.querySelector("#playButton").addEventListener("click", function () {
    seconds += 1;
    interval = setInterval(function () {
        let timerSeconds = document.querySelector(".timerSecs");
        timerSeconds.textContent = `${seconds++}`;
        if (seconds === 60) {
            seconds = 0;
        }
        if (seconds === (0 + 1)) {
            let timerMins = document.querySelector(".timerMins");
            timerMins.textContent = ` Time: ${minutes += 1}`;
        }
    }, 1000);
});

let resetButton = document.querySelector("#reset-game-btn");
resetButton.addEventListener("click", function () {
    reset();
});

/* A function to monitor 
the first and second cards 
clicked on, with the 'this'
event used to monitor the clicks:*/
function flipCard() {

    /* If the board is now locked (true) 
    because 2 cards have already been 
    flipped, return the flipcard function:*/
    if (lockBoard) return;

    /* If the card clicked (this card) is 
    the first card clicked, return the 
    flipCard function:*/
    if (this === firstCard) return;

    /* The card clicked on by the user 
    (this card) has a class appended to 
    it, the 'flip' class, which rotates 
    the card 180 degrees along it's Y 
    axis (style.css):*/
    this.classList.add("flip");
    /* If cardFlipped is false:*/
    if (!cardFlipped) {

        /* Make cardFlipped true:*/
        cardFlipped = true;

        /* Acknowledge this is 
        the first card flipped:*/
        firstCard = this;

        /* Return the flipCard function 
        once the click event happens:*/
        return;
    }
    /* cardFlipped is equal to false 
    to allow for second card*/
    cardFlipped = false;

    /* Acknowledge second card is 
    flipped:*/
    secondCard = this;

    /* Adds a move to the move
    counter when both cards have
    been flipped:*/
    moves++;

    /* Gets the html element with 
    a class of .moves and adds the 
    move to the .move html element:*/
    document.querySelector(".moves").innerHTML = ` Moves: ${moves}`;

    /* A function executed within the 
    flipCard function, which evaluates 
    whether the two cards flipped are 
    a match:*/
    checkCardsMatch();
};

/* A function to check whether the 
first and second cards match:*/
function checkCardsMatch() {

    /* isMatch variable which evaluates 
    whether the dataset in .html page, 
    on the first card clicked by the user, 
    matches the second card clicked:*/
    let isMatch = firstCard.dataset.shape === secondCard.dataset.shape;

    /* Ternary Operator to decide whether 
    to collect the cards, or return them 
    to original positions (unflipped):*/
    isMatch ? collectCards() : returnCards();

    /*If the cards are a match, add one to
    the score counter:*/
    if (isMatch) {
        score += 2;
        document.querySelector(".score").innerHTML = ` Score: ${score}`;
    }
    /*If the score counter reaches 20,
    all pairs have been found:*/
    if (score === 20) {
        clearInterval(interval);
        alert("Well done, you found all the pairs!");
    }
}

/* A function to collect/keep the 
cards flipped, once they have been 
matched correctly by the player:*/
function collectCards() {

    /* The function removes the click 
    event listeners from both cards if 
    they are a match:*/
    firstCard.removeEventListener("click", flipCard);
    secondCard.removeEventListener("click", flipCard);
    /* The conditions of cardFlipped and 
    lockBoard are set to false, and 
    first/secondCard to null */
    resetCards();
}

/* A function to return any un-matched 
cards to their original position:*/
function returnCards() {

    /* The game grid is locked while two 
    cards are flipped so no other cards 
    can be selected:*/
    lockBoard = true;

    /* A function with a timed condition, 
    after which the function removes the 
    'flip' class, that was applied to the 
    cards clicked on, in the flipCard function:*/
    setTimeout(() => {

        /* 'Flip' class removed from first card:*/
        firstCard.classList.remove("flip");
        /* 'Flip' class removed from second card:*/
        secondCard.classList.remove("flip");

        /* The conditions of cardFlipped and 
        lockBoard are set to false, and 
        first/secondCard to null */
        resetCards();
        /* The setTimeout function 
        is set to 1500 milliseconds, 
        to give the cards time to show 
        before they are 'un-flipped' */
    }, 1500);
}

/* A function to reset the conditions 
of the cards if they don't match:*/
function resetCards() {
    cardFlipped = false;
    lockBoard = false;
    firstCard = null;
    secondCard = null;
}

/* A function to shuffle the cards 
randomly and then put them into the 
game grid:*/
(function shuffle() {

    /* Using the cards variable, the 
    arrow function loops through each card*/
    cards.forEach(card => {

        /* While looping through each card 
        in the game grid, a random number is 
        also generated for each card */
        let shuffleCards = Math.floor(Math.random() * 20);

        /* The cards are the assigned random 
        numbers/positions in the game grid 
        and shuffled */
        card.style.order = shuffleCards;
    });
})();

/*A function to reset the board when 
the game is finished*/
function reset() {
    window.location.reload();
}




