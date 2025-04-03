// Earlier, we learned that JavaScript has multiple versions of the numeric value zero. In particular, it has 0 and -0. While it's mathematically nonsensical to distinguish between 0 and -0, they are distinct values in JavaScript. We won't get into why JavaScript has a 0 and -0, but it can be useful in some cases.

// There are other ways to detect a -0 value. Without using Object.is, write a function that will return true if the argument is -0, and false if it is 0 or any other number.

/*

> 0 === -0
= true

> String(-0)
= '0'

> let value = -0;
> Object.is(value, 0)
= false

> Object.is(value, -0)
= true

*/

function Zero(value) {
	// 1 / 0 returns Infinity and 1 / -0 returns -Infinity
	return 1 / value === -Infinity;

}

console.log(Zero(-0)); // -> return true
console.log(Zero(0)); // -> return false
console.log(Zero(12)); // -> return false