// validate user name
app.nameValid = (inputVal, validMsg) => {
  let invalidMsg = `<span class="text-danger">Full name is required and maximum of character is 50</span>`;
  let check = false;

  if (!inputVal.value.length || inputVal.value.length > 50) {
    validMsg.innerHTML = invalidMsg;
  } else {
    validMsg.innerHTML = "";
    check = true;
  }
  return check;
};

// validate email
app.emailValid = (inputVal, validMsg) => {
  const emailReXPres = /^([a-zA-Z0-9])+(\@)([a-z])+\.([a-z])+(\.([a-z])+)?$/;
  let invalidMsg = `<span class="text-danger">Email is required and email is kind of xxx@xx.x(.x)</span>`;
  let check = false;

  if (!inputVal.value.length || !emailReXPres.test(inputVal.value)) {
    validMsg.innerHTML = invalidMsg;
  } else {
    validMsg.innerHTML = "";
    check = true;
  }
  return check;
};

// validate high input
app.heighValid = (inputVal, validMsg) => {
  let invalidMsg = `<span class="text-danger">Your heigh is required</span>`;
  let check = false;

  if (!inputVal.value.length) {
    validMsg.innerHTML = invalidMsg;
  } else {
    validMsg.innerHTML = "";
    check = true;
  }
  return check;
};

// validate weight input and rouding number
app.weightValid = (inpuVal, validMsg) => {
  let invalidMsg = `<span class="text-danger">Your weight is required</span>`;
  let check = false;
  if (!inpuVal.value.length) {
    validMsg.innerHTML = invalidMsg;
  } else {
    validMsg.innerHTML = "";
    check = true;
  }
  return check;
};

// rounding high input
app.roundingHeighVal = (inputVal) => {
  let roundedVal = parseFloat(inputVal.value).toFixed(2);
  return (inputVal.value = roundedVal);
};

// rounding weight input
app.roundingWeightVal = (inputVal) => {
  let roundedVal = parseFloat(inputVal.value).toFixed(1);
  return (inputVal.value = roundedVal);
};

// set event for name input
app.$("fullName").addEventListener("blur", () => {
  app.nameValid(app.$("fullName"), app.$("nameMsg"));
});

// set event for email input
app.$("email").addEventListener("blur", () => {
  app.emailValid(app.$("email"), app.$("emailMsg"));
});

// set event for heigh input
app.$("heigh").addEventListener("blur", () => {
  app.heighValid(app.$("heigh"), app.$("heighMsg"));
  app.roundingHeighVal(app.$("heigh"));
});

// set event for weight input
app.$("weight").addEventListener("blur", () => {
  app.weightValid(app.$("weight"), app.$("weightMsg"));
  app.roundingWeightVal(app.$("weight"));
});

// SET VALIDATION FOR EDIT FORM
// set event for name edit
app.$("fullNameEdit").addEventListener("blur", () => {
  app.nameValid(app.$("fullNameEdit"), app.$("nameEditMsg"));
  app.isEditFormValid();
});

// set event for email edit
app.$("emailEdit").addEventListener("blur", () => {
  app.emailValid(app.$("emailEdit"), app.$("emailEditMsg"));
  app.isEditFormValid();
});

// set event for heigh edit
app.$("heighEdit").addEventListener("blur", () => {
  app.heighValid(app.$("heighEdit"), app.$("heighEditMsg"));
  app.roundingHeighVal(app.$("heighEdit"));
  app.isEditFormValid();
});

// set event for weight edit
app.$("weightEdit").addEventListener("blur", () => {
  app.weightValid(app.$("weightEdit"), app.$("weightEditMsg"));
  app.roundingWeightVal(app.$("weightEdit"));
  app.isEditFormValid();
});
