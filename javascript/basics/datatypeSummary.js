// Primitive 
// 7 types : String, Number, BigInt, Boolean, Null, Undefined, Symbol

// Non Primitive or refrence type
// Object, Array, Function, Date, RegExp, Error, Map, Set, WeakMap, WeakSet, Promise, Proxy, TypedArray, etc.

const id = Symbol("123")
const value = Symbol("123")
// console.log(id === value)
let date = new Date
// console.table({id,value,})
console.log(typeof date)




// **************************
// Stack(Primitive) , Heap(Non Primitive)

let firtName = "saurabh"
let anotherName = firtName
anotherName = "rahul"

let user ={
    email :"N9dJt@example.com",
    password :"1234"
}
let anotherUser = user
anotherUser.email = "saurabhwakde430@gmail.com" // both values got chnaged
// ┌─────────────┬─────────────────────────────┬──────────┬───────────┐
// │ (index)     │ email                       │ password │ Values    │
// ├─────────────┼─────────────────────────────┼──────────┼───────────┤
// │ firtName    │                             │          │ 'saurabh' │
// │ anotherName │                             │          │ 'rahul'   │
// │ user        │ 'saurabhwakde430@gmail.com' │ '1234'   │           │
// │ anotherUser │ 'saurabhwakde430@gmail.com' │ '1234'   │           │
// └─────────────┴─────────────────────────────┴──────────┴───────────┘
console.table({firtName,anotherName,user,anotherUser})

