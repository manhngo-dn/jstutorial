app.searchData = () => {
  const typeSelect = app.$("searchType");
  const searchInput = app.$("searchInput");

  let searchedArr = [];

  let searchValue = searchInput.value;
  let searchedType = typeSelect.value;

  const dataBase = JSON.parse(localStorage.getItem("myData"));

  if (!searchValue) {
    searchedArr = dataBase;
  } else {
    searchedArr = dataBase.filter((person) => {
      if (person[searchedType].indexOf(searchValue) != -1) {
        return person;
      }
    });
  }
  return searchedArr;
};

app.$("searchBtn").addEventListener("click", () => {
  let result = app.searchData();

  // reload table
  app.$("myTable").remove();
  let newTable = app.createTable(result);
  app.$("detailedTable").append(newTable);
});
