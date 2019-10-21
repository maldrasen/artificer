describe('Abuser: Tits', function() {

  it('Blight, level 1', function(done) {
    CharacterBuilder.build({ gender:'female', species:'equian' }).then(character => {
      character.addInjury({ location:'tits', type:'burn', level:1 }).then(injury => {
        done();
      });
    });
  });

});
