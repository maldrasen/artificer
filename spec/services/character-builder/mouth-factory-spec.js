describe('MouthBuilder', function() {

  it('uses the all the options if present', function(done) {
    let options = { gender:'male', species:'elf', mouth:{
      width: 200,
      tongueShape: 'forked',
      tongueLength: 500,
      elasticity: 7,
      throatWidth: 50,
      throatElasticity: 5,
    }};

    CharacterBuilder.build(options, character => {
      character.getMouth(mouth => {
        expect(mouth.tongueShape).to.equal('forked');
        expect(mouth.width).to.equal(200);
        expect(mouth.tongueLength).to.equal(500);
        expect(mouth.elasticity).to.equal(7);
        expect(mouth.throatWidth).to.equal(50);
        expect(mouth.throatElasticity).to.equal(5);
        done();
      });
    });
  });

  it('gets the shapes from the species', function(done) {
    CharacterBuilder.build({ gender:'male', species:'naga' }, character => {
      character.getMouth(mouth => {
        expect(mouth.tongueShape).to.equal('forked');
        done();
      });
    });
  });

  it('sets the elasticity from the species (elf)', function(done) {
    CharacterBuilder.build({ gender:'female', species:'elf' }, character => {
      character.getMouth(mouth => {
        expect(mouth.elasticity).to.equal(1);
        done();
      });
    });
  });

  it('sets the elasticity from the species (pixie)', function(done) {
    CharacterBuilder.build({ gender:'female', species:'pixie' }, character => {
      character.getMouth(mouth => {
        expect(mouth.elasticity).to.equal(6);
        done();
      });
    });
  });

  it('sets the width and tongue length according to species (elf)', function(done) {
    CharacterBuilder.build({ gender:'female', species:'elf' }, character => {
      character.getMouth(mouth => {
        expect(mouth.width).to.be.within(50,70);
        expect(mouth.tongueLength).to.be.within(50,70);
        expect(mouth.throatWidth).to.be.within(20,40);
        done();
      });
    });
  });

  it('sets the width and tongue length according to species (lupin)', function(done) {
    CharacterBuilder.build({ gender:'female', species:'lupin' }, character => {
      character.getMouth(mouth => {
        expect(mouth.width).to.be.within(300,390);
        expect(mouth.tongueLength).to.be.within(100,140);
        expect(mouth.throatWidth).to.be.within(20,40);
        done();
      });
    });
  });

  it('sets the width and tongue length according to species (naga)', function(done) {
    CharacterBuilder.build({ gender:'female', species:'naga' }, character => {
      character.getMouth(mouth => {
        expect(mouth.width).to.be.within(550,650);
        expect(mouth.tongueLength).to.be.within(270,330);
        expect(mouth.throatWidth).to.be.within(390,410);
        done();
      });
    });
  });

  it('sets the width and tongue length according to species (pixie)', function(done) {
    CharacterBuilder.build({ gender:'female', species:'pixie' }, character => {
      character.getMouth(mouth => {
        expect(mouth.width).to.be.within(9,11);
        expect(mouth.tongueLength).to.be.within(9,11);
        expect(mouth.throatWidth).to.equal(5);
        done();
      });
    });
  });

});
