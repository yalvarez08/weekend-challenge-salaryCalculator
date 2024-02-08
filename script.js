// *** WEEKEND CHALLENGE 1 ***

function onReady() {

console.log('hey javascript is working!')
}
onReady();

let totalFooterCount= 0;
// let totalCountElement = document.getElementById('total_count');
// totalCountElement.innerHTML = `$ ${totalFooterCount}`;

//once submit button is clicked, employee info provided in form will
//be added to the table
function submitEmployee(event){
event.preventDefault();

//form input elements 
let firstElement = document.getElementById('firstNameInput');
let lastElement = document.getElementById('lastNameInput');
let idElement = document.getElementById('idInput');
let titleElement = document.getElementById('titleInput');
let annualSalaryElement = document.getElementById('annual-salary');

//add and display employee to table
let formInputContainer = document.getElementById('tbody');
formInputContainer.innerHTML += `
<tr>
<td>${firstElement.value}</td><td>${lastElement.value}</td><td>${idElement.value}</td>
<td>${titleElement.value}</td><td>${annualSalaryElement.value}</td>
<td>
<button id="delete-btn" onclick="deleteEmployeeRow(event)">Delete</button>
</td>
</tr>
`;

 //update count each time entry is submitted
totalFooterCount += parseFloat(annualSalaryElement.value)/12;
console.log(totalFooterCount);
let totalCountElement = document.getElementById('footer-element');
totalCountElement.innerHTML = `Total Monthly: $ ${totalFooterCount}`;

//clear form inputs after submit action
firstElement.value = '';
lastElement.value = '';
idElement.value = '';
titleElement.value = '';
annualSalaryElement.value = '';

//totalFooterCount = parseFloat(totalFooterCount);

if(totalFooterCount > 20000) {
    totalCountElement.classList.add('over-budget');
 } 
}

// create function that will delete employee from table 
function deleteEmployeeRow(event) {
    event.target.parentElement.parentElement.remove();

 }

