// var obj= {num: 2}
// var obj2 = {num: 5}

// var addToThis = function(a, b, c) {
//   return this.num + a + b  + c 
// }

// console.log(addToThis.call(obj, 1, 2, 3)) 
// functionname.call(obj, functionargumentes)

// var arr = [1, 2, 3]
// console.log(addToThis.apply(obj, arr)) 
// console.log(addToThis.apply(obj2, arr)) 


// bind 
// var obj = {num: 2}

// var addToThis = function(a, b, c) {
//   return this.num + a + b  + c 
// }

// var arr = [1, 2, 3]
// var bound = addToThis.bind(obj)
// console.log(bound(1, 2, 3))

// console.log(addToThis.bind(obj)(1, 2, 3))

// summary
// var obj = {num: 2}

// var functionName = function(ar1, arg2, arg3) {

// }

// functionName.call(obj, ar1, arg2, arg3)

// functionName.apply(obj, [arg1, arg2, arg3])

// var bound = functionName.bind(obj)
// bound(ar1, ar1, arg3)