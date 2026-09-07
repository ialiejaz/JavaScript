if (true){
    let a = 10
    const b = 20
    var c = 30
    //return
}

//console.log(a) // will not execute outside the block scope
//console.log(b); // will not execute outside the block scope
console.log(c); // will execute because of var wich is not good

// block scope code should remain inside the block while the global scope code.

if (true){
    let a = 20
    const b = 40
    console.log("inner: ",a); // will execute inner (block scope) code
    
}
let a = 50
console.log("Outer: ",a) // will execute (global scope) code
