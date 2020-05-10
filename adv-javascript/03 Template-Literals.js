/** 
 * https://flaviocopes.com/javascript-template-literals/
 * Introduced in ES2015, aka ES6, Template Literals offer a new way to declare strings, 
    but also some new interesting constructs which are already widely popular.
**/

// Multiline strings

const string =
  'first part \
second part';

// or

const string = 'first line\n' + 'second line';

// Template literals make multiline strings much simpler.

const string = `Hey
this

string
is awesome!`;


// Interpolation
const myVariable = 'test'
const string = `something ${myVariable}`; //something test

// inside the ${} you can add anything, even expressions:
const string = `something ${1 + 2 + 3}`;
const string2 = `something ${doSomething() ? 'x' : 'y'}`;


// A more complex example is:
const string = `something
another ${'x'}
new line ${1 + 2 + 3}
test`;





