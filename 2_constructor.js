// Constructor

function Book(title, author, year) {
  this.title = title
  this.author = author
  this.year = year

  this.getSummary = function() {
    return `${this.title} was written by 
    ${this.author} in ${this.year}`
  }
}

// Instatiate an Object
const book3 = new Book('Book One', 'Jone Doe', '2018')
const book4 = new Book('Book Two', 'Jane Doe', '2019')

// console.log(book3.getSummary())