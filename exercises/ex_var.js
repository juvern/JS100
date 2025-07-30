/*
Write code that capitalizes the words in the string 'launch school tech & talk', so that you get the string 'Launch School Tech & Talk'.
*/

str = 'launch school tech & talk'

function capitalise(str) {
  let split_arr = str.split(" ");
  let camel_arr = split_arr.map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
  let join_arr = camel_arr.join(" ");
  return join_arr;
}

if (capitalise(str) === "Launch School Tech & Talk"){
  console.log(capitalise(str));
}

