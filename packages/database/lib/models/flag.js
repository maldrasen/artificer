global.Flag = (function() {

  function createModel() {
    global.Flag = Database.instance().define('flag', {
      code: { type:Sequelize.STRING  },
      value: { type:Sequelize.STRING  },
    },{
      timestamps: false,
    });

    Flag.clear = function() {
      Flag._cache = {};
    }

    Flag.loadFlags = async function() {
      Flag._cache = {};

      each((await Flag.findAll()), flag => {
        Flag._cache[flag.code] = flag.value
      });
    }

    Flag.saveFlags = async function() {
      await Promise.all(Object.keys(Flag._cache).map(async code => {
        let flag = await Flag.findOne({ where:{ code:code }});
        return flag == null ?
          Flag.create({ code:code, value:Flag._cache[code] }):
          flag.update({ value:Flag._cache[code] });
      }));
    }

    // The lookup() function should always be used when reading the value of a flag.
    // If a flag hasn't been set this function will return the flag's default value.
    Flag.lookup = function(code) {
      let value = null;

      if (Flag._cache[code] != null) {
        value = Flag._cache[code];
      }
      else if (FlagInfo.instances[code] != null) {
        value = FlagInfo.instances[code].default
      }

      if (value && typeof value == 'string' && value.match(/^\d+$/)) {
        return parseInt(value);
      }

      return value;
    }

    Flag.setAll = function(flags) {
      each(Object.keys(flags), code => {
        Flag.set(code, flags[code]);
      });
    }

    Flag.set = function(code, value) {
      if (value == null) {
        return delete Flag._cache[code];
      }

      let info = FlagInfo.instances[code];
      if (info) {
        if (info.validateIn != null && info.validateIn.indexOf(value) < 0) { throw `Cannot set flag ${code} to ${value}. Validation failed.` }
        if (info.validateInteger && Number.isInteger(value) == false)      { throw `Cannot set flag ${code} to ${value}. Validation failed.` }
      }

      Flag._cache[code] = `${value}`;
    }

    Flag.getAll = function() {
      return Object.assign({},Flag._cache);
    }

    Flag.printFlags = async function() {
      console.log("\n=== Printing Flags ===");
      each(Object.keys(Flag._cache).sort(), code => {
        console.log(`    ${code}  -  ${Flag._cache[code]}`);
      });
    }


    Flag.clear();
  }

  return { createModel };

})();
