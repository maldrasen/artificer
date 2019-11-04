describe('CockBuilder', function() {

  it("does nothing to character's without cocks", function(done) {
    CharacterBuilder.build({ species:'vulpine', gender:'female' }).then(character => {
      character.getCock().then(cock => {
        expect(cock).to.not.exist;
        done();
      });
    });
  });

  it('uses the all the options if present', function(done) {
    let options = { firstName:'X', gender:'male', species:'dragon', cock:{
      shape: 'horse',
      sheath: 'fur',
      count: 2,
      sizeClass: 'monster',
      sizeScale: 99.5,
      widthRatio: 1.5,
      knotWidthRatio: 1.2,
      knobHeight: 20,
      spineHeight: 30,
      ballsSizeFactor: 2,
    }};

    CharacterBuilder.build(options).then(character => {
      character.getCock().then(cock => {
        expect(cock.shape).to.equal('horse');
        expect(cock.sheath).to.equal('fur');
        expect(cock.count).to.equal(2);
        expect(cock.sizeClass).to.equal('monster');
        expect(cock.sizeScale).to.equal(99.5);
        expect(cock.widthRatio).to.equal(1.5);
        expect(cock.knotWidthRatio).to.equal(1.2);
        expect(cock.knobHeight).to.equal(20);
        expect(cock.spineHeight).to.equal(30);
        expect(cock.length).to.equal(801);
        expect(cock.width).to.equal(186);
        expect(cock.scrotumWidth).to.equal(930);
        done();
      });
    });
  });

  it("builds a cock of average length for that character's species (elf)", function(done) {
    CharacterBuilder.build({ firstName:'X', gender:'male', species:'elf' }).then(character => {
      character.getCock().then(cock => {
        expect(cock.internalBalls).to.equal(false);
        expect(cock.convertedLength).to.be.within(5,12);
        expect(cock.convertedWidth).to.be.within(0.75,1.75);
        expect(cock.convertedScrotumWidth).to.be.within(2.25,5.5)
        done();
      });
    });
  });

  it("builds a cock of average length for that character's species (centaur)", function(done) {
    CharacterBuilder.build({ firstName:'X', gender:'futa', species:'centaur' }).then(character => {
      character.getCock().then(cock => {
        expect(cock.convertedLength).to.be.within(10,32);
        expect(cock.convertedWidth).to.be.within(1.5,4.5);
        expect(cock.convertedScrotumWidth).to.be.within(3.75,12.5)
        done();
      });
    });
  });

  it("builds a cock of average length for that character's species (rat)", function(done) {
    CharacterBuilder.build({ firstName:'X', gender:'male', species:'rat' }).then(character => {
      character.getCock().then(cock => {
        expect(cock.convertedLength).to.be.within(2,7);
        expect(cock.convertedWidth).to.be.within(0.5,1);
        expect(cock.convertedScrotumWidth).to.be.within(1.2,2.5)
        done();
      });
    });
  });

  it("sets a random knot width ratio if it's missing on a dog cock", function(done) {
    CharacterBuilder.build({ firstName:'X', gender:'futa', species:'lupin' }).then(character => {
      character.getCock().then(cock => {
        expect(cock.convertedLength).to.be.within(5,16);
        expect(cock.convertedWidth).to.be.within(1,3.5);
        expect(cock.convertedScrotumWidth).to.be.within(3.25,10.5)
        expect(cock.convertedKnotWidth).to.be.within(1.5,7);
        expect(cock.knotWidthRatio).to.be.within(1.2,2.0);
        done();
      });
    });
  });

  it("sets a random knot width ratio if it's missing on a dog cock", function(done) {
    CharacterBuilder.build({ firstName:'X', gender:'male', species:'caprien' }).then(character => {
      character.getCock().then(cock => {
        expect(cock.convertedLength).to.be.within(5,14);
        expect(cock.convertedWidth).to.be.within(0.75,1.75);
        expect(cock.convertedScrotumWidth).to.be.within(2.75,10)
        expect(cock.ballsSizeFactor).to.be.within(1.2,1.8);
        done();
      });
    });
  });

  it('gives naga internal balls and two cocks', function(done) {
    CharacterBuilder.build({ firstName:'X', gender:'futa', species:'naga' }).then(character => {
      character.getCock().then(cock => {
        expect(cock.count).to.equal(2);
        expect(cock.internalBalls).to.equal(true);
        expect(cock.convertedLength).to.be.within(5.25,17);
        expect(cock.convertedWidth).to.be.within(0.75,2);
        done();
      });
    });
  });

});
