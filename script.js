document.addEventListener("DOMContentLoaded", function(){
    let myButtons = document.getElementsByTagName("button");

    for (let button of myButtons){
        button.addEventListener("click", function(){
            if (this.getAttribute("data-type") === "start-game"){
                alert("You clicked start game");
            }
            else {
                let difficulty = this.getAttribute("data-type")
                alert(`You clicked ${difficulty}`);
            }
        })
    }
})

function startGame(){

}

function checkCards(){

}

function checkCorrectCards(){

}

function logScore(){

}

function logNoMatch(){

}

function displayEasyGrid(){

}

function displayMediumGrid(){

}

function displayHardGrid(){
    
}