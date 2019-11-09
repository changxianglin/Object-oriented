// const s1 = 'Hello'
// console.log(s1.toUpperCase())
// console.log(typeof s1)


// const s2 = new String('Hello')
// console.log(typeof s2)

// console.log(window)

// window.alert(1)

// console.log(navigator.appVersion)

// Object Liertal
const book1 = {
  title: 'Book one',
  author: 'Jonh Doe',
  year: '2103',
  getSummary: function() {
    return `${this.title} was written by
    ${this.author} in ${this.year}`
  }
}

const book2 = {
  title: 'Book Two',
  author: 'Jane Doe',
  year: '2106',
  getSummary: function() {
    return `${this.title} was written by
    ${this.author} in ${this.year}`
  }
}

// console.log(book2.getSummary())

// console.log(Object.values(book2))
// console.log(Object.keys(book2))