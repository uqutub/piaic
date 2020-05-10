// ******************
// Examples 1

let a, b, rest;
[a, b] = [10, 20];

console.log(a);
// expected output: 10

console.log(b);
// expected output: 20

[a, b, ...rest] = [10, 20, 30, 40, 50];

console.log(rest);
// expected output: Array [30,40,50]

// ******************
// Examples 2
// Swapping variables


let a = 1;
let b = 3;

[a, b] = [b, a];
console.log(a); // 3
console.log(b); // 1

const arr = [1,2,3];
[arr[2], arr[1]] = [arr[1], arr[2]];
console.log(arr); // [1,3,2]



// ******************
// Examples 3
// Parsing an array returned from a function


function f() {
    return [1, 2];
  }
  
  let a, b; 
  [a, b] = f(); 
  console.log(a); // 1
  console.log(b); // 2




// ******************
// Examples 4
// Ignoring some returned values

function f() {
    return [1, 2, 3];
  }
  
  const [a, , b] = f();
  console.log(a); // 1
  console.log(b); // 



// ******************
// Examples 5

// Assigning the rest of an array to a variable

const [a, ...b] = [1, 2, 3];
console.log(a); // 1
console.log(b); // [2, 3]


// ******************
// Examples 6

// Object destructuring

const user = {
    id: 42,
    is_verified: true
};

const {id, is_verified} = user;

console.log(id); // 42
console.log(is_verified); // true 




// ******************
// Examples 7

// Assignment without declaration

let a, b;

({a, b} = {a: 1, b: 2});


// ******************
// Examples 8


// Assigning to new variable names



const o = {p: 42, q: true};
const {p: foo, q: bar} = o;
 
console.log(foo); // 42 
console.log(bar); // true


// ******************
// Examples 9

// Default values


const {a = 10, b = 5} = {a: 3};

console.log(a); // 3
console.log(b); // 5





// ******************
// Examples 10







// ******************
// Examples 11







// ******************
// Examples 12



