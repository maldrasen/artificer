
Messenger.subscribe("database.start", () => {
  Database.createDatabase();
});

Messenger.subscribe("database.created", () => {
  Database.load().then(() => {
    Messenger.publish("database.ready");
  });
});
