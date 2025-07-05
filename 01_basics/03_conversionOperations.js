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
// console.log(booleanLoggedIn);

// 1 => true, 0 => fasle
// "" => false, "sameed" => true

let someNumber = 33
let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);

// *************************** Operations ************************ //

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**2);
// console.log(2/2);
// console.log(2%3);


let str1 = "Sameed"
let str2 = " Siddiqui"
let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log(1 + 2 + "3");
// console.log("1" + "2" + 3 + 3);

// console.log((2 + 3) % (3 + 2));

// ======================================== operators precedent pharna chaiye*


// console.log(+true); // 1
// console.log(true); // true
// console.log(+""); // 0

let num1, num2, num3
num1 = num2 = num3 = 2 + 2
// console.log(num2);

let gameCounter = 100
gameCounter++;
// console.log(gameCounter);

// Assignment of PreFix and Postfix operators

// let x = 3;
// const y = x++;

// console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"


// let a = 3;
// const b = ++a;

// console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"

// ==========================

// If used postfix, with operator after operand (for example, x++), the increment operator increments and returns the value before incrementing.
// Postfix

// let a = 3
// let b = a++
// console.log(`a:${a}  b:${b}`);

// let c = b++
// console.log(b);



// If used prefix, with operator before operand (for example, ++x), the increment operator increments and returns the value after incrementing.

// Prefix
let a = 3n
console.log(a);

let b = ++a
console.log(`a:${a} b:${b}`);