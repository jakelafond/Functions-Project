// 1.
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// Then, write and example of using the function.

function max(num1, num2){
  if (num1 > num2){
    return num1;
  }
  else if (num1 < num2) {
    return num2;
  }
  else {
    return "You broke this function."
  }
}

console.log(max(3,5));


// 2.
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// Then, write and example of using the function.

function maxOfThree(num3,num4,num5){
    if (num3 > num4 && num3 > num5){
      return num3;
    }
    else if (num4 > num3 && num4 > num5){
      return num4;
    }
    else if (num5 > num3 && num5 > num4){
      return num5;
    }
    else{
      return "Something went wrong. Figure out what!"
    }
}

console.log(maxOfThree(3,10,50));
// 3.
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// Then, write and example of using the function.

function isVowel(char){
  var vowels = ['a','e','i','o','u'];
  if (vowels.includes(char) === true){
    return true;
  }
  else {
    return false;
  }
}

console.log(isVowel('a'));

// 4.
// Write a function called `sum` that takes two parameters and returns the sum of those 2 numbers.
// Then, write and example of using the function.
 function sum(n1,n2){
   return n1 + n2;
 }

console.log(sum(20,20));

// 5.
// Write a function named `avg` that takes 3 parameters and returns the average of those 3 numbers.
// Then, write and example of using the function.

function avg(n3,n4,n5){
  return (n3+n4+n5)/3;
}

console.log(avg(10,20,30));

// 6.
// Write a function called `getLength` that takes one parameter (a string) and returns the length
// Then, write and example of using the function.

function getLength(strlen){
  return strlen.length;
}

console.log(getLength("Cows"));

// 7.
// Write a function called `greaterThan` that takes two parameters
// and returns `true` if the second parameter is greater than the first.
// Otherwise the function should return `false`.
// Then, write and example of using the function.

function greaterThan(nu1,nu2){
  if (nu1 < nu2){
    return true;
  }
  else {
    return false;
  }
}

console.log(greaterThan(5,10));

// 8.
// Write a function called `greet` that takes a
// single parameter and returns a string that
// is formated like "Hello, Name!" where *Name*
// is the parameter that was passed in.
// Then, write and example of using the function.

function greet(name){
  return "Hello, " + name + "!";
}

console.log(greet("Jake"));

// 9.
// Write a function called `madlib` that takes 4 or more parameters (words).
// The function should insert the words into a pre-defined sentence.
// Finally the function should return that sentence.
// Note: When I say words and sentence I mean strings. For example:
// words: "quick", "fox", "fence"
// sentence: "quick brown fox jumps over the fence"
// Then, write and example of using the function.

function madlib(word1,word2,word3,word4){
  return "Did you see that " + word1 + "? The " + word2 + " was hanging off the " + word3 + "! " + "It puts " +word4 + " to shame.";
}
console.log(madlib('car','banana','deck','island'));
