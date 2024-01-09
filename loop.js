// for of

const arr = [1,2,3,4,5]

for (const num of arr) {
    console.log(num);
}

const greetings = "hello world!"
for(const greet of greetings){
   console.log(`each char is ${greet}`)

}

//maps

const map = new Map()
map.set('IN', "India" )
map.set('USA', "United states of america" )
map.set('Fr', "France" )   //holds unique values nd in sequence

console.log(map);

for (const [key, value] of map) {
    console.log(key, ':-', value);
}


const myObject = {
    'game1' : 'NFS',
    'game2' : 'spiderman'
}

//for (const [key, value] of map) {
//    console.log(key, ':-', value);
//}         not applicable on object

const myObject2 = {
    js: 'javascript',
    cpp: 'c++',
    rb: "ruby",
    swift: "swift by apple"
}

//used for iterating objects

for (const key in myObject2) {
    console.log(`${key} shortcut is for ${myObject2[key]}`);
        
    }

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    console.log(programming[key]);

}

//for of gives us values mainly
//for in gives us keys

//for (const key in map) {
//   console.log(key);
//}

//map is not iterable


