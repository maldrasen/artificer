describe('Describer: Tits', function() {

  it('describes rat tits', function(done) {
    SpecHelper.tenTimes(done, resolve => {
      CharacterBuilder.build({ firstName:'Ratty', gender:'female', species:'rat' }).then(character => {
        TitsDescriber.fullDescription(character).then(raw => {
          Weaver.weaveWithCharacter(raw,'C',character).then(description => {
            console.log(`      (rat) > ${description}`)
            resolve();
          });
        });
      });
    });
  });

  // TODO: Work in progress here.
  // it.only('describes blighted rat tits', function(done) {
  //   let hazard = Hazard.buildHazard({ location:'tits', type:'blight', level:1, details:{ nipples:'single' }, story:'' });
  //
  //   SpecHelper.tenTimes(done, resolve => {
  //     CharacterBuilder.build({ firstName:'Ratty', gender:'female', species:'rat' }).then(character => {
  //       character.addInjury(hazard).then(injury => {
  //         TitsDescriber.fullDescription(character).then(raw => {
  //           Weaver.weaveWithCharacter(raw,'C',character).then(description => {
  //             console.log(`      (blight-rat) > ${description}`)
  //             resolve();
  //           });
  //         });
  //       });
  //     });
  //   });
  // });

});
