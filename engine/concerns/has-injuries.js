global.HasInjuries = { isAppliedTo: function(model) {

  // When adding an injury you should specify these options
  //   severity:   painful or critical
  //   level:      1 through 5
  //   location:   anus, body, cock, mouth, nipples, pussy, or tits
  //   damageType  burn, cut, pierce, rip, or smash
  model.prototype.addInjury = function(options) {
    if (options.severity == null)   { throw 'Must specify severity';    }
    if (options.level == null)      { throw 'Must specify level';       }
    if (options.location == null)   { throw 'Must specify location';    }
    if (options.damageType == null) { throw 'Must specify damage type'; }

    console.log("=== Add Injury ===")
    console.log(options)
  }

}};
