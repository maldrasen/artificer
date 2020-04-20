describe('AspectAdjuster', function() {

  it("Adjusts multiple character's attributes", function(done) {
    GameHelper.setupTestGame().then(() => {
      CharacterAgent.findActor('scaven-chief').then(chief => {
        let oldValue = chief.loyalty;
        let id = chief.id;

        AspectAdjuster.adjust({ subject:'all-scaven', aspect:'loyal', level:3 }).then(() => {

          // Timeout needed because we're saving and loading too quickly in the spec.
          setTimeout(() => {
            Character.lookup(id).then(chiefNow => {
              expect(oldValue).to.be.below(chiefNow.loyalty)
              done();
            });
          },10);

        });
      });
    });
  });

  it("Adjusts character aspects", function(done) {
    GameHelper.setupTestGame().then(() => {
      AspectAdjuster.adjust({ subject:'player', aspect:'sadist', level:3 }).then(() => {
        setTimeout(() => {
          Player.instance().then(player => {
            player.getCharacterAspect('sadist').then(aspect => {
              expect(aspect.strength).to.be.within(100,300);
              done();
            });
          });
        },10);
      });
    });
  });

  describe('aspectAdjustmentStrength()', function() {
    it('gets an adjustment strength given the level', function() {
      expect(AspectAdjuster.aspectAdjustmentStrength(1)).to.be.within(10,30);
      expect(AspectAdjuster.aspectAdjustmentStrength(3)).to.be.within(100,300);
    });

    it('inverts the strength for negative levels', function() {
      expect(AspectAdjuster.aspectAdjustmentStrength(-2)).to.be.within(-90,-30);
    });
  });
});
