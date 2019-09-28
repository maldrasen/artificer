global.NameBuilder = (function() {

  function build(character) {
    return new Promise((resolve, reject) => {
      if (character.id == null) { reject('Character must be persisted.'); }
      if (character.firstName) { return resolve(); }

      selectNames(0, character, (character.species.nameGenerator || ElfNameGenerator), names => {
        character.update(nameMap(names)).then(resolve);
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
          warningMessage(names, invalid);
          selectNames(failureCount, character, nameGenerator, callback)
        } else {
          callback(names);
        }
      })
    });
  }

  // Print a warning to the log if we're in DEBUG mode.
  function warningMessage(names, invalid) {
    let p = (name) => { return (name == null) ? '' : name.name; }
    if (DEBUG) {
      console.log(`(Warning) Rejected Name ${p(names.pre)} ${p(names.first)} ${p(names.last)} > ${invalid}`)
    }
  }


  // Check to see if a name is valid for this character. This promise should
  // reject on an invalid name.
  function validate(character, names) {
    return new Promise((resolve, reject) => {
      nameIsUnique({ names:names, character:character }).then(noNamesRestricted).then(resolve).catch(reject);
    });
  }

  // Reject if there exists a character with this exact name.
  function nameIsUnique(chain) {
    return new Promise((resolve, reject) => {
      Character.findOne({ where:nameMap(chain.names) }).then(character => {
        (character == null) ? resolve(chain) : reject("Name is not unique")
      });
    });
  }

  function noNamesRestricted(chain) {
    return new Promise((resolve, reject) => {
      if (chain.names.pre && allowed(chain.character, chain.names.pre)) {
        reject(`Name (${chain.names.pre.name}) is restricted to ${chain.names.pre.restriction}`);
      }
      if (chain.names.first && allowed(chain.character, chain.names.first)) {
        reject(`Name (${chain.names.first.name}) is restricted to ${chain.names.first.restriction}`);
      }
      if (chain.names.last && allowed(chain.character, chain.names.last)) {
        reject(`Name (${chain.names.last.name}) is restricted to ${chain.names.last.restriction}`);
      }
      resolve(chain)
    });
  }

  // Check to see if a name is allowed. These are all gender restrictions for
  // the time being. I'm basing the presence of a cock or pussy on the gender,
  // otherwise I'd have to mix more async shit into this than there already is.
  function allowed(character, name) {
    if (name.restriction != null) {
      if (name.restriction == 'male')       { return character.genderCode == 'male'   }
      if (name.restriction == 'female')     { return character.genderCode == 'female' }
      if (name.restriction == 'not-male')   { return character.genderCode != 'male'   }
      if (name.restriction == 'not-female') { return character.genderCode != 'female' }
      if (name.restriction == 'has-cock')   { return character.gender.cock  }
      if (name.restriction == 'has-pussy')  { return character.gender.pussy }
      if (name.restriction == 'has-tits')   { return character.gender.tite  }
    }
    return false;
  }



  function nameMap(names) {
    let map = {};
    if (names.pre != null)   { map.preName =   names.pre.name;   }
    if (names.first != null) { map.firstName = names.first.name; }
    if (names.last != null)  { map.lastName =  names.last.name;  }
    return map;
  }

  return { build:build };

})();
