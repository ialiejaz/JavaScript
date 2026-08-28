// Function

function addTwoNumbers(Number1,Number2){
    console.log(Number1 + Number2);
    return result //no code after it will run in the block
}
//addTwoNumbers(19,29)
//  OR
const result = addTwoNumbers(19,29)//storing in a variable

console.log(result);





function checkStatus(username){

    const inputElement = document.getElementById("input");
    const resultDisplay = document.getElementById("result");

    resultDisplay.innerText = "";


    if(username === undefined ){
        resultDisplay.innerText = "please enter the username first!"
        
        
    
 }if(username !== "ali"){
    resultDisplay.innerText = "user is active"
 }
}





// Method 2

function checkStatus(username = "abc"){
    if(!username){
    return`Enter a user name.`
}else{
    return`${username} is active.`
}
}

console.log(checkStatus("ali"));

function cartBill(...bill1){
    return bill1;
}

console.log(cartBill(100,200,300,400,500,600));

// Passing objects in functions:

const userProfile = {
    username: "ahmad",
    age: 26
}

function handleProfile(anyProfile){
    console.log(`The username is ${anyProfile.username} and age is ${anyProfile.age}.`);
    
}

handleProfile(userProfile)

// Directly passing object

handleProfile({
    username: "amjad",
    age:41
})

// Passing array

const newArray = [10,20,30,40,50]

function arrayHandling(anyArray){
    console.log(`${anyArray[2] }`);
    return anyArray[3]
    
}
    console.log(arrayHandling(newArray))

// Directly passng array

console.log(arrayHandling([100,3,,44,55])) 