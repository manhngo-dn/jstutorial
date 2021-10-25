let myArr = [1, 50,  28,  2, 5, 103, 496, 105, 108, 25, 36, 6, 50, 53, 289, 1003, 472, 105, 3, 899, 692, 1000, 289, 103];
let lengthArr = myArr.length;


myArr.sort(function(a, b){return b - a});
console.log(myArr)
myArr.sort(function(a, b){return a - b});
console.log(myArr);

let newArr = [myArr[0]];
for (let i = 1; i < myArr.length; i++) {
  if (myArr[i] !== myArr[i-1]) {
    newArr.push(myArr[i]);
  }
}
console.log(newArr);
let sum = newArr.reduce(myFunction);
function myFunction(total, value) {
  return total + value;
}
console.log(`this is sum of array ${sum}`)

let oddArr = [];
for (let i = 0; i < newArr.length; i++) {
  if (newArr[i] % 2 === 1) {
    oddArr.push(newArr[i]);
  }
}
console.log(oddArr);

let evenArr = [];
for (let i = 0; i < newArr.length; i++) {
  if (newArr[i] % 2 === 0) {
    evenArr.push(newArr[i]);
  }
}
console.log(evenArr);