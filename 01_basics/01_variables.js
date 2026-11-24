const accountId = 144553
let accountEmail = "smash@gmail.com"
var accountPassword = "12345"
accountCity = "Jharkhand"

let accountState;


// accountId = 2  // not allowed

accountEmail = "ss@ss.com"
accountPassword = "33332"
accountCity = "Banglore"

console.log(accountId);

/*
    do not use var because of scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
