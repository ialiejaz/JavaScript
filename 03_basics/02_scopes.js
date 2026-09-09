if (true){
    let a = 10
    const b = 20
    var c = 30
    //return
}

console.log(a) // will not execute outside the block scope
console.log(b); // will not execute outside the block scope
console.log(c); // will execute because of var wich is not good

// block scope code should remain inside the block while the global scope code.

if (true){
    let a = 20
    const b = 40
    console.log("inner: ",a); // will execute inner (block scope) code
    
}
let a = 50
 console.log("Outer: ",a) // will execute (global scope) code


function outer(){  // parent function: cannot access value in child function.
    const name = "ahmad"

    function inner(){   //child function: can access the value in parent function.
        const location = "LHR"
        console.log(name);
        
    }

    console.log(location); // cannot acces inner scope in outer place
    inner()
    
}
//outer()

if (true){
    const username = "uzair"

    if(username === "uzair"){
        const age = " twenty two"
        console.log(username + age);
    }

    console.log(age) // cannot acces value inside scope in outer place
    
}

console.log(username) // cannot acces value inside scope in outer place

// ********************** IMPORTANT *************************
console.log(addOne(4)) // can be placed before function
function addOne(num){
    return num + 1
}
console.log(addOne(4))

console.log(addTwo(5)) // cannot acces before the function because it is in a variable

const addTwo = function(num){ //variables are so powerfull in JS so can hold anything like fuctions
    return num + 2
}
console.log(addTwo(5))

