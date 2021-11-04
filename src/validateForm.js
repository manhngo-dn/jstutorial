const $ = (idValue) => {
  return document.getElementById(idValue);
};

// display age value
$("age").addEventListener("change", () => {
  $("ageValue").value = $("age").value;
});

// event: click button send
$("sendBtn").addEventListener("click", () => {
  // full name input validate
  const namePattern = /^([a-zA-z]{1,}\s[a-zA-z]{1,})((\s[a-zA-z]{1,}){1,})?$/;
  let fnameMsg = $("fnameMsg");
  if (
    $("fname").value === "" ||
    $("fname").value.length < 6 ||
    $("fname").value.length > 50
  ) {
    fnameMsg.innerHTML = `<span class="text-danger">This field is required.</span>`;
  } else if (!namePattern.test($("fname").value)) {
    fnameMsg.innerHTML = `<span class="text-danger">Your full name is invalid.</spans>`;
  } else {
    fnameMsg.innerHTML = `<span class="text-success">Good job!</span>`;
  }

  // email input validate
  const emailPattern = /^.{1,}(@edu\.com\.vn)$/;
  let emailMsg = $("emailMsg");
  if ($("email").value === "") {
    emailMsg.innerHTML = `<span class="text-danger">This field is required.</span>`;
  } else if ($("email").value.indexOf("@") === -1) {
    emailMsg.innerHTML = `<span class="text-danger">Your email is invalid. Please correct your email</span>`;
  } else if (!emailPattern.test($("email").value)) {
    emailMsg.innerHTML = `<span class="text-danger">We only eccept educational emails.</span>`;
  } else {
    emailMsg.innerHTML = `<span class="text-success">Good job!</span>`;
  }

  // age validate
  let ageMsg = $("ageMsg");
  if ($("age").value <= 30) {
    ageMsg.innerHTML = `<span class="text-success">You're still young!</span>`;
  } else {
    ageMsg.innerHTML = "";
  }

  // favorite sports validate
  let sportMsg = $("sportMsg");
  let sportCheckbox = document.getElementsByClassName("sport");
  let sportCheckArr = [];
  for (let i of sportCheckbox) {
    sportCheckArr.push(i.checked);
  }
  if (sportCheckArr.indexOf(true) === -1) {
    sportMsg.innerHTML = `<span class="text-danger">You should select at least one option.</span>`;
  } else {
    sportMsg.innerHTML = "";
  }

  // wish textarea validate
  let wishMsg = $("wishMsg");
  if ($("wishTextarea").value === "") {
    wishMsg.innerHTML = `<span class="text-danger">This field is required</span>`;
  } else {
    wishMsg.innerHTML = "";
  }
});

// event: click button reset
$("resetBtn").addEventListener("click", () => {
  $("expectForm").reset();
  fnameMsg.innerHTML = "";
  emailMsg.innerHTML = "";
  ageMsg.innerHTML = "";
  sportMsg.innerHTML = "";
  wishMsg.innerHTML = "";
});
