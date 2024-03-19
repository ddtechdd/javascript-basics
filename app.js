// Identifiers let const & console

const myName = "Dd"

let num = 5

console.log(myName)//Dd
console.log(num)//5

num = 10

console.log(num)//10

// Data types

let myNumber;
// console.log(myNumber) // undefined

let boolValue = true
let nullValue = null

console.log(boolValue)
console.log(nullValue)


// Array

let intergerArray = [2, 5, 7, 9, 11]

// console.log(intergerArray.length)
// console.log(intergerArray[0])
// console.log(intergerArray[1])

// console.log(intergerArray[intergerArray.length-1])

//object

const person = {
    name: {
        firstname: "john",
        secondname: "doe"
    },
    age: 25,
    place: "london"
}

console.log(person)

const student = {
    name: "john",
    age: 25,
    courses: [{
        courseName: "js",
        courseCredits: 3
    }, {
        courseName: "mern",
        courseCredits: 4
    }]
}

// console.log(student.courses)
// console.log(student.courses[0])
// console.log(student.courses[1].courseName)

//Template strings
const myNameNew = "Dd"

// console.log(`hello,${myNameNew}`)

// const username = prompt('enter your username')
//console.log(username)

// alert (`hello,${username}!`)


// operators
let a = 9
let b = 3

// console.log(a+b)
// console.log(a+-b)
// console.log(a*b)
// console.log(a/b)
// console.log(a%b)
// a++
// console.log(a)
// b--
// console.log(b)

//comparators
// console.log(3>4)
// console.log(3<4)
// console.log(3>=4)
// console.log(3>=3)
// console.log(3=='3')
// console.log(3==='3')

//conditionals

// let weatherCondition = "sunny"
let subCondition = " Too hot"

if (weatherCondition === "Cloudy") {
    console.log("Take the umberalla")
} else if (weatherCondition === "Rainy") {
    console.log("use the umberalla")
} else if (weatherCondition === "sunny") {

    if (subCondition === "Too hot") {
        console.log(" use the umberalla")
    } else {
        console.log("don't use the umberalla")
    }
} else {
    console.log("don't take the umberalla")
}

// ternary operator

let result = 9 < 15

result ? console.log("result is true") : console.log("result is false")
