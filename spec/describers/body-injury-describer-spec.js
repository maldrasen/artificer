describe('Describer: Body (injuries)', function() {

  it('describes a smashed face', function(done) {
    SpecHelper.tenTimes(done, resolve => {
      SpecHelper.buildRando().then(jada => {
        let level = Random.between(1,5);
        let count = Random.between(1,10);

        Abuser.HeadAbuser.addInjury(jada, { type:'smash', level, count }).then(mouth => {
          jada.getBody().then(body => {
            SpecHelper.print(`Smash(${mouth.smashLevel}) > ${body.description}`);
            resolve();
          });
        });
      });
    });
  });

});
