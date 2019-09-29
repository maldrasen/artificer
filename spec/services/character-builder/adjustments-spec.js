describe("Adjustments", function() {

  // This is a difficult class to test in isolation. It's solidly dependent on
  // the output from the CharacterBuilder, and part of its promise chain.
  // I'll try to specify everything in the options, and hopefully there won't
  // be too many suprises. Giving a character a name will at least prevent
  // random shit from getting added to the character.

  function buildJada(options) {
    return new Promise(resolve => {
      CharacterBuilder.build(
        extend({ firstName:'Jada', lastName:'Fire', species:'elf' },options)
      ).then(resolve);
    });
  }

  function flattenAspects(aspects) {
    return aspects.map(aspect => { return `${aspect.code}(${aspect.level})` });
  }

  it('adds specified aspects at the indicated level, or at level 1', function(done) {
    buildJada({ aspects:['revolting','golden.2']}).then(character => {
      character.getCharacterAspects().then(aspects => {
        let results = flattenAspects(aspects);
        expect(results).to.contain('golden(2)')
        expect(results).to.contain('revolting(1)')
        done();
      });
    });
  });

  it('only adds one aspect', function(done) {
    buildJada({ aspects:['milky.2','milky.3','milky.1']}).then(character => {
      character.getCharacterAspects().then(aspects => {
        expect(flattenAspects(aspects)).to.eql(['milky(3)'])
        done();
      });
    });
  });

  it('checks aspect requirements', function(done) {
    buildJada({ gender:'female', aspects:['pussy-slut','cock-slut']}).then(character => {
      character.getCharacterAspects().then(aspects => {
        expect(flattenAspects(aspects)).to.eql(['pussy-slut(1)'])
        done();
      });
    });
  })

});
