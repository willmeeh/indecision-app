class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }

    getGretting() {
        return `Hi, i am ${this.name}!`;
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
        if (this.hasMajor()) {
            description += ` Their major is ${this.major}.`
        }
        return description
    }
}

class Traveler extends Person {

    constructor(name, age, homeLocation){
        super(name, age);
        this.homeLocation = homeLocation;
    }
    getGretting() {
        let message = super.getGretting();
        if (this.homeLocation) {
            message += ` I'm visiting from ${this.homeLocation}.`
        }
        return message;
    }

}

const me = new Student('William Mehler', 21, 'Computer Science');
console.log(me.getDescription())

const traveler = new Traveler('William Mehler', 21, 'Santa Cruz');
console.log(traveler.getGretting())

const other = new Student();
console.log(other.getDescription())

const otherTraveler = new Traveler(undefined, undefined, 'Some place');
console.log(otherTraveler.getGretting())