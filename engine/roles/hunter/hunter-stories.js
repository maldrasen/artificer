Role.Hunter.Stories = (function() {

  //    options:   { character, injury, hunted }
  async function tell(options) {
    const count = flavorCount(options.hunted.flavors)
    const list = ItemFlavor.listify(options.hunted.flavors)

    console.log("--- Compiling Story ---")
    console.log(count,list)
    if (options.injury) {
      console.log('Injury:',options.injury.properties)
    }

    let phrase = Random.from([
      `{{C::character.firstName}} spent the day hunting`,
      `{{C::character.firstName}} went out hunting`,
      `{{C::character.firstName}} spent the day hunting out in the Hinterlands`,
      `{{C::character.firstName}} went hunting out in the Hinterlands`,
    ]);

    if (count > 0) {
      phrase += options.injured ?
        successInjury(list):
        successNoInjury(list, count);
    } else {
      phrase += options.injured ?
        failureNoInjury() :
        failureInjury();
    }

    return phrase
  }

  function flavorCount(flavors) {
    return Object.keys(flavors).reduce((total, key) => {
      return total + flavors[key];
    },0);
  }

  function failureNoInjury() {
  //   return Random.from([
  //     ` but was unable to catch anything.`,
  //     ` but failed to catch anything.`,
  //     ` but caught nothing.`,
  //     `. Though {{H::gender.he}} spent the better part of the day stalking small game, in the end {{H::gender.he}} caught nothing.`,
  //     `. {{H::gender.He}} chased a rabbit, but couldn't catch it.`,
  //     `. {{H::gender.He}} chased a squirrel, but couldn't catch it.`,
  //     `. {{H::gender.He}} caught a rat, but it bit {{H::gender.him}} and {{H::gender.he}} dropped it.`,
  //     `. {{H::gender.He}} caught a squirrel, but it bit {{H::gender.him}} and {{H::gender.he}} dropped it.`,
  //     `. {{H::gender.He}} crouched in the tall grass, lying in wait, but caught nothing.`,
  //     `. {{H::gender.He}} hid in a bush, lying in wait, but caught nothing.`,
  //     `. {{H::gender.He}} hid up a tree, thinking to drop down on some small game, but caught nothing in the end.`,
  //     `. {{H::gender.He}} tried stalking a fox, but it got away.`,
  //     `. {{H::gender.He}} almost caught a rabbit, but it got away.`,
  //     `. {{H::gender.He}} almost caught a squirrel, but it got away.`,
  //   ]);
  }

  function failureInjury(injury) {
  //   stories = [
  //     ` but returned home in defeat.`,
  //     ` but was badly hurt and had to limp home.`,
  //     ` but was badly injured and had to return home.`,
  //   ];
  //
  //   // TODO: Add more of these for each injury location and damage type.
  //   if (['anus','pussy'].indexOf(injury.hazard.location) >= 0) {
  //     ArrayUtility.addAll(stories,[
  //       `. {{H::gender.He}} was badly injured and limped slowly home in defeat.`,
  //       `. {{H::gender.He}} was badly hurt but somehow managed to limp back home.`,
  //     ]);
  //   }
  //
  //   return Random.from(stories);
  }

  function successNoInjury(aFox, count) {
  //   if (count == 1 && Random.upTo(1)==0) {
  //     return Random.from([
  //       `. Through {{H::gender.he}} was out the entire day, {{H::gender.he}} only caught ${aFox}.`,
  //       ` but only managed to catch ${aFox}.`,
  //       ` but only returned with ${aFox}.`,
  //     ]);
  //   }
  //
  //   return Random.from([
  //     ` and returned with ${aFox}.`,
  //     ` and brought back ${aFox}.`,
  //     ` and caught ${aFox}.`,
  //     `. {{H::gender.He}} managed to catch ${aFox}.`,
  //     `. {{H::gender.He}} ended up catching ${aFox}.`,
  //     `. {{H::gender.He}} was out the entire day and caught ${aFox},`,
  //   ]);
  }

  function successInjury(aFox) {
  //   return Random.from([
  //     ` but was badly hurt. Still, {{H::gender.he}} managed to bring home ${aFox}, even though {{H::gender.he}} was injured.`,
  //     ` but was badly hurt. Still, {{H::gender.he}} managed to bring home ${aFox}.`,
  //     ` but was injured and had to return home early, returning with ${aFox}.`,
  //     `. {{H::gender.He}} caught ${aFox}, but was injured on the way home.`,
  //     `. Although badly injured, {{H::gender.he}} brought back ${aFox}.`,
  //     `. Although badly injured, {{H::gender.he}} returned with ${aFox}.`,
  //     `. Despite being badly hurt while out on the hunt, he brought back ${aFox}.`,
  //     `. Despite being badly hurt while out on the hunt, he returned home with ${aFox}.`,
  //   ]);
  }

  return { tell };

})();
