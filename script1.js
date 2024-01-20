// *** WEEKEND CHALLENGE 1 ***

let totalFooterCount= 0;

function onReady() {

console.log('hey javascript is working!')


let totalCountElement = document.getElementById('total_count');
totalCountElement.textContent = `$ ${totalFooterCount}`;
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
//annSalaryElement.value = '';

totalFooterCount = document.getElementById('ann_salary_input');


// let totalCountElement = document.getElementById('total_count');
// totalCountElement.textContent = `$ ${totalFooterCount.value}`;
let sum = 0;
for (let i=0; i<totalFooterCount.length; i++) {
    if(parseFloat(totalFooterCount[i].value)) 
         sum += parseFloat(totalFooterCount[i].value);
}
document.getElementById('total_count').value = sum;

    // //totalCountElement.textContent = '$', sum;
    // let totalCountElement = sum;
    // totalCountElement.textContent = `$ ${totalCountElement}`;

}




//update count each time entry is submitted
//totalCountElement.textContent = `$ ${totalCountElement}`;


