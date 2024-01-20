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
let firstElement = document.querySelector('[data-testid="firstNameInput"]');
let lastElement = document.querySelector('[data-testid="lastNameInput"]');
let idElement = document.querySelector('[data-testid="idInput"]');
let titleElement = document.querySelector('[data-testid="titleInput"]');
let annualSalaryElement = document.querySelector('[data-testid="annualSalaryInput"]');


let formInputContainer = document.querySelector('tbody');

formInputContainer.innerHTML += `
<td>${firstElement.value}</td><td>${lastElement.value}</td><td>${idElement.value}</td>
<td>${titleElement.value}</td><td>${annualSalaryElement.value}</td>
`;



//clear form inputs after submit takes place
firstElement.value = '';
lastElement.value = '';
idElement.value = '';
titleElement.value = '';
annualSalaryElement.value = '';

}


function performFooterCalculation(event){

event.preventDefault();

totalFooterCount = 10;



let totalCountElement = document.getElementById('total_count');
totalCountElement.textContent = `${totalFooterCount}`;

}



// let sum = 0;
// for (let i=0; i<totalFooterCount.length; i++) {
//     if(parseFloat(totalFooterCount[i].value)) 
//          sum += parseFloat(totalFooterCount[i].value);
// }
// document.getElementById('total_count').value = sum;

    // //totalCountElement.textContent = '$', sum;
    // let totalCountElement = sum;
    // totalCountElement.textContent = `$ ${totalCountElement}`;






//update count each time entry is submitted
//totalCountElement.textContent = `$ ${totalCountElement}`;


