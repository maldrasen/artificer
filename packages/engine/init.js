
console.log("Added init")

Loader.onScenarioLoad(() => {
  Database.addPersistedModel(AvailableEvent);
});
