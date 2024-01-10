const descriptor = Object.getOwnPropertyDescriptor(Math , "PI") //tell hidden things abt object

console.log(descriptor);

//console.log(Math.PI);
//Math.PI = 5
//console.log(Math.PI);

const chai = {
    name:'ginger chai',
    price:250,
    isAvailble: true,

    orderChai : function(){
        console.log("chai nhi bani");
    }

}

console.log(Object.getOwnPropertyDescriptor(chai, "name")); //it will give properties description not object description

Object.defineProperties(chai, 'name',{
    writable: false,
    enumerable: true,

})

console.log(Object.getOwnPropertyDescriptor(chai, "name"))

for(const [key, value] of Object.entries(chai)){
    if (typeof value != 'function'){
        console.log(`${key} : ${value}`)
    }
   
}
   