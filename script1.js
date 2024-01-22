// *** WEEKEND CHALLENGE 1 ***

let totalFooterCount= 0;
//let annualSumArray = [];


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
<td>
<button onClick="deleteEmployeeRow(event)">Delete</button>
</td>
`;



//clear form inputs after submit action
firstElement.value = '';
lastElement.value = '';
idElement.value = '';
titleElement.value = '';
//annualSalaryElement.value = '';




totalFooterCount += parseFloat(annualSalaryElement.value)/12;
//console.log('current total mnth cost:', totalFooterCount);

totalFooterCount = parseFloat(totalFooterCount);
console.log(totalFooterCount);



 //update count each time entry is submitted
let totalCountElement = document.getElementById('total_count');
totalCountElement.textContent= `$ ${totalFooterCount}`;


if(totalFooterCount > 20000) {
    let footerCount = document.getElementById('footer-element');
    footerCount.classList.add('over-budget');
    //totalFooterCount.classList.add('over-budget');
 } else {
    totalCountElement.textContent= `$ ${totalFooterCount}`;
    }
}


 



function deleteEmployeeRow(event) {
    event.target.parentElement.parentElement.remove();

 }


// function storeAnnSalaryInputs(event) {
//     event.preventDefault();
    
//     let annualInputs = document.querySelector('[data-testid="annualSalaryInput"]');
//     let annualTotalInputs = annualInputs.value;

//     annualSumArray.push(annualTotalInputs);
//     console.log(annualSumArray);
    
//     for (let i=0; i<annualSumArray.length; i++) {
//         if (parseFloat(annualSumArray[i]))
//          totalFooterCount += parseInt(annualSumArray[i]);
//     }
//      console.log(totalFooterCount);

//     let totalCountElement = document.getElementById('total_count');
//     totalCountElement.textContent = `$ ${totalFooterCount}`;
//}



