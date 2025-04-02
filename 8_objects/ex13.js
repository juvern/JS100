// As written, this code will raise an error on line 5. Without modifying the function definition of foo, update this code to print the desired text.

function foo(bar) {
  console.log(bar()); // expects a function argument
}


/*
foo() -> there are no arguments, so will be set to undefined
*/


foo(function() {return 'Welcome'});    // Should print 'Welcome'
foo(function() {return 3.1414});    // Should print 3.1415
foo(function() {return [1, 2, 3]});    // Should print [1, 2, 3]