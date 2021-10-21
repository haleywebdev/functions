//! Age in dog years

//* const calculateAgeInDogYears = (ageOfPerson) => {
//*    const ageInDogYears = ageOfPerson / 7
//*    return ageInDogYears
//* }

//* const dogAge = calculateAgeInDogYears(22)

//* console.log(dogAge)

//! Best in show

//? const getDog = (typeOfDog) => {
//?     const myFavDog = typeOfDog 
//?     return myFavDog
//? }
//? const dogBreed = getDog("Golden Retriever")

//? console.log(`My favorite dog is ${dogBreed}.`)

//* let favoriteBreed = (breed) => {
//*     if (breed === "meow") {
//*         return "I like cats!"
//*     }
//*     else {
//*         return `My favorite dog breed is ${breed}.`
//*     }
//* }

//* const myFave = favoriteBreed("Golden Retriever")

//* console.log(myFave)

//* console.log(`When it comes to pets, ${myFave}`)

//! Addition

//* const add = (num3, num2, num1) => {
//*     return num1 + num2 + num3
//* }

//* const addNums = add(17, 4, 11)

//* console.log(addNums)

//! Self-driving cars

// let go = (direction, speed) => {
//     if (direction === "forwards", speed === 45) {
//         return "The car is moving forwards at 45 mph."
//     } else if (direction === "backwards", speed === 8) {
//         return "The car is moving backwards at 8 mph."
//     } else if (direction === "circles", speed === 12) {
//         return "The car is moving in circles at 12 mph."
//     } else if (direction === "forwards", speed >75) {
//         return `The car is moving forwards at ${speed}. SLOW DOWN!`
//     }
// }

// let carSpeed = go("forwards", 78)

// console.log(carSpeed)

//? const go = (direction, speed) => {
//?     let message = `The car is moving ${direction} at ${speed} mph.`

//?    if (speed >75) {
//?         return `${message} SLOW DOWN!`
//?    }
//? }

//? const carSpeed = go("forwards", 45)
//? console.log(carSpeed)

//! Evens/Odds 

// const evenOrOdd = (num1) => {
//     if (num1 === 0) {
//         return "Even"
//     } else {
//         return "Odd"
//     }
// }

// const myNums = evenOrOdd(15 % 2)
// console.log(myNums)

// //! Create an array
// // Create an array of numbers outside the function. Some even, some odd. 
// // After the function is defined, iterate the array of numbers with a for..of loop, 
// // and invoke the evenOrOdd function with each number as the argument.

// let numArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

// for (const num of numArray) {
//     const  numArray.length  
//     console.log(numArray[i]);
// }

// const wordsArray = [
//     "The", "killing", "complex", "houses",
//     "married", "kittens", "and", "single",
//     "soldiers", "and", "their", "kleptomaniacal",
//     "families"
// ]

// const wordsFunction = () => {
//     const newWordsArray = []
//     for (const word of words) {
//         const wordLowerCase = word.toLowerCase()
//         if (!wordLowerCase.startsWith(`k`)) {
//         return newWordsArray
//         }
//     }
// }

// wordsArray.push(wordsFunction)

// console.log(wordsArray)

// // for (let i = 0; i < wordsArray.length; i++) {
// //     console.log(wordsArray[i])
// // }

// /*
//     Function to filter out `k` words
//     (Google 'javascript startswith' to get started)
//  */

// // }
// /*
//     Function to build a single string from the array
//     (Google 'javascript combine all items in array' to get started)
//  */


// /*
//     Invoke the filtering function and store its return value
//  */


// /*
//     Invoke the string building function, and pass the
//     return value of the previous function as an argument
// */


// console.log()

//! Catching Tuna

// let catchingTuna = () => {
//     const randomNumber = Math.random()
//     if (randomNumber >= 0 && randomNumber < 0.33) { 
//         return (`Sven caught a tuna! : )`)
//     } else {
//         return (`No luck today for Sven : (`)
//         }

// }

// const catchFish = catchingTuna(1)
// console.log(catchFish)

// const tunaChances = catchingTuna(Math.random())

// console.log(tunaChances)

// Math.random() < 0.33) {
// return "Sven hooked a tuna!  :)"

// (Math.random() > 0.33) { 
//     return "Sven came up empty-handed.  :(" 
// }


// // ! Cookies.Scope

// const cookies = ["Oatmeal Raisin", "Chocolate Chip", "Sugar", "Peanut Butter", "Snickerdoodle", "Ginger"]

// for (let i = 0; i < cookies.length; i++) {
//     const currentCookie = cookies[i]
//     console.log(`Mmmmmmm... that's a good ${currentCookie} cookie`)
// }



// ! Conjunction.Scope

// const conjunction = function (firstWord, secondWord) {
//     return firstWord + " " + secondWord
// }

// conjoinedWords = conjunction("Master", "Card")
// console.log(conjoinedWords)




// ! ModSquad.Scope

// const modSquad = {
//     members: ["Pete Cochran", "Linc Hayes", "Julie Barnes", "Capt. Adam Greer", "Chief Barney Metcalf"],
//         series: {
//         start: "1968",
//         end: "1973"
//         }
// }

// let HTMLRepresentation = `<h1>The Mod Squad</h1>`

// modSquad.members.forEach (member => {
//     HTMLRepresentation += `<div>${member}</div>`
// })

// console.log(HTMLRepresentation)




// ! Simon.Scope

// let locations = [
//     [1, 1],
//     [1, 2],
//     [1, 3],
//     [2, 1],
//     [2, 2],
//     [2, 3]
// ]

// for (const location of locations) {
//     let invalidLocation = true
//     if (location[0] >= 2) {

//     if (invalidLocation) {
//         console.log("This location is invalid")
//     }
// }
// }




// ! Lambda.Scope

const llamaNamer = function () {
    const possibleNames = ["Larry", "Leon", "Leona", "Les", "Laura", "Lemony", "Lars", "Lekisha"]
    const randomizer = Math.floor(Math.random() * 7)

    const namer = function () {
        const suffix = " the Llama"
        const name = possibleNames[randomizer]
        return name + suffix
    }

    return namer()
}

const nameMaker = llamaNamer()
console.log(nameMaker)


//! Perry.Scope

const currentInventory = [
    "Muscle Man",
    "Dora the Scientist",
    "Princess Sparkles",
    "Perry Scope",
    "Explorer Backpack",
    "Space Scout Suit",
    "Geology Mineral Dig Kit",
    "Perry Scope"
]

const sellPerryScope = () => {
    let availableForPurchase = false
    for (const toy of currentInventory) {


        if (toy === "Perry Scope") {
            availableForPurchase = true
        }
    }

    if (availableForPurchase) {
        console.log("Enjoy your new Perry Scope")
    }
}

sellPerryScope()
