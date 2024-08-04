// arrays
const arr = [1,2,3,4,5,6,7]
const myHeroes = ["shaktiman","naagraj"]
const myArr2 = new Array(1,2,3,4)
arr.push(8)
arr.push(9)
arr.pop()
arr.unshift(9)
arr.shift()
console.log(arr.includes(9));
console.log(arr.indexOf(8));

console.log(arr);

const new_Array = arr.join()
console.log(typeof new_Array);
//slice , Splice
console.log("A ",arr);

const myn1 = arr.slice(1,3)
console.log("B", myn1);

const myn2 = arr.splice(1,3)
console.log("C", myn2);