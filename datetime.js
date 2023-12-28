//dates

let myDate = new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate); // object

let myCreatedDate = new Date(2023, 0 , 23); //months start from 0 in js
let myCreatedDate1 = new Date(2023, 0 , 23, 5, 3); //months start from 0 in js
 
console.log(myCreatedDate.toDateString());
console.log(myCreatedDate1.toLocaleString()); //it will show time too

let myCreatedDate3 = new Date("2023-01-14"); //in this format date month start from 1
console.log(myCreatedDate3.toLocaleString());

let myCreatedDate2 = new Date("01-14-2023");
console.log(myCreatedDate2.toLocaleString());

let myTimeStamp = Date.now()

console.log(myTimeStamp); //gives value in milisecond
console.log(myCreatedDate.getTime());

console.log(Math.floor(Date.now()/1000)); //gives value in second

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getMonth() + 1); //for not having confusion

newDate.toLocaleString('default',{
    weekday: "long",
})


