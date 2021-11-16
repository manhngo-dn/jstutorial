// creat prototype
app.Prototype = function (
  fullName,
  age,
  email,
  gender,
  heigh,
  weight,
  address
) {
  this.fullName = fullName;
  this.age = age;
  this.email = email;
  this.gender = gender;
  this.heigh = heigh;
  this.weight = weight;
  this.address = address;

  // caculate BMI method
  this.caculateBMI = () => {
    return (this.weight / Math.pow(this.heigh, 2)).toFixed(1);
  };

  // guess health method
  this.guessHealth = () => {
    let BMI = this.caculateBMI();

    if (BMI < 18.5) {
      return "underweight";
    }

    if (BMI >= 18.5 && BMI <= 24.9) {
      return "normal weight";
    }

    if (BMI > 24.9 && BMI <= 29.9) {
      return "over weight";
    }

    return "obesity";
  };
};

// generate data
app.generateData = function () {
  const userData = [];
  const limit = 10;
  const gendersPerson = ["male", "female", "others"];

  for (let count = 0; count < limit; count++) {
    const person = new app.Prototype(
      `person_${Math.round(Math.random() * 100)}`,
      Math.round(Math.random() * 100),
      `person${Math.round(Math.random() * 1000)}@gmail.com`,
      gendersPerson[Math.round(Math.random() * 2)],
      (Math.random() + 1).toFixed(2),
      (Math.random() * 100).toFixed(1),
      `${Math.round(Math.random() * 10000)} street A`
    );

    userData.push(person);
  }
  return userData;
};

app.createPersonArray = () => {
  const userData = app.generateData();

  userData.map((obj) => {
    obj.BMI = obj.caculateBMI();
    obj.healthStt = obj.guessHealth();

    return obj;
  });
  return userData;
};
