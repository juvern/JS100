// Identify all of the variables, object property names, primitive values, and objects shown in the following code (assume the code has not been executed). Don't panic if you miss a few items - this exercise is more challenging than it looks.

function hello(greeting, name) {
  return greeting + ' ' + name;
}

function xyzzy() {
  return { a: 1, b: 2, c: [3, 4, 5], d: {} };
}

const howdy = hello('Hi', 'Grace');
let foo = xyzzy();

/* variables (function names, parameters)

hello
greeting
name
xyzzy
howdy
hello
foo

*/


/* object property names
a
b
c
d
0 // array index are also propery names
1
2

*/

/* primitives
''
1
2
3
4
5
'Hi'
'Grace'
'a' // includes propery names
'b'
'b'
0 // includes array indexes 
1
2

*/

/* objects (including functions)
hello
xyzzy
{ a: 1, b: 2, c: [3, 4, 5], d: {} }
[3, 4, 5] // array is an object
{}

*/

// Identify all of the variables, object property names, primitive values, and objects in the following code. This problem is even more challenging than the previous one. Note that some items in this program may appear in multiple categories.



function bar(arg1, arg2) {
  let foo = 'Hello';
  const qux = {
    abc: [1, 2, 3, [4, 5, 6]],
    def: null,
    ghi: NaN,
    jkl: foo,
    mno: arg1,
    pqr: arg2,
  };

  return qux;
}

let result = bar('Victor', 'Antonina');


/* variables

bar, arg1, arg2, foo, qux, result

*/


/* object property names
abc, def, ghi, jkl, mno, pqr
0, 1, 2, 3 // array index are also propery names

*/

/* primitives
'Hello', null, NaN, 1, 2, 3, 4, 5, 6

abc, def, ghi, jkl, mno, pqr // includes property names
'b'
'b'
0 // includes array indexes 
1
2
3

*/

/* objects (including functions)
bar
[1, 2, 3, [4, 5, 6]]
[4, 5, 6]
{
  abc: [1, 2, 3, [4, 5, 6]],
  def: null,
  ghi: NaN,
  jkl: foo,
  mno: arg1,
  pqr: arg2,
};


