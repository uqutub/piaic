// ******************
// Examples 1

function catName(name) {
    console.log("My cat's name is " + name);
  }
  
  catName("Tiger");
  
  /*
  The result of the code above is: "My cat's name is Tiger"
  */

// ******************
// Examples 2
``

catName("Chloe");

function catName(name) {
  console.log("My cat's name is " + name);
}
/*
The result of the code above is: "My cat's name is Chloe"
*/


// ******************
// Examples 3


console.log(num); // Returns undefined, as only declaration was hoisted, no initialization has happened at this stage 
var num; // declaration
num = 6; // initialization



// ******************
// Examples 4


console.log(num); // throws ReferenceError exception 
num = 6; // initialization


// ******************
// Examples 5


// Only y is hoisted

x = 1; // Initialize x, and if not already declared, declare it - but no hoisting as there is no var in the statement.
console.log(x + " " + y); // '1 undefined'
//This prints value of y as undefined as JavaScript only hoists declarations 
var y = 2; // Declare and Initialize y


// ******************
// Examples 6


// No hoisting, but since initialization also causes declaration (if not already declared), variables are available.

a = 'Cran'; //Initialize a
b = 'berry'; //Initialize b
console.log(a + "" + b); // 'Cranberry'


// ******************