global.EquipmentStore = (function() {

  function save(event, params) {
    DatabaseFunctions.modelSave(Schema.Equipment(), event, params);
  }

  function loadAsync(id, callback) {
    DatabaseFunctions.modelLoadAsync(Schema.Equipment(), id, callback);
  }

  function loadSync(event, id) {
    DatabaseFunctions.modelLoadSync(Schema.Equipment(), event, id);
  }

  function destroy(event, id) {
    DatabaseFunctions.modelDelete(Schema.Equipment(), event, id);
  }

  function destroyAll(event) {
    destroyWhere(event, {});
  }

  function destroyWhere(event, params) {
    DatabaseFunctions.modelDeleteWhere(Schema.Equipment(), event, params);
  }

  // function equippedBy(event, id) {
  //   Schema.Equipment().findAll({
  //     where:{ equipped_by_id:id }
  //   }).then((instances) => {
  //     event.returnValue = instances.map(instance => instance.dataValues);
  //   });
  // }

  // function unused(event) {
  //
  // }

  return {
    save: save,
    loadAsync: loadAsync,
    loadSync: loadSync,
    destroy: destroy,
    destroyAll: destroyAll,
    destroyWhere: destroyWhere,
    // equippedBy: equippedBy,
    // unused: unused,
  };

})();
