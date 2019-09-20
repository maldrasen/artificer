global.PussyStore = (function() {

  function save(event, params) {
    DatabaseFunctions.modelSave(Schema.Pussy(), event, params);
  }

  function loadAsync(id, callback) {
    DatabaseFunctions.modelLoadAsync(Schema.Pussy(), id, callback);
  }

  function loadSync(event, id) {
    DatabaseFunctions.modelLoadSync(Schema.Pussy(), event, id);
  }

  function findByAsync(params, callback) {
    DatabaseFunctions.findByAsync(Schema.Pussy(), params, callback);
  }

  function destroy(event, id) {
    DatabaseFunctions.modelDelete(Schema.Pussy(), event, id);
  }

  function destroyAll(event) {
    destroyWhere(event, {});
  }

  function destroyWhere(event, params) {
    DatabaseFunctions.modelDeleteWhere(Schema.Pussy(), event, params);
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
