let cards = document.querySelectorAll('.card'); /* All html elements within the DOM with the class of card are contained within the cards variable*/
cards.forEach(card => card.addEventListener('click', flipCard)); /* A click event listener is added to each card, so that the functions can be applied to them */

let cardFlipped = false; /* cardFlipped is initially set to false*/
let lockBoard = false; /* The game grid is locked (Prevents a pair of cards from being flipped while the first pair is checked for a match)*/
let firstCard, secondCard; /* A variable, which initiates firstCard and secondCard */
let moves = 0;
let score = 0;
let seconds = 0;
let minutes = 0;

    document.querySelector('#playButton').addEventListener('click', function() {
    seconds += 1;
    interval = setInterval(function () {
    let timerSeconds = document.querySelector('.timerSecs')
    timerSeconds.textContent = `${seconds++}`;
    if (seconds === 60){
        seconds = 0;
    }
    if (seconds === (0+1)){
            let timerMins = document.querySelector('.timerMins')
            timerMins.textContent = ` Time: ${minutes += 1}`;
            console.log(minutes);
        }
    }, 1000);
});

function flipCard() { /* A function to monitor the first and second cards clicked on, with the 'this' event used to monitor the clicks. */
        
    if (lockBoard) return; /* If the board is now locked (true) because 2 cards have already been flipped, return the flipcard function*/

    if (this === firstCard) return; /* If the card clicked (this card) is the first card clicked, return the flipCard function*/
    
    this.classList.add('flip'); /* The card clicked on by the user (this card) has a class appended to it, the 'flip' class, which rotates the card 180 degrees along it's Y axis (style.css).*/
    if (!cardFlipped) { /* If cardFlipped is false */
        cardFlipped = true; /* Make cardFlipped true */
        firstCard = this; /* Acknowledge this is the first card flipped */

        return; /* Return the flipCard function */
    }

    cardFlipped = false; /* cardFlipped is equal to false to allow for second card*/
    secondCard = this; /* Acknowledge second card is flipped */
    moves++; /* Adds a move to the move counter when both cards have been flipped*/
    document.querySelector('.moves').innerHTML = `Moves:${moves}`; /* Gets the html element with a class of .moves and adds the move to the html element */

    checkCardsMatch(); /* A function within the flipCard function, which evaluates whether the two cards flipped are a match */
};

function checkCardsMatch() { /* A function to check whether the first and second cards match */

    let isMatch = firstCard.dataset.shape === secondCard.dataset.shape; /* isMatch variable which evaluates whether the dataset (image) in index.html, on the first card clicked by the user, matches the second card clicked */
    isMatch ? collectCards() : returnCards(); /* Ternary Operator to decide whether to collect the cards, or return them to original positions (unflipped). */
    if (isMatch) {
        score++;
        document.querySelector('.score').innerHTML = `Score:${score}`;
        if (score === 10){
            clearInterval(interval);
        alert("Well done, you found all the pairs!");
        }
    } 
}

function collectCards() { /* A function to collect/keep the cards flipped, once they have been matched correctly by the player */
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard); /* The function removes the click event listeners from both cards if they are a match. */

    resetCards(); /* The conditions of cardFlipped and lockBoard are set to false, and first/secondCard to null */
}

function returnCards() { /* A function to return any un-matched cards to their original position */
    lockBoard = true; /* The game grid is locked while two cards are flipped so no other cards can be selected */

    setTimeout(() => { /* A function with a timed condition, which removes the 'flip' class, that was applied to the cards clicked on, in the flipCard function */

        firstCard.classList.remove('flip'); /* 'Flip' class removed from first card */
        secondCard.classList.remove('flip'); /* 'Flip' class removed from second card */

        resetCards(); /* The conditions of cardFlipped and lockBoard are set to false, and first/secondCard to null */
    }, 1500); /* The setTimeout function is set to 1500 milliseconds, to give the cards time to show before they are 'un-flipped' */
}

function resetCards() { /* A function to reset the conditions of the cards if they don't match */
    cardFlipped = false;
    lockBoard = false;
    firstCard = null;
    secondCard = null;
}

(function shuffle() { /* A function to shuffle the cards randomly and then put them into the game grid */
    cards.forEach(card => { /* Using the cards variable, the arrow function loops through each card*/
        let shuffleCards = Math.floor(Math.random() * 20); /* While looping through each card in the game grid, a random number is also created for each card */
        card.style.order = shuffleCards; /* The cards are the assigned random numbers/positions in the game grid and shuffled */
    });
})();

           
