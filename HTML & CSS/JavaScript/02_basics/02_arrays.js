// ++++++++++++++++++++++++ Array part 2 +++++++++++++++++++++++++++++

const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)
// const allHeros = marvel_heros.concat(dc_heros)  // it will not add dc_heros as an array in marvel_heros
// console.log(allHeros)  // it will add dc_heros as an array in marvel_heros
// console.log(marvel_heros[3][1]);

const all_new_heros = [...marvel_heros, ...dc_heros]
// console.log(all_new_heros);

const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_another_array = anotherArray.flat(Infinity)
// console.log(real_another_array);

// console.log(Array.isArray("Pragyesh"))
// console.log(Array.from("Pragyesh"))
// console.log(Array.from({ name: "pragyesh" }))  // interesting case - it will not convert object to array, we have to specify the key or values to convert it to array

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3))  // it will convert the values to array;