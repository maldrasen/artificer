describe('Adjustments - Anus', function() {

  it ('gives an anal prolapse', function(done) {
    CharacterBuilder.build({ species:'elf', gender:'female', triggers:['anal-prolapse'] }).then(character => {
      character.getAnus().then(anus => {
        expect(anus.convertedProlapseLength).to.be.within(1,3);
        done();
      });
    });
  });

});
