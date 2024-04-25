const accountId = 65083415
let userEmail ="N9dJt@example.com"
var accountPassword ="1234"
let value;

// accountId = 2 =>  Error: Assignment to constant(const) variable.
console.log(accountId)
userEmail = 'saurabhwakde430@gmail.com'
accountPassword ="6789"
console.table({accountId,userEmail,accountPassword,value}) // Can Print table format in console

/*
Preffer not to use var because of issue in block scope and function scope.
*/
