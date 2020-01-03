const fs = require('fs');

(function loadConfiguration() {
  let envFile = 'env.json';
  let env = 'prod';

  if (process.argv.indexOf('--dev') > -1) {
    env = 'dev';
    envFile = 'env-dev.json';
  }

  if (process.argv.indexOf('--test') > -1) {
    env = 'test';
    envFile = 'env-test.json';
  }

  console.log(`> Load Environment (${env})`);

  let data = JSON.parse(fs.readFileSync(`${ROOT}/${envFile}`));

  global.Environment = {
    Debug: data.debug || false,
    Metric: data.metric || false,
  };

})();
