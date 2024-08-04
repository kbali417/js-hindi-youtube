// signleton 

// object create

// object lietrals

const mySym = Symbol("key1")


const jsUser = {
    name: "Krishna",
    age: 18,
    location: "Hyderabad",
    [mySym]: "key1",
    "fullname": "krishna balireddy",
    email: "krishna@gmail.com",
    loggedIn: true,
    loggedIndays: ["monday","saturday"]
}
console.log(jsUser.age);
console.log(jsUser["age"]);
console.log(jsUser.fullname);
console.log(jsUser[mySym])
jsUser.email = "bali@gmail.com"
console.log(jsUser.email);
// Object.freeze(jsUser)
jsUser.email= "balireddy@chatgpt.com"
console.log(jsUser);

jsUser.greetingsOne = function(){
    console.log("Hello Js user")
}
jsUser.greetingsTwo = function(){
    console.log(`Hello Js user , ${this.name}`)
}
console.log(jsUser.greetingsOne());
console.log(jsUser.greetingsTwo());






const myArray = ["h","i"]