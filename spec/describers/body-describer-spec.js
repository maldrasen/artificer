describe('Describer: Body', function() {

  function printBody(type, body) {
    console.log(`   ${type} > ${body.description}`)
  }

  it.only('describes a body', function(done) {
    SpecHelper.tenTimes(done, resolve => {
      SpecHelper.buildJada({ species:'caprien', gender:'female' }).then(jada => {
        jada.getBody().then(body => {
          printBody('normal',body)
          resolve();
        });
      });
    });
  });

});
