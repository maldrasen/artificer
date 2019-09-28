describe('NameBuilder', function() {

  let namePrinter = function(options, done) {
    console.log(`\n    [${options.species} names]`)

    let tests = []
    for (let i=0; i<10; i++) {
      tests.push(new Promise((resolve, reject) => {
        CharacterBuilder.build(options, character => {
          console.log(`      (${character.gender.male}) > ${character.name}`)
          resolve();
        });
      }));
    }

    Promise.all(tests).then(()=>{ done(); });
  }

  it('names rats', function(done)    { namePrinter({ species:'rat'    }, done); });
  it('names kobolds', function(done) { namePrinter({ species:'kobold' }, done); });
  it('names goblins', function(done) { namePrinter({ species:'goblin', aspects:'violent.3' }, done); });
});
