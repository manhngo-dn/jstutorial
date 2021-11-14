// set section for checking input and display validattion message
// for name input
const nameInput = $("fullName");
const nameMsg = $("nameMsg");

// for email input
const emailInput = $("email");
const emailMsg = $("emailMsg");

// for heigh input
const heighInput = $("heigh");
const heighMsg = $("heighMsg");

// for weight input
const weightInput = $("weight");
const weightMsg = $("weightMsg");

// validate full name input
const nameValid = (inputVal, validMsg) => {
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

// validate email input
const emailValid = (inputVal, validMsg) => {
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

// validate high input and rounding number
const heighValid = (inputVal, validMsg) => {
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

const roundingHeighVal = (inputVal) => {
  let roundedVal = parseFloat(inputVal.value).toFixed(2);
  return (inputVal.value = roundedVal);
};

// validate weight input and rouding number
const weightValid = (inpuVal, validMsg) => {
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

const roundingWeightVal = (inputVal) => {
  let roundedVal = parseFloat(inputVal.value).toFixed(1);
  return (inputVal.value = roundedVal);
};

// set event for Add button
const formValidate = () => {
  if (
    nameValid(nameInput, nameMsg) &&
    emailValid(emailInput, emailMsg) &&
    heighValid(heighInput, heighMsg) &&
    weightValid(weightInput, weightMsg)
  ) {
    const fullName = $("fullName").value;
    const age = parseFloat($("age").value);
    const email = $("email").value;
    const heigh = parseFloat($("heigh").value);
    const weight = parseFloat($("weight").value);
    const address = $("address").value;

    // get value of gender
    const getGenderVal = (radioArr) => {
      let gender = "";
      radioArr.forEach((element) => {
        if (element.checked) {
          gender = element.value;
        }
      });
      return gender;
    };

    let genderRadio = document.getElementsByName("gender");
    const gender = getGenderVal(genderRadio);

    // push new user into database on local storage
    const newPerson = new Person(
      fullName,
      age,
      email,
      gender,
      heigh,
      weight,
      address
    );

    // const userData = JSON.parse(localStorage.getItem(storageKey));
    userData.push(newPerson);
    const persons = createPersonsArr();

    console.log(persons);
    // remove old data
    localStorage.removeItem(storageKey);

    // up new data base
    localStorage.setItem(storageKey, JSON.stringify(userData));

    // reset form input
    $("newUser").reset();

    // reload table
    $("myTable").remove();
    const newTable = createTable(persons);
    tableSection.append(newTable);
  }
};
