global.Environment = (function() {

  function load() {
    let env = 'prod';

    if (process.argv.indexOf('--dev') > -1) { env = 'dev'; }
    if (process.argv.indexOf('--test') > -1) { env = 'test'; }

    console.log(`> Loading Environment (${env})`);

    global.Environment = {
      Debug: (env == 'dev'),
      Verbose: (env == 'dev'),
    };
  }

  return { load }

})();
