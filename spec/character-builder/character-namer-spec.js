describe('CharacterNamer', function() {

  async function printNames(species, done) {
    SpecHelper.print(`[${species} names]`);
    SpecHelper.tenTimes(done, async resolve => {
      const minion = await CharacterBuilder.buildStandardMinion({ minion:{ species }, randomAspectCount:0 });
      const aspects = (await minion.getCharacterAspects()).map((aspect) => { return `${aspect.code}.${aspect.level}` }).join(', ');
      SpecHelper.print(`  (${minion.gender.male}) > ${minion.name} > (${aspects})`);
      resolve();
    });
  }

  it('names scaven',   function(done) { printNames('scaven'  , done); });
  it('names kobolds',  function(done) { printNames('kobold'  , done); });
  it('names goblins',  function(done) { printNames('goblin'  , done); });
  it('names incubus',  function(done) { printNames('incubus' , done); });
  it('names succubus', function(done) { printNames('succubus', done); });
  it('names dragons',  function(done) { printNames('dragon'  , done); });
});
