global.TitsStore = (function() {

  function save(event, params) {
    DatabaseFunctions.modelSave(Schema.Tits(), event, params);
  }

  function loadAsync(id, callback) {
    DatabaseFunctions.modelLoadAsync(Schema.Tits(), id, callback);
  }

  function loadSync(event, id) {
    DatabaseFunctions.modelLoadSync(Schema.Tits(), event, id);
  }

  function findByAsync(params, callback) {
    DatabaseFunctions.findByAsync(Schema.Tits(), params, callback);
  }

  function destroy(event, id) {
    DatabaseFunctions.modelDelete(Schema.Tits(), event, id);
  }

  function destroyAll(event) {
    destroyWhere(event, {});
  }

  function destroyWhere(event, params) {
    DatabaseFunctions.modelDeleteWhere(Schema.Tits(), event, params);
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
