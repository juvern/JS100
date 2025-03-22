return foo() ? 'bar' : qux();

// Refactor this statement to use an if statement instead.

if (foo()) {
  return 'bar';
} else {
  return qux();
}