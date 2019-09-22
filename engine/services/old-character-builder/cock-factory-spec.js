describe('CockFactory', function() {

  describe('build', function() {
    it("does nothing to character's without cocks", function(done) {
      CharacterHelper.withTestCharacter({ gender:'female' }, (character) => {
        character.withCock((cock) => {
          expect(cock).to.not.exist;
          done();
        });
      });
    });

    it('uses the all the options if present', function(done) {
      let options = { gender:'male', race:'elf', cock:{
        shape: 'horse',
        sheath: 'fur',
        count: 2,
        length: 1000,
        widthRatio: 1.5,
        knotWidthRatio: 1.2,
        knobHeightRatio: 1.4,
        spineHeightRatio: 1.1,
        glow: 'purple',
        urethraWidth: 10,
        urethraElasticity: 5,
      }};

      CharacterHelper.withTestCharacter(options, (character) => {
        character.withCock((cock) => {
          expect(cock.shape).to.equal('horse');
          expect(cock.sheath).to.equal('fur');
          expect(cock.count).to.equal(2);
          expect(cock.length).to.equal(1000);
          expect(cock.widthRatio).to.equal(1.5);
          expect(cock.knotWidthRatio).to.equal(1.2);
          expect(cock.knobHeightRatio).to.equal(1.4);
          expect(cock.spineHeightRatio).to.equal(1.1);
          expect(cock.glow).to.equal('purple');
          expect(cock.urethraWidth).to.equal(10);
          expect(cock.urethraElasticity).to.equal(5);
          done();
        });
      });
    });

    it("builds a cock of average length for that character's race (centaur)", function(done) {
      CharacterHelper.withTestCharacter({ gender:'male', race:'centaur' }, (character) => {
        character.withCock((cock) => {
          expect(cock.convertedLength).to.be.within(10,35);
          done();
        });
      });
    });

    it("builds a cock of average length for that character's race (rat)", function(done) {
      CharacterHelper.withTestCharacter({ gender:'male', race:'rat' }, (character) => {
        character.withCock((cock) => {
          expect(cock.convertedLength).to.be.within(2,6);
          done();
        });
      });
    });

    it("sets a random knot width ratio if it's missing on a dog cock", function(done) {
      CharacterHelper.withTestCharacter({ gender:'male', race:'lupin' }, (character) => {
        character.withCock((cock) => {
          expect(cock.knotWidthRatio).to.be.within(1,2);
          done();
        });
      });
    });
  });

  describe('desecrate', function() {
    it('does nothing if the no-random-features flag is set', function(done) {
      let options = { gender:'male', race:'incubus', cock:{ 'no-random-features':true }};
      CharacterHelper.withTestCharacter(options, (character) => {
        character.withCock((cock) => {
          expect(cock.shape).to.equal('normal');
          done();
        });
      });
    });

    it('at least changes the shape.', function(done) {
      CharacterHelper.withTestCharacter({ gender:'male', race:'incubus' }, (character) => {
        character.withCock((cock) => {
          expect(cock.shape).to.not.equal('normal');
          done();
        });
      });
    });
  });

});
