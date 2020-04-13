describe('Describer: Tit (injuries)', function() {

  it.only('describes smashed flat chest', function(done) {
    SpecHelper.tenTimes(done, resolve => {
      SpecHelper.buildJada({ tits:{ sizeClass:'zero' } }).then(jada => {
        let level = Random.between(1,5)
        let count = Random.between(1,3)
        let place = Random.from(['left','right','all']);
        let shape = Random.from([null,'hoof'])

        Abuser.TitsAbuser.addInjury(jada, { type:'smash', level, count, place, shape }).then(tits => {
          jada.getTits().then(tits => {
            SpecHelper.print(`Smash(${tits.smashLevel}) > ${tits.description}`);
            resolve();
          });
        });
      });
    });
  });

  it('describes smashed scaven tits', function(done) {
    SpecHelper.tenTimes(done, resolve => {
      SpecHelper.buildJada({ species:'scaven' }).then(jada => {
        let level = Random.between(1,5)
        let count = Random.between(1,3)
        let place = Random.from(['left','right','all']);
        let shape = Random.from([null,'hoof'])

        Abuser.TitsAbuser.addInjury(jada, { level, count, place, shape }).then(() => {
          jada.getTits().then(tits => {
            SpecHelper.print(`Smash(${tits.smashLevel}) > ${tits.description}`);
            resolve();
          });
        });
      });
    });
  });

});
