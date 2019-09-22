describe('CharacterBuilder', function() {

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

  it('Uses the passed options to create a character.', function(done) {
    let options = {
      gender: 'futa',
      species: 'elf-lord',
      physical: 10,
      personal: 20,
      mental: 30,
      magical: 40,
      violent: -50,
      fear: 60,
      love: 70,
      happiness: 80
    };

    CharacterBuilder.build(options, character => {
      expect(character.gender.code).to.equal('futa');
      expect(character.species.code).to.equal('elf-lord');
      expect(character.physical).to.equal(10);
      expect(character.personal).to.equal(20);
      expect(character.mental).to.equal(30);
      expect(character.magical).to.equal(40);
      expect(character.violent).to.equal(-50);
      expect(character.fear).to.equal(60);
      expect(character.love).to.equal(70);
      expect(character.happiness).to.equal(80);
      done();
    });
  });

});
