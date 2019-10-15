describe('Abuser: Nipples', function() {

  it('Blight, level 1', function(done) {
    CharacterBuilder.build({ gender:'female', species:'equian' }).then(character => {
      character.addInjury({ location:'nipples', type:'blight', level:1 }).then(injury => {
        done();
      });
    });
  });

});
