//* You are given an array of objects representing a list of books in a library. Each book object contains the following properties:

// title (string)
// author (string)
// year (number)
// checkedOut (boolean)
// Your task is to write a function getCheckedOutBooksByAuthor(library, author) that takes in the library array and an author's name. The function should return an array of book titles by the given author that are currently checked out.


function getCheckedOutBooksByAuthor(library, author) {
    return library
      .filter(book => book.author === author && book.checkedOut)
      .map(book => book.title);
  }
  
  // Example usage:
  const library = [
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925, checkedOut: true },
    { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960, checkedOut: false },
    { title: "1984", author: "George Orwell", year: 1949, checkedOut: true },
    { title: "Animal Farm", author: "George Orwell", year: 1945, checkedOut: true },
    { title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951, checkedOut: false },
    { title: "Brave New World", author: "Aldous Huxley", year: 1932, checkedOut: true }
  ];
  
  console.log(getCheckedOutBooksByAuthor(library, "George Orwell"));
  // Output: ["1984", "Animal Farm"]
  