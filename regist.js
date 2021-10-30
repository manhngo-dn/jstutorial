const $ = function(idValue) {
  return document.getElementById(idValue);
}

function checkEmail() {
  if ($("email").value.indexOf("@") === -1 || $("email").value.indexOf("@") === 0 || $("email").value.indexOf("@") === $("email").value.length - 1) {
    $("emailInvalid").attributes.removeNamedItem("hidden");
  } else {$("emailInvalid").setAttribute("hidden","")}
}
function checkUsername() {
  if ($("username").value.length < 3) {
    $("usernameInvalid").attributes.removeNamedItem("hidden");
  } else {$("usernameInvalid").setAttribute("hidden","")}
}
function checkPassword() {
  if ($("password").value.length < 8) {
    $("passwordInvalid").attributes.removeNamedItem("hidden");
  } else {$("passwordInvalid").setAttribute("hidden","")}
}
function checkTerms() {
  if ($("checkTerms").checked === false) {
    $("termsInvalid").attributes.removeNamedItem("hidden");
  } else {$("termsInvalid").setAttribute("hidden", "")}
}

function checkInput() {
  checkEmail();
  checkUsername();
  checkPassword();
  checkTerms();
}

function resetInput() {
  $("email").value = "";
  $("username").value = "";
  $("password").value = "";
  $("checkTerms").attributes.removeNamedItem("checked");
}

window.onload = function() {
  $("submit-btn").onclick = checkInput;
  $("reset-btn").onclick = resetInput;
}