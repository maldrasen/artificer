
global.ROOT = require('path').normalize(`${__dirname}`).replace(/\\/g,"/");
global.expect = require('chai').expect;

require(`${ROOT}/modules/boot/main.js`);

postal.publish({ channel:"database", topic:"start" });

Loader.loadModule('character');

before(() => {
  return new Promise(resolve => {
    postal.subscribe({ channel:"database", topic:"ready", callback:() => {
      console.log("=== Ready ===");
      resolve();
    }});
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
