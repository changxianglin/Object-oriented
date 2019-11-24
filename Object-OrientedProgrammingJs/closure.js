// var passed = 3

// var addTo = function(passed) {
//   var inner = 2
//   return passed + inner
// }

// console.log(addTo(passed))
// console.dir(addTo){}

var addTo = function(passed) {
  var add = function(inner) {
    return passed + inner 
  }

  return add
} 

var addThere = new addTo(3)
var addFour = new addTo(4)

// console.dir(addThere)
// console.dir(addFour)

console.log(addThere(1))
console.log(addFour(1))

console.log(addFour(1))