
postal.subscribe({ channel:"server", topic:"start", callback:() => {
  Loader.loadModule('server');
}});
