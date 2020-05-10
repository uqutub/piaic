// ----------------------------
//  example : 1


var userName = "Ameen ALam";

function modifyUserName() {
        userName = "Daniyal Nagori";
    };

function showUserName() {
        alert(userName);
    };

alert(userName); // display Ameen Alam

modifyUserName();
showUserName();// display Daniyal Nagori



// --------------------------
//  example : 2

/* 
function createUserName() {
    userName = "Ameen Alam";
}

function modifyUserName() {
    if(userName)
        userName = "Daniyal Nagori";
};

function showUserName() {
    alert(userName);  
}

createUserName();
showUserName(); // Ameen Alam 

modifyUserName();
showUserName(); // Daniyal Nagori 

 */




// --------------------------
//  example : 3
/* 

function createUserName() {
    var userName = "Ameen Alam";
}

function showUserName() {
    alert(userName);
}

createUserName();
showUserName(); // throws error: userName is not defined

 */





// --------------------------
//  example : 4


/* 
var userName = "Ameen Alam";

function ShowUserName()
{
    var userName = "Daniyal Nagori";

    alert(userName); // "Daniyal Nagori"
}

ShowUserName();

alert(userName); // Ameen Alam

 */



// --------------------------
//  example : 5


/* 
function NoBlockLevelScope(){
    
    if (1 > 0)
    {
        var myVar = 22;

    }

    alert(myVar);
}

NoBlockLevelScope();
 */



// --------------------------
//  example : 6


/* 
var age = 100;
function go(){
 var age = 200;
 var hair =  'black';
 console.log(age);
 console.log(hair);
}
go();
console.log(age);

// OUTPUT  200 
// OUTPUT  black 
// OUTPUT  100 
 */



// --------------------------
//  example : 7


/* 

if (true) {
   // userName is in the global scope because of the 'var' keyword
   var userName = 'Ameen Alam';
   console.log(userName); // output 'Ameen Alam'
   // age is in the local scope because of the 'let' keyword
   let age = 20;
   console.log(age); // output 20
   // skills is in the local scope because of the 'const' keyword
   const skills = 'JavaScript';
   console.log(skills); // output 'JavaScript'
}
console.log(userName); // output 'Ameen Alam'
console.log(age); // Uncaught ReferenceError: age is not defined
console.log(skills); // Uncaught ReferenceError: skills is not defined


*/


// --------------------------