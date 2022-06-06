<<<<<<< HEAD
//UC8
=======
>>>>>>> Day43_UC8_EventListenere_ON_salary
const salary = document.querySelector('#salary');
const output = document.querySelector('.salary-output');
output.textContent = salary.value;
salary.addEventListener('input', function() {
    output.textContent = salary.value;
});