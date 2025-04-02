let myProtoObj = {
  foo: 1,
  bar: 2,
};



let myObj = Object.create(myProtoObj);
myObj.qux = 3;

// Snippet 1 - iterates over its "own" properties, not inherited from the prototype
let objKeys = Object.keys(myObj);
objKeys.forEach(function(key) {
  console.log(key);
}); // -> return qux


// Snippet 2
for (let key in myObj) {
  console.log(key);
} /* -> return  qux
                foo
                bar */