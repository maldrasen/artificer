describe.only('CharacterBuilder', function() {

  it('builds a completely random character given a species', function(done) {
    CharacterBuilder.build({ species:'rat' }, character => {
      expect(character.species).to.exist;
      expect(character.gender).to.exist;
      expect(character.physical).to.exist;
      expect(character.personal).to.exist;
      expect(character.mental).to.exist;
      expect(character.magical).to.exist;
      expect(character.violent).to.exist;
      expect(character.fear).to.exist;
      expect(character.love).to.exist;
      expect(character.happiness).to.exist;
      done();
    });
  });

});
