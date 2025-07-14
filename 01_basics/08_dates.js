// Dates

let myDate = new Date()

// console.log(myDate); // 2025-07-13T10:13:13.954Z

// console.log(myDate.toString()); // Sun Jul 13 2025 15:13:13 GMT+0500 (Pakistan Standard Time)
// console.log(myDate.toDateString()); // Sun Jul 13 2025
// console.log(myDate.toLocaleString()); // 13/07/2025, 3:16:28 pm
// console.log(myDate.toLocaleTimeString()); // 3:13:13 pm

// console.log(myDate.toISOString()); // 2025-07-13T10:13:13.954Z
// console.log(myDate.toJSON()); // 2025-07-13T10:13:13.954Z

// console.log(typeof myDate); // object

// let myCreatedDate = new Date(2023, 5, 25)
// let myCreatedDate = new Date(2023, 5, 25, 8, 30)
let myCreatedDate = new Date("07-14-2023")
// console.log(myCreatedDate.toLocaleString()); // naughty date :)

let myTimeStemp = Date.now()
// console.log(Math.floor(myTimeStemp/3600000)); // milisceonds convert into hours => 1 hour = 3600000 ms 
// console.log(myCreatedDate.getTime());

let newDate = new Date()
console.log(newDate);
console.log(newDate.getDate());
console.log(newDate.getFullYear());
console.log(newDate.getMonth() + 1); // july for now

newDate.toLocaleString('default', {
    weekday: "long"
})

console.log(newDate);





