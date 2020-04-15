// -----------------------------------------
// ----------------------------------------
//  Example 


function buildContor(i) { 
    var contor = i;
    var displayContor = function() {
        console.log(contor++);
        contor++;
    };
    return displayContor; 
}

var myContor = buildContor(1);
myContor(); // 1
myContor(); // 2
myContor(); // 3

// new closure - new outer scope - new contor variable
var myOtherContor = buildContor(10);
myOtherContor(); // 10 
myOtherContor(); // 11

// myContor was not affected 
myContor(); // 4

// -----------------------------------------
// ----------------------------------------
//  Example 


function initializeData() {
    var myVar = 1; 
    return { 
        getVar: function() {
            return myVar;
        },
        setVar: function(v) {
            myVar = v;
        }
    };
}

obj = initializeData();

console.log(obj.getVar()); // 1

obj.setVar(2);
console.log(obj.getVar()); // 2

obj.setVar("string");
console.log(obj.getVar()); // string



// -----------------------------------------
// ----------------------------------------
//  Example 


function calculator(){
    let total = Number()
    
    function add(a, b){
        total += a + b
        console.log(total)
    }
    function sub(a, b){
        total += a - b
        console.log(total)
    }
    function mul(a, b){
        total += a * b
        console.log(total)
    }
    function div(a, b){
        total += a / b
        console.log(total)
    }

    return{
        add,
        sub,
        mul,
        div,
    }
    
}

let calc = calculator()

calc.add(2, 2)
calc.sub(1, 5)
calc.mul(2, 15)
calc.mul(2, 2)
calc.div(2, 2)



// -----------------------------------------
// ----------------------------------------
//  Example 


var multThenAdd = num => {
    return mul => add => {
       return num * mul + add
    }
 }
 
 var timesTwoPlusFour = (num) => multThenAdd(num)(2)(4)
 
 timesTwoPlusFour(1) //> 6
 timesTwoPlusFour(10) //> 24


 
 // -----------------------------------------
// ----------------------------------------
//  Example 