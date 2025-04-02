// What does the following program log to the console? Why?

let foo = {
  a: 'hello',
  b: 'world',
};

let qux = 'hello';

function bar(argument1, argument2) {
  argument1.a = 'hi';
  argument2 = 'hi';
}

bar(foo, qux);

console.log(foo.a);
/*
1. foo.a -> 'hello'

2. After bar(foo,qux) -> 'hi' 
Objects are immutable, but the values or primitives are mutable

*/



console.log(qux); // -> 'hello'
// bar() only changes the local variable