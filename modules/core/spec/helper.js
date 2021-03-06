global.SpecHelper = {

  print(message) {
    if (Environment.verbose) { console.log(`      ${message}`); }
  },

  tenTimes(done, testFunction) {
    let times = Environment.verbose ? 10 : 1
    let tests = [];

    for (let i=0; i<times; i++) {
      tests.push(new Promise(resolve => {
        testFunction(resolve);
      }));
    };

    Promise.all(tests).then(()=>{ done(); });
  },

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  },

};
