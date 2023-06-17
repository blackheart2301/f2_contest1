/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
const developerEmployees = arr.filter(employee => employee.profession == "developer").map(employee => employee.name);

console.log(developerEmployees);
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  const developerEmployees = [];

  arr.forEach(employee => {
    if (employee.profession == "developer") {
      developerEmployees.push(employee.name);
    }
  });

  console.log(developerEmployees);
}

function addData() {
  //Write your code here, just console.log
  const newEmployee = { id: 4, name: "susan", age: "20", profession: "intern" };
  arr.push(newEmployee);

  console.log(newEmployee);
}

function removeAdmin() {
  //Write your code here, just console.log
  const filteredEmployees = arr.filter(employee => employee.profession != "admin");
  arr.length = 0; // Clear the original array
  Array.prototype.push.apply(arr, filteredEmployees);

  console.log(arr);
}

function concatenateArray() {
  //Write your code here, just console.log
  const additionalEmployees = [
    { id: 5, name: "alex", age: "22", profession: "developer" },
    { id: 6, name: "emma", age: "24", profession: "designer" },
    { id: 7, name: "mike", age: "21", profession: "engineer" }
  ];

  const combinedArray = arr.concat(additionalEmployees);

  console.log(combinedArray);
}
