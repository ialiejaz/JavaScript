//Destructuring

// occurs in both arrays and objects

//object desutructuring


const course = {
    courseName : "nodeJs crash course",
    instructorName: "ABC",
    price: "1000"
}

console.log(course.courseName); // ok but not ideal

const {courseName} = course// ideal method
const {courseName:name} = course// for ease
console.log(name);


