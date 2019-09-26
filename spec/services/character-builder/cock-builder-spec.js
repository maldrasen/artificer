describe.only('CockBuilder', function() {

  it("does nothing to character's without cocks", function(done) {
    CharacterBuilder.build({ species:'vulpine', gender:'female' }, character => {
      character.getCock(cock => {
        expect(cock).to.not.exist;
        done();
      });
    });
  });

  it('uses the all the options if present', function(done) {
    let options = { gender:'male', species:'dragon', cock:{
      shape: 'horse',
      sheath: 'fur',
      count: 2,
      sizeClass: 'monster',
      sizeScale: 99.5,
      widthRatio: 1.5,
      knotWidthRatio: 1.2,
      knobHeightRatio: 1.4,
      spineHeightRatio: 1.1,
      glow: 'purple',
      urethraWidth: 10,
      urethraElasticity: 5,
    }};

    CharacterBuilder.build(options, character => {
      character.getCock(cock => {
        expect(cock.shape).to.equal('horse');
        expect(cock.sheath).to.equal('fur');
        expect(cock.count).to.equal(2);
        expect(cock.sizeClass).to.equal('monster');
        expect(cock.sizeScale).to.equal(99.5);
        expect(cock.widthRatio).to.equal(1.5);
        expect(cock.knotWidthRatio).to.equal(1.2);
        expect(cock.knobHeightRatio).to.equal(1.4);
        expect(cock.spineHeightRatio).to.equal(1.1);
        expect(cock.glow).to.equal('purple');
        expect(cock.urethraWidth).to.equal(10);
        expect(cock.urethraElasticity).to.equal(5);

        expect(cock.length).to.equal(812);
        expect(cock.width).to.equal(189);

        done();
      });
    });
  });

  it("builds a cock of average length for that character's species (elf)", function(done) {
    CharacterBuilder.build({ gender:'male', species:'elf' }, character => {
      character.getCock(cock => {
        expect(cock.convertedLength).to.be.within(5,12);
        expect(cock.convertedWidth).to.be.within(0.75,1.75);
        done();
      });
    });
  });

  it("builds a cock of average length for that character's species (centaur)", function(done) {
    CharacterBuilder.build({ gender:'male', species:'centaur' }, character => {
      character.getCock(cock => {
        expect(cock.convertedLength).to.be.within(10,32);
        expect(cock.convertedWidth).to.be.within(1.5,4.5);
        done();
      });
    });
  });

  it("builds a cock of average length for that character's species (rat)", function(done) {
    CharacterBuilder.build({ gender:'male', species:'rat' }, character => {
      character.getCock(cock => {
        expect(cock.convertedLength).to.be.within(2,7);
        expect(cock.convertedWidth).to.be.within(0.5,1);
        done();
      });
    });
  });

  it("sets a random knot width ratio if it's missing on a dog cock", function(done) {
    CharacterBuilder.build({ gender:'male', species:'lupin', sizeClass:'small', sizeScale:1 }, character => {
      character.getCock(cock => {
        expect(cock.convertedLength).to.be.within(5,16);
        expect(cock.convertedWidth).to.be.within(1,3.5);
        expect(cock.convertedKnotWidth).to.be.within(1.5,7);
        expect(cock.knotWidthRatio).to.be.within(1.3,2.0);
        done();
      });
    });
  });
  //
  // it('builds balls using all options', function(done) {
  //   let options = { species:'wood-elf', gender:'futa', balls:{
  //     width: 50,
  //     internal: true,
  //     productionMultiplier: 10
  //   }};
  //
  //   CharacterBuilder.build(options, character => {
  //     character.getBalls(balls => {
  //       expect(balls.width).to.equal(50);
  //       expect(balls.internal).to.equal(true);
  //       expect(balls.productionMultiplier).to.equal(10);
  //       done();
  //     });
  //   });
  // });
  //
  // it('generates a width based on average cock width (smaller)', function(done) {
  //   CharacterBuilder.build({ species:'elf', gender:'futa', cock:{ length:200 }}, character => {
  //     character.getBalls(balls => {
  //       expect(balls.width).to.equal(31);
  //       done();
  //     });
  //   });
  // });
  //
  // it('generates a width based on average cock width (bigger)', function(done) {
  //   CharacterBuilder.build({ species:'elf', gender:'futa', cock:{ length:400 }}, character => {
  //     character.getBalls(balls => {
  //       expect(balls.width).to.equal(62);
  //       done();
  //     });
  //   });
  // });
  //
  // it('generates a random production multiplier (elf)', function(done) {
  //   CharacterBuilder.build({ species:'elf', gender:'futa'}, character => {
  //     character.getBalls(balls => {
  //       expect(balls.productionMultiplier).to.be.within(1,2);
  //       done();
  //     });
  //   });
  // });
  //
  // it('generates a random production multiplier (minotaur)', function(done) {
  //   CharacterBuilder.build({ species:'minotaur', gender:'futa'}, character => {
  //     character.getBalls(balls => {
  //       expect(balls.productionMultiplier).to.be.within(2,4);
  //       done();
  //     });
  //   });
  // });
  //
  // it('generates a random production multiplier (rat)', function(done) {
  //   CharacterBuilder.build({ species:'rat', gender:'futa'}, character => {
  //     character.getBalls(balls => {
  //       expect(balls.productionMultiplier).to.be.within(4,5);
  //       done();
  //     });
  //   });
  // });
  //
  // it('gives naga internal balls', function(done) {
  //   CharacterBuilder.build({ species:'naga', gender:'futa'}, character => {
  //     character.getBalls(balls => {
  //       expect(balls.internal).to.equal(true);
  //       done();
  //     });
  //   });
  // });

});
