global.CockStore = (function() {

  function save(event, params) {
    DatabaseFunctions.modelSave(Schema.Cock(), event, params);
  }

  function loadAsync(id, callback) {
    DatabaseFunctions.modelLoadAsync(Schema.Cock(), id, callback);
  }

  function loadSync(event, id) {
    DatabaseFunctions.modelLoadSync(Schema.Cock(), event, id);
  }

  function findByAsync(params, callback) {
    DatabaseFunctions.findByAsync(Schema.Cock(), params, callback);
  }

  function destroy(event, id) {
    DatabaseFunctions.modelDelete(Schema.Cock(), event, id);
  }

  function destroyAll(event) {
    destroyWhere(event, {});
  }

  function destroyWhere(event, params) {
    DatabaseFunctions.modelDeleteWhere(Schema.Cock(), event, params);
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
