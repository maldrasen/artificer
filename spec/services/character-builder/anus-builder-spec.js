describe('AnusBuilder', function() {

  it('uses the all the options if present', function(done) {
    let options = { gender:'male', species:'elf', anus:{
      shape: 'horse',
      width: 50,
      prolapseLength: 400,
      elasticity: 7,
    }};

    CharacterBuilder.build(options, character => {
      character.getAnus(anus => {
        expect(anus.shape).to.equal('horse');
        expect(anus.width).to.equal(50);
        expect(anus.prolapseLength).to.equal(400);
        expect(anus.elasticity).to.equal(7);
        done();
      });
    });
  });

  it('gets the shape from the species', function(done) {
    CharacterBuilder.build({ gender:'male', species:'equian' }, character => {
      character.getAnus(anus => {
        expect(anus.shape).to.equal('horse');
        done();
      });
    });
  });

  it('sets the elasticity from the species (elf)', function(done) {
    CharacterBuilder.build({ gender:'female', species:'elf' }, character => {
      character.getAnus(anus => {
        expect(anus.elasticity).to.equal(3);
        done();
      });
    });
  });

  it('sets the elasticity from the species (pixie)', function(done) {
    CharacterBuilder.build({ gender:'female', species:'pixie' }, character => {
      character.getAnus(anus => {
        expect(anus.elasticity).to.equal(10);
        done();
      });
    });
  });

  describe('Anus Widths', function() {
    function testAnalWidth(species, low, high, done) {
      CharacterBuilder.build({ gender:'male', species:species }, character => {
        character.getAnus(anus => {
          expect(anus.width).to.be.within(low,high);
          done();
        });
      });
    }

    it('sets the width according to species (elf)', function(done) {
      testAnalWidth('elf',25,50,done);
    });

    it('sets the width according to species (equian)', function(done) {
      testAnalWidth('equian',60,85,done);
    });

    it('sets the width according to species (dragon)', function(done) {
      testAnalWidth('dragon',75,100,done);
    });

    it('sets the width according to species (ogre)', function(done) {
      testAnalWidth('ogre',60,80,done);
    });

    it('sets the width according to species (goblin)', function(done) {
      testAnalWidth('goblin',20,40,done);
    });

    it('sets the width according to species (pixie)', function(done) {
      testAnalWidth('pixie',10,20,done);
    });
  });

});
