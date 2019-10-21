global.SpecHelper = (function() {

  function tenTimes(done, testFunction) {
    let tests = [];

    for (let i=0; i<10; i++) {
      tests.push(new Promise(resolve => {
        testFunction(resolve);
      }));
    };

    Promise.all(tests).then(()=>{ done(); });
  }

  return { tenTimes };

})();
