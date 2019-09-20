// These generic functions are intended to work with models that can be built
// from an object and have an id attribute.
global.DatabaseFunctions = (function() {

  function modelSave(model, event, params) {
    let complete;

    if (event == null) {
      complete = (id) => {}
    } else if (typeof event == 'function') {
      complete = (id) => { event(id); }
    } else if (typeof event == 'object') {
      complete = (id) => { event.returnValue = id; }
    }

    if (params.id) {
      model.findByPk(params.id).then((instance) => {
        if (instance) {
          instance.update(params).then(() => {
            complete(instance.id);
          });
        } else {
          complete(null);
        }
      });
    } else {
      model.create(params).then((instance) => {
        complete(instance.id);
      });
    }
  }

  function modelLoadAsync(model, id, callback) {
    model.findByPk(id).then((instance) => {
      callback(instance ? instance.dataValues : null);
    });
  }

  function modelLoadSync(model, event, id) {
    model.findByPk(id).then((instance) => {
      event.returnValue = instance ? instance.dataValues : null;
    });
  }

  function findByAsync(model, params, callback) {
    model.findAll({ where:params }).then((instances) => {
      callback(instances.map((instance) => {
        return instance.dataValues;
      }));
    });
  }

  function findBySync(model, event, params) {
    model.findAll({ where:params }).then((instances) => {
      event.returnValue = instances.map(instance => instance.dataValues);
    });
  }

  function modelDelete(model, event, id) {
    let complete;

    if (event == null) {
      complete = () => {}
    } else if (typeof event == 'function') {
      complete = () => { event(true); }
    } else if (typeof event == 'object') {
      complete = () => { event.returnValue = true; }
    }
    model.destroy({ where:{ id:id } }).then(complete);
  }

  function modelDeleteWhere(model, event, params) {
    let complete;

    if (event == null) {
      complete = () => {}
    } else if (typeof event == 'function') {
      complete = () => { event(true); }
    } else if (typeof event == 'object') {
      complete = () => { event.returnValue = true; }
    }
    model.destroy({ where:params }).then(complete);
  }

  return {
    modelSave: modelSave,
    modelLoadAsync: modelLoadAsync,
    modelLoadSync: modelLoadSync,
    findByAsync: findByAsync,
    findBySync: findBySync,
    modelDelete: modelDelete,
    modelDeleteWhere: modelDeleteWhere,
  };

})();
