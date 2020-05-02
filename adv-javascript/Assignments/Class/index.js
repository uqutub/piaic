// ******************

class Students {
}

// Examples 1


class Students {
    constructor() {
      this.name = "Ameen Alam";
    }
  }
  
  const student1 = new Students();
  
  console.log(student1.name);
  // expected output: "Ameen Alam"
  


// ******************
// Examples 2




class Students {
    constructor(n, ag, add){
        this.name = n
        this.age = ag
        this.address = add
    }
    func(){
        console.log("func running ")
    }
}

var ameen = new Students("ameen", 20, "address...")
console.log(ameen.func())

var rizwan = new Students('rizawan', 19, 'address.....')
console.log(rizwan)



// ******************
// Examples 3

// Inheritance

class Parent {
    constructor(age){
        this.age = age
    }
}
class Child1 extends Parent{
   constructor(age){
       super(age)
   }
}
var _child1 = new Child1(6956)
console.log(_child1)





// ******************
// Examples 4



class Parent {
    constructor(age){
        this.age = age
        this.name = "name"
        this.address = "Address........"
    }

    func(){
        
    }
}
class Child1 extends Parent{
   constructor(age){
       super(age)
   }
}

var _child1 = new Child1(6956)
console.log(_child1)




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







