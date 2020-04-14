
// --------------------------
// Example 1

let x = 1;

if (x === 1) {
  let x = 2;

  console.log(x);
  // expected output: 2
}

console.log(x);
// expected output: 1



// --------------------------
// Example 2

let x = 1;

if (x === 1) {
  let x = 2;

  console.log(x);
  // expected output: 2
}

console.log(x);
// expected output: 1



// --------------------------
// Example 3

var x = 'global';
let y = 'global';
console.log(this.x); // "global"
console.log(this.y); // undefined


// --------------------------
// Example 4

var Thing;

{
  let privateScope = new WeakMap();
  let counter = 0;

  Thing = function() {
    this.someProperty = 'foo';
    
    privateScope.set(this, {
      hidden: ++counter,
    });
  };

  Thing.prototype.showPublic = function() {
    return this.someProperty;
  };

  Thing.prototype.showPrivate = function() {
    return privateScope.get(this).hidden;
  };
}

console.log(typeof privateScope);
// "undefined"

var thing = new Thing();

console.log(thing);
// Thing {someProperty: "foo"}

thing.showPublic();
// "foo"

thing.showPrivate();
// 1


// --------------------------
// Example 5


if (x) {
    let foo;
    let foo; // SyntaxError thrown.
  }

// --------------------------
// Example 6

let x = 1;
switch(x) {
  case 0:
    let foo;
    break;
    
  case 1:
    let foo; // SyntaxError for redeclaration.
    break;
}


// --------------------------
// Example 7

let x = 1;

switch(x) {
  case 0: {
    let foo;
    break;
  }  
  case 1: {
    let foo;
    break;
  }
}


// --------------------------
// Example 8

function do_something() {
    console.log(bar); // undefined
    console.log(foo); // ReferenceError
    var bar = 1;
    let foo = 2;
  }


// --------------------------
// Example 9

// prints out 'undefined'
console.log(typeof undeclaredVariable);

// results in a 'ReferenceError'
console.log(typeof i);
let i = 10;


// --------------------------
// Example 10

function test(){
    var foo = 33;
    if(foo) {
       let foo = (foo + 55); // ReferenceError
    }
 }
 test();


// --------------------------
// Example 11

function go(n) {
    // n here is defined!
    console.log(n); // Object {a: [1,2,3]}
  
    for (let n of n.a) { // ReferenceError
      console.log(n);
    }
  }
  
  go({a: [1, 2, 3]});


// --------------------------
// Example 12

var a = 1;
var b = 2;

if (a === 1) {
  var a = 11; // the scope is global
  let b = 22; // the scope is inside the if-block

  console.log(a);  // 11
  console.log(b);  // 22
} 

console.log(a); // 11
console.log(b); // 2


// --------------------------
// Example 13

let x = 1;

{
  var x = 2; // SyntaxError for re-declaration
}


// --------------------------
// Example 14




// --------------------------
// Example 15




// --------------------------
// Example 16




// --------------------------
// Example 17




// --------------------------
// Example 18




// --------------------------
// Example 19




// --------------------------
// Example 20




// --------------------------
// Example 21




// --------------------------