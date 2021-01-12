/* eslint-disable strict */
function findAccountById(accounts, id) {
  return accounts.find((acct)=> acct.id === id);
}

function sortAccountsByLastName(accounts) { 
  return accounts.sort((accountA, accountB) => { 
    const lastA = accountA.name.last.toLowerCase(); 
    const lastB = accountB.name.last.toLowerCase();
    return lastA > lastB ? 1 : -1;
});
}

function numberOfBorrows(account, books) {
  let count = 0;
  for(const book of books){
    for(const elem of book.borrows){
      if(elem.id == account.id){
        count++;
      }
    }
  }
  return count;
}

function getBooksPossessedByAccount(account, books, authors) {
  //let list = [];
  //forEach book, if book.borrows[0] = false && book.borrows[1] = account.id
  //listObj = {...book};
  //listObj.author = authors.find(author=>book.authorId === author.id);
  //list.push(listObj);
  //return list;
let list = [];
books.forEach((book)=>{
  if(book.borrows[0].returned == false && book.borrows[0].id === account.id){
    let listObj = {...book};
    listObj.author = authors.find(author=>book.authorId === author.id);
    list.push(listObj);
  }
});
return list;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  numberOfBorrows,
  getBooksPossessedByAccount,
};
