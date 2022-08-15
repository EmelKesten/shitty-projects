const player = {
    points: 15,
    autoClickers: 0,
    price: 15,
    price1: 100
}

const button = document.querySelector("#button");
const text = document.querySelector("#text");

button.addEventListener("click", addPoints);
text.innerHTML = player.points

function addPoints(){
    Math.round(player.points++)
    text.innerHTML = player.points;
}

const autoClickerButton = document.querySelector("#auto")
const autoClickerText = document.querySelector("#howmany")
const autoClickerPrice = document.querySelector("#prices")
autoClickerButton.addEventListener("click", autoClickers)

function autoClickers(){
    if(player.points >= player.price){
        const returned = Math.round(player.points - player.price)
        player.autoClickers =+ 1
        player.points = returned
        text.innerHTML = player.points
        const sum = player.price * 1.15
        player.price = sum
        autoClickerText.innerHTML = player.autoClickers / 10
        autoClickerPrice.innerHTML = Math.round(player.price)
    }
    else{
        console.log("not enough")
    }
}

setInterval(function(){
    const sum = player.points + player.autoClickers
    player.points =+ sum
    text.innerHTML = player.points
},10000)
