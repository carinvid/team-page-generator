// Code to define and export the Engineer class. This class inherits from Employee.
const Employee = require("./Employee.js");

class Engineer extends Employee {
  constructor(name, id, email, officeNumber) {
    // Employee constructors are name, id, email
    super(name, id, email);

    // Constructors unique to Engineer
    this.officeNumber = officeNumber;
    // Override "Employee" role from parent Employee class
    this.role = "Engineer";
  }
  getOfficeNumber() {
    return this.officeNumber;
  }
}

module.exports = Engineer;
