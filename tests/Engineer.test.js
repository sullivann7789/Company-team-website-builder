const Engineer = require('../lib/engineer.js');
// import engineer file from lib folder
describe("Engineer", () => {
    describe('ExportAssignment', () => {
        it('should properly export Values to new files', () => {
            const name = 'Michelle Wetherford';
            const id = '30205873';
            const email = 'MWetherford@wetherfordengineering.com';
            const ghub = 'wetherfordsoftwareanddev';
            const sampetesttextprediction = (
                `
    <section class="card card-rounded bg-white">
    <header class="card-header text-center bg-primary">
      <h2 class="text-white">
        Engineer
      </h2>
    </header>
    <div class="p-3">
    <blockquote class="blockquote text-center">
      <p class="card-body">
      Michelle Wetherford
        <br />
      30205873
      <br />
     Email: <a href="mailto:MWetherford@wetherfordengineering.com">MWetherford@wetherfordengineering.com</a>
      <br />
      Github: <a href="https://www.github.com/wetherfordsoftwareanddev">https://www.github.com/wetherfordsoftwareanddev</a>
      </p>
      </blockquote>
    </div>
    <footer class="card-footer text-center">
    </footer>
  </section>`);
            const engineer = new Engineer(name, id, email, ghub);
        // if const sampletesttextprediction matches up against the appendeng's output, we know the:
        // name,
        // id,
        // email,
        // and ghub
        // values input by the user will successfully be implemented into the HTML file with the supporting HTML script
        // After performing the `npm test` in the terminal/CLI, jest will perform the test,
        // if everything is the same in the appendeng() function as is the user input in const engineer and  const sampletesttextprediction, the test will pass
            expect(engineer.appendeng).toBe(sampetesttextprediction);
        });
    });
});