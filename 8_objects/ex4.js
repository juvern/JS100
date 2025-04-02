// Create an array from the keys of the object obj below, with all of the keys converted to uppercase. Your implementation must not mutate obj.

let obj = {
  b: 2,
  a: 1,
  c: 3,
};

let keys = Object.keys(obj);
console.log(keys);

let upperKeys = keys.map(key => key.toUpperCase());
console.log(upperKeys);
console.log(obj);
