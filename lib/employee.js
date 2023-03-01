//  This is the root js file for the polymorphic class structure of each engineer, intern, and manager JavaScript files. 
//  Exports Inquirer and fs Packages to other files
const inquirer = require('inquirer');
const fs = require('fs');

// All other polymorphic classes are extended from this Employee Class
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }


}
// Export to rest of package
module.exports = Employee;