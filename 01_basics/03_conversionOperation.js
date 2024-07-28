let score = ""
console.log(typeof score)
console.log(typeof(score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

// conversation  to Number
// "33" => 33
// "33abc" => NAN
// true => 1 ; false => 0
//null => 0
//undefined => NAN
// ""  => 0

let loggedIn = "krishna"
let booleanIsLoggedIn = Boolean(loggedIn)
console.log(booleanIsLoggedIn);

//conversion to boolean
//"" => false
// 1 => true
// 0 => false

let someNumber = 33
let stringNumber = String(someNumber)
console.log(typeof stringNumber);
console.log(stringNumber);

//operations
let value = 3
let negativeValue = -value
console.log(negativeValue)

let str1 = "Krishna"
let str2 = " Balireddy"
let str3 = str1 + str2
console.log(str3);

console.log("1" + 2 + 2)
console.log(2 + "1");
console.log(1 + 2 + "2")

let gameCounter = 1000
gameCounter++
console.log(gameCounter);
