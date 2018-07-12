/**
 * Javascript Basics 01
 */

 /**
  * John, Mary and Mike plays Basketball in different teams.
  * Last 3 games John: 89, 120, 103 points.
  * Last 3 games Mary: 97, 134, 105 points.
  * Last 3 games Mike: 116, 94, 123 points.
  * 
  * 1. Calculate average score for both teams.
  * 2. Print to the console which team have the higher average score.
  * 3. Change the score to change the winner, consider the possibility of a draw.
  * 
  */

  let averageJohn = (89 + 120 + 103) / 3
  let averageMary = (97 + 134 + 105) / 3
  let averageMike = (116 + 94 + 123) / 3
  console.log(averageJohn, averageMary, averageMike)

  if (averageJohn > averageMary && averageJohn > averageMike) {
      console.log('John\'s team wins wins with ' + averageJohn + ' points')
  } else if (averageMary > averageJohn && averageMary > averageMike) {
      console.log('Mary\'s team wins wins with ' + averageMary + ' points.')
  } else if (averageMike > averageJohn && averageMike > averageMary) {
      console.log('Mike\'s team wins wins with ' + averageMike + ' points.')
  } else {
      console.log('There is a draw.')
  }
