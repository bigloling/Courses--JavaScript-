#### Task 1
/*Создайте переменные, затем сложите их и выведите результат в консоль разработчика.*/

const x = 20
const y = 58
const z = 42

// Solution //

console.log(x + y + z)



// Task 2 //
/*Создайте константы:

    - количество секунд в минуте
    - количество минут в часу
    - количество часов в сутках
    - количество суток в году
    
Посчитайте ваш возраст в секундах и поместите результат в переменную **`myAgeInSeconds`***/

// Solution //

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

