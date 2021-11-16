app.validateForm = function () {
  // for name input
  const nameInput = this.$("fullName");
  const nameMsg = this.$("nameMsg");

  // for email input
  const emailInput = this.$("email");
  const emailMsg = this.$("emailMsg");

  // for heigh input
  const heighInput = this.$("heigh");
  const heighMsg = this.$("heighMsg");

  // for weight input
  const weightInput = this.$("weight");
  const weightMsg = this.$("weightMsg");

  if (
    this.nameValid(nameInput, nameMsg) &&
    this.emailValid(emailInput, emailMsg) &&
    this.heighValid(heighInput, heighMsg) &&
    this.weightValid(weightInput, weightMsg)
  ) {
    const fullName = this.$("fullName").value;
    const age = parseFloat(this.$("age").value);
    const email = this.$("email").value;
    const heigh = parseFloat(this.$("heigh").value);
    const weight = parseFloat(this.$("weight").value);
    const address = this.$("address").value;

    let genderRadio = document.getElementsByName("gender");
    const gender = this.getGenderVal(genderRadio);

    // push new user into database on local storage
    const newPerson = new app.Prototype(
      fullName,
      age,
      email,
      gender,
      heigh,
      weight,
      address
    );

    newPerson.BMI = newPerson.caculateBMI();
    newPerson.healthStt = newPerson.guessHealth();

    // update new user to local storage
    const userData = JSON.parse(localStorage.getItem("myData"));
    userData.push(newPerson);

    localStorage.setItem("myData", JSON.stringify(userData));

    // reset form input
    app.$("newUser").reset();

    // reload table
    app.$("myTable").remove();
    const newTable = app.createTable(userData);

    app.$("detailedTable").append(newTable);
  }
};

app.$("addBtn").addEventListener("click", () => {
  app.validateForm();
});
