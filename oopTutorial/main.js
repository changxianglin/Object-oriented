// Keyword new 
let Book = new Object()
Book.property = 'value'
Book.method = function() {}

// Object literals
let Book = {
  property: 'value',
  method: function() {}
}

// Function
function Book() 
{
  this.property = 'value'
  this.method = function() {}
  this.method = method
}
Book.property.method() {}
let Book = new Book()

// Singleton
let Book = new function()
{
  this.property = 'value'
  this.method = function() {}
}