global.FlagStore = (function() {

  // function set(event, params) {
  //   Schema.Flag().findOne({
  //     where: { code:params.code }
  //   }).then((flag) => {
  //     if (flag) {
  //       return flag.update({
  //         value: params.value
  //       });
  //     } else {
  //       return Schema.Flag().create({
  //         code: params.code,
  //         value: (params.value||'true'),
  //       });
  //     }
  //   }).then(() => {
  //     event.returnValue = true;
  //   });
  // };
  //
  // function get(event, params) {
  //   Schema.Flag().findOne({
  //     where: { code:params.code }
  //   }).then((flag) => {
  //     event.returnValue = flag ? flag.value : null;
  //   });
  // };
  //
  // function deleteAll(event) {
  //   DatabaseFunctions.modelDeleteAll(Schema.Flag(), event);
  // };

  return {
    // set: set,
    // get: get,
    // deleteAll: deleteAll,
  };

})();
