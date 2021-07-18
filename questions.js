const managerQuestions = [
  {
    type: "input",
    message:
      "This application will generate an HTML page for your software engineering team. An engineering team consists of a manager and any number of engineers & interns. First, what is your manager's name?",
    name: "mgrName",
    default: "Mary Smith",
    validate: function (answer) {
      if (answer.length < 1) {
        return console.log("A valid name is required.");
      }
      return true;
    },
  },
  {
    type: "input",
    message: "What is your manager's employee ID?",
    name: "mgrId",
    default: "100",
    validate: function (answer) {
      if (answer <= 0) {
        return console.log("A valid employee ID is required.");
      }
      return true;
    },
  },
  {
    type: "input",
    message: "What is your manager's email address?",
    name: "mgrEmail",
    default: "testmgr@test.com",
    validate: function (answer) {
      if (answer.length < 1) {
        return console.log("A valid email address is required.");
      }
      return true;
    },
  },
  {
    type: "input",
    message: "What is your manager's office number?",
    name: "mgrOffice",
    default: "801",
    validate: function (answer) {
      if (answer.length < 1) {
        return console.log("A valid office number is required.");
      }
      return true;
    },
  },
];

const confirmEmployee = [
  {
    type: "confirm",
    message: "Next, would you like to add another team member to the team?",
    name: "confirmEmp",
  },
];

const employeeType = [
  {
    type: "list",
    message: "Would you like to add an Engineer or Intern to the team?",
    choices: ["Engineer", "Intern"],
    name: "empRole",
  },
];

const engineerQuestions = [
  {
    type: "input",
    message: "What is your software engineer's name?",
    name: "engName",
    default: "John Smith",
    validate: function (answer) {
      if (answer.length < 1) {
        return console.log("A valid name is required.");
      }
      return true;
    },
  },
  {
    type: "input",
    message: "What is your engineer's employee ID?",
    name: "engId",
    default: "102",
    validate: function (answer) {
      if (answer <= 0) {
        return console.log("A valid employee ID is required.");
      }
      return true;
    },
  },
  {
    type: "input",
    message: "What is your engineer's email address?",
    name: "engEmail",
    default: "test@test.com",
    validate: function (answer) {
      if (answer.length < 1) {
        return console.log("A valid email address is required.");
      }
      return true;
    },
  },
  {
    type: "input",
    message: "What is your engineer's GitHub? (No @ needed)",
    name: "engGithub",
    default: "default",
    validate: function (answer) {
      if (answer.length < 1) {
        return console.log("A valid GitHub is required.");
      }
      return true;
    },
  },
  {
    type: "input",
    message: "What is your employee's office number?",
    name: "empOffice",
    default: "801",
    validate: function (answer) {
      if (answer.length < 1) {
        return console.log("A valid office number is required.");
      }
      return true;
    },
  },
];

const internQuestions = [
  {
    type: "input",
    message: "What is your intern's name?",
    name: "internName",
    default: "Paul Smith",
    validate: function (answer) {
      if (answer.length < 1) {
        return console.log("A valid name is required.");
      }
      return true;
    },
  },
  {
    type: "input",
    message: "What is your intern's employee ID?",
    name: "internId",
    default: "103",
    validate: function (answer) {
      if (answer <= 0) {
        return console.log("A valid employee ID is required.");
      }
      return true;
    },
  },
  {
    type: "input",
    message: "What is your intern's email address?",
    name: "internEmail",
    default: "test2@test.com",
    validate: function (answer) {
      if (answer.length < 1) {
        return console.log("A valid email address is required.");
      }
      return true;
    },
  },
  {
    type: "input",
    message: "What is the name of your intern's university?",
    name: "internSchool",
    default: "University of Utah",
    validate: function (answer) {
      if (answer.length < 1) {
        return console.log("A valid school is required.");
      }
      return true;
    },
  },
  {
    type: "input",
    message: "What is your intern's office number?",
    name: "internOffice",
    default: "801",
    validate: function (answer) {
      if (answer.length < 1) {
        return console.log("A valid office number is required.");
      }
      return true;
    },
  },
];

module.exports = {
  manager: managerQuestions,
  create: confirmEmployee,
  employee: employeeType,
  engineer: engineerQuestions,
  intern: internQuestions,
};
