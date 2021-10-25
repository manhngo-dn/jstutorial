let fname = prompt("Input your first name");
let lname = prompt("Input your last name");
let age = prompt("Input your age");
let gender = prompt("Input your gender");
let school = prompt("Input your school");
let address = prompt("Input your address");

if (fname.length < 4 && lname.length < 4 && address.length >=40) {
  alert("Input your first name/last name/address again");
} else {
  document.write(
    `<table>
      <tr>
        <th>First name</th>
        <th>Last name</th>
        <th>Age</th>
        <th>Gender</th>
        <th>School</th>
        <th>Address</th>
      </tr>
      <tr>
        <td>${fname}</td>
        <td>${lname}</td>
        <td>${age}</td>
        <td>${gender}</td>
        <td>${school}</td>
        <td>${address}</td>
      </tr>
    </table>`
  )
}