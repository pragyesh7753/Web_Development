const accountId = 14453
let accountEmail = "abc@gmail.com"
var accountPassword = "12345"
accountCity = "Jaunpur"
let accountState


// accountId = 2  // Not ALlowed

accountEmail = "pks@pks.com"

accountPassword = "1546123"
accountCity = "Varanasi"

console.log(accountId);

/*
Prefer not to use var keyword, use let instead.
because var is function scoped and let is block scoped.
*/

console.table({ accountId, accountEmail, accountPassword, accountCity, accountState });