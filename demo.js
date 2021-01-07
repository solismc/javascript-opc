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

var cat = {
  name:'Fluffy',
  color: 'white'
}
console.log(Object.getOwnPropertyDescriptor(cat, 'name'))