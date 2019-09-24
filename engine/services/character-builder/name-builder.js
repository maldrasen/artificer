global.NameBuilder = (function() {

  function build(character) {
    return new Promise((resolve, reject) => {
      if (character.id == null) { reject('Character must be persisted.'); }

      selectNames(0, character, (character.species.nameGenerator || ElfNameGenerator), names => {
        character.update({
          preName: names.pre,
          firstName: names.first,
          lastName: names.last,
        }).then(resolve);
      });
    });
  }

  // OK, this is super ugly. We get a name from the name generator, but we need
  // to make sure that it's a valid name. This method passes the name off to the
  // validate promise. If the name is invalid the promise is rejected, then
  // this method calls itself to get a new name from the name generator to try
  // again. If the function fails to find a valid name after ten tries, it gives
  // up and just returns an invalid name.
  function selectNames(failureCount, character, nameGenerator, callback) {
    nameGenerator.getNames().then(names => {
      validate(character, names).then(valid => {
        callback(names);
      }).catch(invalid => {
        if (failureCount++ < 10) {
          // This is going to be noisy until all the name builds are built
          // console.log(`\n(Warning) Rejected Name [${names.pre} ${names.first} ${names.last}] ${invalid}`)
          selectNames(failureCount, character, nameGenerator, callback)
        } else {
          callback(names);
        }
      })
    });
  }

  // Check to see if a name is valid for this character. This promise should
  // reject on an invalid name.
  function validate(character, names) {
    return new Promise((resolve, reject) => {
      nameIsUnique(names).then(resolve).catch(reject);
    });
  }

  // Reject if there exists a character with this exact name.
  function nameIsUnique(names) {
    return new Promise((resolve, reject) => {
      let query = {};
      if (names.pre != null)   { query.preName =   names.pre;   }
      if (names.first != null) { query.firstName = names.first; }
      if (names.last != null)  { query.lastName =  names.last;  }

      Character.findOne({ where:query }).then(character => {
        (character == null) ? resolve() : reject("Name is not unique")
      });
    });
  }

  return { build:build };

})();
