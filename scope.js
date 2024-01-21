let a = 300 //this a is declared globally
const b = 20
var c = 30 

//console.log(a);
//console.log(b);
//console.log(c);

if(true){
    let a = 10
    const d = 20
    console.log("inner:", a);  //this a is declared in block scop

}

console.log(a);

function one (){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    //console.log(website);

    two()
}

//one()

if(true){
    const username = "hitesh"
    if(username === "hitesh"){
        const website = "youtube"
        console.log(username + website);
    }
    //console.log(website);  //it will not run because define out of scope
}
//console.log(username); not in scope;

function addone(value){
    return num + 1

}

addone(5)

const addTwo = function(num){
    return num + 2

}

addTwo(5)
