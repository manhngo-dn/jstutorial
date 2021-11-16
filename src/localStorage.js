// setup for local storage
app.updataBase = (data) => {
  localStorage.setItem("myData", JSON.stringify(data));
};

app.getDataBase = () => {
  JSON.parse(localStorage.getItem("myData"));
};

// set event for generate button
app.$("generateBtn").addEventListener("click", () => {
  const userData = JSON.parse(localStorage.getItem("myData"));
  const newUsers = app.createPersonArray();

  let updatedUsers = [];
  if (!userData) {
    updatedUsers = newUsers;
  } else {
    updatedUsers = newUsers.concat(userData);
  }

  // clear old data
  localStorage.clear();

  // update new data
  localStorage.setItem("myData", JSON.stringify(updatedUsers));

  // reload table
  app.$("myTable").remove();
  const newTable = app.createTable(updatedUsers);
  app.$("detailedTable").append(newTable);
});

// set event for empty button
app.$("emptyBtn").addEventListener("click", () => {
  localStorage.clear();

  app.$("myTable").remove();
  const newTable = app.createTable();
  app.$("detailedTable").append(newTable);
});
