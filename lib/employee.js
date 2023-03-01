//  This is the root js file for the polymorphic class structure of each engineer, intern, and manager JavaScript files. 

// All other polymorphic classes are extended from this Employee Class
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
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
    getRole(){
        console.log("Employee");
        return "Employee"
    }

}
// Export to rest of company website builder package
module.exports = Employee;