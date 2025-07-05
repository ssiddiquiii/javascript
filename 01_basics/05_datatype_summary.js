// primitive data types
// number, string, boolean, undefined, null, bigint, symbol

const score = 100
const scoreValue = 100.2

const isLoggedIn = true
const outSideTemp = null
let userEmail;

const id = Symbol('123')
const id2 = Symbol('123')
// console.log(id == id2);

const bigNumber = 10200230003040302032034342344546n
// console.log(bigNumber);
// console.log(typeof bigNumber);





// reference (non-primitive type)
// array, object, function

const hero = ["batman", "superman", "ironMan"]
const myObj = {
    name: "Sameed",
    age: 22,
}

const myFunction = function() {
    console.log("Hello World");
}

// myFunction()


// find type of datatype pre and non pre

console.log(typeof score);
console.log(typeof isLoggedIn);
console.log(typeof outSideTemp);
console.log(typeof userEmail);
console.log(typeof hero);
console.log(typeof myObj);
console.log(typeof myFunction);

