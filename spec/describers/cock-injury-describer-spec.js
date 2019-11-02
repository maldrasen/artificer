describe.only('Describer: Cock (injuries)', function() {

  async function applyBlight(cock) {
    cock.blightLevel = Random.upTo(5) + 1;
    cock.blightCount = Random.upTo(3) + 1;
    cock.blightPlace = Random.from(['cock','balls']);

    await cock.save();
    return cock;
  }

  async function applySmash(cock) {
    cock.smashLevel = Random.upTo(5) + 1;
    cock.smashCount = Random.upTo(3) + 1;
    cock.smashShape = Random.from([null,'hoof'])

    await cock.save();
    return cock;
  }

  async function describeInjury(type, jada, cock) {
    let describer = new CockDescriber({ character:jada, cock:cock });

    let description = describer[{
      blight: 'describeBlight',
      burn: 'describeBurn',
      smash: 'describeSmash',
    }[type]]();

    let output = await Weaver.weaveWithCharacter(description,'C',jada)
    let stripped = output.replace(/\n/g,'').replace(/\s+/g,' ');

    SpecHelper.print(`${type}(${cock.blightLevel}) > ${stripped}`);
  }

  it('describes blighted cock', function(done) {
    SpecHelper.tenTimes(done, resolve => {
      SpecHelper.buildJada({  }).then(jada => {
        jada.getCock().then(cock => {
          applyBlight(cock).then(() => {
            describeInjury('blight', jada, cock).then(() => {
              resolve();
            });
          });
        });
      });
    });
  });

});
