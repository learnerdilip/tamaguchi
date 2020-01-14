class Tamagotchi {
  constructor(name) {
    this.name = name;
    this.hunger = 3;  
    this.happiness = 4; 
    this.bracelet = false;
    this.discipline = 5;
    this.age = 3;
    this.weight= 15;
    this.isHatched = false;
    this.isIll = false;
    this.isAlive = true;
    this.numberOfPoops = 1;
    this.lifeCycle = 'baby'; //baby,child,teen,adult(age 3,6,9,12)
    this.isPottyTrained = false;
    this.gender = 'm';
    this.family = 'bulldog';
    this.date = 3;
  }
  hatch() {
    this.isHatched = true
    displayStats()
  }
  poop() {
    this.numberOfPoops += 1
    this.hunger += 1
    displayStats()
  }
  toilet() {
    this.numberOfPoops = 0
    this.isPottyTrained = true
    displayStats()
  }
  feed(food) {
    if(food === 'meal') {
      this.hunger--
    } else if (food === 'snack') {
      this.hunger-- 
      let ill = Math.floor(Math.random()*2)
      if(this.ill == 0) {
        isIll = true;
      }
    }
    displayStats()
  }
  grow() {
    this.age += 1
    if(this.age <= 1) {
      this.lifeCycle = 'baby'
    } else if(1 < this.age <= 3) {
      this.lifeCycle = 'child'
    } else if(3 < this.age <= 7) {
      this.lifeCycle = 'teen'
    } else if(7 < this.age) {
      this.lifeCycle = 'adult'
    }
    displayStats()
  }
  scold() {
    this.discipline += 1
    this.happiness -= 1
    displayStats()
  }
  play() {
    let dogGuess = Math.floor(Math.random()*2)
    let ourGuess = Math.floor(Math.random()*2)
    console.log(ourGuess,dogGuess)
    if(dogGuess === ourGuess) {
      this.happiness +=1
    }
    displayStats()
  }
}

const hond = new Tamagotchi('Kutta')
console.log(hond)

// functions check
// hond.play()
// hond.scold()
// hond.grow()
// hond.feed('snack')
// console.log(hond.isIll)
// console.log(hond)

document.querySelector('#hatch').addEventListener('click',() => hond.hatch())
document.querySelector('#poop').addEventListener('click',() => hond.poop())
document.querySelector('#toilet').addEventListener('click',() => hond.toilet())
document.querySelector('#feed').addEventListener('click',() => hond.feed('snack'))
document.querySelector('#grow').addEventListener('click',() => hond.grow())
document.querySelector('#scold').addEventListener('click',() => hond.scold())
document.querySelector('#play').addEventListener('click',() => hond.play())


function displayStats() {
  const properties = ["name","happiness","hunger","age","isHatched","isIll","numberOfPoops","lifeCycle","gender","family"]
  properties.forEach(property => {
    document.querySelector(`#${property}`).innerText = `${property}: ${hond[property]}`
  })
} 
