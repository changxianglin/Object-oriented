let toyota = {
  drive() {
    return 'driving toyota'
  },
  break() {
    return 'breaking toyota'
  }
}

// let cmary = {
//   drive() {
//     return 'driving camry'
//   }
// }

// Object.assign(cmary, toyota)

// console.dir(cmary.drive())  

// let copyToyota = Object.assign({}, toyota)
// console.dir(copyToyota)


Object.assign(toyota, {
  wifi() {
    return 'using wifi'
  }, color: 'red'
})

console.dir(toyota)



let c1 = function(x, y, z) {
  this.x = x
  this.y = y
  this.z = z
}

let c1 = function(x, y, z) {
  Object.assign(this, {x, y, z})
}
