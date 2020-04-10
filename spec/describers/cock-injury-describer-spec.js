describe('Describer: Cock (injuries)', function() {

  it('describes blighted cock', function(done) {
    SpecHelper.tenTimes(done, resolve => {
      SpecHelper.buildRando({ gender:'male' }).then(jada => {
        let level = Random.between(1,5);
        let count = Random.between(1,3);
        let place = Random.from(['cock','balls']);

        Abuser.CockAbuser.addInjury(jada, { type:'blight', level, count, details:{ place }}).then(cock => {
          SpecHelper.print(`Blight(${cock.blightPlace}:${cock.blightLevel}) > ${cock.description}`);
          resolve();
        });
      });
    });
  });

});
