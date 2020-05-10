/**
 * A closure is a feature in JavaScript where an inner function has access to the outer (enclosing) function’s variables — a scope chain.
 * The closure has three scope chains:
 * * it has access to its own scope — variables defined between its curly brackets
 * * it has access to the outer function’s variables
 * * it has access to the global variables
 * https://medium.com/@prashantramnyc/javascript-closures-simplified-d0d23fa06ba4
 * https://www.w3schools.com/js/js_function_closures.asp
*/

function makeFunc() {
    var name = 'Mozilla';
    function displayName() {
        alert(name);
    }
    return displayName;
}

var myFunc = makeFunc();
myFunc();





var multiplier = function (m) {
    return function (v) {
        return m * v;
    }
};
var doubler = multiplier(2);    // m = 2    doubler(4) v = 4
var tripler = multiplier(3);    // m = 3    tripler(6) v = 6
var forther = multiplier(4);    // m = 4    forther(5) v = 5
doubler(4); // 2 * 4
tripler(4); // 3 * 4
forther(4); // 4 * 4

// using Fat Arrow Function 
var multiplier = (m) => (v) => m * v;






function abc(m) {
    console.log('outer', m);
    return function (v) {
        console.log('inner', v);
    }
}
var bar = abc('m');    // outer m
bar('v')   // inner v