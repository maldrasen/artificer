global.ArrayUtility = {

  remove: function(array, element) {
    let index = array.indexOf(element);
    (index >= 0) ? array.splice(index, 1) : array;
  },

  addAll: function(target, array) {
    each(array, function(item) { target.push(item); });
  },

  unique: function(array) {
    return [...new Set(array)];
  }

};
