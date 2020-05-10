// The spread operator was added to JavaScript in ES6 (ES2015), 
// just like the rest parameters, which have the same syntax: three magic dots ….

// What is ... used for?
// “Spread operator to the rescue! It looks similar to rest parameters, 
// also using ..., but does quite the opposite.” 

// Take trying to find the largest number in an array with Math.max():
// Math.max(1,3,5) // 5
// Math.max([1,3,5]) // NaN
// Math.max(...[1,3,5]) // 5

// Concat()
/* 
    The concat() method provided by javascript helps in concatenation of two or more strings(String concat() ) 
    or is used to merge two or more arrays. In case of arrays,this method does not change the existing arrays 
    but instead returns a new array
*/
// Normal array concat() method 
let arr = [1, 2, 3];
let arr2 = [4, 5];
arr = arr.concat(arr2);
console.log(arr); // [ 1, 2, 3, 4, 5 ] 

/**  
 * We can achieve the same output with the help of the spread operator, 
 * the code will look something like this:
*/
// spread operator doing the concat job 
let arr = [1, 2, 3];
let arr2 = [4, 5];
arr = [...arr, ...arr2];
console.log(arr); // [ 1, 2, 3, 4, 5 ] 


/** 
 * Even though we get the content on one array inside the other one, 
 * but actually it is array inside another array which is definitely what we didn’t want. 
 * If we want the content to be inside a single array we can make use of the spread operator.
*/
let arr = ['a', 'b'];
let arr2 = [...arr, 'c', 'd'];
console.log(arr2); // [ 'a', 'b', 'c', 'd' ] 



// One use case of this feature could be to make default assignments:
const userProvided = {
    name: 'Bil Smith',
    email: 'bil@example.com',
};
const defaultValues = {
    name: 'Unknown',
    address: 'Alien',
    phone: null,
    email: null
};
const userInfo = { ...defaultValues, ...userProvided };



/** 
 * Note: Given that the spread operator works with both Arrays and Objects, 
 * you may sometimes be tempted to mix and match them. Don't do that! For example, 
 * the following action will result in an error: 
*/
var user = { name: 'John', age: 28, email: 'john@example.com' };
var items = [...user];
// TypeError: user is not iterable

// BUT

var foo = ['user1', 'user2', 'user3'];
var bar = { ...foo };



// Examples:
// https://www.geeksforgeeks.org/javascript-spread-operator/
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax