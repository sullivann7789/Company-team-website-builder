const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require("./employee.js");


const attempt1 = new Employee;
class Manager extends Employee {
    constructor(name, id, email, number) {
        super(name, id, email); 
        this.number = number
    }
}
module.exports = Manager;