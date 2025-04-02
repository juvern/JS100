// Use map and filter to first determine the lengths of all the elements in an array of string values, then discard the even values (keep the odd values).


function lengths(arr) {
	return arr.map(value => value.length)
}

function oddLengths(arr) {
	arr = lengths(arr);
	return arr.filter(length => length % 2 !== 0)
}

// LS solution

function oddLengths(strings) {
  let lengths = strings.map((letters) => letters.length);
  let oddLengths = lengths.filter((number) => number % 2 === 1);
  return oddLengths;
}

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr));

// Test case

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(lengths(arr));
console.log(oddLengths(arr)); // => [1, 5, 3]