
postal.subscribe({ channel:"database", topic:"start", callback:() => {
  Loader.loadModule('database');
}});
