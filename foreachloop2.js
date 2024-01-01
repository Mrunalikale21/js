//const coding = ["js", "ruby". "java", "python" , "cpp"]

//const values = coding.forEach((item) =>{
//     console.log(item);
//      return item
//})

//console.log(values);  //not return value


const myNums = [1,2,3,4,5,6,7,8,9,10]

const newNums = myNums.filter( (num) => num > 4)
console.log(newNums);

//if we put above in scope then we have to right return for obtaining values

const newNums2 = [1,2,3,4,5,6,7,8,9,10]

const newNums3 = []

newNums2.forEach( (num) => {
    if(num > 4){
        newNums3.push(num)
    }

})

console.log(newNums3);