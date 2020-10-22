global.CharacterBuilder = (function() {

  // This method is used to baseline options from the options passed to the
  // factory, in order to ensure that all expected options have at least a
  // default value. The function will first use the specified values in the
  // given options, if a value hasn't been specified in the options, but the
  // race has a default then that is used. If there is a default value not on
  // the race then that is used as the tertiary choice.
  function baseline(part, options, species, defaults) {
    let params = {};

    each(defaults, (defaultValue, key) => {
      params[key] = ObjectUtility.fetch(options, part, key) ||
                    ObjectUtility.fetch(species, 'bodyOptions', part, key) ||
                    defaultValue;
    });

    return params;
  }

  return { baseline };

})();
