describe.only('Role', function() {

  async function setup() {
    const jada = await SpecHelper.buildJada({ species:'scaven' });
    const context = new Context();
    await context.addCharacter('C',jada);
    return new RoleResult(context);
  }

  it('adds injuries from hazard functions', function(done) {
    setup().then(result => {
      Role.addInjury(result, Hazard.hinterlandsForaging).then(_ => {
        result.character.getHealth().then(health => {
          expect(result.injury).to.exist;
          expect(health).to.be.below(100);
          done();
        });
      });
    });
  })

});
