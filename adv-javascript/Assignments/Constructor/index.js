// ******************
// Examples 1

let students = {
    name: "ameen",
    age: 20,
    address: "Address...."
}

let student1 = {
    name: "student1",
    age: 20,
    address: "Address...."
}
let student2 = {
    name: "student2",
    age: 20,
    address: "Address...."
}
let student3 = {
    name: "student3",
    age: 20,
    address: "Address...."
}
let student4 = {
    name: "student4",
    age: 20,
    address: "Address...."
}




// ******************
// Examples 2

// Constructor


function Students() { 
    // unfinished code
} 
  
let Student1 = new Students();


// ******************
// Examples 3



function Students(n, ag, add){
    this.name = n
    this.age = ag
    this.address = add
}

var rizwan = new Students("rizwan", 20, "address.....")
console.log(rizwan)

var ameen = new Students("ameen", 20, "address.....")
console.log(ameen)

var hamza = new Students("hamza", 19, "address.....")
console.log(hamza)




// ******************
// Examples 4



function Students(n, ag, add){
    this.name = n
    this.age = ag
    this.address = add
    this.func = function(){
        console.log("runnin function", this.name)
    }
}

var rizwan = new Students("rizwan", 20, "address.....")
console.log(rizwan.func())

var ameen = new Students("ameen", 20, "address.....")
console.log(ameen.func())

var hamza = new Students("hamza", 19, "address.....")
console.log(hamza.func())



// ******************
// Examples 5



function Students(name, age, address){
    // let defaultVal = " default value"
    this.name = name
    this.age = age
    this.address = address
}

let ameen = new Students("Ameen", 20, 'karachi...')
let daniyal = new Students("Daniyal", 23, 'karachi...')

console.log(ameen)
console.log(daniyal)