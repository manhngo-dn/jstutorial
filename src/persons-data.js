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
    return this.weight / Math.pow(this.heigh, 2);
  };

  // guess health method
  this.guessHealth = () => {
    let BMI = this.caculateBMI().toFixed(1);

    if (BMI < 18.5) {
      return "underweight";
    } else if (BMI <= 24.9) {
      return "normal weight";
    } else if (BMI <= 29.9) {
      return "over weight";
    } else {
      return "obesity";
    }
  };
};

// create people's data array
const manhPerson = new Person(
  "manhngo",
  27,
  "manhngo@gmail.com",
  "male",
  1.75,
  61
);
const aPerson = new Person("ango", 17, "manhngo@gmail.com", "male", 1.75, 62);
const bPerson = new Person("bngo", 25, "manhngo@gmail.com", "male", 1.75, 61);
const cPerson = new Person("ctran", 27, "ctran@gmail.com", "female", 1.75, 61);
const dPerson = new Person("dLe", 27, "dLe@gmail.com", "male", 1.75, 62);
const ePerson = new Person("ePham", 30, "dLe@gmail.com", "female", 1.65, 54);
const fPerson = new Person("ftran", 27, "dLe@gmail.com", "male", 1.75, 72);
const gPerson = new Person("gLe", 19, "dLe@gmail.com", "male", 1.8, 73);
const hPerson = new Person("hHa", 24, "dLe@gmail.com", "female", 1.68, 54);
const iPerson = new Person("iVu", 30, "dLe@gmail.com", "male", 1.75, 68);

const persons = [];
const personsArr = [];

const getPersonInfor = (obj) => {
  const personInfor = {
    fullName: obj.fullName,
    age: obj.age,
    email: obj.email,
    gender: obj.gender,
    BMI: obj.caculateBMI().toFixed(1),
    healthStt: obj.guessHealth(),
  };
  return personInfor;
};

personsArr.push(manhPerson);
personsArr.push(aPerson);
personsArr.push(bPerson);
personsArr.push(cPerson);
personsArr.push(dPerson);
personsArr.push(ePerson);
personsArr.push(fPerson);
personsArr.push(gPerson);
personsArr.push(hPerson);
personsArr.push(iPerson);

personsArr.forEach((person) => {
  persons.push(getPersonInfor(person));
});
