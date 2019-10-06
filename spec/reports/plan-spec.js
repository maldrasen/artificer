describe.only('Plan', function() {

  it('sets the current project', function(done) {
    GameHelper.setupTestGame().then(() => {

      let planData = { projectWork:[
        { code:'clear-great-hall', minions:[2,4] }
      ]};

      new Plan(planData).execute().then(() => {
        Game.instance().then(game => {
          Character.findAll({ where:{ id:[2,4] }}).then(minions => {
            AvailableEvent.findOne({ where:{ code:'great-hall-talk-to-rat-chief' }}).then(event => {
              expect(game.currentProject).to.equal('clear-great-hall');
              expect(game.currentProjectProgress).to.equal(0);
              expect(minions[0].currentTask).to.equal('project');
              expect(minions[1].currentTask).to.equal('project');
              expect(event.requires).to.equal('game.dayNumber=3')
              done();
            });
          });
        });
      });
    });
  });

});
