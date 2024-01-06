class User{
    constructor(username){
        this.username = username

    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username,email,password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`a new course was added by ${this.username}`);
    }

}

const chai = new Teacher("chai", "chai@gmail.com", "123")

chai.addCourse()

const masalaChai = new User("masalaChai")

masalaChai.logMe()

console.log(chai instanceof Teacher);

class User2 {
    constructor(username){
        this.username = username
    }

    logme(){
        console.log(`username : ${this.user}`)
   
    }
    static createId(){         //it will limit the exection
        return `123`
    }
}

const hitesh = new User2("hitesh")
//console.log(hitesh.createId())

class Teacher1 extends User2 {
    constructor(username, email1){
        super(username)
        this.email1 = email1
    }
}

const iphone = new Teacher1("iphone", "iphone@gmail.com")
//iphone.logMe();
console.log(iphone.createId());
