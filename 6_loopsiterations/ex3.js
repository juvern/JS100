let counter = 0;

while (counter = 1) {
  console.log(counter);
  counter += 1;

  if (counter => 2) { // if counter > 2, then it becomes an endless loop
    break;
  }
}