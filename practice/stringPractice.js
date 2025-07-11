// Chapter: String and its Methods and Property
/*
toUpperCase() // SAMEED
toLowerCase() // sameed
charAt() // 2 => m
indexOf() // m => 2
slice() // split into new substring
substring() // split into new substring but differ
trim() // remove white spaces and extra line 
replace() // replace word for word
split() => convert into array with specified character!
*/


const myName = "Sameed"
const myRepoCount = 30

// console.log(myName + myRepoCount + " value"); // not allowed 
// console.log(`my name is ${myName.toUpperCase().length} and my repo count ${myRepoCount}`); // this is called string interpolation

// new way to define string

const stringName = new String("Sameed Siddiqui")

// console.log(stringName.length);
// console.log(stringName.toUpperCase());
// console.log(stringName.toLowerCase());

// console.log(stringName.__proto__); // In this proto you can see all methods of string in console!

// console.log(stringName.charAt(2));
// console.log(stringName.indexOf("m"));


// console.log(stringName.substring(2, 8));
// console.log(stringName.slice(2, 8));

// console.log(stringName.substring(-2)); // treat neagtive as 0
// console.log(stringName.slice(-2)); // work well from the right side index

// console.log(stringName.substring(15, 0)); // swaps 
// console.log(stringName.slice(15, 1)); // ""

// both do not change the original strings

let newString = " Sameed "
console.log(newString);
console.log(newString.trim());


console.log(stringName.replace("Sameed", "Adnan"));
console.log(stringName.split(" "));
console.log(typeof stringName);












