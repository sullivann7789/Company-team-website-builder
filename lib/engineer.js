const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require("./employee.js");

class Engineer extends Employee {
    constructor(name, id, email, ghub) {
        super(name, id, email);
        this.ghub = ghub;
    }



}

module.exports = Engineer;