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

// console.log(typeof score);
// console.log(typeof isLoggedIn);
// console.log(typeof outSideTemp);
// console.log(typeof userEmail);
// console.log(typeof hero);
// console.log(typeof myObj);
// console.log(typeof myFunction);

// ************************************************************

// ================================ Stack and Heap Memory

/*
Stack memory gives copy of the acutal stored value to variable and it is immutable*
*/

// Stack (Primitive types)
let myChannel = "SameedChai"
let mySecondChannel = myChannel
mySecondChannel = "SaadChai"

console.log(myChannel);
console.log(mySecondChannel);


/*
Heap memory gives reference to varibale and it is mutable*
*/

// Heap (Non-Primitive types)

const myBro = {
    myName: "Wallah",
    age: 22
}

const mySis = myBro
mySis.myName = "Adnan"

console.log(myBro);
console.log(mySis);




