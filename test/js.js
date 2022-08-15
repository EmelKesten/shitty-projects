/*const button = document.querySelector("#button");
const myDiv = document.getElementById(".myDiv");


function myFunc() {
    myDiv.classList.add('.myClass')
}

button.addEventListener('click' , myFunc);*/





/*const button = document.querySelector("#button");
const div1 = document.querySelector('.div1');
const div2 = document.querySelector('.div2');



const players = {
    playerOne: {
        isActive: true,
    },
    playerTwo:{
        isActive:false,
    }
}

function buttonPress(){
    if(players.playerOne.isActive){
        setTimeout(()=>{
            players.playerOne.isActive = false;
            players.playerTwo.isActive = true;
            div1.classList.remove('active');
            div2.classList.add('active');
        }, 500)
    }
    else{
        players.playerOne.isActive = true;
        players.playerTwo.isActive = false;
        div2.classList.remove('active')
        div1.classList.add('active')
    }
}

button.addEventListener('click' , buttonPress);*/



/*const str= "ana voli milovana";

//provjeriti da se string cita isto naprijed i nazad

function isStringSame(string){
    const noSpace = string.replace(/\s+/g, "")
    const arr = noSpace.split("");
    const reveresed = arr.reverse();
    const backToString = reveresed.join("");
    console.log(backToString)
    if(noSpace === backToString){
        return true
    }
    else{
        return false
    }
}
console.log(isStringSame(str))*/



// today is: day current time is: time


/*function dateAndTime(){
    const days = ["sunday", "monday", "tuesday", "wensday", "thursday", "friday", "saturday"]
    const d = new Date();
    let day = d.getDay();
    const dayy = days[day];
    let time = d.getHours() + ":" + d.getMinutes();
    return "Today is: " + dayy + ". " + "Current time is: " + time
}


setInterval(document.getElementById('myDiv').innerHTML = dateAndTime() ,1000)*/




//niz stringova onih koji su punoljetni


/*const obj = {
    ime: "Damir",
    prezime: "nmp",
    godiste: 2000,
}
const obj1 = {
    ime: "Damir1",
    prezime: "nmp",
    godiste: 2004,
} 
const obj2 = {
    ime: "Damir2",
    prezime: "nmp",
    godiste: 2006,
}
const obj3 = {
    ime: "Dami3",
    prezime: "nmp",
    godiste: 2003,
}
const obj4 = {
    ime: "Damir4",
    prezime: "nmp",
    godiste: 2005,
}*/

/*const arr = [obj, obj1, obj2, obj3, obj4]
const jelPunoljetan = (array) => {
    let imena = [];

    
    array.forEach(name => {
        if(name.godiste <= 2004){
            imena.push(name.ime)
        }
    });
    const nezz=array.filter(function(ime) {
            if(array.godiste <= 2004){
                return ime
            }
        })
    for(let i = 0; i<array.length; i++){
        if(array[i].godiste <= 2004){
            imena.push(array[i].ime)
        }
    }

    return nezz
}
console.log(jelPunoljetan(arr))*/

//arr.forEach((ime)=> console.log(ime))


/*const arr = [1, 2, 3, 4, 5, 6, 7, 8,];

const newarr = arr.map((num)=>{return num + 1})

console.log(newarr)

const bignum = newarr.find((num)=>{return num > 3})

console.log(bignum)

const findIndex = newarr.findIndex((num)=>{return num > 3})

console.log(findIndex)*/

const div = document.querySelector('.cont');

for(let i = 0; i<5; i++){
    div.innerHTML = "<p>hello"+ i+"</p>"
}

div.style.{
    width: "100px",
    height: "100px",
    background-color: "red"
}