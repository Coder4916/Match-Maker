let cards = document.getElementsByClassName('card');
let hasFlippedCard = false;
let firstCard, secondCard;

function flipCard() {
    this.classList.toggle('flip')
}

cards.forEach(card => card.addEventListener('click', flipCard))