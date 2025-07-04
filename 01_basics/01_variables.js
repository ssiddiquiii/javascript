const accountId = 112233
let accountEmail = "ssiddiqui@google.com"
var accountPassword = "1122"
accountCity = "Karachi"
let accountState;

{

} // scope

// accountId = 2 // not allowed

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

accountEmail = "ss@gmail.com"
accountPassword = "112233"
accountCity = "Lahore"

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
