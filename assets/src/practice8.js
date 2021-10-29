let fname = prompt("Input your first name");
let lname = prompt("Input your last name");
let age = prompt("Input your age");
let gender = prompt("Input your gender");
let school = prompt("Input your school");
let address = prompt("Input your address");

let infor = [fname, lname, age, gender, school, address];

let input = document.getElementsByTagName("td");


for (let i = 0; i < infor.length; i++) {
  input[i].innerHTML = infor[i];
}