// Array

const myArr = [1, 2, 3, 4, 5]
const myHero = ["SuperMan", "BatMan", "Flash"]

const myArr2 = new Array(6, 7, 8, 9, 10)
// console.log(myArr[1]);

// Array Methods

// myArr.push(6) // add at end
// myArr.pop() // remove at end
// myArr.unshift(0) // add at start
// myArr.shift() // remove at end

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(1));

// const newArr = myArr.join()
// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);

// Slice() and Splice() in Array

// const fruit = ["Banana", "Mango", "Orange", "Apple"]
// const isChangeedFruit = fruit.slice(1, 3)

// console.log(fruit);
// console.log(isChangeedFruit);


const fruit = ["Banana", "Mango", "Orange", "Apple"]
const isChangeedFruit = fruit.splice(1, 2, "Kiwi", "Graps")

console.log(fruit);
console.log(isChangeedFruit);




