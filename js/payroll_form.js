window.addEventListener('DOMContentLoaded', (event) => {
    const name = document.querySelector('#name');
    const nameError = document.querySelector('.text-error');
    name.addEventListener('input', function () {
      if (name.value.length == 0) {
        nameError.textContent = "";
        return;
      }
      try {
        (new EmployeePayrollData()).name = name.value;
        nameError.textContent = "";
      }
      catch (e) {
        nameError.textContent = e;
      }
    });
});

//Day44 UC3

const save = () =>{
  try{
    let employeePayrollData = createEmployeePayroll();
  }catch(e){
    return;
  }
}
const createEmployeePayroll = () => {
  let employeePayrollData =new EmployeePayrollData();
  try{
    employeePayrollData.name = getInputValueByID('#name');
  }catch(e){
    setTextValue('.text-error',e);
    throw e;
  }
  employeePayrollData.profileImage = getSelectedValues('[name=profile]').pop();
  employeePayrollData.gender = getSelectedValues('[name = gender]').pop();
  employeePayrollData.department = getSelectedValues('[name =department]');
  employeePayrollData.salary = getSelectedValueById("#salary");
  employeePayrollData.notes = getInputValueByID("#notes");

  let date =getInputValueByID("#year") + " - " + getInputValueByID ("#month") + " - " + getInputValueByID("#day");
  employeePayrollData.date = Date.parse(date);

  alert(employeePayrollData.toString());
  return employeePayrollData;
}
const getSelectedValues = (propertyValue) => {
  let allItems =document.querySelectorAll(propertyValue);
  let selItems = [];
  allItems.forEach(item =>{
    if(item.checked) selItems.push(item.value);
  });
  return selItems;
};

const getInputValueByID = (id) => {
  let value = document.querySelector(id).value;
  return value;
};

const getInputElementValue = (id) => {
  let value =document.getElementById(id).value;
  return value;
};

