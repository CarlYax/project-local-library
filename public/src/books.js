function findAuthorById(authors, id) {
  return authors.find((auth)=> auth.id === id);
}

function findBookById(books, id) {
  return books.find((book)=> book.id === id);
}

function partitionBooksByBorrowedStatus(books) {
  let outBooks = books.filter(book=>book.borrows[0].returned == false);
  let inBooks = books.filter(book=>book.borrows[0].returned == true);
  return [outBooks, inBooks];
}

function getBorrowersForBook(book, accounts){ 
let borList = [];
accounts.forEach(account=>{
  book.borrows.forEach(trans=>{
    if(trans.id === account.id){
      let acct = {...account};
      acct.returned = trans.returned;
      borList.push(acct);
    }
  })
});
return borList.slice(0,10);
}


module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
