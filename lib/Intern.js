// Code to define and export the Intern class. This class inherits from Employee.
const Employee = require("./Employee.js");

class Intern extends Employee {
  constructor(name, id, email, school, officeNumber) {
    // Employee constructors are name, id, email
    super(name, id, email);

    // Constructors unique to Intern
    this.school = school;
    this.officeNumber = officeNumber;
    // Override "Employee" role from parent Employee class
    this.role = "Intern";
  }

  getSchool() {
    return this.school;
  }

  getOfficeNumber() {
    return this.officeNumber;
  }
}

module.exports = Intern;
