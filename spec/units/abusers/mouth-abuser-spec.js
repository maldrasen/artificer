describe('Abuser: Mouth', function() {

  it('Blight, level 1', function(done) {
    CharacterBuilder.build({ gender:'male', species:'equian' }).then(character => {
      character.addInjury({ location:'mouth', type:'blight', level:1 }).then(injury => {
        done();
      });
    });
  });

});
