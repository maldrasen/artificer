
// The boot-system.js loads anything Electron specific. The tests will have to
// stub these when they are used by the engine.
console.log('> Booting System')

require(`${ROOT}/engine/services/browser.js`);
require(`${ROOT}/engine/services/browser-commands.js`);
