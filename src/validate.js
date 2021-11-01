const $ = (idValue) => {
  return document.getElementById(idValue);
};

const getByName = (nameValue) => {
  return document.getElementsByName(nameValue);
};

$("registerBtn").addEventListener("click", () => {
  // validate email
  if (
    $("email").value.indexOf("@") === -1 ||
    $("email").value.indexOf("@") === 0 ||
    $("email").value.indexOf("@") === $("email").value.length - 1
  ) {
    $("emailMsg").innerHTML =
      '<span class="text-danger">Your email is invalid<span>';
  } else {
    $("emailMsg").innerHTML = '<span class="text-success">Goodjob</span>';
  }

  // validate phone
  const phoneValue = $("phone").value;
  const regularExpressionPattern = /(\(\+\d{2}\))?(\d{3,4})\-(\d{3})\-(\d{3})/;
  if (!regularExpressionPattern.test(phoneValue)) {
    $("phoneMsg").innerHTML =
      '<span class="text-danger">Your phone is invalidate<span>';
  } else {
    $("phoneMsg").innerHTML = '<span class="text-success">Goodjob</span>';
  }

  // validate select
  const countrySelect = $("countrySelect");
  const countryObj = {
    1: "Vietnam",
    2: "Lao",
    3: "Thailand",
  };
  if (countrySelect.value === "0") {
    $("countryMsg").innerHTML =
      '<span class="text-danger">Please choose an option</span>';
  } else {
    $("countryMsg").innerHTML = `<span class="text-success">You have chosen ${
      countryObj[countrySelect.value]
    }</span>`;
  }

  // validate contact radio group
  getByName("contactRadio").forEach((element) => {
    $(
      "contactMsg"
    ).innerHTML = `<span class="text-success">You choose contact by ${element.innerHTML}</span>`;
  });
});

// validate term checkbox
$("termCheckbox").addEventListener("click", () => {
  if ($("termCheckbox").checked) {
    $("registerBtn").removeAttribute("disabled");
  } else {
    $("registerBtn").setAttribute("disabled", "");
  }
});

// reset button

$("resetBtn").addEventListener("click", () => {
  $("registrationForm").reset();
  $("emailMsg").innerHTML = "";
  $("phoneMsg").innerHTML = "";
  $("countryMsg").innerHTML = "";
  $("contactMsg").innerHTML = "";
});
