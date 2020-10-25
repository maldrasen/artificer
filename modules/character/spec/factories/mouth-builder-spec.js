describe('MouthBuilder', function() {

  it('uses the all the options if present', function(done) {
    let options = { gender:'male', species:'elf', mouth:{
      throatWidth: 50,
      tongueShape: 'forked',
      tongueLength: 500,
      width: 100,
    }};

    MinionBuilder.buildMinion(options).then(character => {
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
    MinionBuilder.buildMinion({ gender:'male', species:'naga' }).then(character => {
      character.getMouth().then(mouth => {
        expect(mouth.tongueShape).to.equal('forked');
        done();
      });
    });
  });

  it('sets the widths and tongue length according to species (elf)', function(done) {
    MinionBuilder.buildMinion({ gender:'female', species:'elf' }).then(character => {
      character.getMouth().then(mouth => {
        expect(mouth.throatWidth).to.be.within(33,37);
        expect(mouth.tongueLength).to.be.within(50,70);
        expect(mouth.width).to.be.within(43,53);
        done();
      });
    });
  });

  it('sets a slightly larger width for futa', function(done) {
    MinionBuilder.buildMinion({ gender:'futa', species:'elf' }).then(character => {
      character.getMouth().then(mouth => {
        expect(mouth.throatWidth).to.be.within(33,37);
        expect(mouth.tongueLength).to.be.within(50,70);
        expect(mouth.width).to.be.within(45,55);
        done();
      });
    });
  });

  it('sets a larger width for men', function(done) {
    MinionBuilder.buildMinion({ gender:'male', species:'elf' }).then(character => {
      character.getMouth().then(mouth => {
        expect(mouth.throatWidth).to.be.within(33,37);
        expect(mouth.tongueLength).to.be.within(50,70);
        expect(mouth.width).to.be.within(48,58);
        done();
      });
    });
  });

  it('sets the width and tongue length according to species (lupin)', function(done) {
    MinionBuilder.buildMinion({ gender:'female', species:'lupin' }).then(character => {
      character.getMouth().then(mouth => {
        expect(mouth.throatWidth).to.be.within(33,37);
        expect(mouth.tongueLength).to.be.within(100,140);
        expect(mouth.width).to.be.within(215,265);
        done();
      });
    });
  });

  it('sets the width and tongue length according to species (naga)', function(done) {
    MinionBuilder.buildMinion({ gender:'female', species:'naga' }).then(character => {
      character.getMouth().then(mouth => {
        expect(mouth.throatWidth).to.be.within(144,157);
        expect(mouth.tongueLength).to.be.within(260,340);
        expect(mouth.width).to.be.within(450,550);
        done();
      });
    });
  });

});
