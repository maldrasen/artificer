Role.Hunter.Results = (function() {

  // Calculate the results of the hunt.
  //   options: { character, skill, injured }

  async function hunt(options) {
    const huntCount = await calculateCount(options);
    const huntMap = await buildFrequencyMap(options);
    const flavors = {};

    for (let i=0; i<huntCount; i++) {
      let code = Random.fromFrequencyMap(huntMap.map);
      if (flavors[code] == null) { flavors[code] = 0; }
      flavors[code]++;
    }

    return { tier:huntMap.tier, flavors:flavors };
  }

  // Count is determined by looking at the character's health, skill, and if
  // they were injured while hunting.
  async function calculateCount(options) {
    let health = await options.character.getHealthClass();
    let skill = `s${options.skill}`;

    // Health > 75 (healthy or injured)
    let lowerRange = { s0:0, s1:0, s2:1, s3:2 }[skill];
    let upperRange = { s0:4, s1:6, s2:8, s3:10 }[skill];

    // Health 51-75
    if (health == 'bad') {
      lowerRange = 0;
      upperRange = { s0:2, s1:4, s2:6, s3:8 }[skill];
    }

    // Health 26-50
    if (health == 'horrible') {
      lowerRange = 0;
      upperRange = { s0:1, s1:2, s2:4, s3:6 }[skill];
    }

    // Health 1-25
    if (health == 'critical') {
      lowerRange = 0;
      upperRange = { s0:1, s1:1, s2:2, s3:3 }[skill];
    }

    // Injured while hunting today. Half the possible count.
    if (options.injured) {
      upperRange = Math.ceil(upperRange/2);
    }

    return Random.between(lowerRange,upperRange);
  }

  // The hunting frequency map determines what kind of animals you're likely to
  // bring back when hunting. This is based on a lot of different factors. What
  // are you equipped with? If you're hunting bare handed you'll have a harder
  // time than someone who's armed with a sling, or even with teeth and claws.
  // Skill level is also used to determine what's even possible for you to
  // catch, with some animals being restricted to higher tiers. Where are you
  //
  // TODO: Currently, there are only two possible states. With sling, or
  //       without sling. Eventually I'll expand it to a much more in depth
  //       system, but that isn't needed yet.
  //
  // TODO: This function will also consider the hunting location at some point
  //       so that minions hunting in the Caverns, Greenwood, or Mephidross
  //       will bring back different shit.
  //
  async function buildFrequencyMap(options) {
    let weapon = await options.character.getEquipment('weapon');

    if (weapon == null) {
      return { tier:'teeth', map:{
        'rabbit-pelt':   2,
        'other-meat':    5,
        'squirrel-meat': 7,
        'rat-meat':      10,
      }};
    }

    if (weapon.code == 'sling') {
      return { tier:'sling', map:{
        'fox-pelt':      3,
        'raccoon-pelt':  5,
        'rat-meat':      7,
        'rabbit-pelt':   10,
        'squirrel-meat': 15,
      }};
    }

    throw "Minion is armed, but can they hunt with that weapon?"
  }

  return { hunt, calculateCount };

})();
