let cards = document.querySelectorAll(".card");
cards.forEach((card) => card.addEventListener("click", flipCard));
/* cardFlipped is initially set to false*/
let cardFlipped = false;
/* The game grid is initially locked,
prevents a pair of cards from being
flipped:*/
let lockBoard = false;
/* A variable, which initiates
firstCard and secondCard:*/
let firstCard;
let secondCard;
let myInterval;
let moves = 0;
let score = 0;
let seconds = 0;
let minutes = 0;


/*A click event Listener is added to the play button in
html file. A Second is added to remove delay when timer
begins as game is started. Timer begins: */
document.querySelector("#playButton").addEventListener("click", function () {
    seconds += 1;
    myInterval = setInterval(function () {
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

/*The reset button in html file has an
event listener added to it. The reset function
(below) is called when a click is 'heard'*/
let resetButton = document.querySelector("#reset-game-btn");
resetButton.addEventListener("click", function () {
    reset();
});

/* A function to monitor
the first and second cards
clicked on, with 'this'
used to monitor the clicks:*/
function flipCard() {
    if (lockBoard) {
        return;
    }
    if (this === firstCard) {
        return;
    }
    this.classList.add("flip");
    if (!cardFlipped) {
        cardFlipped = true;
        firstCard = this;
        return;
    }
    cardFlipped = false;
    secondCard = this;
    moves++;
    document.querySelector(".moves").innerHTML = ` Moves: ${moves}`;
    checkCardsMatch();
}

/* A function to check whether the
first and second cards match:*/
function checkCardsMatch() {
    let cardsMatch = firstCard.dataset.shape === secondCard.dataset.shape;
    if (cardsMatch) {
        collectCards();
        score += 2;
        document.querySelector(".score").innerHTML = ` Score: ${score}`;
    }
    else {
        returnCards();
    }
    if (score === 20) {
        alert("Well done, you found all the pairs of cards!");
        clearInterval(myInterval);
    }
}

/* A function to collect/keep the
cards flipped, once they have been
matched correctly by the player
The function removes the click
event listeners from both cards if
they are a match:*/
function collectCards() {
    firstCard.removeEventListener("click", flipCard);
    secondCard.removeEventListener("click", flipCard);
    resetCards();
}

/* A function to return any un-matched
cards to their original position.
the function removes the
'flip' class that was applied to the
cards clicked on by the user after
a set time period:*/
function returnCards() {
    lockBoard = true;
    setTimeout(() => {
        firstCard.classList.remove("flip");
        secondCard.classList.remove("flip");
        resetCards();
    }, 1500);
}

/* A function to reset the condition
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
    cards.forEach(card => {
        let shuffleCards = Math.floor(Math.random() * 20);
        card.style.order = shuffleCards;
    });
})();

/*A function to reset the board when
the game is finished:*/
function reset() {
    window.location.reload();
}