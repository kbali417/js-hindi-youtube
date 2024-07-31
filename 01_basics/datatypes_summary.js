// Primitive Data types

// 7 types : String, Number , boolean, null, Undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail;

let id = Symbol('123')
let anotherID = Symbol('123')
console.log(id === anotherID)

// const bigNumer = 2477358363568395n



//Reference (Non Primitive)

// Array , Objects, Functions

// const arr = ["shaktiman", "naagraj", "doga"];

// let obj = {
//     name: "Krishna",
//     age: 25
// }

// const myFunction = function(){
//     console.log("Hello World")
// }

// console.log(typeof id)

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Stack (Primitive) , Heap (Non-Primitive)

let channelName = "dailySnaps"
let anotherName = channelName
anotherName = "Krishna Balireddy"
console.log(anotherName)
console.log(channelName)

let userOne = {
    user: "user@gmail.com",
    upi: "user@ybl"
}

let userTwo = userOne
userTwo.user = "user2@gmail.com"
console.log(userOne.user)
console.log(userTwo.user)






