// *** WEEKEND CHALLENGE 1 ***


function onReady() {


console.log('hey javascript is working!')
}

onReady();

//once submit button is clicked, employee info provided in form will
//be added to the table
function performSubmit(event){

event.preventDefault();


//get all form input elements 
let fNameElement = document.getElementById('first_name_input');
let lNameElement = document.getElementById('last_name_input');
let idElement = document.getElementById('id_num_input');
let jobElement = document.getElementById('job_input');
let annSalaryElement = document.getElementById('ann_salary_input');


let formInputContainer = document.querySelector('tbody');

formInputContainer.innerHTML += `
<td>${fNameElement.value}</td><td>${lNameElement.value}</td><td>${idElement.value}</td>
<td>${jobElement.value}</td><td>${annSalaryElement.value}</td>
`;



//clear form inputs after submit takes place
fNameElement.value = '';
lNameElement.value = '';
idElement.value = '';
jobElement.value = '';
annSalaryElement.value = '';
}
