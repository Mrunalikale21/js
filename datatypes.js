"use strict"; //treat all js node as newer version

//alert(3+3) // we are using node js , not browser

console.log(3+3) //code readability
console.log("mrunali")

//null => empty value
console.log(typeof null); //object
console.log(typeof undefined); //undefined

let score = "33abc"
console.log(typeof score);
console.log(typeof(score));//method

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

let isLoggedIn = 1

let booleansIsLoggedIn = Boolean(isLoggedIn)
console.log(booleansIsLoggedIn);

//"" => false
// "hitesh" => true

let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);


//non-premitive
//call by reference
const hero = ["shaktiman" , "naagraj", "dogaa"]; //array 

let myObj = {
    name : "mrunali",
    age: 19,
}

const myfunction = function(){
    console.log("hello world");
}

console.log(typeof myfunction); //it returns fuction but called as object function

let myYoutubename = "mrunalikale"

let anothername = myYoutubename
anothername = "chaiaurcode"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "user@gmail.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "mrunali@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);
//change in actual value thus above have same o/p



