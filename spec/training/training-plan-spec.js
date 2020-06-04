describe("TrainingPlan", function() {

  async function setup() {
    await GameHelper.setupTestGame();
    return await SpecHelper.buildJada();
  }

  it('gets available courses with consent levels', function(done) {
    setup().then(jada => {
      TrainingPlan.availableCourses(jada).then(courses => {
        expect(courses.sexual[1].consentLevels.abusive.level).to.equal('rape');
        done();
      });
    });
  });

});
