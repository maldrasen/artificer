
console.log('> Booting Database');

global.Sequelize = require('sequelize');

require(`${ROOT}/engine/database/database`);
require(`${ROOT}/engine/services/mod-loader`);
