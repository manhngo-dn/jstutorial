// function get random number
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// create Person prototype
const Person = function (fullName, age, email, gender, heigh, weight, address) {
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

// create people's data array

const userData = [];

const limit = 10;
const namesPerson = [
  "aPerson",
  "bPerson",
  "cPerson",
  "dPerson",
  "ePerson",
  "fPerson",
];
const agesPerson = [18, 20, 22, 24, 26, 28];
const emailsPerson = [
  "aperson@gmail.com",
  "bperson@gmail.com",
  "cperson@gmail.com",
];
const gendersPerson = ["male", "female", "others"];
const heighsPerson = [1.58, 1.64, 1.68, 1.73, 1.75, 1.78];
const weightsPerson = [52.6, 54.5, 57.9, 61.2, 64.6, 67.3];
const addressPerson = ["a", "b", "c"];

for (let count = 0; count < limit; count++) {
  const newPserson = new Person(
    namesPerson[randomInt(0, 5)],
    agesPerson[randomInt(0, 5)],
    emailsPerson[randomInt(0, 2)],
    gendersPerson[randomInt(0, 2)],
    heighsPerson[randomInt(0, 5)],
    weightsPerson[randomInt(0, 5)],
    addressPerson[randomInt(0, 2)]
  );

  userData.push(newPserson);
}
// up data to local storage
const storageKey = "userData";
const storage = window.localStorage.setItem(
  storageKey,
  JSON.stringify(userData)
);

const myData = JSON.parse(localStorage.getItem(storageKey));
const createPersonsArr = () => {
  return userData.map((obj) => {
    obj.BMI = obj.caculateBMI();
    obj.healthStt = obj.guessHealth();

    return obj;
  });
};
