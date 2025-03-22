/*

When using && and ||, the return value is always the value of the operand evaluated last, except the following;
|| (AND) will return the right-hand operand if the left operand is a falsy value.
?? (OR) will return the right-hand operand if the left operand is nullish (null or undefined)

Does it short circuit or not? If it does, it shows the right operand

*/

false || (true && false); // false || false -> false 

true || (1 + 2); // true 
// it performs a short-circuit so it retuns the first operand

(1 + 2) || true; // 3 || true -> true 
// it short-circuit so it returns the first operand. 3 is truthy.

true && (1 + 2); // true && 3 -> 3 
// it needs to evaluate both so does not short-circuit and shows the second operand

false && (1 + 2); // false && 3 -> false
// it short-circuits so returns the first operand.

(1 + 2) && true; // 3 && true -> true
// it needs to evaluate both so does not short-circuit and shows the second operand

(32 * 4) >= 129; // 128 >= 129 -> false

false !== !true; // false !== false -> false

true === 4; // false

false === (847 === '847'); // false == false -> true

false === (847 == '847'); // false === true -> false

(!true || (!(100 / 5) === 20) || ((328 / 4) === 82)) || false; 
// !true -> false
// (!(100 / 5) === 20) -> false === 20 -> false (100/5 = 20 is truthy and !20 makes it false)
// so false || false -> true
// --> expression is now true || ((328 / 4) === 82)) || false
// (328 / 4) === 82 -> true
// so true || true -> true
// --> expression is now true || false - > true as it short circuits



