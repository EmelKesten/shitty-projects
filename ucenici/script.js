const ucenici = [
    {
        ime: "Hamza",
        prezime: "Agacevic",
        godinaRodjenja: 2008,
        daLiJeClanSekcije: false,
    },
    {
        ime: "Damir",
        prezime: "Basic",
        godinaRodjenja: 2007,
        daLiJeClanSekcije: true,
    },
    {
        ime: "Nadja",
        prezime: "Bradic",
        godinaRodjenja: 2008,
        daLiJeClanSekcije: true,
    },
    {
        ime: "Ernad",
        prezime: "cajo",
        godinaRodjenja: 2007,
        daLiJeClanSekcije: false,
    },
    {
        ime: "Amina",
        prezime: "Delic",
        godinaRodjenja: 2007,
        daLiJeClanSekcije: false,
    },
    {
        ime: "Amna",
        prezime: "Grabus",
        godinaRodjenja: 2007,
        daLiJeClanSekcije: true,
    },
    {
        ime: "Enes",
        prezime: "Grabus",
        godinaRodjenja: 2007,
        daLiJeClanSekcije: false,
    },
]

const minimumAge = 2008;
const clanoviSekcije = [];
const numbers = [];

for(let i = 0; i<ucenici.length; i++) {
    console.log(ucenici[i].ime);
}

for(let i = 0; i<ucenici.length; i++) {
    if(ucenici[i].godinaRodjenja < 2008){
    console.log(ucenici[i].ime)
    }
}

for(let i = 0; i<ucenici.length; i++) {
    if(ucenici[i].daLiJeClanSekcije === true){
        clanoviSekcije.push(ucenici[i].ime)
    }
}

for(let i = 0; i<ucenici.length; i++) {
    numbers.push(i + 1)
}

for(let i = 0; i<numbers.length; i++) {
    console.log(numbers[i] * 2)
}
