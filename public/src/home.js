/* eslint-disable strict */

function totalBooksCount(books) {
  return books.length;
}

function totalAccountsCount(accounts) {
  return accounts.length;
}

function booksBorrowedCount(books) {
  return books.filter((book) => book.borrows[0].returned == false).length;
}

function getMostCommonGenres(books) {
  const genres = books.reduce((acc, book)=>{
    (acc[book.genre]) ? acc[book.genre]++ : 
    acc[book.genre] = 1; 
    return acc;
  }, {});//reduce() method executes a reducer function (that you provide) on each element of the array, resulting in single output value.
 
  let keys = Object.keys(genres);//returns an array of keys
  let sortedKeys = keys.sort((keyA, keyB)=> genres[keyB] - genres[keyA]);
  let finalArr = sortedKeys.map((key)=>{
    return {name: key, count: genres[key]}});
    return finalArr.slice(0,5)

  // let list = [];
  // books.forEach(book=>{
  //   if(list.some(item=>item.name === book.genre)){
  //     list.forEach(type=>{
  //       if(type.name === book.genre){
  //         type.count++;
  //       }
  //     });
  //   }else{
  //     list.push({
  //       name: book.genre,
  //       count: 1
  //     });
  //   }
  // });
  // return list.sort((genreA, genreB)=>genreA.count < genreB.count).slice(0,5);
} 

function getMostPopularBooks(books) {
  let list = [];
  books.forEach((book) => {
    list.push({
      name: book.title,
      count: book.borrows.length,
    });
  });
  return list.sort((bookA, bookB) => bookA.count < bookB.count ? 1 : -1).slice(0, 5);
}

function getMostPopularAuthors(books, authors) {
//create [], sort authors, forEach author
//create item obj={name: author.name.first author.name.last, count: 0};
//also loop through books, if book.authorId = author.id, add book.borrows.length to obj.count
//once done looping books, add obj to [];
//once done looping authors, return list.sorted.sliced

let list = [];
authors.forEach((author)=>{
  const obj = { name: `${author.name.first} ${author.name.last}`, count: 0};
  for(const book of books){
    if(book.authorId === author.id){
      obj.count += book.borrows.length;
    }
  }list.push(obj);
});
return list.sort((listA, listB)=>listA.count<listB.count?1:-1).slice(0,5);  
}

module.exports = {
  totalBooksCount,
  totalAccountsCount,
  booksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
