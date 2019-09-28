describe('MouthBuilder', function() {

  it('uses the all the options if present', function(done) {
    let options = { gender:'male', species:'elf', mouth:{
      tongueShape: 'forked',
      tongueLength: 500,
    }};

    CharacterBuilder.build(options).then(character => {
      character.getMouth().then(mouth => {
        expect(mouth.tongueShape).to.equal('forked');
        expect(mouth.tongueLength).to.equal(500);
        done();
      });
    });
  });

  it('gets the shapes from the species', function(done) {
    CharacterBuilder.build({ gender:'male', species:'naga' }).then(character => {
      character.getMouth().then(mouth => {
        expect(mouth.tongueShape).to.equal('forked');
        done();
      });
    });
  });

  it('sets the width and tongue length according to species (elf)', function(done) {
    CharacterBuilder.build({ gender:'female', species:'elf' }).then(character => {
      character.getMouth().then(mouth => {
        expect(mouth.tongueLength).to.be.within(50,70);
        done();
      });
    });
  });

  it('sets the width and tongue length according to species (lupin)', function(done) {
    CharacterBuilder.build({ gender:'female', species:'lupin' }).then(character => {
      character.getMouth().then(mouth => {
        expect(mouth.tongueLength).to.be.within(100,140);
        done();
      });
    });
  });

  it('sets the width and tongue length according to species (naga)', function(done) {
    CharacterBuilder.build({ gender:'female', species:'naga' }).then(character => {
      character.getMouth().then(mouth => {
        expect(mouth.tongueLength).to.be.within(260,330);
        done();
      });
    });
  });

  it('sets the width and tongue length according to species (pixie)', function(done) {
    CharacterBuilder.build({ gender:'female', species:'pixie' }).then(character => {
      character.getMouth().then(mouth => {
        expect(mouth.tongueLength).to.be.within(9,11);
        done();
      });
    });
  });

});
