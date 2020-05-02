// ******************
// Examples 1

let newObj = new Object()
console.log(newObj)

// ******************
// Examples 2


let o = {}
console.log(o)          // {}

o.name = "Ameen"
console.log(o)          // {name: "Ameen"}
console.log(o.name)      // Ameen
console.log(o["name"])   // Ameen
console.log(o["age"])   // undefined

o["age"] = 20           //  same as --- o.age = 20
console.log(o)          // {name: "Ameen", age: 20}
console.log(o["age"])   // 20

o["name"] = "Ameen Alam" //  same as --- o.name = "Ameen Alam"
console.log(o)          // {name: "Ameen Alam", age: 20}

delete  o.name          //  same as ---  delete  o["name"]
console.log(o)          // {age: 20}

// ******************
// Examples 3

let students = {
  name: "ameen",
  age: 20,
  address: "Address.../"
}

console.log(students)         
console.log(students.name)
console.log(students["name"])
console.log(students.age)
console.log(students["age"])


// ******************
// Examples 4


let students2 = {
  name: "ameen",
  age: 20,
  address: "Address.../",
  qualification : ["CKAD", "BS", "AWS"],
  nested: { key1: "val1", key2: "val2" }
}

console.log(students2)                      // {....{..}}
console.log(students2.qualification)       // ["CKAD", "BS", "AWS"]
console.log(students2.qualification[1])    // BS
console.log(students2["qualification"][1]) // BS

console.log(students2.nested)             // {key1: "val1", key2: "val2"}
console.log(students2.nested.key1)        // val1
console.log(students2.nested["key1"])     // val1
console.log(students2["nested"].key1)     // val1
console.log(students2["nested"]["key1"])  // val1



// ******************
// Examples 5

// Undefined vs null

const person = {
  age: 1,
  name: 'Ameen',
  sports: 'football'
}
person.age = {} 
console.log(person);


// ******************
// Examples 6

const person2 = {
  age: 1,
  name: 'Ameen',
  sports: 'football'
}
// person2 = {}   // comment out and check
console.log(person2);


// ******************
// Examples 7
// Objects (Reference)


var name1 = "Ameen";
var name2 = "Alam";

if(name1 === name2){
 console.log(name1);
}
var name1 = "Ameen";
var name2 = "Ameen";

if(name1 === name2){
 console.log(name1);
}
var obj = {name: 'ameen',age : 21}
var obj1 = {name: 'ameen',age : 21}
if(obj1 === obj){
  console.log('2121221');
}




// ******************
// Examples 8


var obj = {name: 'dani',age : 21}
var obj1 = obj
if(obj1 === obj){
  console.log('12221');
}

var obj = {name: 'dani',age : 21}
var obj1 = {name: 'dani',age : 21}
obj = obj1;
obj.age = 31
obj1




// ******************
// Examples 9


// To create a copy of the object or break the reference using object.assign
var obj = {name: 'dani',age : 21}
var obj1 = {name: 'dani',age : 21}

var obj = Object.assign( {}, obj1 );
obj.age = 31
obj1





// ******************
// Examples 10


// To create a copy of the object or break the reference using spread operator
var obj = {name: 'dani',age : 21}
var obj1 = {name: 'dani',age : 21}

var obj = { ...obj1 }
obj.age = 31
obj1





// ******************
// Examples 11


var obj = {name: 'dani',age : 21}
var obj1 = {name: 'dani',age : 21, clothes: {shirt: 'white'}};
​
var obj = Object.assign({}, obj1);
obj.age = 31
obj.clothes.shirt = 'red'
obj1




// ******************
// Examples 12

// OBJECTS (MERGE TWO OBJECTS)


var stuff = {name: 'dani',age : 21,shoes: 'nike'}
var stuff1 = {name: 'dani',age : 21, clothes: {shirt: 'white'}};

var mergeObj = {...stuff, ...stuff1 };



// ******************
// Examples 13

// Object Literal Shorthand
let cat = 'Miaow';
let dog = 'Woof';
let bird = 'Peet peet';
let someObject = {
  Cat,
  Dog,
  Bird 
}
console.log(someObject);
//{  cat: "Miaow",
//  dog: "Woof",
//  bird: "Peet peet"
//}



// ******************
// Examples 14

// Objects.keys

let obj = {
  name: 'Krunal',
  education: 'IT Engineer'
} ;
console.log(Object.keys(obj)); // ["name", "education"]



// ******************
// Examples 15


// Object.assign

const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };
const returnedTarget = Object.assign(target, source);
console.log(target);
// expected output: Object { a: 1, b: 4, c: 5 }
console.log(source);
// expected output: Object { b: 4, c: 5 }
console.log(returnedTarget);
// expected output: Object { a: 1, b: 4, c: 5 }






// ******************
// Examples 16


const obj = { a: 1 };
const copy = Object.assign({}, obj);
console.log(copy); // { a: 1 }


// by spread operator
const obj = { a: 1 };
const copy = {...obj};
console.log(copy); // { a: 1 }



// ******************
// Examples 17

const object1 = {
  a: 'somestring',
  b: 42,
  c: false
};
console.log(Object.values(object1));
// expected output: Array ["somestring", 42, false]


// ******************
// Examples 18



var handler = {
  get: function(target, name) {
    return target.hasOwnProperty(name) ? target[name] : 42;
  }
};
var p = new Proxy({}, handler);
p.answerToTheUltimateQuestionOfLife; //=> 42



// ******************
// Examples 19

let oo = new Object()
console.log(oo)
let o1 = new Object(undefined)
console.log(o1)
let o2 = new Object(null)
console.log(o2)

// equivalent to o3 = new Boolean(true)
let o3 = new Object(true)
console.log(o3)
// equivalent to o4 = new Boolean(false)
let o4 = new Object(Boolean())
console.log(o4)



// ******************