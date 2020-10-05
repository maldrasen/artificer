describe('HasSexSkills', function() {

  it('can completely not fit', function(done) {
    SpecHelper.buildJada({ mouth:{ width:20, throatWidth:20 }}).then(jada => {
      SpecHelper.adjustCock(jada,{ sizeClass:'average', sizeScale:50 }).then(cock => {
        jada.canSuckCock(cock).then(skills => {
          expect(skills.mouthFit).to.equal('impossible');
          expect(skills.throatFit).to.equal('impossible');
          expect(skills.depth).to.equal(0);
          done();
        });
      });
    });
  });

  it('can fit the mouth only', function(done) {
    SpecHelper.buildJada({ mouth:{ width:35, throatWidth:20 }}).then(jada => {
      SpecHelper.adjustCock(jada,{ sizeClass:'average', sizeScale:50 }).then(cock => {
        jada.canSuckCock(cock).then(skills => {
          expect(skills.mouthFit).to.equal('painful');
          expect(skills.throatFit).to.equal('impossible');
          expect(skills.depth).to.equal(35);
          done();
        });
      });
    });
  });

  it('can go further with some oral skill', function(done) {
    SpecHelper.buildJada({ mouth:{ width:35, throatWidth:30 }}).then(jada => {
      jada.addAspect('oral',{ level:2 }).then(()=>{
        SpecHelper.adjustCock(jada,{ sizeClass:'average', sizeScale:50 }).then(cock => {
          jada.canSuckCock(cock).then(skills => {
            expect(skills.mouthFit).to.equal('painful');
            expect(skills.throatFit).to.equal('impossible');
            expect(skills.depth).to.equal(120);
            done();
          });
        });
      });
    });
  });

  it('can deepthroat', function(done) {
    SpecHelper.buildJada({ mouth:{ width:40, throatWidth:40 }}).then(jada => {
      SpecHelper.adjustCock(jada,{ sizeClass:'average', sizeScale:50 }).then(cock => {
        jada.canSuckCock(cock).then(skills => {
          expect(skills.mouthFit).to.equal('comfortable');
          expect(skills.throatFit).to.equal('comfortable');
          expect(skills.depth).to.equal(cock.length);
          done();
        });
      });
    });
  });

  it('may not fit either ball', function(done) {
    SpecHelper.buildJada({ mouth:{ width:30, throatWidth:25 }}).then(jada => {
      SpecHelper.adjustCock(jada,{ sizeClass:'average', sizeScale:50 }).then(cock => {
        jada.canSuckCock(cock).then(skills => {
          expect(skills.balls).to.equal('none');
          done();
        });
      });
    });
  });

  it('could fit one ball', function(done) {
    SpecHelper.buildJada({ mouth:{ width:35, throatWidth:25 }}).then(jada => {
      SpecHelper.adjustCock(jada,{ sizeClass:'average', sizeScale:50 }).then(cock => {
        jada.canSuckCock(cock).then(skills => {
          expect(skills.balls).to.equal('one');
          done();
        });
      });
    });
  });

  it('could fit entire sack', function(done) {
    SpecHelper.buildJada({ species:'equian', mouth:{ width:85, throatWidth:25 }}).then(jada => {
      SpecHelper.adjustCock(jada,{ sizeClass:'average', sizeScale:50 }).then(cock => {
        jada.canSuckCock(cock).then(skills => {
          expect(skills.balls).to.equal('entire');
          done();
        });
      });
    });
  });

  it('may not fit the knot', function(done) {
    SpecHelper.buildJada({ species:'lupin', mouth:{ width:40, throatWidth:25 }}).then(jada => {
      SpecHelper.adjustCock(jada,{ sizeClass:'average', sizeScale:50, knotWidthRatio:1.4 }).then(cock => {
        jada.canSuckCock(cock).then(skills => {
          expect(skills.knot).to.equal('impossible');
          done();
        });
      });
    });
  });

  it('may fit the knot', function(done) {
    SpecHelper.buildJada({ species:'lupin', mouth:{ width:80, throatWidth:25 }}).then(jada => {
      SpecHelper.adjustCock(jada,{ sizeClass:'average', sizeScale:50, knotWidthRatio:1.4 }).then(cock => {
        jada.canSuckCock(cock).then(skills => {
          expect(skills.knot).to.equal('mouth');
          done();
        });
      });
    });
  });

});
