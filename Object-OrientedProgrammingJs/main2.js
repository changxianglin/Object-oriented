// Object.create(prototypeObject, propertyObject)
// const myObject = Object.create(Object.prototype)
// const myLiteral = {}
// const noProto = Object.create(null)

// console.dir(myObject)
// console.dir(myLiteral)
// console.dir(noProto)


// const Car = function(color) {
//   this.color = color
// }

// const car1 = new Car('red')
// const car2 = Object.create(Car.prototype)

// console.dir(car1)
// console.dir(car2)


const Car = function(color) {
  this.color = color
}

Car.prototype = {
  getColor() {
    return this.color
  }
}

const ToyCar = function() {

}

ToyCar.prototype = Object.create(Car.prototype)

const legoCar = new ToyCar()
// console.dir(legoCar instanceof ToyCar)
// console.dir(legoCar instanceof Car)
// console.dir(legoCar instanceof Object)
console.dir(ToyCar.prototype.isPrototypeOf(legoCar))
console.dir(Car.prototype.isPrototypeOf(legoCar))
console.dir(Object.prototype.isPrototypeOf(legoCar))