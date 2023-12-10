const user =  {
      username : "hitesh",
      price: 999,

      welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
      }

}

//this refer to  current context  //when run is browser subse jayada global object is window object

user.welcomeMessage()
user.username = "sam"
user.welcomeMessage()

//console.log(this);

//function chai(){
//    let username = "hitesh"
//    console.log(this.username);   //function ke andar aake this use nhi kr sakte
//}

//chai()

//arrow function

const chai = () => {
    let username = "hitesh"
    console.log(this.username);
}

chai()

const addTwo = (num1, num2) => {
    return num1 + num2

}    //this is explicite return cozz we use return word

//implicite return form return likhne ki jarurat nhi hai kyuki aek hi line ka statement hai

//const addTwo1 = (num1, num2) =>  num1 + num2


const addTwo1 = (num1, num2) =>  (num1 + num2)

const addTwo3 = (num1,num2) => ({username: "hitesh"})  //to declare object

console.log(addTwo(3,4))

const myArray = [1,2,3,4,5]

myArray.forEach(() => {});