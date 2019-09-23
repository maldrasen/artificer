describe('TitsBuilder', function() {

  describe('build', function() {
    it('builds tits using all options', function(done) {
      let options = { species:'rat', gender:'futa', tits:{
        count: 3,
        size: 1000,
        shape: 'bell',
      }};

      CharacterBuilder.build(options, character => {
        character.getTits(tits => {
          expect(tits.count).to.equal(3);
          expect(tits.size).to.equal(1000);
          expect(tits.shape).to.equal('bell');
          done();
        });
      });
    });

    it('randomizes options otherwise', function(done) {
      CharacterBuilder.build({ gender:'futa', species:'nymph' }, character => {
        character.getTits(tits => {
          expect(tits.count).to.equal(2);
          expect(tits.size).to.be.within(400,1100);
          expect(tits.shape).to.exist;
          done();
        });
      });
    });
  });

});
