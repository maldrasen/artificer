global.Environment = (function() {

  const PROD = {
    name: 'production',
    debug: false,
    verbose: false,
  };

  const DEV = {
    name: 'development',
    debug: true,
    verbose: true,
  };

  const TEST = {
    name: 'test',
    debug: false,
    verbose: false,
  }

  function init() {
    let env = PROD;
    if (process.argv.indexOf('--dev') > -1) { env = DEV; }
    if (process.argv.indexOf('--test') > -1) { env = TEST; }
    global.Environment = env;
  }

  return { init }

})();
