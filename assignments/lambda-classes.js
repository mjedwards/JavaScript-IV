// CODE here for your Lambda Classes
class Grandpa {
    constructor(name, pob, age, language,gender) {
      this.name = name;
      this.pob = pob;
      this.age = age;
      this.language = language;
      this.gender = gender;
    }
    speak() {
      console.log(`${this.name} is a Bajan, who speaks ${this.language}! ${this.gender} are ${this.age} years old, and they were born in ${this.pob}.`);
    }
  }

  class Parent extends Grandpa {
    constructor(name, pob, age, language,gender) {
      super(name, pob, age, language,gender);
    }
  
    speak() {
      console.log(`${this.name} is Bajan and English who speaks ${this.language}! ${this.gender} is ${this.age} years old, and they were born in ${this.pob}.`);
    }
  }
  
  class Child extends Parent {
    constructor(name, pob, age, language, gender) {
        super(name, pob, age, language, gender);
    }
  
    speak() {
      console.log(`${this.name} is Bajan, Engish, and American who speaks ${this.language}! ${this.gender} is ${this.age} years old, and they were born in ${this.pob}.`);
    }
  }

  const mother = new Parent('Angeline', 'Barbados', 40, 'english', 'she');
const me = new Child('Jair', 'America', 27, 'english', 'he');

console.log(mother);
console.log(me);
mother.speak();
me.speak();
