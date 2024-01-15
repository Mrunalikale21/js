//singleton declare with help of constructor

const tinderUser = new Object()

tinderUser.id = "123abc"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false

console.log(tinderUser);

const regularUser = {
    email: "sohan@gmail.com",
    fullname:{
        userfullname:{
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {
    1:"a", 2: "b"
}

const obj2 = {
    3:"a", 4: "b"
}

const obj3 = {obj1, obj2}
console.log(obj3);  //1st way

const obj4 = Object.assign({},obj1,obj2)  //{}is target nd all obj are source it will store in single object 2nd way
console.log(obj4);

const obj5 = {...obj1,...obj2}
console.log(obj5);  //3rd way

const users = [
    {
        id:1,
        email:"mru@"
    },

    {
        id:1,
        email:"mru@"
    },
    
    {
        id:1,
        email:"mru@"
    },
    
    {

    },

    {

    }
    
   
]

users[1].email

console.log(tinderUser)

console.log(Object.keys(tinderUser));  //we got array

console.log(Object.values(tinderUser));  //we got array
console.log(Object.entries(tinderUser));  //we got array of key and value

console.log(tinderUser.hasOwnProperty('isLoggedIn'));

