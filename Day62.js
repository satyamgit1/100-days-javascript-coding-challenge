//* Question:
//* Write a function called delay that returns a Promise which resolves after a specified number of milliseconds.

function delay(milliseconds) {
    return new Promise((resolve) => {
      setTimeout(resolve, milliseconds);
    });
  }
  
  // Test the function
  delay(2000).then(() => {
    console.log('Executed after 2 seconds');
  });
  