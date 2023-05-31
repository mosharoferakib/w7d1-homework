// Question #1

// Write a function that takes a string (sentence) and an array of strings (in this example dog_names) and check if one of the list members (dog names) is in the string (sentence). Return an array of the dog names found in the array

// hint: filter, includes

// for information on includes see:

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes

// var dogNames = ["Max","Fido","Gizmo","Nala"]


function findDogNames(sentence, dogNames) {
  return dogNames.filter(name => sentence.includes(name));
}

var dogNames = ["Max", "Fido", "Gizmo", "Nala"]
var sentence = "I have a dog named Max and a cat named Whiskers. Fido is my neighbor's dog.";

var foundDogNames = findDogNames(sentence, dogNames)
console.log(foundDogNames)



// Question #2

// Write a Function using map to convert an array of number from inches to feet

// 1 foot = 12 inches

// const heightsInInches = [66, 64, 60, 52, 72, 80, 51]
// Expect
// [
//   5.5,
//   5.333333333333333,
//   5,
//   4.333333333333333,
//   6,
//   6.666666666666667,
//   4.25
// ]


function convertInchesToFeet(heightsInInches) {
    const feetPerInch = 1 / 12;
  
    return heightsInInches.map(height => height * feetPerInch)
  }
  
  const heightsInInches = [66, 64, 60, 52, 72, 80, 51]
  const convertedHeightsInFeet = convertInchesToFeet(heightsInInches)
  console.log(convertedHeightsInFeet)


//   Question #3

//   Using the Ternary Operator and map create an array that adds is eating pizza to every name from the array tmnt that ends with o and add is being rude to any other name.
  
//   const tmnt = ["Leonardo", "Michelangelo", "Donatello", "Raphael"]
  // expect
  // [
  //   'Leonardo is eating pizza',
  //   'Michelangelo is eating pizza',
  //   'Donatello is eating pizza',
  //   'Raphael is being rude'
  // ]


function generateActions(tmnt) {
    return tmnt.map(name =>
    name.endsWith("o") ? `${name} is eating pizza` : `${name} is being rude`
    )
}
  
const tmnt = ["Leonardo", "Michelangelo", "Donatello", "Raphael"]
const actions = generateActions(tmnt)
console.log(actions)



// Question #4

// Write an arrow function to find the max number in a list. Do not use the Math.max Function.

// The List will be all positive numbers

// let findAMax=[123,5436,45784,1234,34,65,234125,645,3452,13216,49]
//Expect
// 234125


const findMax = (list) => list.reduce((max, current) => (current > max ? current : max), 0)

const findAMax = [123, 5436, 45784, 1234, 34, 65, 234125, 645, 3452, 13216, 49]
const maxNumber = findMax(findAMax)
console.log(maxNumber)



// Question #5

// At the end of the third Iteration (the third time the loop has ran) of this for Loop define the state of all the variables used in the cell

// var bingo = "B-I-N-G-O"
// var ognib = ""
// for(let i=bingo.length-1; i>=0; i--){
//     ognib+=(bingo[i])
//define state from this line on the third iteration

//bingo value is

//ognib value is

// i value is



var bingo = "B-I-N-G-O"
var ognib = ""
for(let i=bingo.length-1; i>=0; i--){
    ognib+=(bingo[i])
    // After the third iteration:
    // bingo value is "B-I-N-G-O"
    // ognib value is empty string
    // i value is 1
}



// Question #6

// Complete 3 Codewars problems using JavaScript, start with ones you have already solved in python. Paste a link hear to the 3 questions you completed

// 1:
// https://www.codewars.com/kata/56b0ff16d4aa33e5bb00008e/train/javascript

// 2:
// https://www.codewars.com/kata/583710ccaa6717322c000105/train/javascript

// 3:
// https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0/train/javascript
