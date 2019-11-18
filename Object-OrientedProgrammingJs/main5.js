// console.dir(Object)

// Object.setPrototypeOf(dObj, sObj)

let toyota = {
  drive() {
    return 'driving toyota'
  }
}

let camry = {
  wifi() {
    return `${super.drive()} cmary`
  }
}

// console.dir(camry)
// Object.setPrototypeOf(camry, toyota)
camry.__proto__ = toyota
console.dir(camry.drive())
// console.dir(camry.wifi())