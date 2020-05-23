describe.only('Role: Hunter.Results', function() {

  it("gets items for no equipment or skill", function(done) {
    SpecHelper.buildJada({ species:'scaven' }).then(jada => {
      Role.Hunter.Results.hunt({ character:jada, skill:0, injured:false }).then(hunted => {
        done();
      });
    });
  });

  describe('calculateCount()', function() {
    it('gets count for uninjured characters', function(done) {
      SpecHelper.buildJada({ species:'scaven' }).then(jada => {
        Role.Hunter.Results.calculateCount({ character:jada, skill:0, injured:false }).then(count => {
          expect(count).to.be.within(0,4);
          done();
        });
      });
    });

    it ('gets count for already injured characters', function(done) {
      SpecHelper.buildJada({ species:'scaven' }).then(jada => {
        Abuser.addPussyInjury(jada, { type:'burn', level:3 }).then(_ => {
          Role.Hunter.Results.calculateCount({ character:jada, skill:1, injured:false }).then(count => {
            expect(count).to.be.within(0,4);
            done();
          });
        });
      });
    });

    it ('gets count for characters injured this day', function(done) {
      SpecHelper.buildJada({ species:'scaven' }).then(jada => {
        Role.Hunter.Results.calculateCount({ character:jada, skill:3, injured:true }).then(count => {
          expect(count).to.be.within(2,5);
          done();
        });
      });
    });
  });

  // describe('huntingResults()', function() {
  //   it("Gets the table for the tier and skill level", function() {
  //     expect(Role.Hunter.huntingResults(0,0)[1]).to.eql({ min:0, max:2, type:'small-game-pelt' });
  //     expect(Role.Hunter.huntingResults(0,2)[0]).to.eql({ min:5, max:10, type:'small-game' });
  //   });
  // });
  //
  // // Not much I can do to test this, it's completely random what flavors will
  // // show up after all. Just make sure it doesn't blow up mostly I guess.
  // describe('resolveResults()', function() {
  //   it('selects item flavors based on results', function() {
  //     let flavors = Role.Hunter.resolveResults([
  //       { min:4, max:4, type:'small-game' }
  //     ]);
  //     expect(Object.keys(flavors).length).to.be.within(1,4);
  //   });
  // });

});
