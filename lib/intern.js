const inquirer = require('inquirer');

const Employee = require("./employee.js");
const attempt4 = new Employee;
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }



}

module.exports = Intern;