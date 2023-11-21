const cards = document.querySelectorAll('.card'); //Used to create an event listener on all cards//

let cardFlipped = false; //Initially no cards have been flipped so cardFlipped is set to false//
let lockBoard = false;
let firstCard, secondCard; //A variable is assigned firstCard and secondCard to acknowledge when these are clicked by the user//

//A function to monitor the first and second cards clicked on, with the 'this' event used to monitor these//

function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;
    this.classList.add('flip');
    if (!cardFlipped) {
        cardFlipped = true;
        firstCard = this;

        return;
    }

    cardFlipped = false;
    secondCard = this;

    checkCardsMatch();
}

function checkCardsMatch() {

    let isMatch = firstCard.dataset.shape === secondCard.dataset.shape;

    isMatch ? collectCards() : returnCards();
}

function collectCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

    resetBoard()
}

function returnCards() {
    lockBoard = true;

    setTimeout(() => {

        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');

    resetBoard()
    }, 1500);
}

function resetBoard(){
    [cardFlipped, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

(function shuffle() {
    cards.forEach(card => {
        let shuffleCards = Math.floor(Math.random() * 20);
        card.style.order = shuffleCards;
    })
})();

function gameCompletion() {
    if ()
}

cards.forEach(card => card.addEventListener('click', flipCard));
