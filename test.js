let oldObject = {
    name: "Tech Stuart",
    age: 22,
    city: "New York"
}

let newObject = oldObject
console.log(newObject) // {name: "Tech Stuart", age: 22, city: Karachi}

newObject.name = "Garfield"
newObject.age = 30
newObject.city = "Dallas"

// Result
console.log(oldObject)
// console.log(newObject)