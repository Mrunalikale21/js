const user = {
    username : "hitesh",
    loginCount: 8,
    signedIn: true,

    getuserDetails: function(){
        //console.log("Got user details from database");
        console.log(`username: ${this.username}`);
    }

}

console.log(user.username);
console.log(user.getuserDetails());

//constructor function

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greetings = function(){
        console.log(`welcome ${this.username}`)
    }

    return this
}

const userOne = new User("mrunali", 12, true)
const userTwo = new User("chai aur code", 11, false) //if we dont use new keyword the values will rewrite
console.log(userOne);
console.log(userTwo);