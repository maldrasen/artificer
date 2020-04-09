describe('Describer: Anus (injuries)', function() {

  it.only('describes a whipped furry ass', function(done) {
    SpecHelper.tenTimes(done, resolve => {
      SpecHelper.buildJada({ species:'scaven' }).then(jada => {
        Abuser.AnusAbuser.addInjury(jada, { type:'smash', level:Random.between(1,5), count:Random.between(1,12), details:{ shape:'whip' }}).then(anus => {

          SpecHelper.print(`Smash(${anus.smashLevel}) > ${anus.description}`);

          resolve();
        });
      });
    });
  });

});
