// Constructor

function Books(title, author, year) {
  this.title = title
  this.author = author
  this.year = year
}

Books.prototype.getSummary = function() {
  return `${this.title} was written by 
  ${this.author} in ${this.year}`
}

Books.prototype.getAge = function() {
  const years = new Date().getFullYear() - this.year
  return `${this.title} is ${years} old`
}

Books.prototype.revise = function(newYear) {
  this.year = newYear
  this.revised = true
}

// Instatiate an Object
const book5 = new Books('Book One', 'Jone Doe', '2018')
const book6 = new Books('Book Two', 'Jane Doe', '2019')

console.log(book5)
book6.revise('2019')
console.log(book6)