describe('AnusBuilder', function() {

  it('uses the all the options if present', function(done) {
    let options = { gender:'male', species:'elf', anus:{
      shape: 'horse',
      prolapseLength: 400,
      conditon: 'gaping',
      sizeClass: 'monster',
      sizeScale: 100,
    }};

    CharacterBuilder.build(options, character => {
      character.getAnus(anus => {
        expect(anus.shape).to.equal('horse');
        expect(anus.prolapseLength).to.equal(400);
        expect(anus.conditon).to.equal('gaping');
        expect(anus.sizeClass).to.equal('monster');
        expect(anus.sizeScale).to.equal(100);
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
      testAnalWidth('elf',16,38,done);
    });

    it('sets the width according to species (equian)', function(done) {
      testAnalWidth('equian',26,58,done);
    });

    it('sets the width according to species (dragon)', function(done) {
      testAnalWidth('dragon',29,67,done);
    });

    it('sets the width according to species (ogre)', function(done) {
      testAnalWidth('ogre',29,67,done);
    });

    it('sets the width according to species (goblin)', function(done) {
      testAnalWidth('goblin',13,30,done);
    });

    it('sets the width according to species (pixie)', function(done) {
      testAnalWidth('pixie',8,18,done);
    });
  });
});
