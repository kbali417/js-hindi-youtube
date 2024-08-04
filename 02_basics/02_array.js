const marvelSuper_heroes = ["thor","ironMan","spiderMan"]
const dc_superHeroes = ["superman","flash","batman"]
// marvelSuper_heroes.push(...dc_superHeroes)

let allHeroes=marvelSuper_heroes.concat(dc_superHeroes)
// console.log(allHeroes);
const all_new_Heroes = [...marvelSuper_heroes,...dc_superHeroes]
console.log(all_new_Heroes);
const another_array = [1,2,3, [4,5,6],7,[6,7,[4,5]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);
console.log(Array.isArray("krishna"))
console.log(Array.from("Krishna"));
console.log(Array.from({name: "Krishna"}));  // intersting
let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3));





