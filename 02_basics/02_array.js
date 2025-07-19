const marvel_heros = ["thor", "ironman", "cap-america", "hulk"]
const dc_heros = ["superman", "batman", "wonder-woman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros[4][0]);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

const allHeros = [...marvel_heros, ...dc_heros] // ... => spread operators containe more array value to join two or more arrays.
// console.log(allHeros);

const another_array = [1, 2, 3, 4, [5, 6], 7, [8, 9, [10, [11, 12]]]]
const real_aonther_array = another_array.flat(2)
// console.log(real_aonther_array);


// console.log(Array.isArray(another_array));
// console.log(Array.from("Sameed"));
// console.log(Array.from({name: "Sameed"})); // Interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));







