global.Location = class Location extends Form {

  buildView() {
    return new Promise(resolve => {
      Promise.all([
        this.buildName(),
        this.buildDescription(),
        this.buildAttributes(),
        this.buildFlavor(),
      ]).then(results => {
        resolve({
          name: results[0],
          description: results[1],
          attributes: results[2],
          flavor: results[3],
        });
      });
    });
  }

  // The names and descriptions of all of the locations will probably always be
  // based on the current game state, a variety of game flags and so forth.
  // Additionally the way each location determines it's name is unique to that
  // location and should be implemented in the form itself. The functions below
  // should be overwritten for this purpose.
  buildName()        { return new Promise(resolve => { resolve('[TODO]') })}
  buildDescription() { return new Promise(resolve => { resolve('[TODO]') })}
  buildAttributes()  { return new Promise(resolve => { resolve([]) })}
  buildFlavor()      { return new Promise(resolve => { resolve([]) })}
}
