const accountPassword = "123455"

var accountId = 78454

let accountEmail = "vijay@gmail.com"

accountCity = "jaipur"

let accountState

// accountPassword = 452121  //this is not allowed 

accountEmail = "Hello@gmail.com"  /* This is absolutely valid */

accountId = 76768                    

accountCity = "Harayana"                                 

// console.log(accountPassword);     /*On this place 
// console.log(accountId)              we can use
// console.log(accountEmail)           console.table([a,b,c,d])*/
// console.log(accountCity)

//Prefer not to use var because of the issue in block scope and functional scope

console.table([accountPassword,accountId,accountEmail,accountCity,accountState])

