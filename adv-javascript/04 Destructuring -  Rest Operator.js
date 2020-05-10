
// The destructuring assignment syntax is a JavaScript expression that makes 
// it possible to unpack values from arrays, or properties from objects, into distinct variables.

// Object Destructuring
const student = {
    firstname: 'Glad',
    lastname: 'Chinda',
    country: 'Nigeria'
};
// Object Destructuring
const { firstname, lastname, country } = student;
console.log(firstname, lastname, country); // Glad Chinda Nigeria


// The same syntax can be used in variable assignment as follows:
// Initialize local variables
let country = 'Canada';
let firstname = 'John';
let lastname = 'Doe';
const student = {
    firstname: 'Glad',
    lastname: 'Chinda',
    country: 'Nigeria'
};
// Reassign firstname and lastname using destructuring
// Enclose in a pair of parentheses, since this is an assignment expression
({ firstname, lastname } = student);
// country remains unchanged (Canada)
console.log(firstname, lastname, country); // Glad Chinda Canada


// Default Values
const person = {
    name: 'John Doe',
    country: 'Canada'
};
// Assign default value of 25 to age if undefined
const { name, country, age = 25 } = person;
// Here I am using ES6 template literals
console.log(`I am ${name} from ${country} and I am ${age} years old.`);
// I am John Doe from Canada and I am 25 years old.'


// Using Different Variable Names
const person = {
    name: 'John Doe',
    country: 'Canada'
};
// Assign default value of 25 to years if age key is undefined
const { name: fullname, country: place, age: years = 25 } = person;
// Here I am using ES6 template literals
console.log(`I am ${fullname} from ${place} and I am ${years} years old.`);
// I am John Doe from Canada and I am 25 years old.'


// Nested Object Destructuring
const student = {
    name: 'John Doe',
    age: 16,
    scores: {
        maths: 74,
        english: 63
    }
};
// We define 3 local variables: name, maths, science
const { name, scores: { maths, science = 50 } } = student;
console.log(`${name} scored ${maths} in Maths and ${science} in Elementary Science.`);
// John Doe scored 74 in Maths and 50 in Elementary Science.



// Array Destructuring
const rgb = [255, 200, 0];
// Array Destructuring
const [red, green, blue] = rgb;
console.log(`R: ${red}, G: ${green}, B: ${blue}`); // R: 255, G: 200, B: 0


// Default Values
const rgb = [200];
// Assign default values of 255 to red and blue
const [red = 255, green, blue = 255] = rgb;
console.log(`R: ${red}, G: ${green}, B: ${blue}`); // R: 200, G: undefined, B: 255


// Array destructuring assignment
let red = 100;
let green = 200;
let blue = 50;
const rgb = [200, 255, 100];
// Destructuring assignment to red and green
[red, green] = rgb;
console.log(`R: ${red}, G: ${green}, B: ${blue}`); // R: 200, G: 255, B: 50


// Skipping Items
const rgb = [200, 255, 100];
// Skip the first two items
// Assign the only third item to the blue variable
const [, , blue] = rgb;
console.log(`Blue: ${blue}`); // Blue: 100


// Swapping Variables
let width = 300;
let height = 400;
const landscape = true;
console.log(`${width} x ${height}`); // 300 x 400
if (landscape) {
    // An extra variable needed to copy initial width
    let initialWidth = width;
    // Swap the variables
    width = height;
    // height is assigned the copied width value
    height = initialWidth;
    console.log(`${width} x ${height}`); // 400 x 300
}


// Nested Array Destructuring
const color = ['#FF00FF', [255, 0, 255], 'rgb(255, 0, 255)'];
// Use nested destructuring to assign red, green and blue
const [hex, [red, green, blue]] = color;
console.log(hex, red, green, blue); // #FF00FF 255 0 255





// Rest Items
const rainbow = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
// Assign the first and third items to red and yellow
// Assign the remaining items to otherColors variable using the spread operator(...)
const [red, , yellow, ...otherColors] = rainbow;
console.log(otherColors); // ['green', 'blue', 'indigo', 'violet']


// Cloning Arrays

/* 
    In JavaScript, arrays are reference types and hence they are assigned by reference 
    instead of being copied. So in the following snippet, 
    both the rainbow and the rainbowClone variables point to the same 
    array reference in memory and hence any change made to rainbow is 
    also applied to rainbowClone and vice-versa.
*/
const rainbow = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
const rainbowClone = rainbow;
// Both rainbow and rainbowClone point to the same
// array reference in memory, hence it logs (true)
console.log(rainbow === rainbowClone); // true

/*
    The following code snippet shows how we can clone an array in the old-fashioned(ES5) 
    way — Array.prototype.slice and Array.prototype.concat to the rescue.
*/
const rainbow = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
// Cloning with Array.prototype.slice
const rainbowClone1 = rainbow.slice();
console.log(rainbow === rainbowClone1); // false

// Here is how you can use array destructuring and the rest parameter syntax to create an array clone.
const rainbow = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
// Cloning with array destructuring and spread operator
const [...rainbowClone] = rainbow;
console.log(rainbow === rainbowClone); // false


// Mixed Destructuring
const person = {
    name: 'John Doe',
    age: 25,
    location: {
        country: 'Canada',
        city: 'Vancouver',
        coordinates: [49.2827, -123.1207]
    }
}
// Observe how mix of object and array destructuring is being used here
// We are assigning 5 variables: name, country, city, lat, lng
const {name, location: {country, city, coordinates: [lat, lng]}} = person;
console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);
// I am John Doe from Vancouver, Canada. Latitude(49.2827), Longitude(-123.1207)


// Destructured Function Parameters
const student = {
    name: 'John Doe',
    age: 16,
    scores: {
        maths: 74,
        english: 63,
        science: 85
    }
};
// Without Destructuring
function displaySummary(student) {
    console.log('Hello, ' + student.name);
    console.log('Your Maths score is ' + (student.scores.maths || 0));
    console.log('Your English score is ' + (student.scores.english || 0));
    console.log('Your Science score is ' + (student.scores.science || 0));
}
// With Destructuring
function displaySummary({name, scores: { maths = 0, english = 0, science = 0 }}) {
    console.log('Hello, ' + name);
    console.log('Your Maths score is ' + maths);
    console.log('Your English score is ' + english);
    console.log('Your Science score is ' + science);
}
displaySummary(student);

// destructured parameters are always required.
function displaySummary({ name, scores: { maths = 0, english = 0, science = 0 } = {} } = {}) {
    console.log('Hello, ' + name);
    console.log('Your Maths score is ' + maths);
    console.log('Your English score is ' + english);
    console.log('Your Science score is ' + science);
}
// Calling without a student argument
displaySummary();
// Hello, undefined
// Your Maths score is 0
// Your English score is 0
// Your Science score is 0




// Function with Rest Operator

function sum() {
    console.log('arguments', arguments);
}
sum(1, 2, 3, 4, 5, 6, 7);


function sum(...others) {
    console.log('others ', others);

    let sum = 0;
    for (let item of others) {
        sum += item;
    }

    // Array Prototype
    // sum = others.reduce(function (a, b) {
    //     return a + b;
    // }, 0);
    // console.log(sum);
}
sum(1, 2, 3, 4, 5, 6, 7);




// Examples: 
// https://codeburst.io/es6-destructuring-the-complete-guide-7f842d08b98f
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
// https://hacks.mozilla.org/2015/05/es6-in-depth-destructuring/
