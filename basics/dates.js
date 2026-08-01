// let todayDate = new Date()
// console.table({
//     "typeOf" : typeof todayDate,
//     "toString()" : todayDate.toString(),
//     "toDateString()" : todayDate.toDateString(),
//     "toISOString()" : todayDate.toISOString(),
//     "toJSON()" : todayDate.toJSON(),
//     "getDate" : todayDate.getDate(),
//     "toLocaleString" : todayDate.toLocaleString(),
//     "toLocaleDateString" : todayDate.toLocaleDateString(),
//     "toLocaleTimeString" : todayDate.toLocaleTimeString(),
//     "toTimeString" : todayDate.toTimeString(),
//     "toUTCString" : todayDate.toUTCString(),
    
// })

// let newDate = new Date(2025, 5 , 10)
// // console.log(newDate.toDateString());

// // let todayDate = new Date()
// console.table({
//     "typeOf" : typeof newDate,
//     "toString()" : newDate.toString(),
//     "toDateString()" : newDate.toDateString(),
//     "toISOString()" : newDate.toISOString(),
//     "toJSON()" : newDate.toJSON(),
//     "getDate" : newDate.getDate(),
//     "toLocaleString('en-PK')" : newDate.toLocaleString('en-PK'),
//     "toLocaleDateString" : newDate.toLocaleDateString(),
//     "toLocaleTimeString" : newDate.toLocaleTimeString(),
//     "toTimeString" : newDate.toTimeString(),
//     "toUTCString" : newDate.toUTCString(),
    
// })

// let dateSyntax = new Date(2025,5,10) // (YYYY/MM/DD)
// let dateSyntax2 = new Date("2025-5-10") // (DD/MM/YYYY)

// console.table({
//    "YYYY/MM/DD"  : dateSyntax.toString(),
//     "DD/MM/YYYY" : dateSyntax2.toDateString()
// })


let myTime = Date.now()
let oldTime = new Date("10-10-2010")

// console.log(myTime);
// console.log(oldTime.getTime());
// console.log(oldTime.toLocaleString());

//Converting milliseconds to seconds

console.log(myTime)
console.log(myTime/1000)
console.log(Math.floor(myTime/1000));

let thisDate = new Date()

console.log(thisDate);
console.log(thisDate.getDay());
console.log(thisDate.getMonth()+1);

console.log(`This is the ${thisDate.getDay()}th day of the week and ${thisDate.getMonth()+1}th month of the year.`)

console.log(thisDate.toLocaleString('dafault',{
    weekday: 'long'
}));
