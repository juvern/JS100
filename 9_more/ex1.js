let array1 = [1, 2, 3];
let array2 = array1;
array1[1] = 4;
console.log(array2);

/*
1. array2 is pointed to array1
2. array1 is then mutated to [1, 4, 3]
*/
