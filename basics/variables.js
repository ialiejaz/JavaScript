const accountId = "ae@1633" //const values cant be changed. Some times it is better to do so.

let accountPassword = 123 // also used to assign value and can be changed
var accountEmail = "ae@ae.com" //not used now
accountCity = "Ctn" //variables can also be declared without using var,lat or const. But should be avoided.

// prefer not to use var due to issue in block scope amd functional scope

console.table([accountId,accountPassword,accountEmail,accountCity])