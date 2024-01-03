function sayMyName() {   //function defination
    console.log("h");
    console.log("i");
    console.log("l");
    console.log("l");
    console.log("o");
    console.log("w");
}

sayMyName()    //to execture its reference

function addtwoNumbers(number1, number2){    //parameter when we define function
   console.log(number1 + number2);
}

addtwoNumbers(3,5);   //argument when we call function

function addtwoNumbers1(number1, number2){      //return ke baad kuch code excute nhi krtaa in that particular scope
   let result = number1 + number2
   return result
 }


 const result = addtwoNumbers1(3,5);
 console.log("result:" , result);


 function loginUserMessage(username){
    return `${username} just logged in`
 }

 console.log(loginUserMessage("mrunali"));

 function calculateCartPrice(...num1){   //rest operator 
        return num1
 }

 console.log(calculateCartPrice(200,400,500,2000))   //this value goes in array


 function calculateCartPrice2( val1, val2,...num1){    
    return num1
}

console.log(calculateCartPrice2(400,500,80,900))  //now it will return only 80 and 900 cozz 400 and 500 stored in val1 nd in val2 respectively nd after that every value strored in array

const user = {
    username: "hitesh",
    price: 199
}

function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
}

handleObject(user);

handleObject({
    username:"sam",
    price: 399
})


const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
     return getArray[1]
}

console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,400,600,900]));




    
