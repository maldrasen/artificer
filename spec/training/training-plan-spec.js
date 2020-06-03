describe("TrainingPlan", function() {

  async function setup() {
    await GameHelper.setupTestGame();
  }

  it('gets available courses', function(done) {
    setup().then(_ => {
      TrainingPlan.availableCourses().then(courses => {
        done();
      });
    });
  });

});
