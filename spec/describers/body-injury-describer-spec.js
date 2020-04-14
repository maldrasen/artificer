describe('Describer: Body (injuries)', function() {

  it('describes a cut face', function(done) {
    SpecHelper.tenTimes(done, resolve => {
      SpecHelper.buildRando().then(jada => {
        Abuser.HeadAbuser.addInjury(jada, { type:'cut', level:Random.between(1,2), count:Random.between(1,3) }).then(() => {
          jada.getMouth().then(mouth => {
            jada.getBody().then(body => {
              SpecHelper.print(`Cut(${mouth.cutLevel}:${mouth.cutCount}) > ${body.description}`);
              resolve();
            });
          });
        });
      });
    });
  });

  it('describes a smashed face', function(done) {
    SpecHelper.tenTimes(done, resolve => {
      SpecHelper.buildRando().then(jada => {
        let level = Random.between(1,5);
        let count = Random.between(1,10);

        Abuser.HeadAbuser.addInjury(jada, { type:'smash', level, count }).then(() => {
          jada.getMouth().then(mouth => {
            jada.getBody().then(body => {
              SpecHelper.print(`Smash(${mouth.smashLevel}) > ${body.description}`);
              resolve();
            });
          });
        });
      });
    });
  });

  it('describes a pierced body', function(done) {
    SpecHelper.tenTimes(done, resolve => {
      SpecHelper.buildRando().then(jada => {
        Abuser.BodyAbuser.addInjury(jada, { type:'pierce', level:3, count:Random.between(1,3) }).then(() => {
          jada.getBody().then(body => {
            SpecHelper.print(`Pierce(${body.pierceLevel}:${body.pierceCount}) > ${body.description}`);
            resolve();
          });
        });
      });
    });
  });

});
