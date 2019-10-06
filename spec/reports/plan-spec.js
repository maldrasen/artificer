describe('Plan', function() {

  it('sets the current project', function(done) {
    GameHelper.setupTestGame().then(() => {
      Character.findAll({ where:{ type:'minion' }}).then(allMinions => {
        let id_1 = allMinions[1].id;
        let id_2 = allMinions[3].id;

        let planData = { projectWork:[
          { code:'clear-great-hall', minions:[id_1,id_2]}
        ]};

        new Plan(planData).preProcess().then(() => {
          Game.instance().then(game => {
            Character.findAll({ where:{ id:[id_1,id_2] }}).then(minions => {
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

});
