const accountId = 123456
let accountEmail = "neha@gmail.com"
var accountPassword ="12457"
accountCity = "fsd"
let accountState;

// accountId = 2 // not allowed
accountEmail = "h@gmail.com"
accountPassword = "09876"
accountCity = "lhr"

console.log(accountId)

/*
prefer not to use var
because of issue in block scope and functional scpe
*/
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])