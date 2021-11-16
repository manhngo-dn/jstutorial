app.run = () => {
  // attach table into  DOM

  let dataBase = JSON.parse(localStorage.getItem("myData"));

  let tableView = app.createTable(dataBase);
  app.$("detailedTable").append(tableView);
};

app.run();
