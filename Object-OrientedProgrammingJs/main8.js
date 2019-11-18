class Car {
  constructor(color) {
    this.color = color
  }
  drive() {
    console.log('driving')
  }
}

// console.dir(Car)

let redCar = new Car('red')
console.dir(redCar)

// let Car = (function() {
//   let _car = function(color) {
//     this.color = color
//   }
//   _car.prototype.drive = function() {
//     console.log('driving')
//   }
//   return _car
// })()

// console.dir(Car)