describe.only('AspectAdjuster', function() {

  it("Games start with events queued", function(done) {
    Game.start().then(game => {
      CharacterAgent.findActor('rat-chief').then(chief => {
        let oldValue = chief.loyalty;
        let id = chief.id;

        AspectAdjuster.adjust({ subject:'all-rats', aspect:'loyal', level:3 }).then(() => {

          // Timeout needed because we're saving and loading too quickly in the spec.
          setTimeout(() => {
            Character.findByPk(id).then(chiefNow => {
              expect(oldValue).to.be.below(chiefNow.loyalty)
              done();
            });
          },10);

        });
      });
    });
  });

});
