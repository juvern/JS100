// Exercise 9

/* 

|| will skip the first operand if it's a falsy value. If not, it will return the first operand and short circuits.

?? will skip the first operand if its nullish (null or undefined). If not, it will return the first operand and short circuits.

In summary || skips falsy values ?? skips nullish values.


*/

console.log(false ?? null); 				// => false
console.log(true ?? (1 + 2)); 			// => true
console.log((1 + 2) ?? true); 			// => 3
console.log(null ?? false); 				// => false
console.log(undefined ?? (1 + 2)); 	// => 3
console.log((1 + 2) ?? null); 			// => 3
console.log(null ?? undefined); 		// => undefined
console.log(undefined ?? null); 		// => null

// Exercise 10

function show(foo = undefined, bar = null) {
  console.log(`foo is ${foo ?? 3}, bar is ${bar ?? 42}`);
}

show(5, 7); 
// `foo is ${5 ?? 3}, bar is {7 ?? 42}`
// => 'foo is 5, bar is 7'

show(0, 0);
// `foo is ${0 ?? 3}, bar is {0 ?? 42}`
// => 'foo is 0, bar is 0'

show(4);
// `foo is ${4 ?? 3}, bar is {null ?? 42}`
// => 'foo is 4, bar is 42'

show();
// `foo is ${undefined ?? 3}, bar is {null ?? 42}`
// => 'foo is 3, bar is 42'