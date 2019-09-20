global.CharacterAspectStore = (function() {

  function save(event, params) {
    DatabaseFunctions.modelSave(Schema.CharacterAspect(), event, params);
  }

  function loadAsync(id, callback) {
    throw "Not implemented on join models like CharacterAspect";
  }

  function loadSync(event, id) {
    throw "Not implemented on join models like CharacterAspect";
  }

  function findByAsync(params, callback) {
    DatabaseFunctions.findByAsync(Schema.CharacterAspect(), params, callback);
  }

  function lookup(event, params) {
    let complete;

    if (typeof event == 'function') { complete = (instance) => {
      event(instance ? instance.dataValues : null);
    }}

    if (typeof event == 'object') { complete = (instance) => {
      event.returnValue = instance ? instance.dataValues : null;
    }}

    Schema.CharacterAspect().findOne({
      where:{ character_id:params.id, code:params.code }
    }).then(complete);
  }

  function destroy(event, id) {
    DatabaseFunctions.modelDelete(Schema.CharacterAspect(), event, id);
  }

  function destroyAll(event) {
    destroyWhere(event, {});
  }

  function destroyWhere(event, params) {
    DatabaseFunctions.modelDeleteWhere(Schema.CharacterAspect(), event, params);
  }

  return {
    save: save,
    findByAsync: findByAsync,
    loadAsync: loadAsync,
    loadSync: loadSync,
    lookup: lookup,
    destroy: destroy,
    destroyAll: destroyAll,
    destroyWhere: destroyWhere,
  };

})();
