// const snapchatUser = new Object() // Singelton object
const instaUser = {} //Non-singelton object


instaUser.id = "123XYZ",
instaUser.name = "Ahmad",
instaUser.isLoggedIn = false

//console.log(instaUser);


//Object in object

const fbUser = {
    email: "unknown@gmail.com",
    name: {
        officialName:{
            firstName: "ahmad",
            lastName: "khalil"

        },
        publicName:{
            name: "Big B"
        }
    }
}

// console.log(fbUser.name.officialName);

//const cmnObject = Object.assign({},instaUser,fbUser)
//const cmnObject = Object.assign(instaUser,fbUser)

const cmnObject = {...instaUser,...fbUser}// Spread method

//console.log(cmnObject);

// Different objects within a single array:

const ytUser = [
    {
        chanel_name: "abc",
        handle: "@abcuser"
    },
    {
        chanel_name: "xyz",
        handle: "@xyzuser"
    },
    {
        chanel_name: "john",
        handle: "@johndoe"
    },
]

// console.log(ytUser[1].handle);
// console.log(ytUser[2].chanel_name);

// access keys,values and entries within an object

console.log(Object.keys(instaUser));
console.log(Object.values(instaUser));
console.log(Object.entries(instaUser));

//check if a property exists:

console.log(fbUser.hasOwnProperty('email'));
