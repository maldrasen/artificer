describe('SummonAction', function() {

  it('gets a list of available actions', function(done) {
    GameHelper.setupTestGame().then(() => {
      SpecHelper.buildJada({ gender:'male' }).then(jada => {
        SummonAction.forCharacter(jada).then(actions => {
          let codes = actions.map(action => { return action.code; });
          expect(codes).to.contain('face-fuck');
          expect(codes).to.not.contain('eat-pussy');
          done();
        });
      });
    });
  });

  it('gets a categorized list of available actions', function(done) {
    GameHelper.setupTestGame().then(() => {
      SpecHelper.buildJada({ gender:'female' }).then(jada => {
        SummonAction.categorizedForCharacter(jada).then(actions => {
          let names = actions['Oral'].map(action => { return action.name; });
          expect(names).to.contain('Eat Pussy');
          expect(names).to.not.contain('Get Pussy Eaten');
          done();
        });
      });
    });
  });

});
