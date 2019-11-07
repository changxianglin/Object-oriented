// Factory Function
// function createCircle(radius) {
//    return {
//     radius,
//     draw: function() {
//       console.log('draw')
//     }
//   }
// }

// const circle = createCircle(1)


//Constructor Function 
function Circle(radius){
  this.radius = radius
  this.draw = function() {
    console.log('draw')
  }
}

Circle.call({}, 1)
Circle.apply({}, 1)

// const Circle1 = new Function('radius', `
// this.radius = radius
// this.draw = function() {
//   console.log('draw')
// }
// `)

// const circle = new Circle1(1)

const another = new Circle(1)