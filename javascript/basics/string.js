// const name = "saurabh"
// const age = 23

// console.log(name+age+"years old")
// console.log(`${name} is ${age} years old`)

// const gameName = new String('Pubg-mobile')
// console.table({gameName})
// console.log(typeof gameName) Type of object
// ┌──────────┬─────┬─────┬─────┬─────┐
// │ (index)  │ 0   │ 1   │ 2   │ 3   │
// ├──────────┼─────┼─────┼─────┼─────┤
// │ gameName │ 'P' │ 'u' │ 'b' │ 'g' │
// └──────────┴─────┴─────┴─────┴─────┘
// console.log(gameName.__proto__)
// console.log(gameName.length)
// console.log(gameName.toUpperCase())
// console.log(gameName.charAt(2))
// console.log(gameName.indexOf('b'))

// const newString = gameName.substring(0 , 3) // => Pub
// // console.log(newString)
// const anotherString = gameName.slice(5 , 12) // => mobile
// console.log(anotherString)

// const newString = "   Saurabh Ravindra Wakde       aDADF       "
// console.log(newString)
// console.log(newString.trim())

// const url = "https://google%20"

// console.log(url.replace('%20' , '/youtube.com')) // => https://google/youtube.com
// console.log(url.includes('google'))
const name = "saurabh-ravindra-wakde"
const newname = name.split('-')
console.log(newname)
