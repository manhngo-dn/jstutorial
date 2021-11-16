// delete row table
app.confirmDelRow = (index) => {
  app.$("confirmedDel").setAttribute("onclick", `app.deleteRow(${index})`);
};

app.deleteRow = (index) => {
  const userData = JSON.parse(localStorage.getItem("myData"));
  userData.splice(index - 1, 1);

  // clear old data
  localStorage.clear();

  // update new data
  localStorage.setItem("myData", JSON.stringify(userData));

  // reload table
  app.$("myTable").remove();
  const newTable = app.createTable(userData);
  app.$("detailedTable").append(newTable);
};

// edit row table
app.editRow = (index) => {
  // set section for checking edited data and display validattion message
  // for edited name
  const fullNameEdit = app.$("fullNameEdit");
  const nameEditMsg = app.$("nameEditMsg");

  // // for edited email
  const emailEdit = app.$("emailEdit");
  const emailEditMsg = app.$("emailEditMsg");

  // // for edited heigh
  const heighEdit = app.$("heighEdit");
  const heighEditMsg = app.$("heighEditMsg");

  // // for edited weight
  const weightEdit = app.$("weightEdit");
  const weightEditMsg = app.$("weightEditMsg");

  const ageEdit = app.$("ageEdit");
  const addressEdit = app.$("addressEdit");

  const userData = JSON.parse(localStorage.getItem("myData"));

  // reset form edit
  app.$("editForm").reset();
  nameEditMsg.innerHTML = "";
  emailEditMsg.innerHTML = "";
  heighEditMsg.innerHTML = "";
  weightEditMsg.innerHTML = "";

  fullNameEdit.value = userData[index - 1].fullName;
  ageEdit.value = userData[index - 1].age;
  emailEdit.value = userData[index - 1].email;
  heighEdit.value = userData[index - 1].heigh;
  weightEdit.value = userData[index - 1].weight;
  addressEdit.value = userData[index - 1].address;

  app.$("saveChangesBtn").removeAttribute("disabled", "");

  // add event for save button
  app.$("saveChangesBtn").addEventListener("click", () => {
    app.saveChanges(index);
  });
};

app.isEditFormValid = () => {
  if (
    app.nameValid(fullNameEdit, nameEditMsg) &&
    app.emailValid(emailEdit, emailEditMsg) &&
    app.heighValid(heighEdit, heighEditMsg) &&
    app.weightValid(weightEdit, weightEditMsg)
  ) {
    app.$("saveChangesBtn").removeAttribute("disabled", "");
  } else {
    app.$("saveChangesBtn").setAttribute("disabled", "");
  }
};

// set event for save button
app.saveChanges = (index) => {
  const userData = JSON.parse(localStorage.getItem("myData"));

  // get value of gender on modal
  const genderRadioEdit = document.getElementsByName("genderEdit");
  let genderEdit = "";
  genderRadioEdit.forEach((element) => {
    if (element.checked) {
      genderEdit = element.value;
    }
    return genderEdit;
  });

  delete userData[index - 1];
  const editedPerson = new app.Prototype(
    fullNameEdit.value,
    ageEdit.value,
    emailEdit.value,
    genderEdit,
    heighEdit.value,
    weightEdit.value,
    addressEdit.value
  );
  editedPerson.BMI = editedPerson.caculateBMI();
  editedPerson.healthStt = editedPerson.guessHealth();

  userData[index - 1] = editedPerson;

  // update data base
  localStorage.clear();

  localStorage.setItem("myData", JSON.stringify(userData));

  // reload table
  app.$("myTable").remove();
  const newTable = app.createTable(userData);
  app.$("detailedTable").append(newTable);
};
