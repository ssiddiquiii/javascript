// Dates

// let newDate = new Date()

// console.log(newDate.toString()); // Mon Jul 14 2025 15:33:22 GMT+0500 (Pakistan Standard Time)
// console.log(newDate.toDateString()); // Mon Jul 14 2025

// console.log(newDate.toLocaleString()); // 14/07/2025, 3:33:22 pm
// console.log(newDate.toLocaleDateString()); // 14/07/2025 
// console.log(newDate.toLocaleTimeString()); // 3:33:22 pm

// console.log(newDate.toJSON()); // 2025-07-14T10:50:54.526Z
// console.log(newDate.toISOString()); // 2025-07-14T10:50:54.526Z
// console.log(newDate.toUTCString()); // Mon, 14 Jul 2025 10:50:54 GMT

// console.log(typeof newDate); // object

// let myCreatedDate = new Date(2023, 5, 25)
// let myCreatedDate = new Date(2023, 5, 25, 8, 30)
// let myCreatedDate = new Date("2023-06-25")
// console.log(myCreatedDate.toString());
// console.log(myCreatedDate.toLocaleString());

// const myTimeStamp = Date.now()
// console.log(Math.floor(myTimeStamp/3600000)); // convert in hours
// console.log(myCreatedDate.getTime());


let newDate = new Date()
// console.log(newDate.getTime());
// console.log(newDate.getMonth() + 1); // starts month from 0 = January
// console.log(newDate.getDate());
// console.log(newDate.getDay());

let weekdayName = newDate.toLocaleString('default', {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "2-digit"
})

console.log(weekdayName);


