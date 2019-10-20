describe('Describer: Tits', function() {

  it('describes rat tits', function(done) {
    let tests = []

    for (let i=0; i<10; i++) {
      tests.push(new Promise((resolve, reject) => {
        CharacterBuilder.build({ firstName:'Ratty', gender:'female', species:'rat' }).then(character => {
          TitsDescriber.fullDescription(character).then(raw => {
            Weaver.weaveWithCharacter(raw,'C',character).then(description => {
              console.log(`      (rat) > ${description}`)
              resolve();
            });
          });
        });
      }));
    }

    Promise.all(tests).then(()=>{ done(); });
  });

});
