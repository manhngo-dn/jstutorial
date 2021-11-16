let app = {};

// utilities
app.$ = (value) => {
  return document.getElementById(value);
};

// reload table
app.reloadTable = function () {
  this.$("myTable").remove();

  const userData = this.getDataBase();
  const newTable = createTable(userData);
  tableSection.append(newTable);
};

// get gender value
app.getGenderVal = (radioArr) => {
  let gender = "";
  radioArr.forEach((element) => {
    if (element.checked) {
      gender = element.value;
    }
  });
  return gender;
};
