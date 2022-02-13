function convertToCamelCase(words) {
  // convert the passed string of space-separated words to camel case
  // camel case looks like this --> camelCaseLooksLikeThis

  // First we split the words, so we can recognise each of them as seperate items
  let wordsArray = words.split(" ");

  // then, we start of the with final value we aim to return as the value of the first word in the parameter
  // As camelCase requires the first letter to be lowercase, we must not include this
  // Okay anyways this shortcut is not allowed so it doesn't even matter
  // let camelCaseFinal = wordsArray[0];
  let camelCase = "";

  // Then, we make a loop for each word, where the first character is made to uppercase, and
  // it is concatenated to the remainder of the word
  for (let i = 0; i < wordsArray.length; i++) {
    if (i === 0) {
      camelCase +=
        wordsArray[0].slice(0, 1).toLowerCase() + wordsArray[0].slice(1);
    } else {
      camelCase +=
        wordsArray[i].slice(0, 1).toUpperCase() + wordsArray[i].slice(1);
    }
  }

  // Finally we return the value
  return camelCase;
}

console.log(convertToCamelCase("yes my cuzn"));


function areStringsEqualCaseInsensitive(left, right) {
  // return true if the passed strings are equal ignoring case
  return left.length === right.length ? true : false;
} console.log(areStringsEqualCaseInsensitive("kuttiDaBaca", "TattiYawanda"));

function getEvenNumbers(nums) {
  //return an array of only the even numbers in the given array
 let evenArray = [];
 for(numbers of nums) { 
   if(numbers % 2 === 0) { 
     evenArray.push(numbers);
   }
 }
    
    return evenArray;
  }

console.log(getEvenNumbers([1,2,3,4,5,6]));


function getItemsLongerThan(array, len) {
  //return an array of only the items longer than the given length
  let longerThanLength = [];

  for (numbers of array) {
    if (numbers > len) {
      longerThanLength.push(numbers);
    }
  }
  return longerThanLength;
}

console.log(getItemsLongerThan([1,20,3,4,9,17], 10));



function getLastItems(array, n) {
  // return an array with the 'n' last items of 'array'
  return array.slice(-n);
}
console.log(getLastItems([1,2,3,4,5,6], 2));