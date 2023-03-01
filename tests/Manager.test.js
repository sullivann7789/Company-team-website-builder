const Manager = require('../lib/manager.js');

describe("Manager", () => {
    describe('ExportAssignment', () => {
        it('should properly export Values to new files', () => {
            const name = 'Michelle Wetherford';
            const id = '30205873';
            const email = 'MWetherford@wetherfordengineering.com';
            const number = 'wetherfordsoftwareanddev';
            const sampetesttextprediction = (`          
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
        
            expect(manager.appendmgr).toBe(sampetesttextprediction);
        });
    });
});