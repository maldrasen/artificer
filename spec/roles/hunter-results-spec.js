describe.only('Role: Hunter.Results', function() {

  it("gets items for no equipment or skill", function(done) {
    SpecHelper.buildJada({ species:'scaven' }).then(jada => {
      Role.Hunter.Results.hunt({ character:jada, skill:0, injured:false }).then(hunted => {
        console.log("Hunted:",hunted)
        done();
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
