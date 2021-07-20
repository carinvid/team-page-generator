# Team-page-generator

OOP, Node, & ES6

**This application will generate a HTML page when you can have all he members of your team.

**Screenshot
![Screenshot](https://user-images.githubusercontent.com/17866063/126258211-d68bde50-97af-4267-9148-096e19dfa8b4.jpg)

***User Input**

This Node CLI will prompt you to generate a webpage for your software engineering team.

https://user-images.githubusercontent.com/17866063/126260138-8478c824-169f-4a51-a63f-f3c2ac9b686f.mp4

***Roster output

When you have completed building the team, the application then generates an index.html page in the output/ directory, that displays a nicely formatted team roster based on the information you provided. 

***Installation

To generate your own HTML team page, first download the repository and run npm install in order to install the following npm package dependencies as specified in the package.json:

****Methodology

Directory Structure
The directory structure of the application is as follows:

output/          // Rendered HTML output that will appear on GitHub pages
lib/           // Employee classes as well as helper code to generate HTML
templates/     // Templates for main HTML <body> and employee <div>s
test/          // Jest tests
questions.js   // Inquirer prompts
app.js         // Runs the application and main functions
The templates/ directory contains the main.html template for the main <head> and <body> as well as multiple HTML templates with placeholder characters that are identified with Regex for where dynamic markup begins and ends for each type of employee:

engineer.html

intern.html

manager.html

***Classes
  
This application utilizes JavaScript's brand of object-oriented programming by using constructors, the prototype chain, and the ES6 pattern of class.

The different employee types, Manager, Engineer, and Intern, inherit methods and properties from a base class of Employee.

The first class is an Employee parent class with the following properties and methods:

name
id
email
role
getName()
getId()
getEmail()
getRole() // Returns 'Employee'
The other three classes extend Employee. In addition to Employee's properties and methods, Manager also has:

officeNumber
getRole() // Overridden to return 'Manager'
In addition to Employee's properties and methods, Engineer also has:

github // GitHub username
getGithub()
getRole() // Overridden to return 'Engineer'
In addition to Employee's properties and methods, Intern also has:

school
getSchool()
getRole() // Overridden to return 'Intern'
Test-Driven Development (TDD)
The development of this application focused on writing tests and ensuring application features passed to ensure code was understandable and maintainable. The methods on the classes were also developed to be as simple and pure as possible so that they are easier to test. The suite of Jest tests for the above classes in the tests/ directory currently pass. Ultimately, these tests serve as fail-safes for future maintenance of the code base.

