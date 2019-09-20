global.MouthStore = (function() {

  function save(event, params) {
    DatabaseFunctions.modelSave(Schema.Mouth(), event, params);
  }

  function loadAsync(id, callback) {
    DatabaseFunctions.modelLoadAsync(Schema.Mouth(), id, callback);
  }

  function loadSync(event, id) {
    DatabaseFunctions.modelLoadSync(Schema.Mouth(), event, id);
  }

  function findByAsync(params, callback) {
    DatabaseFunctions.findByAsync(Schema.Mouth(), params, callback);
  }

  function destroy(event, id) {
    DatabaseFunctions.modelDelete(Schema.Mouth(), event, id);
  }

  function destroyAll(event) {
    destroyWhere(event, {});
  }

  function destroyWhere(event, params) {
    DatabaseFunctions.modelDeleteWhere(Schema.Mouth(), event, params);
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
