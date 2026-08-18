// Methods to declare objects:
// literals  & constructor



//singleton

//object literals

//creating objects

Object.create //this method creates singletons

const mySym = Symbol("turn left")//creating symbols

const firstObject = {
    name: "Ali",
    email: "ialiejaz123@google.com",    
    isLoggedIn: false,
    location: "chishtian",
    [mySym]: "turn left"

}

firstObject.location = "LHR"
firstObject.name = "ahmad"

Object.freeze(firstObject.name)// can freeze a single thing or a whole object.

firstObject.location = "ISB"
firstObject.name = "umar"

console.log(firstObject);

firstObject.greetings = function(){
    console.log(`Hello java user mr.${this.name}!`);// adding to object from outside
    
}
 console.log(firstObject);
 

