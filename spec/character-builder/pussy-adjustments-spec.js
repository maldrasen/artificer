describe('Adjustments - Pussy', function() {

  it ('gives a big pussy', function(done) {
    CharacterBuilder.build({ species:'elf', gender:'female', triggers:['big-pussy'] }).then(character => {
      character.getPussy().then(pussy => {
        expect(pussy.convertedWidth).to.be.within(2,2.5);
        done();
      });
    });
  });

  it ('gives a monster pussy', function(done) {
    CharacterBuilder.build({ species:'elf', gender:'female', triggers:['monster-pussy'] }).then(character => {
      character.getPussy().then(pussy => {
        expect(pussy.convertedWidth).to.be.within(2.5,3.5);
        done();
      });
    });
  });

  it ('gives a big clit', function(done) {
    CharacterBuilder.build({ species:'elf', gender:'female', triggers:['big-clit'] }).then(character => {
      character.getPussy().then(pussy => {
        expect(pussy.clitLength).to.be.above(19);
        expect(pussy.clitWidth).to.be.above(9);
        done();
      });
    });
  });

  it ('gives a monster clit', function(done) {
    CharacterBuilder.build({ species:'elf', gender:'female', triggers:['monster-clit'] }).then(character => {
      character.getPussy().then(pussy => {
        expect(pussy.clitLength).to.be.above(39);
        expect(pussy.clitWidth).to.be.above(19);
        done();
      });
    });
  });

  it ('gives big labia', function(done) {
    CharacterBuilder.build({ species:'elf', gender:'female', triggers:['big-labia'] }).then(character => {
      character.getPussy().then(pussy => {
        expect(pussy.innerLabiaLength).to.be.above(39);
        expect(pussy.outerLabiaSize).to.equal(5);
        done();
      });
    });
  });

  it ('gives monster labia', function(done) {
    CharacterBuilder.build({ species:'elf', gender:'female', triggers:['monster-labia'] }).then(character => {
      character.getPussy().then(pussy => {
        expect(pussy.innerLabiaLength).to.be.above(79);
        expect(pussy.outerLabiaSize).to.equal(5);
        done();
      });
    });
  });

  it ('gives a dog pussy', function(done) {
    CharacterBuilder.build({ species:'elf', gender:'female', triggers:['dog-pussy'] }).then(character => {
      character.getPussy().then(pussy => {
        expect(pussy.shape).to.equal('dog');
        done();
      });
    });
  });

  it ('gives a horse pussy', function(done) {
    CharacterBuilder.build({ species:'elf', gender:'female', triggers:['horse-pussy'] }).then(character => {
      character.getPussy().then(pussy => {
        expect(pussy.shape).to.equal('horse');
        done();
      });
    });
  });

});
