let myArr = [1, 50,  28,  2, 5, 103, 496, 105, 108, 25, 36, 6, 50, 53, 289, 1003, 472, 105, 3, 899, 692, 1000, 289, 103];
let lengthArr = myArr.length;


myArr.sort(function(a, b){return b - a});
console.log(myArr)
myArr.sort(function(a, b){return a - b});
console.log(myArr);

const newArr = [myArr[0]];
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

// find odd number
function findOddNum(element) {
  let oddNum = [];
  for ( let i of element) {
    if ( i % 2 === 1) {
      oddNum.push(i);
    }
  } return oddNum;
}

console.log(findOddNum(newArr));

// find even number
function findEvenNum(element) {
  let evenNum = [];
  for ( let i of element) {
    if ( i % 2 === 0) {
      evenNum.push(i);
    }
  } return evenNum;
}

console.log(findEvenNum(newArr));

// Prime number
function findSubNum(element) {
  let subNum = []
  for (let i = 1; i <= element; i++) {
    if (element % i === 0) {
      subNum.push(i);
    }

  } return subNum;
}

function checkPrimeNum(element) {
  let isPrimeNumber = false;
  let subNum = findSubNum(element);
  if (subNum.length === 2) {
    isPrimeNumber = true;
    return  isPrimeNumber;
  }
  return isPrimeNumber;
}
console.log(checkPrimeNum(5))

function findPrimeNum(element) {
  let primeNumber = [];
  for (let i of element) {
    let isPrimeNumber = checkPrimeNum(i);
    if (i === 1 || isPrimeNumber) {
      primeNumber.push(i)
    }
  } return primeNumber;
}

console.log(findPrimeNum(newArr))


// Perfect number
function sumSubNumber(element) {
  let sumSub = 0;
  let subNum = findSubNum(element)
  for (let i = 0; i <= subNum.length - 2; i++) {

    sumSub += subNum[i];
  } return sumSub;
}

function checkPerfectNumber(element) {
  let isPerfectNumber = false;
  let sumSub = sumSubNumber(element)
  if (sumSub === element) {
    isPerfectNumber = true;
    return isPerfectNumber;
  } return isPerfectNumber;
}


function findPerfectNumber(element) {
  let perfectNumber = [];
  for (let i of element) {
    let isPerfectNumber = checkPerfectNumber(i);
    if (isPerfectNumber) {
      perfectNumber.push(i)
    }
  } return perfectNumber;
}

console.log(findPerfectNumber(newArr))