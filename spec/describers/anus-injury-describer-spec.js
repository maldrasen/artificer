describe('Describer: Anus (injuries)', function() {

  it('describes a whipped furry ass', function(done) {
    SpecHelper.tenTimes(done, resolve => {
      SpecHelper.buildRando({ species:'scaven' }).then(jada => {
        Abuser.addAnusInjury(jada, { type:'smash', level:Random.between(1,5), count:Random.between(1,12), details:{ shape:'whip' }}).then(() => {
          jada.getAnus().then(anus => {
            SpecHelper.print(`Smash(${anus.smashLevel}) > ${anus.description}`);
            resolve();
          });
        });
      });
    });
  });

  it('describes a whipped non-furry ass', function(done) {
    SpecHelper.tenTimes(done, resolve => {
      SpecHelper.buildRando({ species:'elf' }).then(jada => {
        Abuser.addAnusInjury(jada, { type:'smash', level:Random.between(1,5), count:Random.between(1,12), details:{ shape:'whip' }}).then(() => {
          jada.getAnus().then(anus => {
            SpecHelper.print(`Smash(${anus.smashLevel}) > ${anus.description}`);
            resolve();
          });
        });
      });
    });
  });

});
