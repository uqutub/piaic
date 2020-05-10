// ******************
// Examples 1

var hit = document.querySelector('.hit');

document.addEventListener('click', function(){
 console.log('hello');
})


// ******************
// Examples 2


var _hit = document.querySelector('.hit');
var hit1 = document.querySelector('.hit1');

_hit.addEventListener('click', function(){
 console.log('hello123');
})

hit1.addEventListener('click',hey)

function hey(){
 console.log('runninggg');
}


// ******************
// Examples 3


hit1.removeEventListener('click',hey)
var hitme = document.querySelectorAll('.hitMe');
hitme.addEventListener('click',function(){
 console.log('000000');
})
var hitme = document.querySelectorAll('.hitMe');
hitme.forEach(function(but){
 but.addEventListener('click',function(){
   console.dir(but);
 })
})





// ******************
// Examples 4

var hitme = document.querySelectorAll('.hitMe');
function callFunc(but) {
 but.addEventListener('click', function () {
   console.dir(but);
 })
}
hitme.forEach(callFunc);






// ******************
// Examples 5




// ******************
// Examples 6




// ******************
// Examples 7




// ******************
// Examples 8




// ******************
// Examples 9




// ******************
// Examples 10




// ******************
// Examples 11



// ******************
// Examples 12




// ******************
// Examples 13




// ******************
// Examples 14




// ******************
// Examples 15




// ******************
// Examples 16




// ******************
// Examples 17




// ******************