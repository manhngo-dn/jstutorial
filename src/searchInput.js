const typeSelect = $("searchType");
const searchInput = $("searchInput");

let searchedArr = [];
// set event for search button
const searchFunc = () => {
  let searchValue = searchInput.value;
  let searchedType = typeSelect.value;

  const persons = createPersonsArr();

  if (searchValue == "") {
    searchedArr = persons;
  } else {
    searchedArr = persons.filter((person) => {
      if (person[searchedType] === searchValue) {
        return person;
      }
    });
  }

  // reload table
  $("myTable").remove();
  let newTable = createTable(searchedArr);
  tableSection.append(newTable);
};
