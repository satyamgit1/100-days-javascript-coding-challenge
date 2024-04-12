// Coding Challenge: Convert a string to camelCase & snake_case.

const toCamelCase = (str) => {
  str = str.trim().split(" ");

  str = str.map((curElement, index) => {
    if (index === 0) {
      return curElement;
    } else {
      return (
        curElement.charAt(0).toUpperCase() + curElement.slice(1).toLowerCase()
      );
    }
  });
  console.log(str);
};

// Example usage:
console.log(toCamelCase("hello world thApa")); // Output: helloworld
// HomeWork:
// console.log(toSnakeCase("helloworld")); // Output: hello_world
