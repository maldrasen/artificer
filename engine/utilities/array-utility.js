global.ArrayUtility = {

  remove(array, element) {
    let index = array.indexOf(element);
    (index >= 0) ? array.splice(index, 1) : array;
  },

  addAll(target, array) {
    each(array, function(item) { target.push(item); });
  },

  unique(array) {
    return [...new Set(array)];
  },

  compact(array) {
    return array.filter(i => { return i != null });
  }

};
