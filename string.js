const name = "mrunali"
const repoCount = 50

//console.log(name + repoCount + "value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('hitesh-hc-com')

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0,4) //last index include nhi hota hai
console.log(newString);

const anotherString = gameName.slice(-8,4) //- means its start from last either can give positive value
console.log(anotherString);

const newStringOne = "     hitesh    "
 console.log(newStringOne);
 console.log(newStringOne.trim());

 const url = "https://hitesh.com/%20choudhary"

 console.log(url.replace('%20', '-'))

 console.log(url.includes('hitesh'))

 console.log(gameName.split('-')); //split basis on - we can give any parameter