var a2 = 'Global';    // GLOBAL
var xyz = 'GLOBAL XYZ'; 

function foo() {
    var a2 = 'Functional';    // LOCAL, FUNCTIONAL
    console.log('inside Function', a2);

    if(true) {
        var xyz = 'xyz'    // update
    }
    
    console.log('valye of xyz .. ', xyz);  // ??? ???

}

foo();
console.log('outside function', a2);

///////////////////////////////////////////////


var a2 = 'Global';    // GLOBAL
var xyz = 'GLOBAL XYZ'; 

function foo() {
    var a2 = 'Functional';    // LOCAL, FUNCTIONAL
    console.log('inside Function', a2);

    if(true) {
        xyz = 'xyz'    // update
    }
    
    console.log('valye of xyz .. ', xyz);  // ??? ???

}

foo();
console.log('outside function', a2);


/////////////////////////////////////


console.log('Foor Start')
for(let j = 0; j < 10; j++) {

    //console.log(i);
    setTimeout(function() {
        console.log('setimeout J', j)
    }, 500);

}
console.log('Foor end')


///////////////////////////////////////////


console.log('Foor Start')
for(var i = 0; i < 10; i++) {

    //console.log(i);
    setTimeout(function() {
        console.log('setimeout i', i)
    }, 500);

}
console.log('Foor end')