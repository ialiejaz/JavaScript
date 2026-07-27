const score = 100
console.log(score);
console.log(score.toFixed(3));

const totalScore = new Number(150)
const displayScore = totalScore.toString()

console.log(totalScore)
console.log(typeof(displayScore))

const otherNumber = 123.876
console.log(otherNumber.toPrecision(4));

const balance = 100000000;
console.log(balance.toLocaleString('en-PK'))


// *********************************** MATHS ****************************************

const length = 126.345
console.table({
    Input: length,
    "Math.round" : Math.round(length),
    "Math.ceil" : Math.ceil(length),
    "Math.floor" : Math.floor(length),
    "Math.sqrt" : Math.sqrt(length),
    "Math.abs" : Math.abs(length)    
})

// ************************* Random method() ******************************

console.log(Math.random())

console.log(Math.random() * 10 + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random()*(max - min + 1)) + min)

