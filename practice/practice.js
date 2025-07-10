// ============ Chapter: Variables conts, let and var 

const accountId = 19347
let accountEmail = "ssiddiqui@google.com"
let accountPassword = 1022
accountCity = "Karachi"
let accountState;

// modify variables with changes values

{

} // scope


// accounId = 1122 // not allowed
accountEmail = "ss@google.com"
accountPassword = 1111
accountCity = "Lahore"


/*
Prefer not to use var keyword to initiate variables because of the issue in block scope and functional scope
*/

// console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);


// ============================= Chapter: Data Types

"use strict" // treat all JS code as newer version

// alert("Hello World") // we are using nodejs not browser

// console.log(3 + 
    // 2); // code readability should be high


let name = "Sameed Siddiqui"
let age = 17
// let isLoggedIn = true

// number => 2 to the power of 53
// bigint
// string => "",'',``
// boolean => true
// null => stand-alone value* (empty value)
// undefined => in future fill it
// symbol => unique value

// object

// console.log(typeof null);
// console.log(typeof(undefined));


// =================================== Chapter: Conversion And Operation


// =================== In number conversion 

// let score = "100"
// let score = "33abc"
let score = null // 0, typeof(number)

// console.log(score);
// console.log(typeof score);

let valueInNumber = Number(score)
// console.log(valueInNumber);
// console.log(typeof valueInNumber);

// "33" => 33
// "33abc" => NaN
// null => 0
// undefined => NaN
// ture => 1, false => 0

// ========================== In boolean conversion

// let isLoggedIn = "sameed" // true
// let isLoggedIn = "" // false
// let isLoggedIn = 1 // ture
// let isLoggedIn = 0 // false
// let isLoggedIn = null // fasle
// let isLoggedIn = undefined // fasle
// let booleanLoggedIn = Boolean(isLoggedIn)
// console.log(booleanLoggedIn);
// console.log(typeof booleanLoggedIn);


// ================== In string conversion

let someNumber = 100
let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);

// *********************************** Operators ************





















































