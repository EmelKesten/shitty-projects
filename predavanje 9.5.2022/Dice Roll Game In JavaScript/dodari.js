
let name = "john";
const names = ["ivan", "raos", "jim", "carrot"]

const ucenik = {
    razred: 4,
    ime: "ivan",
    prezime: "rados",
    daLiUci: ucenje(), 
}

function ucenje(){
    return true;
}

const days = ["ponedjeljak", "utorak", "srijeda", "cetvratak", "petak", "subota", "nedjelja"]

function printDays(days){
    for(let i = 0; i<days.length; i++){
        console.log(days[i])
    }
    const randomNumber = Math.floor(Math.random() * days.length)
    if(randomNumber == days.length - 1 || randomNumber == days.length - 2){
        console.log("ucim")
    }
    else{
    console.log( "idem u skolu")
    
}
}

printDays(days)
