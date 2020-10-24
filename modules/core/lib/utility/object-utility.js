global.ObjectUtility = {

  // The fetch function can be used to dive into an object to get nested
  // properties without worrying about null values along the way. This
  // function uses the varargs as keys. For instance:
  //   ObjectUtility.fetch({ foo:{ bar:{ yarp:1 }}}, 'foo', 'bar', 'yarp') == 1
  //   ObjectUtility.fetch({ foo:{ bar:{ yarp:1 }}}, 'foo', 'nope', 'wat') == null
  //
  // Deprecated: Javascript now supports the elvis operator
  //     const yarp = obj?.foo?.derp?.yarp;
  //
  fetch(object) {
    let chain = null;

    if (typeof object != 'object') {
      return null;
    }
    each(Array.prototype.slice.call(arguments, 1), function(arg) {
      chain = (chain == null) ? object[arg] : chain[arg];
    });

    return chain;
  },

  // Quick and dirty, get values of an object.
  values(object) {
    let values = [];
    each(object, function(value, key) {
      values.push(value);
    });
    return values;
  },

  // Filter an object, returning only the properties with keys in the allowedKeys array.
  filter(object, allowedKeys) {
    let filtered = {};
    each(allowedKeys, function(key) {
      if (typeof object[key] != 'undefined') { filtered[key] = object[key]; }
    });
    return filtered;
  },

  // This also seems like it should really be built into javascript...
  select(object, selector) {
    let filtered = {};
    each(object, (value, key) => {
      if (selector(key,value)) { filtered[key] = value; }
    });
    return filtered;
  },

  // Check to see if an object has no properties.
  isEmpty(object) {
    for (let key in object) {
      if (object.hasOwnProperty(key)) {
        return false;
      }
    }
    return true;
  },

}
