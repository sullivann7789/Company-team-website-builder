const Employee = require('../lib/employee.js');
// This is a test on the parent Employee folder
// this describe function will effectively test to ensure that user's input for name, id, and email will be transferred to the Employee class which was imported
describe("Engineer", () => {
    describe('ExportAssignment', () => {
        it('should properly export Values to new files', () => {
            const name = 'Michelle Wetherford';
            const id = '30205873';
            const email = 'MWetherford@wetherfordengineering.com';
            const employee = new Employee(name, id, email);
        
            expect(employee.name).toBe('Michelle Wetherford');
            // runs test to check user input for name matches functions output
            expect(employee.id).toBe('30205873');
            // runs test to check user input for id matches functions output
            expect(employee.email).toBe('MWetherford@wetherfordengineering.com');
            // runs test to check user input for email matches functions output
        });
    });
});