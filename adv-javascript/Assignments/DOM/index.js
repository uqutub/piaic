// ******************
// Examples 1

const paragraphs = document.getElementsByTagName("p");
// paragraphs[0] is the first <p> element
// paragraphs[1] is the second <p> element, etc.
console.log(paragraphs[0].nodeName);


// ******************
// Examples 2


// Select any single element using querySelector
var ele = document.querySelector('p');
console.log(ele);


// ******************
// Examples 3

// Select all element using querySelectorAll
var allEle =  document.querySelectorAll('p');
console.log(allEle);



// ******************
// Examples 4


var allEle =  document.querySelectorAll('.item');
console.log(allEle);



// ******************
// Examples 5


var inner = document.querySelector('p').innerHTML;
console.log(inner)

// ******************
// Examples 6

document.getElementById('pp').innerHTML = inner;
console.log(document.body.innerHTML)


// ******************
// Examples 7


var b = document.querySelector('.item');
console.log(b.querySelector('p'))



// ******************
// Examples 8

function init() {

  var ele = document.querySelector('p');
  console.log(ele);
 
 }
 document.addEventListener('DOMContentLoaded', init)


// ******************
// Examples 9

// Check all the properties and methods on any element
var b = document.querySelector('.item');
console.dir(b)

// Set the text content property on that element
const heading = document.querySelector('h2');
heading.textContent = 'hello Ameen Alam';


// const heading = document.querySelector('h2');
// Difference between innerText AND textContent 
console.log(heading.innerText); // Just render the text not style elements
console.log(heading.textContent);// Render all the text within the element


// ******************
// Examples 10


var b = document.querySelector('.item');
b.classList.add('open')
b.classList.remove('open')
//console.log(b.classList)

//Add class on runtime\
b.classList.add('round')


// ******************
// Examples 11


const classEle = document.querySelector('p');
classEle.classList.add('nice');
console.log(classEle.classList);



// ******************