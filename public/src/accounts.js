function findAccountById(accounts, id) {
  const foundAccount = accounts.find((account) => account.id === id);
  return foundAccount;
}

function sortAccountsByLastName(accounts) {
let alphabetize = accounts.sort((nameA, nameB) => nameA.name.last  >  nameB.name.last ? 1 : -1)
return alphabetize;
};

function getTotalNumberOfBorrows(account, books) {
const result = books.reduce((acc, book) => {
  let count = book.borrows.filter((b) => b.id === account.id).length
    acc += count;
  return acc
}, 0);
return result;
}

function getBooksPossessedByAccount(account, books, authors) {
let result = []
for (let book of books) {
  let borrowed = book.borrows.some((b) => account.id === b.id && b.returned === false);
  let author = authors.find((a) => book.authorId === a.id);
  book.author = author;
  if(borrowed) {
    result.push(book)
  }
}
return result;
}

module.exports = {
findAccountById,
sortAccountsByLastName,
getTotalNumberOfBorrows,
getBooksPossessedByAccount,
};
