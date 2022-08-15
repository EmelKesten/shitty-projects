const score1 = document.getElementById("current-0")
const score2 = document.getElementById("current-1")
const current1 = document.getElementById("score-0")
const current2 = document.getElementById("score-1")
const button = document.querySelector(".btn-roll")
const dice1 = document.getElementById("dice1")
const dice2 = document.querySelector("#dice2")
const players1 = document.querySelector(".player-0-panel")
const players2 = document.querySelector(".player-1-panel")
const hold = document.querySelector(".btn-hold")
const newgame = document.querySelector(".btn-new")
const goal = document.querySelector("#winningScore")
const click = document.querySelector("#click")
const box = document.querySelector("#hello")

click.addEventListener("click", myDays)

const player = {
    playerOne: {
        points: 0,
        activity: true
    },
    playerTwo: {
        points: 0,
        activity: false
    }
}

function diceRoll() {
    const random = Math.floor(Math.random() * 6 + 1);
    const random2 = Math.floor(Math.random() * 6 + 1);
    if(player.playerOne.activity){
        dice1.src = "dice-" + random + ".png"
        dice2.src = "dice-" + random2 + ".png"
         if(random === 1 || random2 === 1){
            setPlayerTwo()
        }
        else{
            let sum = 0;
            sum = random + random2;
            current1.innerHTML = sum
        player.playerOne.points = player.playerOne.points + random + random2
        score1.innerHTML = player.playerOne.points;
        }
    }
    else{
        dice1.src = "dice-" + random + ".png"
        dice2.src = "dice-" + random2 + ".png"
         if(random === 1 || random2 === 1){
             setPlayerOne()
        }
        else{
            let sum = 0;
            sum = random + random2;
            current2.innerHTML = sum
        player.playerTwo.points = player.playerTwo.points + random + random2
        score2.innerHTML = player.playerTwo.points;
        }
    }
}

function holdBtn(){
    if(player.playerOne.activity){
        players1.classList.remove("active")
    players2.classList.add("active")
    player.playerOne.activity = false;
    player.playerTwo.activity = true;
    }
    else{
        players2.classList.remove("active")
             players1.classList.add("active")
             player.playerTwo.activity = false;
             player.playerOne.activity = true;
    }
}

function newGame(){
    setPlayerTwo()
    setPlayerOne()
}

function setPlayerTwo(){
    player.playerOne.points = 0
    score1.innerHTML = player.playerOne.points;
    players1.classList.remove("active")
    players2.classList.add("active")
    player.playerOne.activity = false;
    player.playerTwo.activity = true;
    current1.innerHTML = 0
}
function setPlayerOne(){
    player.playerTwo.points = 0
             score2.innerHTML = player.playerTwo.points;
             players2.classList.remove("active")
             players1.classList.add("active")
             player.playerTwo.activity = false;
             player.playerOne.activity = true; 
             current2.innerHTML = 0
}

button.addEventListener("click", diceRoll)
hold.addEventListener("click", holdBtn)
newgame.addEventListener("click", newGame)

const str = "kocka";
function myFunction(string){
    const arr = Array.from(string);
    const text = arr.join("")
    const arra = text.replace(/\s+/g, "");

    const arr2 = arr.reverse();
    const text2 = arr2.join("")
    const arra2 = text2.replace(/\s+/g, "")

    if(arra === arra2){
        console.log("dobro je")
    }
    else{
        console.log("nije")
    }
}

myFunction(str)
