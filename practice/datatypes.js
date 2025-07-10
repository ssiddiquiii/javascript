// =============== Primitive DataTypes (Stack Memory)
// number, string, boolean, undefined, null, bigint, symbol (nn, bb, ss, u)

let number = 12
let string = "Sameed"
let boolean = true
let undefinedOnce;
let nullOnce = null
let symbol = Symbol("123")
let bigNumber = 2 ** 53

console.table([number, string, boolean, undefinedOnce, nullOnce, Symbol, bigNumber])

/*
Primitive Data types create stack memory for stored by value which it creates copy when another variables assign to original value. However does not changes in original value.
*/


// Non-Primitive Data Types or Refernece Types (Heap Memory) 

// Array, Objects, Functions

let arrayOnce = [1, 2, 3, 4, "Sameed", true]
let ObjectOnce = {
    myName : "Sameed", 
    myAge : 24
}

let myFunction = function() {
    console.log("Hello World");
}

// Non primitive data types create heap memory which mean stored by references and assign multiple varibale as reference to changes its original value.








