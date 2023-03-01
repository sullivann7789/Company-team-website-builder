
const fs = require('fs');
const Employee = require("./employee.js");

class Manager extends Employee {
// Manager is an extension of Employee class in Employee javascript folder
    constructor(name, id, email, number) {
        super(name, id, email); 
        this.number = number;
    }
    getName(){
        console.log(this.name);
        return this.name;
    }
    getID(){
        console.log(this.id);
        return this.id;
    }
    getEmail(){
        console.log(this.email);
        return this.email;
    }
    getNumber(){
        console.log(this.number);
        return this.number;
    }
    getRole(){
        console.log("Employee");
        return "Employee"
    }
}
// Class ManagerForm extends Manager and adds html code based off user input.
// It is required to go this extra step to set precedence, or priority, over the value declared `number` in the Manager Class.
// Prior to moving the 'appendmgr' string value to ManagerForm, it was in Manager, however would return 'number' undefined in the HTML; 
// This is due to the priority of 'appendmgr' being higher than the 'number' constructor value. Unless specifically separated, it will operate before the 'number' value is set
class ManagerForm extends Manager {
    constructor(name, id, email, number){
    super(name, id, email, number);
    }
// import user input and set it to the html block below, once exported, it can be added/appended to any file
    appendmgr =  (`          
    <section class="card card-rounded bg-white">
    <header class="card-header text-center bg-primary">
      <h2 class="text-white">
        Manager
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
      Phone: ${this.number}</p>
      </blockquote>
    </div>
    <footer class="card-footer text-center">
    </footer>
  </section>`
    );
}
module.exports = ManagerForm;