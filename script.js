let cards = document.getElementsByClassName('card');
let cardFlipped = false;
let firstCard, secondCard;

function flipCard() {
    this.classList.add('flip')

    if(!cardFlipped) {
        cardFlipped = true;
        firstCard = this;
    } else{
        cardFlipped = false;
        secondCard = this;

        console.log(firstCard, secondCard)
    }
}

cards.forEach(card => card.addEventListener('click', flipCard))