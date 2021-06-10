function findAuthorById(authors, id) {
  let found = authors.find((author) => author.id === id);
  return found;
}

function findBookById(books, id) {
    let found = books.find((book) => book.id === id);
  return found;
}

function partitionBooksByBorrowedStatus(books) {
  let result = [];
  let returned = [];
  let notReturned = [];
  books.forEach((book) => {
    if (book.borrows.some((b) => b.returned === false)) {
      notReturned.push(book);
    } else {
      returned.push(book);
    }
  })
  result.push(notReturned);
  result.push(returned);
  return result;
}

function getBorrowersForBook(book, accounts) {
  let result = [];
  book.borrows.map((b) =>{
    accounts.forEach((a) => {
      if (a.id === b.id) {
        a.returned = b.returned;
        result.push(a);
      }
    })
  })
  return result.slice(0,10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
