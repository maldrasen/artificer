describe('NameBuilder', function() {

  let namePrinter = function(options, done) {
    console.log(`\n    [${options.species} names]`)

    let tests = []
    for (let i=0; i<10; i++) {
      tests.push(new Promise((resolve, reject) => {
        CharacterBuilder.build(options).then(character => {
          character.getCharacterAspects().then(aspects => {
            let aspectList = aspects.map((aspect) => { return `${aspect.code}.${aspect.level}` }).join(', ')
            console.log(`      (${character.gender.male}) > ${character.name} > (${aspectList})`)
            resolve();
          });
        });
      }));
    }

    Promise.all(tests).then(()=>{ done(); });
  }

  it('names rats',     function(done) { namePrinter({ species:'rat'      }, done); });
  it('names kobolds',  function(done) { namePrinter({ species:'kobold'   }, done); });
  it('names goblins',  function(done) { namePrinter({ species:'goblin'   }, done); });
  it('names incubus',  function(done) { namePrinter({ species:'incubus'  }, done); });
  it('names succubus', function(done) { namePrinter({ species:'succubus' }, done); });
  it('names dragons',  function(done) { namePrinter({ species:'dragon'   }, done); });
});