var numArray = [];
for (var i = 0; i < 3; i++) {
  numArray.push(i);
}
console.log(numArray);
console.log(i);

var numArray = [];
var i;
for (i = 0; i < 3; i++) {
  numArray.push(i);
}
console.log(numArray);
console.log(i);

var printNumTwo;
for (let i = 0; i < 3; i++) {
  if (i === 2) {
    printNumTwo = function() {
      return i;
    };
  }
}
console.log(printNumTwo());

function checkScope() {
  var i = 'function scope';
  if (true) {
    i = 'block scope';
    console.log('Block scope i is: ', i);
  }
  console.log('Function scope i is: ', i);
  return i;
}

let obj ={
  name:"FreeCodeCamp",
  review: 'Awesome'
};

Object.freeze(obj)
obj.review="bad";
obj.newProp="Test";
console.log(obj)

console.log(new Date());

const sum = (...numbers) => numbers.reduce((a, b) => a + b, 0);

console.log(sum(5,8,9))