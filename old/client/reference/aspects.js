global.Aspects = (function() {
  let instances = {};

  function init(event, data) {
    each(data.aspects, aspect => {
      instances[aspect.code] = aspect;
    });
  }

  function lookup(code) {
    return instances[code];
  }

  return { init, lookup };

})()
