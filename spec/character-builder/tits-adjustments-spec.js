describe('Adjustments - Tits', function() {

  it ('gives small tits', function(done) {
    CharacterBuilder.build({ firstName:'X', species:'elf', gender:'female', triggers:['small-tits'] }).then(character => {
      character.getTits().then(tits => {
        expect(tits.sizeClass).to.equal('tiny');
        expect(tits.size).to.equal(0);
        expect(tits.shape).to.equal('flat');
        done();
      });
    });
  });

  it ('gives big tits', function(done) {
    CharacterBuilder.build({ firstName:'X', species:'elf', gender:'female', triggers:['big-tits'] }).then(character => {
      character.getTits().then(tits => {
        expect(tits.sizeClass).to.equal('huge');
        expect(tits.size).to.equal(800);
        expect(tits.shape).to.be.oneOf(['round','dangling','bell']);
        done();
      });
    });
  });

  it ('gives monster tits', function(done) {
    CharacterBuilder.build({ firstName:'X', species:'elf', gender:'female', triggers:['monster-tits'] }).then(character => {
      character.getTits().then(tits => {
        expect(tits.sizeClass).to.equal('monster');
        expect(tits.size).to.equal(1500);
        expect(tits.shape).to.be.oneOf(['round','dangling','bell']);
        done();
      });
    });
  });

});
