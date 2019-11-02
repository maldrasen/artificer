describe('Describer: Body', function() {

  function printBody(type, body) {
    SpecHelper.print(`${type} > ${body.description}`);
  }

  it('describes a body', function(done) {
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
