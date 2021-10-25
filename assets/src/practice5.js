let markMath = parseFloat(prompt("Input you Math's mark"));
let markPhysical = parseFloat(prompt("Input you Physical's mark"));
let markChemistry = parseFloat(prompt("Input you Chemistry's mark"));

let averageMark = {};
  averageMark = (markMath + markPhysical + markChemistry) / 3;
let rank = {};
if (averageMark >= 8) {
  rank = "A";
} else if (averageMark >= 6.5) {
  rank = "B";
} else if (averageMark >= 5) {
  rank = "C";
} else (rank = "D");

alert(`Your average mark is ${averageMark.toFixed(1)}. Your rank is ${rank}`)