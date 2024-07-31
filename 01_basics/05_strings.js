const name = "Krishna"
const repoCount = 50
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

const gameName = new String("hu-ka-shi")
console.log(gameName[3])
console.log(gameName.__proto__)
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf(2))

const newString = gameName.substring(1,4)
console.log(newString)
const anotherString = gameName.slice(-7,-2)
console.log(anotherString)
const newOne = "   krishnaBalireddy.   "
console.log(newOne)
console.log(newOne.trim())

const url = "https://hitesh.com/hitesh%20choudary"
console.log(url.replace("%20",'-'));
console.log(url.includes('sundar'))
console.log(gameName.split('-'))