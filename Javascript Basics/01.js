/**
 * Javascript Basics 01
 */

 /**
  * Compare the BMI of Mark and John
  * Print to console
  */

let massMark = 82
let heightMark = 1.83

let massJohn = 57
let heightJohn = 1.64

let BMIMark = massMark / (heightMark * heightMark)
let BMIJohn = massJohn / (heightJohn * heightJohn)

let markHigherBMI = BMIMark > BMIJohn
console.log('Is Mark\'s BMI higher than John\'s? ' + markHigherBMI)