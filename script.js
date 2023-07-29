// Task 1

const x = 20
const y = 58
const z = 42

console.log(x + y + z)



// Task 2

const sec = 60
const min = 60
const hour = 24
const day = 365
let age = 19

let myAgeInSeconds = age * day * hour * min * sec
console.log(myAgeInSeconds) // 599'184'000 sec



// Task 3 //

let count = 42
let userName = '42'

let numInStr1 = String(count)


let strInNum1 = Number(userName)
let strInNum2 = +userName

typeof(numInStr1, strInNum1, strInNum2)


// Task 4

let num = 10
let str = "one"
let bool = true

console.log(`Variable value: ${num} has type: ${typeof(num)}`)
console.log(`Variable value: ${str} has type: ${typeof(str)}`)
console.log(`Variable value: ${bool} has type: ${typeof(bool)}`)


// Task 5

let name = prompt("Enter your name: ")
let agee = prompt("Enter your age: ")

console.log(`My name is ${name}, I'm ${agee} y.o.`)


// ADVANCED level

// Task 1

let a = 4
let b = 3

a = a + b
b = a - b
a = a - b

console.log(`${a},${b}`)