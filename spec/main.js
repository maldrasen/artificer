
global.ROOT = require('path').normalize(`${__dirname}/..`).replace(/\\/g,"/");

require(`${ROOT}/modules/boot/main.js`);

postal.publish({ channel:"database", topic:"start" });
