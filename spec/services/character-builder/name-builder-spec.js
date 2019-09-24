describe('NameBuilder', function() {

  let namePrinter = function(options, done) {
    let tests = []

    for (let i=0; i<5; i++) {
      tests.push(new Promise((resolve, reject) => {
        CharacterBuilder.build(options, character => {
          console.log(`    > ${character.name}`)
          resolve();
        });
      }));
    }

    Promise.all(tests).then(()=>{ done(); });
  }

  it('names rats', function(done)    { namePrinter({ species:'rat'    }, done); });
  it('names kobolds', function(done) { namePrinter({ species:'kobold' }, done); });

});
