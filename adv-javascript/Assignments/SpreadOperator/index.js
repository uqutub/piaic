// ******************
// Examples 1


let arr = [1, 2, 3]
let arr2 = [4,5,6]
let arr3 = [...arr, ...arr2]
console.log(arr)

// ******************
// Examples 2


let obj = {name: "ameen", age: 20}
let obj2 = { designation: "DevOps Engineer" }
let obj3 = {...obj, ...obj2}
console.log(obj)
console.log(obj2)
console.log(obj3)


// ******************
// Examples 3

function sum(x, y, z) {
    return x + y + z;
  }
  
  const numbers = [1, 2, 3];
  
  console.log(sum(...numbers));
  // expected output: 6
  
  console.log(sum.apply(null, numbers));
  // expected output: 6
  

// ******************
