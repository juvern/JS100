/*
Create a function that creates and returns a copy of an object. The function should take two arguments: the object to copy and an array of the keys that you want to copy. Do not mutate the original object.

The function should let you omit the array of keys argument when calling the function. If you do omit the argument, the function should copy all of the existing keys from the object.
*/
let objToCopy = {
  foo: 1,
  bar: 2,
  qux: 3,
};

// First solution
// function copyObj(obj,arr) {
//   let newObj = {};
//   if (!arr) {
//     for (let prop in obj) {
//       newObj[prop] = obj[prop];
//     }
//   } else {
//       arr.forEach(function(key) {
//       if (obj.hasOwnProperty(key)) {
//           newObj[key] = obj[key];
//       }
//     })
//     };
//   return newObj; // this needs to be outside the loop
// }



// Alternative solution
function copyObj(sourceObj, keys) {
  let newObj = {};
  // If second argument not provided, it will return undefined
  if (keys) {
    keys.forEach(function(key) {
      newObj[key] = sourceObj[key] 
    })
  } else {
    Object.assign(newObj, sourceObj);
  }

  return newObj;
}


let newObj = copyObj(objToCopy);
console.log(newObj);        // => { foo: 1, bar: 2, qux: 3 }

let newObj2 = copyObj(objToCopy, [ 'foo', 'qux' ]);
console.log(newObj2);       // => { foo: 1, qux: 3 }

let newObj3 = copyObj(objToCopy, [ 'bar' ]);
console.log(newObj3);       // => { bar: 2 }