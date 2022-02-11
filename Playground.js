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
