function getTotalBooksCount(books) {
  let counter = 0;
  for (let book of books) {
    if (book) {
      counter += 1;
    }
  }
  return counter;
}

function getTotalAccountsCount(accounts) {
    let counter = 0;
  for (let account of accounts) {
    if (account) {
      counter += 1;
    }
  }
  return counter;
}

function getBooksBorrowedCount(books) {
      let counter = 0;
  for (let book of books) {
    if (book.borrows[0].returned === false) {
      counter += 1;
    }
  }
  return counter;
}

function getMostCommonGenres(books) {
  let result = {};
  let genre = books.forEach((book) => {
    if (result[book.genre] == null) {
      result[book.genre] = 1; 
    } else {
      result[book.genre] += 1;
    }
  })
  let countArray = [];
  for (const [key, value] of Object.entries(result)) {
    countArray.push( { 'name' : key, 'count' : value } ); 
  }
  return topFive(countArray)
}  

function getMostPopularBooks(books) { 
  let popBooks = [];
  books.forEach((book) => {
      popBooks.push( {name: book.title, count: book.borrows.length } );
  })
  return topFive(popBooks);
}

function getMostPopularAuthors(books, authors) {
  let popAuthors = [];
  books.forEach((book) => {
    authors.forEach((author) => {
      const full = `${author.name.first} ${author.name.last}`;
      if (book.authorId === author.id) {
        popAuthors.push( {name: full, count: book.borrows.length} )
      }
    })
  })
  return topFive(popAuthors);
}

//helper
function topFive(result) {
  return result.sort((valueA, valueB) => valueA.count < valueB.count ? 1 : -1).splice(0,5);
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
