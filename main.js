
global.ROOT = require('path').normalize(`${__dirname}`).replace(/\\/g,"/");

require(`${ROOT}/modules/boot/main.js`);

postal.publish({ channel:"database", topic:"start" });
postal.publish({ channel:"server", topic:"start" });

postal.subscribe({ channel:"database", topic:"ready", callback:() => {
  console.log("=== Ready ===");
}});
