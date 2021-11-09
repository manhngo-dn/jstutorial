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

// validate high input
const heighValid = (inputVal, validMsg) => {
  const heighReXPress = /^([0-9]+)(\.([0-9]{0,2}))?$/;
  let invalidMsg = `<span class="text-danger">Your heigh is required and is kind of x(.xx)`;
  let check = false;

  if (!inputVal.value.length || !heighReXPress.test(inputVal.value)) {
    validMsg.innerHTML = invalidMsg;
  } else {
    validMsg.innerHTML = "";
    check = true;
  }
  return check;
};

// validate weight input
const weightValid = (inpuVal, validMsg) => {
  const weightReXPress = /^([0-9]+)(\.([0-9]{0,1}))?$/;
  let invalidMsg = `<span class="text-danger">Your weight is required and is kind of xx(.x)`;
  let check = false;
  if (!inpuVal.value.length || !weightReXPress.test(inpuVal.value)) {
    validMsg.innerHTML = invalidMsg;
  } else {
    validMsg.innerHTML = "";
    check = true;
  }
  return check;
};

// add event for Add button
const formValidate = () => {
  if (
    nameValid(nameInput, nameMsg) &&
    emailValid(emailInput, emailMsg) &&
    heighValid(heighInput, heighMsg) &&
    weightValid(weightInput, weightMsg)
  ) {
    const fullName = $("fullName").value;
    const age = $("age").value;
    const email = $("email").value;
    const heigh = $("heigh").value;
    const weight = $("weight").value;
    const address = $("address").value;

    // get value of gender
    const genderRadio = document.getElementsByName("gender");
    let gender = "";
    genderRadio.forEach((element) => {
      if (element.checked) {
        gender = element.value;
      }
    });

    // push new detail into database
    const newPerson = new Person(
      fullName,
      age,
      email,
      gender,
      heigh,
      weight,
      address
    );
    personsArr.push(newPerson);
    persons.push(getPersonInfor(newPerson));

    $("newUser").reset();

    // reload table
    $("myTable").remove();
    const newTable = createTable(persons);
    tableSection.append(newTable);
  }
};
