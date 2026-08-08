const arr = [1,2,3,4,5]
console.log(arr[3]);

const names = ["ali","umer","usman"]
console.log(names[2].toUpperCase());

 //Methods of arrays

arr.push(0)
console.log(arr);

arr.pop(0)
console.log(arr);

arr.unshift(0)
console.log(arr);

arr.shift(0)
console.log(arr);



const myArr = arr.join()
console.log(myArr);

console.log(typeof arr); // output: object
console.log(typeof myArr); //output: string

// Slice


console.log(`Original array = ${arr}`);

console.log(`Sliced array = ${arr.slice(1,3)}`)
console.log(`After slice ${arr}`); //it does not manipulate the original array

// Splice

console.log(`Spliced array = ${arr.splice(1,3)}`)
console.log(`After splice ${arr}`); // it manpulates the original array.





