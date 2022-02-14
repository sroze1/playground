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



function getSandwichFilling(sandwich) {
  // if an array is a sandwich, the first and last items are the bread, return an array with the filling of the sandwich
  let filling = [];
  if (sandwich.length > 2) {
    filling.push(sandwich.slice(1, -1));
  }
  return filling;
}

console.log(getSandwichFilling(['this', 'is', 'the', 'filling', 'penchod']));




function removeItem(array, n) {
  // return a new array without the item on position 'n', effectively removing it from the array
  // second number means remove 1 element only
  array.splice(n, 1);
  return array;
} 


function mergeArrays(arr1, arr2) {
  // return a new array with all the elements of arr1 followed by all the elements of arr2

  let newArray = [...arr1, ...arr2];
  return newArray;
} console.log(mergeArrays([1,2,3], [4,5,6]));



function flattenArrayByOne(arrayOfArrays) {
  // given a nested array or arrays, return a new array with one less level of nesting. All the elements of all the original nested arrays must be kept in their original order
  // for example:

  return arrayOfArrays.flat();
  // [[1],[2],[[3,4]]] => [1,2,[3,4]]
} console.log(flattenArrayByOne([[1], [2], [[3, 4]]]));



function isItemOmnipresent(arrayOfArrays, item) {

  let trueOrFalse = false;
  // return true if the passed item is present in all the arrays inside arrayOfArrays
 for(elements of arrayOfArrays.flat()) { 
  if(elements === item) { 
    trueOrFalse = true;
  }
 } return trueOrFalse; 
} console.log(isItemOmnipresent([1,2,3,4,5, [6,7,8]], 5));





function isOver40(user) {
  /*
    This function takes a user object with a property of age. It should return true if the user is over 40 and false if the user is 40 or younger.
    */
  return user.age > 40 ? true : false;
} console.log(isOver40(user = {age:10}));


function getUserAge(user) {
  // return the user's age as a number.
  // you can assume that the passed user will always have a 'yearOfBirth' property.
  return Number(user.yearOfBirth);
} console.log(getUserAge(user = {yearOfBirth: '10'}));


function getUserPetAge(user) {
  /*  The argument user will be an object. The object is nested; there are objects paired to keys on the user object. It will be in this format:
      {
        name: "Tom",
        age: 26,
        pet: {
          name: "Barney",
          age: 6,
          type: "good boy"
        }
      };
      This function should access the age property in the nested pet object and return the value
  */

      return user.pet.name;
} console.log(getUserPetAge(user = {
        name: "Tom",
        age: 26,
        pet: {
          name: "Barney",
          age: 6,
          type: "good boy"
        }
      }));



      function createProduct() {
        /*
    This function should return an object with a type property and a price property. The value for type can be any string, and the value for price should be a number.
    */

    return property = {type: 'String', price: 2000}
      } console.log(createProduct());


      function addPriceToProduct(product, price) {
        /* The argument product will be an object that looks like this:
    { type: 'Tofu slices' }
    Add a price property to this object and set its value to the price passed in as an argument. Then return the object.
    */

        product.priceObject=  price ;
        return product.priceObject;
      } console.log(addPriceToProduct(productObject = {type: 'tofu'}, 2000));

      function getPropertyOfProduct(product, property) {
        /* The argument product will be an object that looks like this:
    { type: 'Easy-peeler satsumas', price: '£1.09', quantity: 8 }
    Given a 'property' as an argument, return the value associated with that 'property'. 
    E.g. if asked for the price 'property' of the above satsumas object, your function would return '£1.09'.
  */
    return product[property];
      } console.log(getPropertyOfProduct(product = {type: 'Easy-peeler', price: 1.09}, 'price'));


      function addPropertyToProduct(product, property, value) {
        /* The argument 'product' will be an object that looks like this:
    { type: 'Terminator 2: Judgement Day', price: '£6.99', quantity: 1 }
    Given a 'property' as an argument, as well as its corresponding value, update the 'product' to include this new information. Then return the updated 'product'.
    E.g. if given the 'property' 'length' and the value '2h 36m' (yes it really is that long) 
    your function should return { type: 'Terminator 2: Judgement Day', price: '£6.99', quantity: 1, length: '2h 36m' }
  */
        product[property] = value;

        return product;
      } console.log(
        addPropertyToProduct(
          (product = {
            type: "Terminator 2: Judgement Day",
            price: "£6.99",
            quantity: 1,
          }), 'LENGTH:', '2h36m'
        )
      );


      function createNorthcoder(name, yearOfBirth) {
        // return an object with:
        // a name property set to the value of the name parameter
        // an age property set to whatever the age of the northcoder would be in the year 2019
        // a language property set to 'JavaScript'

        return (obj = { name: name, age: yearOfBirth, language: "JavaScript" });
      } console.log(createNorthcoder('Sheroze', 1997));



      function updateVoterAddress(voter, correctHouseNumber) {
        /* Uh-Oh! We've got some silly voters who've registered their addresses incorrectly. Lets help them fix those typos by changing their houseNumber to the correctHouseNumber. The user object looks like this:
    {
      name: "Alex",
      age: 39,
      address: { 
        houseNumber: 2, 
        street: "Old St", 
        city: "Chester" 
      }
    };
    Note - The function does NOT need to return anything.
  */
        user[voter[houseNumber]] = correctHouseNumber;
      }console.log();

          function updateVoterAddress(voter, correctHouseNumber) {
            /* Uh-Oh! We've got some silly voters who've registered their addresses incorrectly. Lets help them fix those typos by changing their houseNumber to the correctHouseNumber. The user object looks like this:
    {
      name: "Alex",
      age: 39,
      address: { 
        houseNumber: 2, 
        street: "Old St", 
        city: "Chester" 
      }
    };
    Note - The function does NOT need to return anything.
  */
            user[voter[houseNumber]] = correctHouseNumber;
          }
          console.log();