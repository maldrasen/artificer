const Sequelize = require('sequelize');

global.EventQueueStore = (function() {

  // function add(event, params) {
  //   Schema.EventQueue().create({
  //     code: params.code,
  //     state: JSON.stringify(params.state)
  //   }).then(() => {
  //     event.returnValue = true;
  //   });
  // }
  //
  // function remove(event) {
  //   let state;
  //   Schema.EventQueue().findOne({
  //     order: Sequelize.col('id')
  //   }).then((e) => {
  //     state = JSON.parse(e.state);
  //     e.destroy();
  //   }).then((e) => {
  //     event.returnValue = state;
  //   });
  // }
  //
  // function all(event) {
  //   let queue = [];
  //   Schema.EventQueue().findAll({
  //     order:Sequelize.col('id')
  //   }).then((events) => {
  //     events.forEach((e) => {
  //       queue.push({
  //         id: e.id,
  //         code: e.code,
  //         state: JSON.parse(e.state)
  //       });
  //     });
  //   }).then(() => {
  //     event.returnValue = queue;
  //   });
  // }
  //
  // function deleteAll(event) {
  //   DatabaseFunctions.modelDeleteAll(Schema.EventQueue(), event);
  // }

  return {
    // add: add,
    // remove: remove,
    // all: all,
    // deleteAll: deleteAll,
  };

})();
