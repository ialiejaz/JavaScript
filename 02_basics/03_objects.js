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

// JSON Format is basically an object OR object in object or objects in an array

// it stands for JavaScript Object Notation (JSON), and is needed in every language for api handling

{
    "name":"ahamad",
    "age":"21",
    "subject": "DSA"
}
