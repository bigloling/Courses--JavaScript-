### NORMAL level

#### Task 1 💻

Создайте переменные, затем сложите их и выведите результат в консоль разработчика.

```javascript
    const x = 20
    const y = 58
    const z = 42
```

#### Solution

```javascript
    console.log(x + y + z)
```



#### Task 2 💻

Создайте константы:

    - количество секунд в минуте
    - количество минут в часу
    - количество часов в сутках
    - количество суток в году
    
Посчитайте ваш возраст в секундах и поместите результат в переменную **`myAgeInSeconds`**

#### Solution

```javascript
    const SEC = 60
    const MIN = 60
    const HOUR = 24
    const DAY = 365
    let age = 19

    let myAgeInSeconds = age * day * hour * min * sec
    console.log(myAgeInSeconds)
```



#### Task 3 💻

```javascript
    let count = 42
    let userName = '42'
```

Создайте две переменные. Поместите в них переменную **`count`** и превратите в строку, а **`userName`** наоборот в число. Попробуйте реализовать задачу двумя разными способами.

#### Solution

```javascript
    let numInStr1 = String(count)
    let numInStr2 = count + ""
    let numInStr3 = count
    console.log(numInStr3)
    typeof(numInStr3)

    let strInNum1 = Number(userName)
    let strInNum2 = +userName
    let strInNum3 = userName / 1
```



#### Task 4 💻
    
Создать 3 переменные разных типов и вывести в консоль для каждой из них строку следующего вида:    

    `Variable value: %variable value% has type: %type variable%`

#### Solution

```javascript
    let num = 10
    let str = "one"
    let bool = true

    console.log(`Variable value: ${num} has type: ${typeof(num)}`)
    console.log(`Variable value: ${str} has type: ${typeof(str)}`)
    console.log(`Variable value: ${bool} has type: ${typeof(bool)}`)
```



#### Task 5 💻

Запросить у пользователя имя и возраст и вывести их в консоль.

#### Solution

```javascript
    let name = prompt("Enter your name: ")
    let age = prompt("Enter your age: ")

    console.log(`My name is ${name}, I'm ${age} y.o.`)
```



### ADVANCED level

#### Task 1 👨‍🏫 

Поменяйте значение переменных местами не создавая дополнительной переменной:

```javascript
    let a = 4
    let b = 3
```

#### Solution

```javascript
    a = a + b
    b = a - b
    a = a - b
```