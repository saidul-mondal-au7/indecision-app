
class Person {
   constructor(name = 'Anonymous', age = 0) {
       this.name = name;
       this.age = age;
   }
   getGretting() {
    //    return 'okey mY NAME IS' + this.name + '!'
    return `Hllo , my name is ${this.name}!`
   }
   getDescription() {
       return `${this.name} is ${this.age} year(s) old.`
   }
}

class Student extends Person {
   constructor(name, age, major) {
       super(name, age);
        this.major = major;
   }
   hasMajor() {
       return !!this.major;
   }
   getDescription() {
      let description = super.getDescription();

      if(this.hasMajor()) {
          description = description += `Their major is ${this.major}`
      }

      return description;
   }
}

class Traveler extends Person {
    constructor(name, age, homelocation) {
        super(name, age);
        this.homelocation = homelocation;
    }
    getGretting() {
        let gretting = super.getGretting();

        if(this.homelocation) {
            gretting = gretting += `I'm visiting from ${this.homelocation}`
        }

        return gretting
    }
}

const me = new Traveler('Saidul Mondal', 32, 'Jamalpur');
console.log(me.getGretting());

const other = new Traveler();
console.log(other.getGretting())