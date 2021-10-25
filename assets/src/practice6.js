let myNumber = prompt("Please in put a number >= 3");

if (myNumber < 3) {
  alert("Please retry again!")
} else {
  let line1 = "*"
  let line = "";
  for (let i = 1; i <= myNumber; i++) {
    line = line.concat(line1);
    document.write(line + "<br />");
  }
}

