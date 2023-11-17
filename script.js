let cards = document.getElementsByClassName('card'); //Used to create an event listener on all cards//
let cardFlipped = false; //Initially no cards have been flipped so cardFlipped is set to false//
let firstCard, secondCard; //A variable is assigned firstCard and secondCard to acknowledge when these are clicked by the user//

//A function to monitor the first and second cards clicked on, with the 'this' event used to monitor these//

function flipCard() {
    this.classList.add('flip')

    if(!cardFlipped) {
        cardFlipped = true;
        firstCard = this;
    } else{
        cardFlipped = false;
        secondCard = this;
    }
}

cards.forEach(card => card.addEventListener('click', flipCard))