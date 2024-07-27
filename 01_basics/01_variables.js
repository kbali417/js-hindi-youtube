const accountId = 23485859
let accountEmail = "krishna@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState
// accountId = 23 //not allowed
accountEmail = "raju@gmail.com"
accountPassword = "krishna"
accountCity = "Mumbai"

/*
Prefer not use var beacuse of issue in block scope and functional scope

*/

console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity, accountState])