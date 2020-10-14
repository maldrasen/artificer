
postal.subscribe({ channel:"database", topic:"start", callback:() => {
  Database.createDatabase();
}});

postal.subscribe({ channel:"database", topic:"created", callback: () => {
  Database.load().then(() => {
    postal.publish({ channel:"database", topic:"ready" });
  });
}});
