describe("CharacterAgent", function() {

  describe('most-injured-minion', function() {
    async function setup() {
      const r1 = await SpecHelper.buildRando({ species:'elf' });
      const r2 = await SpecHelper.buildRando({ species:'wood-elf' });
      const r3 = await SpecHelper.buildRando({ species:'dark-elf' });

      await Abuser.addAnusInjury(r2, { type:'smash', level:3, count:1, details:{ shape:'whip' }});
      await Abuser.addHeadInjury(r3, { type:'smash', level:5, count:1 });
    }

    it('finds the most injured minion', function(done) {
      setup().then(_ => {
        CharacterAgent.findActor('most-injured-minion').then(minion => {
          expect(minion.speciesCode).to.equal('dark-elf');
          done();
        });
      });
    });
  });

});
