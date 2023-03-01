const Intern = require('../lib/intern.js');

describe("Intern", () => {
    describe('ExportAssignment', () => {
        it('should properly export Values to new files', () => {
            const name = 'Michelle Wetherford';
            const id = '30205873';
            const email = 'MWetherford@wetherfordengineering.com';
            const school = 'wetherfordsoftwareanddev';
            const sampletesttextprediction = (`          
    <section class="card card-rounded bg-white">
    <header class="card-header text-center bg-primary">
      <h2 class="text-white">
        Intern
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
      School: wetherfordsoftwareanddev
      </p>
      </blockquote>
    </div>
    <footer class="card-footer text-center">
    </footer>
  </section>`);
            const intern = new Intern(name, id, email, school);
        // if const sampletesttextprediction matches up against the appendint's output, we know the:
        // name,
        // id,
        // email,
        // and school
        // values input by the user will successfully be implemented into the HTML file with the supporting HTML script
        // After performing the `npm test` in the terminal/CLI, jest will perform the test,
        // if everything is the same in the appendint() function as is the user input in const intern and  const sampletesttextprediction, the test will pass
            expect(intern.appendint).toBe(sampletesttextprediction);
        });
    });
});