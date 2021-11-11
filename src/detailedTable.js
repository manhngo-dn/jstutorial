const $ = (value) => {
  return document.getElementById(value);
};

const headers = [
  "FulName",
  "Age",
  "Email",
  "Gender",
  "BMI",
  "Health status",
  "Action",
];

// create table header
const createHeader = () => {
  const thead = document.createElement("thead");
  const tr = document.createElement("tr");

  headers.forEach((header) => {
    const th = document.createElement("th");
    th.innerHTML = header;
    th.setAttribute("scope", "col");
    tr.append(th);
  });
  thead.append(tr);

  return thead;
};

// create table body
const createBody = (data) => {
  const tbody = document.createElement("tbody");

  data.forEach((object, index) => {
    const tr = document.createElement("tr");
    tr.setAttribute("id", `row${index + 1}`);
    const fullNameTd = document.createElement("td");
    const ageTd = document.createElement("td");
    const emailTd = document.createElement("td");
    const genderTd = document.createElement("td");
    const BMITd = document.createElement("td");
    const healthSttTd = document.createElement("td");
    const actionTd = document.createElement("td");

    // create button
    const createBtn = (name) => {
      const btn = document.createElement("button");
      btn.innerHTML = name;
      btn.setAttribute("type", "button");

      return btn;
    };

    // add event to button
    const editBtn = createBtn("Edit");
    const deleteBtn = createBtn("Delete");

    deleteBtn.setAttribute("onclick", `confirmDelRow(${index + 1})`);
    deleteBtn.setAttribute("data-bs-toggle", "modal");
    deleteBtn.setAttribute("data-bs-target", "#confirmToDel");

    editBtn.setAttribute("data-bs-toggle", "modal");
    editBtn.setAttribute("data-bs-target", "#modalForm");
    editBtn.setAttribute("onclick", `editRow(${index + 1})`);

    // set data for cell
    fullNameTd.innerHTML = object.fullName;
    ageTd.innerHTML = object.age;
    emailTd.innerHTML = object.email;
    genderTd.innerHTML = object.gender;
    BMITd.innerHTML = object.BMI;
    healthSttTd.innerHTML = object.healthStt;
    actionTd.append(editBtn);
    actionTd.append(deleteBtn);

    // append cell into row
    tr.append(fullNameTd);
    tr.append(ageTd);
    tr.append(emailTd);
    tr.append(genderTd);
    tr.append(BMITd);
    tr.append(healthSttTd);
    tr.append(actionTd);

    // append row into table body
    tbody.append(tr);
  });
  return tbody;
};

// create table
const createTable = (data) => {
  const table = document.createElement("table");
  const tableHeader = createHeader();
  const tableBody = createBody(data);

  table.append(tableHeader);
  table.append(tableBody);

  // style table
  table.setAttribute("class", "table table-stretched");
  table.setAttribute("id", "myTable");

  return table;
};

// append table to HTML
const tableSection = $("detailedTable");
const table = createTable(persons);

tableSection.append(table);
