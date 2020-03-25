describe('Summon Action: Get Blowjob', function() {

  function defaultScene() {
    return {
      player: {
        gender: 'male',
        species: SummonActionHelper.randomPlayableSpecies(),
        cock: SummonActionHelper.randomCockProperties(),
        body:{ height:1600 }
      },
      character:{
        species: SummonActionHelper.randomSpecies(),
        fear: 10,
        loyalty: 50,
        lust: 50,
        body:{ height:1600 }},
    }
  }

  // We'll need to extend the oral positioning before this will work.
  //
  // it('random character sucks a random cock', function(done) {
  //   const scene = defaultScene();
  //
  //   SummonActionHelper.setupScene(scene).then(jada => {
  //     SpecHelper.print(``);
  //     SpecHelper.print(`==============`);
  //     SpecHelper.print(`Random Blowjob`);
  //     SpecHelper.print(`==============`);
  //     SpecHelper.print(JSON.stringify(scene,null,2));
  //     SpecHelper.print(``);
  //
  //     SpecHelper.tenTimes(done, resolve => {
  //       SummonActionHelper.buildAndExecute(jada,'get-blowjob').then(story => {
  //         SpecHelper.print(`${story}\n`);
  //         resolve();
  //       });
  //     });
  //
  //     SpecHelper.print(``);
  //   });
  // });

  // Test the blowjob scene with a tiny scaven. Needed to increase the player
  // size, and reduce the scaven's size to make sure the size comparason ends
  // up being possible, and needed to reduce the random cock sizes to make the
  // action even possible most of the time.
  it('with tiny consenting scaven character', function(done) {
    const scene = extend(true, defaultScene(), {
      player:{
        body:{ height:2500 },
        cock:{ sizeClass:Random.from(['small','average','big'])}
      },
      character:{ species:'scaven', body:{ height:800 }}
    });

    SummonActionHelper.setupScene(scene).then(jada => {
      SpecHelper.print(``);
      SpecHelper.print(`==============================`);
      SpecHelper.print(`Tiny Consenting Scaven Blowjob`);
      SpecHelper.print(`==============================`);
      SpecHelper.print(JSON.stringify(scene,null,2));
      SpecHelper.print(``);

      SpecHelper.tenTimes(done, resolve => {
        SummonActionHelper.buildAndExecute(jada,'get-blowjob').then(story => {
          SpecHelper.print(`${story}\n`);
          resolve();
        });
      });

      SpecHelper.print(``);
    });
  });

});
