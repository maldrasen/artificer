describe.only('Role: Forager.Injuries', function() {

  it("gets a random injury", function(done) {
    SpecHelper.buildJada().then(jada => {
      Role.Forager.Injuries.getInjuryFor(jada).then(injury => {
        console.log("Generated Injury ",injury)
        done();
      });
    });
  });

});
