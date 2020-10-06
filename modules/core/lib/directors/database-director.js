
postal.subscribe({ channel:"database", topic:"start", callback:() => {
  Loader.loadModule('database');
  Database.createDatabase();
}});

postal.subscribe({ channel:"database", topic:"created", callback:() => {
  // OK, the database has been created. Now, is it possible to load database
  // tables and reference data on demand?
  postal.publish({ channel:"database", topic:"ready" });
}});
