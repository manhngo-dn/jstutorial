let myObj = "Hello world! I'm newbie in programming";

console.log(`this is string's length :${myObj.length}`);

let arrObj = myObj.split(" ");
console.log(`this is how many words in string: ${arrObj.length}`)

let newbie = myObj.indexOf("newbie");
console.log(`this is possition of "newbie": ${newbie}`);

console.log(myObj.slice(17, 23));

let re = /programming/gi;
let newObj = myObj.replace(re, "PROGRAMMING");
console.log(newObj);