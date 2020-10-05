describe("TrainingPlan", function() {

  async function setup() {
    await GameHelper.setupTestGame();
    return await SpecHelper.buildJada();
  }

  it('gets available courses with consent levels and descriptions', function(done) {
    setup().then(jada => {
      TrainingPlan.availableCourses(jada).then(courses => {
        expect(courses.sexual[1].consentLevels.abusive.level).to.equal('rape');
        expect(courses.sexual[1].description).to.match(/Jada suck my cock/);
        expect(courses.sexual[1].styleDescriptions.rough).to.match(/roughly fuck Jada's face/);
        done();
      });
    });
  });

});
