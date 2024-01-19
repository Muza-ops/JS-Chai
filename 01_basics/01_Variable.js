const accountId = 144553
//const is lock when value not change we use const
let accountEmail = "muzaffarafridi77@gmail.com"
//let is used when value change like. email, date, password, city
var accountPassword = "12345"
accountCity = "Islamabad"
let accountState;

// accountId = 22  //Not Allowed


accountEmail = "mzfarafridi77@gmail.com"
accountPassword = "212121"
accountCity = "Peshawar"  


console.log(accountId);
/*
Prefer Not to use `Var`
Because of issue in block scope and functional scope 
*/

console.table([{accountId, accountEmail, accountPassword, accountCity, accountState }]);