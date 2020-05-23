Role.Hunter.Stories = (function() {

  //    options:   { character, injury, hunted }
  async function tell(options) {
    const count = flavorCount(options.hunted.flavors)
    const list = ItemFlavor.listify(options.hunted.flavors)
    const tier = options.hunted.tier;

    let phrase = Random.from([
      `{{C::character.firstName}} spent the day hunting`,
      `{{C::character.firstName}} went out hunting`,
      `{{C::character.firstName}} spent the day hunting out in the Hinterlands`,
      `{{C::character.firstName}} went hunting out in the Hinterlands`,
    ]);

    // ╭∩╮(︶︿︶)╭°╮
    phrase += (count > 0) ?
      (options.injury ? successInjury(list) : successNoInjury(list, count)):
      (options.injury ? failureInjury() : failureNoInjury(tier));

    return phrase
  }

  function flavorCount(flavors) {
    return Object.keys(flavors).reduce((total, key) => {
      return total + flavors[key];
    },0);
  }

  // TODO: Some of these only apply to the hinterlands or Greenwood. Eventually
  //       we'll need to pass the hunting location into these functions as well.
  //       Some of these really only apply to scaven as well, so this will all
  //       need looked at again once we have more weapon types and minion types.

  function failureNoInjury(tier) {
    const fox = Random.from(['rabbit','squirrel','fox','raccoon']);

    const options = [
      ` but was unable to catch anything.`,
      ` but failed to catch anything.`,
      ` but caught nothing.`,
      `. {{He}} spent the day crouched in the tall grass, lying in wait, but caught nothing.`,
      `. {{He}} hid in a bush, lying in wait, but caught nothing.`,
    ];

    if (tier == 'teeth') { ArrayUtility.addAll(options, [
      `. Though {{he}} spent the better part of the day stalking small game, in the end {{he}} caught nothing.`,
      `. {{He}} chased a ${fox} through the woods, but couldn't catch it.`,
      `. {{He}} caught a ${fox}, but it bit {{him}} and {{he}} dropped it.`,
      `. {{He}} tried stalking a ${fox} through the woods, but it got away.`,
      `. {{He}} almost caught a ${fox}, but it got away.`,
      `. {{He}} hid up a tree, thinking to drop down on some small game, but caught nothing in the end.`,
    ]); }

    if (tier == 'sling') { ArrayUtility.addAll(options, [
      `but couldn't hit anything with {{his}} sling.`,
      `. {{He}} shot at a fox with {{his}} sling but missed.`,
      `. Though {{he}} was armed with a sling, {{he}} wasn't able to hit anything.`,
    ]); }

    return Random.from(options);
  }

  function failureInjury() {
    return Random.from([
      ` but returned home in defeat.`,
      ` but was badly hurt and had to limp home.`,
      ` but was badly injured and had to return home.`,
      `. {{He}} was badly injured and limped slowly home in defeat.`,
      `. {{He}} was badly hurt but somehow managed to limp back home.`,
    ]);
  }

  function successNoInjury(aFox, count) {
    if (count == 1 && Random.upTo(1) == 0) {
      return Random.from([
        `. Through {{he}} was out the entire day, {{he}} only caught ${aFox}.`,
        ` but only managed to catch ${aFox}.`,
        ` but only returned with ${aFox}.`,
      ]);
    }

    return Random.from([
      ` and returned with ${aFox}.`,
      ` and brought back ${aFox}.`,
      ` and caught ${aFox}.`,
      `. {{He}} managed to catch ${aFox}.`,
      `. {{He}} ended up catching ${aFox}.`,
      `. {{He}} was out the entire day and caught ${aFox},`,
    ]);
  }

  function successInjury(aFox) {
    return Random.from([
      ` but was badly hurt. Still, {{he}} managed to bring home ${aFox}, even though {{he}} was injured.`,
      ` but was badly hurt. Still, {{he}} managed to bring home ${aFox}.`,
      ` but was injured and had to return home early, returning with ${aFox}.`,
      `. {{He}} caught ${aFox}, but was injured on the way home.`,
      `. Although badly injured, {{he}} brought back ${aFox}.`,
      `. Although badly injured, {{he}} returned with ${aFox}.`,
      `. Despite being badly hurt while out on the hunt, {{he}} brought back ${aFox}.`,
      `. Despite being badly hurt while out on the hunt, {{he}} returned home with ${aFox}.`,
    ]);
  }

  return { tell };

})();
