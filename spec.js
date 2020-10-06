
global.ROOT = require('path').normalize(`${__dirname}`).replace(/\\/g,"/");
global.expect = require('chai').expect;

require(`${ROOT}/modules/boot/main.js`);

postal.publish({ channel:"database", topic:"start" });

before(() => {
  return new Promise(resolve => {
    postal.subscribe({ channel:"database", topic:"ready", callback:() => {
      console.log("=== Ready ===");
      resolve();
    }});
  });
});
