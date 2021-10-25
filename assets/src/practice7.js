let myNumber = prompt("Please input a number >=3");

if (myNumber < 3) {
  alert("Please retry again!");
} else {
  let line1 = "*";
  let line = "";
  let space1 = "&nbsp";
  let space = "";

  for (let i = 1; i <= myNumber; i++) {
    line = line.concat(line1);
    document.write(line + "<br />")
  }
  for (let i = myNumber-1; i >= 0; i--) {
    space = space.concat(space1);
    document.write(space + line + "<br />")
  }
}