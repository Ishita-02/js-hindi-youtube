// const coding = ["js", "ruby", "java", "python", "cpp"]


// const values = coding.forEach( (item) => {
//     //console.log(item);
//     return item
// } )

// console.log(values);

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter( (num) => {
//     return num > 4
// } )

// const newNums = []

// myNums.forEach( (num) => {
//     if (num > 4) {
//         newNums.push(num)
//     }
// } )

// console.log(newNums);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 2090, edition: 1989 },
  ];


  // books.forEach(book => {console.log(book.title)}) ;

  // let fictionBooks = books.filter(book => book.genre == 'Fiction');
  // console.log(fictionBooks);

  // let publishedBooks = books.filter(book => 1980 <= book.publish &&  book.publish <= 1989);
  // console.log(publishedBooks);

  // let titledBooks = [];
  // books.forEach(book => titledBooks.push(book.title));
  // console.log(titledBooks);

  // let titledBooks = books.map(book => book.title);
  // console.log(titledBooks);

  // const totalDifference = books.reduce((accumulator, book) => {
  //   return accumulator + (book.edition - book.publish);
  // }, 0);

  // console.log(totalDifference); 


  // let fictionBooks = books.filter(book => book.genre == 'Non-Fiction' && book.publish > 1990)
  // fictionBooks.forEach(book => console.log(book.title));

  // console.log("Ordering a pizza..."); 

  // setTimeout(() => {
  //   console.log("Pizza has arrived! 🍕"); 
  // }, 2000);

  // console.log("Watching TV while waiting..."); 

  // This is a fake function that returns a Promise
function orderPizza() {
  return new Promise((resolve, reject) => {
    // Simulate a delay
    setTimeout(() => {
      const isPizzaAvailable = true;
      if (isPizzaAvailable) {
        resolve("Pizza has arrived! 🍕"); // Fulfill the promise
      } else {
        reject("Error: The pizza machine is broken. 😭"); // Reject the promise
      }
    }, 2000);
  });
}

console.log("Ordering a pizza...");

orderPizza()
  .then(successMessage => {
    // This block runs if the promise is resolved (fulfilled)
    console.log(successMessage);
  })
  .catch(errorMessage => {
    // This block runs if the promise is rejected
    console.log(errorMessage);
  })
  .finally(() => {
    // This block always runs
    console.log("The order is complete.");
  });
