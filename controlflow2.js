const userEmail = "mrunali@kale"

if(userEmail){
    console.log("got user email");

}else{
    console.log("don't have user email");
}

//to check array is empty or not

//if(userEmail.length === 0){
//    console.log("array is empty")
//}

const emptyObj ={}

if(Object.keys(emptyObj).length === 0){
    console.log("object is empty");
}

//Nullish Coalescing Operator (??) : null umdefined

let val1;
//val1 = 5 ?? 10
val1 = null ?? 10  //check safety of null
val2 = undefined ?? 15
val3 = null ?? 10 ?? 20


console.log(val1);
console.log(val2);
console.log(val3); //writtem first value here o/p will be 10

//Terniary operator

//condtion ? true : false 

const  iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")