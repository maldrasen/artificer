describe('Describer: Tits', function() {

  async function applySmash(tits) {
    tits.smashLevel = Random.upTo(5) + 1;
    tits.smashCount = Random.upTo(3) + 1;
    tits.smashPlace = Random.from(['left','right','all']);
    tits.smashShape = Random.from([null,'hoof'])

    await tits.save();
    return tits;
  }

  async function describeInjury(type, jada, tits, nipples) {
    let describer = new TitsDescriber({ character:jada, tits:tits, nipples:nipples });

    let description = describer[{
      blight: 'describeBlight',
      burn: 'describeBurn',
      smash: 'describeSmash',
    }[type]]();

    let output = await Weaver.weaveWithCharacter(description,'C',jada)
    let stripped = output.replace(/\n/g,'').replace(/\s+/g,' ');

    SpecHelper.print(`${type}(${tits.smashLevel}) > ${stripped}`);
  }

  it('describes smashed tits', function(done) {
    SpecHelper.tenTimes(done, resolve => {
      SpecHelper.buildJada({ tits:{ sizeClass:'zero' } }).then(jada => {
        jada.getNipples().then(nipples => {
          jada.getTits().then(tits => {
            applySmash(tits).then(() => {
              describeInjury('smash', jada, tits, nipples).then(() => {
                resolve();
              });
            });
          });
        });
      });
    });
  });

  it('describes smashed rat tits', function(done) {
    SpecHelper.tenTimes(done, resolve => {
      SpecHelper.buildJada({ species:'rat' }).then(jada => {
        jada.getNipples().then(nipples => {
          jada.getTits().then(tits => {
            applySmash(tits).then(() => {
              describeInjury('smash', jada, tits, nipples).then(() => {
                resolve();
              });
            });
          });
        });
      });
    });
  });

});
