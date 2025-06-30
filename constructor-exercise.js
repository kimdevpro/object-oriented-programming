/* Please read the instructions located in the 1-constructor-exercise-readme.md file and complete your code below */

var currentTime = new Date()
var year = currentTime.getFullYear()

function Book(title, author, year, genre) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.genre = genre;
}

Book.prototype.getSummary = function () {
    return `\nThis book is called ${this.title} it was published in ${this.year} and is considered a ${this.genre} book.`;
}

Book.prototype.isClassic = function () { return year - this.year > 50 };

Book.prototype.updateYear = function (newYear) {
    this.year = newYear;
    return `Publication year updated to ${this.year}.`
}

Book.prototype.updateGenre = function (newGenre) {
    this.genre = newGenre;
    return `Genre updated to ${this.genre}.`;
}
//const book1 = new Book("Canva With Kim", "Kimberly Reddick", 2024, "How To");
const book1 = new Book("To Kill a Mockingbird", "Harper Lee", 1960, "Fiction")

console.table(book1);

console.log(book1.getSummary());

console.log(`Is the book a classic? `, book1.isClassic());

console.log(book1.updateYear(1920));

console.log(book1.updateGenre("Self Help"));

console.table(book1);



