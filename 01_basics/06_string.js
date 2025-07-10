const myName = "Sameed"
const repoCount = 50.111

// console.log(name + repoCount + "Value"); // not recommended for now
// console.log(`My name is ${myName.toUpperCase()} and my repo count is ${repoCount.toFixed(1)}`); // this is string interpolation as ``.


const gameName = new String("Sameed-Siddiqui-Adnan-Jame")

// console.log(gameName[1]);
// console.log(gameName.__proto__); // to see all properties and methods of string with "__proto__"

console.log(gameName.length);
// console.log(gameName.charAt(3));
// console.log(gameName.indexOf("S"));
// console.log(gameName.toUpperCase());

// console.log(gameName.substring(0, 3));
// console.log(gameName.slice(0, 3));

// when we deal with negative value as index both behave differently! as like:
// console.log(gameName.substring(-2)); // treat negative index as 0
// console.log(gameName.slice(-2)); // work fine

// Parameter order -- avoid swapping
// console.log(gameName.substring(4, 1)); // if start value in greater than end value it automatically swaps the value
// console.log(gameName.slice(4, 1)); // return empty


let newString = "  Sameed  "
console.log(newString);
console.log(newString.trim()); // remove white spaces and line terminator

let url = "https://www.googl.20%.com"
// console.log(url.replace('.20%', "")); // change the value from the old once

console.log(url.includes('www'));

console.log(gameName.split("-"));
console.log(typeof gameName);