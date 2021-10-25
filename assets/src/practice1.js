let myNumber = prompt ("Please input a number");

if (myNumber >= 0) {
  alert (`Congratulation! You did it!`);
} else if (myNumber < 0 ) {
  alert (`Please input a positive number!`);
} else {
  alert (`Please input a number!`);
}

let myMail = prompt ("Please input your email")
let mailLength = myMail.length;
if (myMail.search("@") === -1 || mailLength < 8 || myMail.charAt(0) === "@" || myMail.charAt(mailLength - 1) === "@") {
  alert("Your email is not valid");
}