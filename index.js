var employee = {}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;   
    var newEmployee = Object.assign({ name: 'Sam',
    streetAddress:'11 Broadway'},
    employee, {[key]: value});
    return newEmployee;
  }
  
 
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
  }

  function deleteFromEmployeeByKey(employee, key) {
    var newEmployee = Object.assign({}, employee);
    delete newEmployee[key];
    return newEmployee;
  }
  
 
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
  }
 