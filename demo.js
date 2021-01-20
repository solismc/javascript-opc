'use strict'; 

/*  var cat = {
    name: 'fluffy',
    color: 'white',
    speak: function() {display("meeeoow")}
  }
  cat.age = 3

  cat.speak()

  function Cat(name, color) {
    this.name = name
    this.color = color
  }

  let cat = new Cat('Fluffy', 'White');

  console.log(cat)*/

  /*var cat = {
    name:'Fluffy',
    color: 'white'
  }
  console.log(Object.getOwnPropertyDescriptor(cat, 'name'))

  var cat = {
    name: {first: 'Fluffy', last: 'LaBeouf'},
    color: 'white'
  }
  Object.defineProperty(cat, 'fullName', 
    {
      get: function() {
        return  this.name.first + ' ' + this.name.last
      },
      set: function(value) {
        var nameParts = value.split(' ')
        this.name.first = nameParts[0]
        this.name.last = nameParts[1]
      }
    })
  cat.fullName = 'Muffin Top'
  console.log(cat.fullName)
  console.log(cat.name.first)
  console.log(cat.name.last)*/
  
  var arr = ['red', 'blue', 'green']

    Object.defineProperty(arr, 'last', {get: function() {
      return this[this.length-1]
    }})

  var last = arr.last
  var arr2 = ['one', 'two', 'three']
  console.log(arr2.last) //this will throw an error of undefined// 
  console.log(last)

//If we create an array.prototype, then the error above will be solved. 

var arr = ['red', 'blue', 'green']

    Object.defineProperty(Array.prototype, 'last', {get: function() {
      return this[this.length-1]
    }})

  var last = arr.last
  var arr2 = ['one', 'two', 'three']
  console.log(Array) //this will work
  
/*function Cat(name, color) {
  this.name = name
  this.color = color
}
Cat.prototype.age = 4

var fluffy = new Cat('Fluffy', 'White')
var muffin = new Cat('Muffin', 'Brown')

console.log(fluffy.age)
console.log(muffin.age)*/



  