const user = {
    username: "ahmad",
    age:34,

    welcomeMessage: function(){
        console.log(`Dear ${this.username}, welcome to our site!`);
        // console.log(this);
        
    }
}
    
user.welcomeMessage()
user.username = "saif"
user.welcomeMessage()

console.log(this);

function alpha(){
    let codeName = "romeo"
    console.log(this);
    // console.log(this.codeName);// only works in objects not executeable in functions
    
}

alpha()

const bravo = function alpha1(){
    let username = "ahmad khan"
    console.log(this.username);
    
}

bravo() //undefined

// *********************** Arrow functions ***********************

const charlie = () => {
    let username = "ahmad khan"
    console.log(this);
    
}

charlie()

// ********************** basic arrow function ****************

//() => {}

const addOne = (num1,num2) => {
    return num1 + num2
}
console.log(addOne(3,4));

// Implicit return function

const addTwo = (val1,val2) => val1 + val2

console.log(addTwo(3,6));

// Returning object

const returnObject = () => ({username: "ahmad"})

console.log(returnObject())