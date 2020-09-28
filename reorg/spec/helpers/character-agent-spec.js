describe("CharacterAgent", function() {

  async function abuse() {
    const r1 = await SpecHelper.buildRando({ species:'elf' });
    const r2 = await SpecHelper.buildRando({ species:'wood-elf' });
    const r3 = await SpecHelper.buildRando({ species:'dark-elf' });

    await Abuser.addAnusInjury(r2, { type:'smash', level:3, count:1, details:{ shape:'whip' }});
    await Abuser.addHeadInjury(r3, { type:'smash', level:5, count:1 });
  }

  it('finds the most injured minion', function(done) {
    abuse().then(_ => {
      CharacterAgent.findActor('most-injured-minion').then(minion => {
        expect(minion.speciesCode).to.equal('dark-elf');
        done();
      });
    });
  });

  it('finds a working minion', function(done) {
    SpecHelper.buildJada({ currentDuty:'role', dutyCode:'hunter' }).then(jada => {
      CharacterAgent.findActor('was-hunting').then(hunter => {
        expect(hunter.id).to.equal(jada.id);
        done();
      });
    });
  });

  // Creating Solstice requires the player to exist because she gets the
  // androphilic or gynephilic aspect depending on the player's gender.
  it('gets a named character, and characters by flag', function(done) {
    SpecHelper.buildPlayer().then(_ => {
      EventFunctions.createSolstice().then(_ => {
        CharacterAgent.findActor('solstice').then(solstice => {
          expect(solstice.name).to.equal('Solstice Blackriver');
          done();
        });
      });
    });
  });

});
