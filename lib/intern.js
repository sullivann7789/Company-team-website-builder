

const Employee = require("./employee.js");
const attempt4 = new Employee;
class Intern extends Employee {
// Intern is an extension of Employee class in Employee javascript folder
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }
}
// Class InternForm extends Intern and adds html code based off user input.
// It is required to go this extra step to set precedence, or priority, over the value declared `school` in the Intern Class.
// Prior to moving the 'appendint' string value to InternForm, it was in class Intern, however would return 'school' undefined in the HTML; 
// This is due to the priority of 'appendint' being higher than the 'school' constructor value. Unless specifically separated, it will operate before the 'school' value is set.
class InternForm extends Intern {
    constructor(name, id, email, school) {
        super(name, id, email, school); 

    }
// import user input and set it to the html block below, once exported, it can be added/appended to any file
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