//new keyword

function multiplyBy5(num){
    return num*5

}

multiplyBy5.power = 2

console.log(multiplyBy5(5));
console.log(multiplyBy5.power);
console.log(multiplyBy5.prototype);

function createUser(username, score){
    this.username = username
    this.score = score

}

createUser.prototype.increment = function(){
    this.score++
}

createUser.prototype.printMe = function(){
    console.log(`price is ${this.score}`);
}

const chai = new createUser("chai", 25);
const tea = new createUser("tea",250);

chai.printMe()

//prototype(to link differnt objects)

//let myName = "hitesh     "

//console.log(myName.trueLength);

let myHeros = ["thor", "spiderman" ]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`spidy power is ${this.spiderman}`);
    }
}

Object.prototype.hitesh = function(){
    console.log(`hitesh is present in all objects`);
}

Array.prototype.heyHitesh = function(){
    console.log(`hitesh says hello`);

}

//heroPower.hitesh()
myHeros.hitesh()
myHeros.heyHitesh()
//heroPower.heyHitesh() not run

//inheritance

const user = {
    name: "chai",
    email: "chai@goggle.com"

}

const Teacher = {
    makeVideo: true

}

const TeachingSupport = {
    isAvailable: false

}

const TASupport = {
    makeAssignment: 'js assignment',
    fulltime: true,
    // __proto__:TeachingSupport

}

//teacher.__proto__ = user


//modern syntax

Object.setPrototypeOf(TeachingSupport, Teacher)

let anotheruserName = "chaiaurcode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    //console.log(`${this.name}`);
    console.log(`true length is: ${this.trim().length}`);

}

anotheruserName.trueLength()
"hitesh".trueLength()
"iceTea".trueLength()





