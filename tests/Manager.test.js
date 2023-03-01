const Manager = require('../lib/manager.js');
// import manager file from lib folder
describe("Manager", () => {
// create a jest describe function test which tests constant values input by the developer against the imported manager's appendmgr() function. 
    describe('ExportAssignment', () => {
        it('should properly export Values to new files', () => {
            const name = 'Michelle Wetherford';
            const id = '30205873';
            const email = 'MWetherford@wetherfordengineering.com';
            const number = 'wetherfordsoftwareanddev';
            const sampletesttextprediction = (`          
    <section class="card card-rounded bg-white">
    <header class="card-header text-center bg-primary">
      <h2 class="text-white">
        Manager
      </h2>
    </header>
    <div class="p-3">
    <blockquote class="blockquote text-center">
      <p class="card-body">
      Michelle Wetherford
        <br />
      Employee ID: <br>30205873
      <br />
      Email: <a href="mailto:MWetherford@wetherfordengineering.com">MWetherford@wetherfordengineering.com</a>
      <br />
      Phone: wetherfordsoftwareanddev</p>
      </blockquote>
    </div>
    <footer class="card-footer text-center">
    </footer>
  </section>`);
            const manager = new Manager(name, id, email, number);
        // if const sampletesttextprediction matches up against the appendmgr's output, we know the:
        // name,
        // id,
        // email,
        // and number
        // values input by the user will successfully be implemented into the HTML file with the supporting HTML script
        // After performing the `npm test` in the terminal/CLI, jest will perform the test,
        // if everything is the same in the appendmgr() function as is the user input in const manager and  const sampletesttextprediction, the test will pass
            expect(manager.appendmgr).toBe(sampletesttextprediction);
        });
    });
});