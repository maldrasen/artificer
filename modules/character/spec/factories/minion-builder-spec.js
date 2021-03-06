describe('MinionBuilder', function() {

  // This test just exercises the buildStandardMinion() option by calling it
  // ten times. There's a lot that can go wrong in character creation, so this
  // tests the error handling more than anything.
  it('builds a standard minion using the options', function(done) {

    let options = {
      minion: { species:'goblin', gender:'futa' },
      adjustments: ['big-cock'],
      randomAspectCount: 4,
    };

    SpecHelper.tenTimes(done, resolve => {
      MinionBuilder.buildStandardMinion(options).then(minion => {
        minion.getCharacterAspects().then(aspects => {
          minion.getCock().then(cock => {
            resolve();
          });
        });
      });
    });
  });

  it('builds a completely random character given a species', function(done) {
    MinionBuilder.buildMinion({ species:'scaven' }).then(character => {
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
      species: 'lupin',
      physical: 10,
      personal: 20,
      mental: 30,
      magical: 40,
    };

    MinionBuilder.buildMinion(options).then(character => {
      expect(character.firstName).to.equal('Jada');
      expect(character.lastName).to.equal('Fire');
      expect(character.gender.code).to.equal('futa');
      expect(character.species.code).to.equal('lupin');
      expect(character.physical).to.equal(10);
      expect(character.personal).to.equal(20);
      expect(character.mental).to.equal(30);
      expect(character.magical).to.equal(40);
      done();
    });
  });

});
