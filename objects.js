//singleton if from with constructor
//Object.create


//symbol
const mySym = Symbol("key1")


//object literalss
const jsUser = {
    name : "mrunali",
    "full name": "mrunali kale",
    [mySym] : "myKey1",
    age:19,
    location: "pune",
    email: "mrunalikale76@gmail.com",
    lastLogic: ["monday", "saturday"],
    isLoggedIn : false
}

console.log(jsUser.email)
console.log(jsUser["email"])
console.log(jsUser["full name"])
console.log(jsUser[mySym])  //for symbol we only use square bracket

//to change value in object

jsUser.email = "mrunali@chatgpt.com"
//Object.freeze(jsUser) //can't change object value after this

jsUser.email = "hiteshmicrosoft@.com"
console.log(jsUser)

jsUser.greeting = function(){
    console.log("hello js user");
}

jsUser.greetingTwo  = function(){
    console.log(`hello js user, ${this.name}`); //this is used to refer object .object ke andar ki property mil jati hai 
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());

