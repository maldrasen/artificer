global.Location = class Location extends Form {

  buildView(callback) {
    Promise.all([
      new Promise((resolve, reject) => { this.buildName(resolve); }),
      new Promise((resolve, reject) => { this.buildDescription(resolve); }),
      new Promise((resolve, reject) => { this.buildAttributes(resolve); }),
      new Promise((resolve, reject) => { this.buildFlavor(resolve); }),
    ]).then(results => {
      callback({
        name: results[0],
        description: results[1],
        attributes: results[2],
        flavor: results[3],
      });
    });
  }

  // The names and descriptions of all of the locations will probably always be
  // based on the current game state, a variety of game flags and so forth.
  // Additionally the way each location determines it's name is unique to that
  // location and should be implemented in the form itself. The functions below
  // can be overwritten for this purpose.
  buildName(callback) { callback('[TODO]'); }
  buildDescription(callback) { callback('[TODO]'); }
  buildAttributes(callback) { callback([]); }
  buildFlavor(callback) { callback([]); }
}
