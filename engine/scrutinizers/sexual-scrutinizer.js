global.SexualScrutinizer = (function() {

  async function check(requirement, context) {
    if (requirement.match(/^canSuckCock/)) { return await checkOral(requirement,context); }
  }

  // Check a requirement with the forms:
  //     canSuckCock(C,P).mouthFit=impossible
  //     canSuckCock(C,P).mouthFit!=impossible
  //
  // Where C is the cock sucker, P is getting sucked, mouthFit is the attribute and impossble is the value checked. The
  // requirement can check equality (=) or inequality (!=). The requirement checks the skill data returned by
  // HasSexSkills.canSuckCock() and can check against the following attributes and values returned from that.
  //
  //   mouthFit:  (comfortable, painful, impossible)
  //   throatFit: (comfortable, painful, impossible)
  //   knot:      (null, mouth, impossible)
  //   balls:     (none, one, entire)
  //
  async function checkOral(requirement, context) {
    let matchData = requirement.match(/^canSuckCock\((.+),(.+)\)\.([^!]+)!?=(.+)/)
    let sucker = context.get(matchData[1]);
    let sucked = context.get(matchData[2]);

    if (sucked.cock == null) {
      return false;
    }

    let key = matchData[3];
    let value = matchData[4];
    let data = await sucker.character.canSuckCock(sucked.cock);

    if (sucker == null) { throw `Could not parse sucker from ${requirement}`; }
    if (sucked == null) { throw `Could not parse sucked from ${requirement}`; }
    if (key == null)    { throw `Could not parse key from ${requirement}`;    }
    if (value == null)  { throw `Could not parse value from ${requirement}`;  }

    return (requirement.indexOf('!') > 0) ? `${data[key]}` != value : `${data[key]}` == value
  }

  return { check };

})();
