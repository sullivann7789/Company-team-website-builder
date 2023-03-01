
const fs = require('fs');
const Employee = require("./employee.js");
// Import Parent Employee file and inherit it's data, including classes, and functions

class Engineer extends Employee {
// Engineer is an extension of Employee class in Employee javascript folder
    constructor(name, id, email, ghub) {
        super(name, id, email);
        this.ghub = ghub;
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
    getGHUB(){
        console.log(this.ghub);
        return this.ghub;
    }
    getRole(){
        console.log("Engineer");
        return "Engineer";
    }
}

// Class EngineerForm extends Engineer and adds html code based off user input.
// It is required to go this extra step to set precedence, or priority, over the value declared `ghub` in the Engineer Class.
// Prior to moving the 'appendmgr' string value to EngineerForm, it was in Engineer, however would return 'ghub' undefined in the HTML; 
// This is due to the priority of 'appendmgr' being higher than the 'ghub' constructor value. Unless specifically separated, it will operate before the 'ghub' value is set
class EngineerForm extends Engineer {
    constructor(name, id, email, ghub) {
        super(name, id, email, ghub);
    }
// import user input and set it to the html block below, once exported, it can be added/appended to any file
    appendeng = (`
    <section class="card card-rounded bg-white">
    <header class="card-header text-center bg-primary">
      <h2 class="text-white">
        Engineer
      </h2>
    </header>
    <div class="p-3">
    <blockquote class="blockquote text-center">
      <p class="card-body">
      ${this.name}
        <br />
      ${this.id}
      <br />
     Email: <a href="mailto:${this.email}">${this.email}</a>
      <br />
      Github: <a href="https://www.github.com/${this.ghub}">https://www.github.com/${this.ghub}</a>
      </p>
      </blockquote>
    </div>
    <footer class="card-footer text-center">
    </footer>
  </section>`);
}

module.exports = EngineerForm;