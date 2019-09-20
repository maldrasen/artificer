global.DatabaseObjects = (function() {

  function init() {
    initModel(Anus,            { store:'AnusStore'            });
    // initModel(Balls,           { store:'BallsStore'           });
    // initModel(Body,            { store:'BodyStore'            });
    // initModel(Character,       { store:'CharacterStore'       });
    // initModel(Cock,            { store:'CockStore'            });
    // initModel(Mouth,           { store:'MouthStore'           });
    // initModel(Nipples,         { store:'NipplesStore'         });
    // initModel(Nipples,         { store:'NipplesStore'         });
    // initModel(Pussy,           { store:'PussyStore'           });
    // initModel(Tits,            { store:'TitsStore'            });
    // initModel(CharacterAspect, { store:'CharacterAspectStore' });
    //
    // initJoinModel(CharacterAspect, { store:'CharacterAspectStore' });
    //
    // initCharacter();
    // initHasCharacter(Anus,    { store:'AnusStore',    singular:true  });
    // initHasCharacter(Balls,   { store:'BallsStore',   singular:true  });
    // initHasCharacter(Body,    { store:'BodyStore',    singular:true  });
    // initHasCharacter(Cock,    { store:'CockStore',    singular:false });
    // initHasCharacter(Mouth,   { store:'MouthStore',   singular:true  });
    // initHasCharacter(Nipples, { store:'NipplesStore', singular:true  });
    // initHasCharacter(Pussy,   { store:'PussyStore',   singular:false });
    // initHasCharacter(Tits,    { store:'TitsStore',    singular:true  });
  }

  function initModel(DatabaseModel, options) {
    let store = global[options.store];

    DatabaseModel.load = function(id, callback) {
      store.loadAsync(id, (attributes) => {
        callback(new DatabaseModel(attributes));
      });
    }

    DatabaseModel.findBy = function(params, callback) {
      store.findByAsync(params, (attributes) => {
        callback(attributes.map((attr) => {
          return new DatabaseModel(attr);
        }));
      });
    }

    DatabaseModel.prototype.save = function(callback) {
      store.save((id) => {
        this._id = id;
        if (typeof callback == 'function') {
          callback(id);
        }
      }, this.attributes);
    }

    DatabaseModel.prototype.destroy = function(callback) {
      store.destroy(callback, this.id);
    }
  }

  // function initCharacter() {
  //   Character.prototype.withAnus = function(callback, placement) {
  //     Anus.findBy({ character_id:this.id }, (anuses)=> { callback(anuses[0]); });
  //   }
  //
  //   Character.prototype.withBalls = function(callback, placement) {
  //     Balls.findBy({ character_id:this.id }, (ballses)=> { callback(ballses[0]); });
  //   }
  //
  //   Character.prototype.withBody = function(callback, placement) {
  //     Body.findBy({ character_id:this.id }, (bodies)=> { callback(bodies[0]); });
  //   }
  //
  //   Character.prototype.withCharacterAspects = function(callback) {
  //     CharacterAspect.findBy({ character_id:this.id }, (aspects) => { callback(aspects); });
  //   }
  //
  //   Character.prototype.destroyAllCharacterAspects = function(callback) {
  //     CharacterAspectStore.destroyWhere(callback, { character_id:this.id });
  //   }
  //
  //   Character.prototype.withCock = function(callback, placement) {
  //     Cock.findBy({ character_id:this.id, placement:(placement||'normal') }, (cocks) => { callback(cocks[0]); });
  //   }
  //
  //   Character.prototype.withMouth = function(callback, placement) {
  //     Mouth.findBy({ character_id:this.id }, (mouthes)=> { callback(mouthes[0]); });
  //   }
  //
  //   Character.prototype.withNipples = function(callback, placement) {
  //     Nipples.findBy({ character_id:this.id }, (nippleses)=> { callback(nippleses[0]); });
  //   }
  //
  //   Character.prototype.withPussy = function(callback, placement) {
  //     Pussy.findBy({ character_id:this.id, placement:(placement||'normal') }, (pussies) => { callback(pussies[0]); });
  //   }
  //
  //   Character.prototype.withTits = function(callback, placement) {
  //     Tits.findBy({ character_id:this.id }, (titses)=> { callback(titses[0]); });
  //   }
  // }

  // function initJoinModel(DatabaseModel, options) {
  //   let store = global[options.store];
  //
  //   DatabaseModel.lookup = function(code, id, callback) {
  //     store.lookup((attributes) => {
  //       callback(attributes ? new DatabaseModel(attributes) : null);
  //     }, { code:code, id:id });
  //   }
  // }

  // If a model has the singular flag it should only ever return one model.
  // Confusing because a character can have multiple Cock or Pussy models, but
  // only one Tits model, so Tits is singular and Cock is not singular in this
  // context.
  // function initHasCharacter(DatabaseModel, options) {
  //   let store = global[options.store];
  //   let model = options.model;
  //   let singular = options.singular;
  //
  //   function construct(attributes) {
  //     if (singular) {
  //       return (attributes[0] == null) ? null : new DatabaseModel(attributes[0]);
  //     }
  //     return attributes.map((attr) => { return new DatabaseModel(attr); });
  //   }
  //
  //   DatabaseModel.forCharacter = function(id, callback) {
  //     store.findByAsync({ character_id:id }, (attributes) => {
  //       callback(construct(attributes));
  //     });
  //   }
  // }

  return {
    init: init
  };

})();
