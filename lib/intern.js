const inquirer = require('inquirer');

const Employee = require("./employee.js");
const attempt4 = new Employee;
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }
}

class InternForm extends Intern {
    constructor(name, id, email, school) {
        super(name, id, email, school); 

    }
    appendint = (`          
    <section class="card card-rounded bg-white">
    <header class="card-header text-center bg-primary">
      <h2 class="text-white">
        Intern
      </h2>
    </header>
    <div class="p-3">
    <blockquote class="blockquote text-center">
      <p class="card-body">
      ${this.name}
        <br />
      Employee ID: <br>${this.id}
      <br />
      Email: <a href="mailto:${this.email}">${this.email}</a>
      <br />
      School: ${this.school}
      </p>
      </blockquote>
    </div>
    <footer class="card-footer text-center">
    </footer>
  </section>`);
}

module.exports = InternForm;