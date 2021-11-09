// set section for checking edited data and display validattion message
// for edited name
const fullNameEdit = $("fullNameEdit");
const nameEditMsg = $("nameEditMsg");

// for edited email
const emailEdit = $("emailEdit");
const emailEditMsg = $("emailEditMsg");

// for edited heigh
const heighEdit = $("heighEdit");
const heighEditMsg = $("heighEditMsg");

// for edited weight
const weightEdit = $("weightEdit");
const weightEditMsg = $("weightEditMsg");

// set event for delete button
const deleteRow = (index) => {
  persons.splice(index - 1, 1);

  $("myTable").remove();

  const newTable = createTable(persons);
  tableSection.append(newTable);
};

// get value of gender on modal
const genderRadioEdit = document.getElementsByName("genderEdit");
let genderEdit = "";
genderRadioEdit.forEach((element) => {
  if (element.checked) {
    genderEdit = element.value;
  }
  return genderEdit;
});

// add event for edit button
const ageEdit = $("ageEdit");
const addressEdit = $("addressEdit");

const editRow = (index) => {
  fullNameEdit.value = personsArr[index - 1].fullName;
  ageEdit.value = personsArr[index - 1].age;
  emailEdit.value = personsArr[index - 1].email;
  heighEdit.value = personsArr[index - 1].heigh;
  weightEdit.value = personsArr[index - 1].weight;
  genderEdit = personsArr[index - 1].gender;
  addressEdit.value = personsArr[index - 1].address;

  // keep checked for gender on modal
  genderRadioEdit.forEach((element) => {
    if (element.value == genderEdit) {
      element.setAttribute("checked", "");
    }
  });

  // add event for save button
  $("saveChangesBtn").setAttribute("onclick", `saveChanges(${index})`);
};

// set event for save button
const saveChanges = (index) => {
  if (
    nameValid(fullNameEdit, nameEditMsg) &&
    emailValid(emailEdit, emailEditMsg) &&
    heighValid(heighEdit, heighEditMsg) &&
    weightValid(weightEdit, weightEditMsg)
  ) {
    delete personsArr[index - 1];
    const editedPerson = new Person(
      fullNameEdit.value,
      ageEdit.value,
      emailEdit.value,
      genderEdit,
      heighEdit.value,
      weightEdit.value,
      addressEdit.value
    );
    personsArr[index - 1] = editedPerson;
    persons[index - 1] = getPersonInfor(editedPerson);
  }

  $("myTable").remove();
  const newTable = createTable(persons);
  tableSection.append(newTable);
};
