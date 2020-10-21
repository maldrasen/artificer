
global.ROOT = require('path').normalize(`${__dirname}`).replace(/\\/g,"/");
global.expect = require('chai').expect;

require(`${ROOT}/modules/boot/main.js`);

Messenger.publish("database.start");
Loader.loadModule('character');

before(() => {
  return new Promise(resolve => {
    Messenger.subscribe("database.ready", () => {
      console.log("\n\n=== Test Environment Loaded and Ready ===\n\n");
      resolve();
    });
  });
});

afterEach(() => {
  return new Promise(async resolve => {
    await Database.clear();
    Settings.reset();
    Flag.clear();
    resolve();
  });
});
