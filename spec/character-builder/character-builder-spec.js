describe('CharacterBuilder', function() {

  it.only('builds a standard minion using the options', function(done) {

    let options = {
      minion: { species:'goblin', gender:'futa' },
      adjustments: ['big-cock'],
      randomAspectCount: 4,
    };

    CharacterBuilder.buildStandardMinion(options).then(minion => {
      minion.getCharacterAspects().then(aspects => {
        minion.getCock().then(cock => {
          console.log(minion.name)
          done();
        });
      });
    });
  })

  it('builds a completely random character given a species', function(done) {
    CharacterBuilder.build({ species:'scaven' }).then(character => {
      expect(character.species).to.exist;
      expect(character.gender).to.exist;
      expect(character.physical).to.exist;
      expect(character.personal).to.exist;
      expect(character.mental).to.exist;
      expect(character.magical).to.exist;
      done();
    });
  });

  it('Uses the passed options to create a character.', function(done) {
    let options = {
      firstName: 'Jada',
      lastName: 'Fire',
      gender: 'futa',
      species: 'elf-lord',
      physical: 10,
      personal: 20,
      mental: 30,
      magical: 40,
    };

    CharacterBuilder.build(options).then(character => {
      expect(character.firstName).to.equal('Jada');
      expect(character.lastName).to.equal('Fire');
      expect(character.gender.code).to.equal('futa');
      expect(character.species.code).to.equal('elf-lord');
      expect(character.physical).to.equal(10);
      expect(character.personal).to.equal(20);
      expect(character.mental).to.equal(30);
      expect(character.magical).to.equal(40);
      done();
    });
  });

});
