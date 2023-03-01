const Employee = require('../lib/employee.js');

describe("Engineer", () => {
    describe('ExportAssignment', () => {
        it('should properly export Values to new files', () => {
            const name = 'Michelle Wetherford';
            const id = '30205873';
            const email = 'MWetherford@wetherfordengineering.com';
            const employee = new Employee(name, id, email);
        
            expect(employee.name).toBe('Michelle Wetherford');
            expect(employee.id).toBe('30205873');
            expect(employee.email).toBe('MWetherford@wetherfordengineering.com');
        });
    });
});