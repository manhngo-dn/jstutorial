const typeSelect = $("searchType");
const searchInput = $("searchInput");

const searchedArr = [];
// set event for search button
const searchFunc = () => {
  let searchValue = searchInput.value;
  let searchedType = typeSelect.value;

  persons.forEach((person) => {
    if (person[searchedType] === searchValue) {
      searchedArr.push(person);
    }
  });

  // reload table
  $("myTable").remove();
  let newTable = createTable(searchedArr);
  tableSection.append(newTable);
};
