function barCodeScanner(serial) {
  switch (serial) {
    case '123':
      console.log('Product1');
    case '113':
      console.log('Product2');
    case '142':
      console.log('Product3');
    default:
      console.log('Product not found!');
  }
}

barCodeScanner('113');

//What does the following code log to the console, and why?

// --> Logs the following as there is no break statement so it falls through after matching 113
// Product2
// Product3
// Product not found!