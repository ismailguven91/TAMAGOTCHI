export class Tamagotchi {
    #hungerLevel = 5;
    #happinessLevel = 5;
    #name;
    #type;
  
    constructor(name, type) {
      this.#name = name;
      this.#type = type;
    }
  
    getName(){
      return this.#name
    }
    getType(){
        return this.#type
    }
  
    getHungerLevel(){
      return this.#hungerLevel;
    }
  
    getHappinessLevel(){
      return this.#happinessLevel;
    }
  
    hungerDrain() {
      setInterval(() => {
        this.#hungerLevel += 1;
        document.querySelector("#pHunger").innerText = this.#hungerLevel;
      }, 1000*3);
    }
  
    happinessDrain() {
      setInterval(() => {
        this.#happinessLevel -= 1;
        document.querySelector("#pHappy").innerText = this.#happinessLevel;
      }, 1000*3);
    }
  
    feed() {
        this.#hungerLevel -= 1;
        console.log(this.feed);

    }
  
    play() {
      this.#happinessLevel += 1;
    }
  
    isTamaDead() {
      if ((this.#happinessLevel == 0 || this.#hungerLevel == 10)) {
        return true;
        
      }
      else {
        return false;
      }
    }
    
  }