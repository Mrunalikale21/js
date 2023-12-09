const marvelHeros = ["thor", "ironan", "spiderman"]
const dcHeros = ["superman", "flash", "batman"]

marvelHeros.push(dcHeros)  //it will add second array as a elemnt nad have idex 3 as whole nd further this elemnet at postion 3 contain again element

console.log(marvelHeros);

const allHeros = marvelHeros.concat(dcHeros)  //concate return new array
console.log(allHeros);

const allNewHeros = [...marvelHeros,...dcHeros]
console.log(allNewHeros);

const anotherArray = [1,2,3,[4,5,6],7,[6,7[4,5]]]

const realanotherArray = anotherArray.flat(Infinity)  //return array and sub array recursively to a give praticular depth in same aaray

console.log(realanotherArray);

console.log(Array.isArray("hitesh"))
console.log(Array.from("hitesh"))  //covert into array

console.log(Array.from({name : "hitesh"})) //it will give empty string cozz we have to specify what kind of array we want either key or etc.

let score1 = 100
let score2 = 200
let score3 = 300


console.log(Array.of(score1, score2, score3)); //return array from given element
