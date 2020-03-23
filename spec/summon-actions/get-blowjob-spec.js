describe.only('Summon Action: Get Blowjob', function() {

  it('with tiny consenting scaven character', function(done) {
    let scene = {
      player:{ species:'minotaur', body:{ height:2500 }},
      character:{ species:'scaven', fear:10, loyalty:50, lust:50, body:{ height:800 }},
    };

    SummonActionHelper.setupScene(scene).then(jada => {
      SpecHelper.print(``);
      SpecHelper.print(`==============================`);
      SpecHelper.print(`Tiny Consenting Scaven Blowjob`);
      SpecHelper.print(`==============================`);

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
