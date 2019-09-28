describe('Adjustments - Nipples', function() {

  it ('gives big nipples', function(done) {
    CharacterBuilder.build({ species:'elf', gender:'female', triggers:['big-nipples'] }).then(character => {
      character.getNipples().then(nipples => {
        expect(nipples.width).to.be.above(49)
        done();
      });
    });
  });

  it ('gives long nipples', function(done) {
    CharacterBuilder.build({ species:'elf', gender:'female', triggers:['long-nipples'] }).then(character => {
      character.getNipples().then(nipples => {
        expect(nipples.length).to.be.above(19)
        done();
      });
    });
  });

  it ('gives dick nipples', function(done) {
    CharacterBuilder.build({ species:'elf', gender:'female', triggers:['dick-nipples'] }).then(character => {
      character.getNipples().then(nipples => {
        expect(nipples.shape).to.equal('cock')
        done();
      });
    });
  });

  it ('gives nipple cunts', function(done) {
    CharacterBuilder.build({ species:'elf', gender:'female', triggers:['nipple-cunts'] }).then(character => {
      character.getNipples().then(nipples => {
        expect(nipples.shape).to.equal('pussy')
        done();
      });
    });
  });

});
