describe('MouthBuilder', function() {

  it('uses the all the options if present', function(done) {
    let options = { gender:'male', species:'elf', mouth:{
      throatWidth: 50,
      tongueShape: 'forked',
      tongueLength: 500,
      width: 100,
    }};

    CharacterBuilder.build(options).then(character => {
      character.getMouth().then(mouth => {
        expect(mouth.throatWidth).to.equal(50);
        expect(mouth.tongueShape).to.equal('forked');
        expect(mouth.tongueLength).to.equal(500);
        expect(mouth.width).to.equal(100);
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

  it('sets the widths and tongue length according to species (elf)', function(done) {
    CharacterBuilder.build({ gender:'female', species:'elf' }).then(character => {
      character.getMouth().then(mouth => {
        expect(mouth.throatWidth).to.be.within(33,37);
        expect(mouth.tongueLength).to.be.within(50,70);
        expect(mouth.width).to.be.within(43,53);
        done();
      });
    });
  });

  it('sets a slightly larger width for futa', function(done) {
    CharacterBuilder.build({ gender:'futa', species:'elf' }).then(character => {
      character.getMouth().then(mouth => {
        expect(mouth.throatWidth).to.be.within(33,37);
        expect(mouth.tongueLength).to.be.within(50,70);
        expect(mouth.width).to.be.within(45,55);
        done();
      });
    });
  });

  it('sets a larger width for men', function(done) {
    CharacterBuilder.build({ gender:'male', species:'elf' }).then(character => {
      character.getMouth().then(mouth => {
        expect(mouth.throatWidth).to.be.within(33,37);
        expect(mouth.tongueLength).to.be.within(50,70);
        expect(mouth.width).to.be.within(48,58);
        done();
      });
    });
  });

  it('sets the width and tongue length according to species (lupin)', function(done) {
    CharacterBuilder.build({ gender:'female', species:'lupin' }).then(character => {
      character.getMouth().then(mouth => {
        expect(mouth.throatWidth).to.be.within(33,37);
        expect(mouth.tongueLength).to.be.within(100,140);
        expect(mouth.width).to.be.within(215,265);
        done();
      });
    });
  });

  it('sets the width and tongue length according to species (naga)', function(done) {
    CharacterBuilder.build({ gender:'female', species:'naga' }).then(character => {
      character.getMouth().then(mouth => {
        expect(mouth.throatWidth).to.be.within(144,157);
        expect(mouth.tongueLength).to.be.within(260,330);
        expect(mouth.width).to.be.within(450,550);
        done();
      });
    });
  });

  it('sets the width and tongue length according to species (pixie)', function(done) {
    CharacterBuilder.build({ gender:'female', species:'pixie' }).then(character => {
      character.getMouth().then(mouth => {
        expect(mouth.throatWidth).to.be.within(6,7);
        expect(mouth.tongueLength).to.be.within(9,11);
        expect(mouth.width).to.be.within(9,11);
        done();
      });
    });
  });

});
