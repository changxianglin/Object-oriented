const Car = function() {

}

Car.prototype = {
  print() {
    return 'I am a Car'
  }
}

const ToyCar = function() {}

ToyCar.prototype = Object.create(Car.prototype)

ToyCar.prototype.print = function() {
  return 'I am a toycar'
}

const ToyTransformer = function(){}

ToyTransformer.prototype = Object.create(ToyCar.prototype)
// ToyTransformer.prototype.print = function() {
//   return 'I am a toyTransformer'
// }

const toyota = new Car()
const legoCar = new ToyCar()
const optimusPrim = new ToyTransformer()

// console.log(toyota.print())
// console.log(legoCar.print())
console.log(optimusPrim.print())