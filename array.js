//arrays

const myArr = [0,1,2,4,5,]
const myHeros = ["shaktiman", "naagraj"]

const myArr2 = new Array(1,2,3,4,5) 
console.log(myArr[0]);

//array methods

myArr.push(6)  //to add value
myArr.push(7) 

console.log(myArr);

myArr.pop()  //last value will be removed
console.log(myArr);

myArr.unshift(9);  //add value at starting of array
console.log(myArr);

myArr.shift();
console.log(myArr); //remove first valuee in array

console.log(myArr.includes(9));

console.log(myArr.indexOf(3));
console.log(myArr.indexOf(19)); //it is not exsist in array it will return -1

const newArr = myArr.join() //adds all element of araay into string

console.log(myArr);
console.log(newArr);
console.log( typeof newArr);

//slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1,3); //starting from index 1 nd ending to 2 not include element at 3rd position

console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1,3);  //it will includee element at 3rd position and remove that element from original array
console.log("C ", myArr);
console.log(myn2);


