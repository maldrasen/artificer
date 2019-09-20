global.BallsStore = (function() {

  function save(event, params) {
    DatabaseFunctions.modelSave(Schema.Balls(), event, params);
  }

  function loadAsync(id, callback) {
    DatabaseFunctions.modelLoadAsync(Schema.Balls(), id, callback);
  }

  function loadSync(event, id) {
    DatabaseFunctions.modelLoadSync(Schema.Balls(), event, id);
  }

  function findByAsync(params, callback) {
    DatabaseFunctions.findByAsync(Schema.Balls(), params, callback);
  }

  function destroy(event, id) {
    DatabaseFunctions.modelDelete(Schema.Balls(), event, id);
  }

  function destroyAll(event) {
    destroyWhere(event, {});
  }

  function destroyWhere(event, params) {
    DatabaseFunctions.modelDeleteWhere(Schema.Balls(), event, params);
  }

  return {
    save: save,
    loadAsync: loadAsync,
    loadSync: loadSync,
    findByAsync: findByAsync,
    destroy: destroy,
    destroyAll: destroyAll,
    destroyWhere: destroyWhere,
  };

})();
