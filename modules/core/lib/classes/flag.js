global.Flag = class Flag {

  static setAll(flags) {
    each(Object.keys(flags), code => {
      this.set(code, flags[code]);
    });
  }

  static set(code, value) {
    if (value == null) {
      return delete this._cache[code];
    }

    FlagInfo.validate(code, value);
    this._cache[code] = `${value}`;
  }

  // The lookup() function should always be used when reading the value of a
  // flag. If a flag hasn't been set this function will return the flag's
  // default value. It also converts number strings to actual integers.
  static lookup(code) {
    let value = this._cache[code] || FlagInfo.defaultValue(code);
    return (value && typeof value == 'string' && value.match(/^\d+$/)) ? parseInt(value) : value;
  }

  static getAll() {
    return Object.assign({},this._cache);
  }

  static clear() {
    this._cache = {};
  }

  //     Flag.printFlags = async function() {
  //       console.log("\n=== Printing Flags ===");
  //       each(Object.keys(Flag._cache).sort(), code => {
  //         console.log(`    ${code}  -  ${Flag._cache[code]}`);
  //       });
  //     }
}

Flag.clear();
