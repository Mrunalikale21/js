class User{
    constructor(email, password){
        this.email = email;
        this.password = password
    }


    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
        this._email = value
    }

    get password(){
         return this._password.toUpperCase()    //if we are getting value then we have to set it to
    }

    set password(value){
        this._password = value
    }

}


const hitesh = new User("hitesh@itesh.ai", "abc")
console.log(hitesh.password);
console.log(hitesh.email);


//old method for getter nd setter  function based syntaxx

function User1(email1, password1){
    this._email1 = email1;
    this._password1 = password1

    Object.defineProperty(this, 'email',{
        get: function(){
            return this.email.toUpperCase()
    },


        set : function(value){
            this.email1 = value
        }
    })
}


const chai = new User("chai@chai.com", "chai")

console.log(chai.email)


//object based syntaxx

const User3 = {
    _email2: 'h@hc.com',
    _password2: "abc",

    get _email2(){
        return this._email2.toUpperCase()

    },

    set _email2(value){
        this._email2 = value

    }
}

const tea = Object.create (User)       //factory function
console.log(tea.email)

//_ shows private property

