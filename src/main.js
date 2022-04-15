import { Tamagotchi } from "./modules/tamagotchi.js";


document.querySelector("#Submit").addEventListener("click", startMyTama);


//IMPORT IMAGE
/* const imgCow = document.querySelector('#cow');
console.log(import.meta.url);
const cowImgUrl = new URL("./img/cow.png", import.meta.url);
document.body.append(imgCow);
imgCow.src = cowImgUrl.href; 

const imgDog = document.querySelector('#dog');
console.log(import.meta.url);
const dogImgUrl = new URL("./img/dog.png", import.meta.url);
document.body.append(imgDog);
imgDog.src = dogImgUrl.href; 

const imgHorse = document.querySelector('#horse');
console.log(import.meta.url);
const horseImgUrl = new URL("./img/horse.png", import.meta.url);
document.body.append(imgHorse);
imgHorse.src = horseImgUrl.href; */ 



function startMyTama(e) {
    e.preventDefault();

    let TamaName = document.querySelector("#TamaName").value;
    let YourName = document.querySelector("#YourName").value;
    let TamaType = document.querySelector("#Type").value;

    let myTamagotchi = new Tamagotchi(TamaName);


    
    alert("INSTRUCTIONS: TO FEED TAMA --> PRESS FEED. TO PLAY WITH TAMA --> PRESS PLAY. TAMAS HAPPINESS AND HUNGER LEVEL WILL CHANGE DURING THE GAME. KEEP TAMA ALIVE! :)");

    document.querySelector("#pYourName").innerText = YourName;
    document.querySelector("#pTamaName").innerText = TamaName;
    document.querySelector("#pType").innerText = TamaType;
    document.querySelector("#pHunger").innerText = myTamagotchi.getHungerLevel();
    document.querySelector("#pHappy").innerText = myTamagotchi.getHappinessLevel();

    myTamagotchi.hungerDrain();
    myTamagotchi.happinessDrain()

    document.querySelector("#feed").addEventListener("click", feedTama);
    document.querySelector("#play").addEventListener("click", playTama);

    function feedTama() {
        myTamagotchi.feed();
        document.querySelector("#pHunger").innerText = myTamagotchi.getHungerLevel();
        
    }

    console.log(myTamagotchi.getHungerLevel());
    console.log(myTamagotchi.hungerDrain());
    console.log(myTamagotchi.happinessDrain());

        
    

    function playTama() {
        myTamagotchi.play();
        document.querySelector("#pHappy").innerText = myTamagotchi.getHappinessLevel();
    }

       
    myTamagotchi.isTamaDead();
    



}





