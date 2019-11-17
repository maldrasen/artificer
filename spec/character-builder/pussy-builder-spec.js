describe('PussyBuilder', function() {

  it("does nothing to character's without a pussy", function(done) {
    CharacterBuilder.build({ species:'minotaur', gender:'male' }).then(character => {
      character.getPussy().then(pussy => {
        expect(pussy).to.not.exist;
        done();
      });
    });
  });

  it('uses the all the options if present', function(done) {
    let options = { firstName:'X', gender:'female', species:'elf', pussy:{
      shape: 'horse',
      sizeClass: 'monster',
      sizeScale: 100,
      conditon: 'gaping',
      outerLabiaSize: 5,
      innerLabiaLength: 500,
      clitLength: 200,
      clitWidth: 100,
      prolapseLength: 400,
    }};

    CharacterBuilder.build(options).then(character => {
      character.getPussy().then(pussy => {
        expect(pussy.shape).to.equal('horse');
        expect(pussy.sizeClass).to.equal('monster');
        expect(pussy.sizeScale).to.equal(100);
        expect(pussy.conditon).to.equal('gaping');
        expect(pussy.outerLabiaSize).to.equal(5);
        expect(pussy.innerLabiaLength).to.equal(500);
        expect(pussy.clitLength).to.equal(200);
        expect(pussy.clitWidth).to.equal(100);
        expect(pussy.prolapseLength).to.equal(400);
        done();
      });
    });
  });

  it('gets the shape from the species', function(done) {
    CharacterBuilder.build({ firstName:'X', gender:'female', species:'equian'}).then(character => {
      character.getPussy().then(pussy => {
        expect(pussy.shape).to.equal('horse');
        done();
      });
    });
  });

  describe('Pussy Widths', function() {
    function testPussyWidth(species, low, high, done) {
      CharacterBuilder.build({ firstName:'X', gender:'female', species:species }).then(character => {
        character.getPussy().then(pussy => {
          expect(pussy.width).to.be.within(low,high);
          done();
        });
      });
    }

    it('sets the width according to species (elf)', function(done) {
      testPussyWidth('elf',20,47,done);
    });

    it('sets the width according to species (equian)', function(done) {
      testPussyWidth('equian',32,74,done);
    });

    it('sets the width according to species (dragon)', function(done) {
      testPussyWidth('dragon',37,84,done);
    });

    it('sets the width according to species (ogre)', function(done) {
      testPussyWidth('ogre',37,84,done);
    });

    it('sets the width according to species (goblin)', function(done) {
      testPussyWidth('goblin',17,41,done);
    });

    it('sets the width according to species (pixie)', function(done) {
      testPussyWidth('pixie',6,12,done);
    });
  });

  it('sets random labia and clit sizes', function(done) {
    CharacterBuilder.build({ firstName:'X', gender:'female', species:'elf' }).then(character => {
      character.getPussy().then(pussy => {
        expect(pussy.outerLabiaSize).to.be.within(1,5);
        expect(pussy.innerLabiaLength).to.be.within(10,90);
        expect(pussy.clitLength).to.be.within(1,50);
        expect(pussy.clitWidth).to.be.within(5,15);
        done();
      });
    });
  });

});
