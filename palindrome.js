function isPalindrome(str) {
	// base case - if length is 0 or 1, it's a palindrome
	if (str.length <= 1) return true;

	let first = str[0];
	let last = str[str.length - 1];

	if (first != last) return false;

	// recursive case: check the inside substring
	let inner = str.slice(1, str.length -1);
	console.log(inner); // see what it's comparing
	// return recursive result
	return isPalindrome(inner);
}

console.log(isPalindrome("racecar"));     // true
console.log(isPalindrome('apple'));				// undefined
console.log(isPalindrome('anna'));				// true
console.log(isPalindrome('shiba'));				// undefined			
console.log(isPalindrome("madam"));       // true
console.log(isPalindrome("a"));           // true
console.log(isPalindrome(""));            // true