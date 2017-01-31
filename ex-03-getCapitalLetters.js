/**
 * Ex-03: getCapitalLetters()
 *
 * Write a function called getCapitalLetters()that returns
 * an array of all of the capital letters of a string
 *
**/

var getCapitalLetters = function(string){
  var splitString = string.split('')
  var capArr = []

  for(var i = 0; i< splitString.length; i++){
    if(splitString[i] === splitString[i].toUpperCase() && splitString[i] !== ' '){
      capArr.push(splitString[i])

    }
  }
  return capArr
}







//*~*~*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*~*~*~*~

var output_1 = getCapitalLetters('I called Xiu Chang and he sent the original Super Mario Bros through FedEx')
var output_2 = getCapitalLetters('TLDR My mother gave Nancy nothing for Xmas')

console.assert( output_1.length === 8 )
console.assert( output_1[3] === 'S' )
console.assert( output_1[4] === 'M' )
//---------------------
console.assert( output_2.length === 7 )
console.assert( output_2[3] === 'R' )
console.assert( output_2[6] === 'X' )

//Explorer Mode: Make these tests pass
//---------------------
// var output_3 = getCapitalLetters('TLDR; My mother gave Nancy nothing for Xmas.')
// console.assert( output_2.length === 7 )
// console.assert( output_2[3] === 'R' )
// console.assert( output_2[6] === 'X' )
