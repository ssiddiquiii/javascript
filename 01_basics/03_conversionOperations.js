// let score = 33
// let score = "33abc" NaN
let score = null // 0, number (typeof)

// console.log(typeof score);
// console.log(typeof(score));

let valueInNumber = Number(score)
// console.log(typeof valueInNumber); // number
// console.log(valueInNumber); // NaN

// "33" => 33
// "33abc" => NaN
// null => 0
// undefined => NaN
// true => 1, false => 0

let isLoggedIn = "sameed"
let booleanLoggedIn = Boolean(isLoggedIn)
console.log(booleanLoggedIn);

// 1 => true, 0 => fasle
// "" => false, "sameed" => true

let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);
