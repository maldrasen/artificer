Summoner.Experience = (function() {

  // First select random aspects from the action's lists of complementing and
  // conflicting aspects. If this is a rape action then the aspect gains and
  // losses are reversed. The aspect adjustments are then made to the
  // character, though this will need to change once we have multiple
  // characters. This will need to be invoked once per character then. We need
  // to compact the array here at the end because if a selected aspect is capped
  // then the character won't get experience, and a null gets mixed in.
  //
  // This function needs to be throttled by some specs when we shotgun the
  // story creation. Multiple stories can be generated at the same time which
  // all act on the same character, which causes all kinds of hell when adding
  // experience. That can't happen in a running game though.
  async function calculate(summoner) {
    if (!Environment.Throttle) {
      const experience = selectExperienceLevels(summoner);

      return ArrayUtility.compact(await Promise.all(Object.keys(experience).map(async code => {
        return await addExperience(summoner.character, code, experience[code]);
      })));
    }
  }

  function selectExperienceLevels(summoner) {
    let experience = {};
    let randomAspects = [];

    if (summoner.consent.level == 'rape')         { randomAspects = selectRandomAspects(summoner.action, 3, 'negative'); }
    if (summoner.consent.level == 'consent')      { randomAspects = selectRandomAspects(summoner.action, 2, 'positive'); }
    if (summoner.consent.level == 'enthusiastic') { randomAspects = selectRandomAspects(summoner.action, 5, 'positive'); }

    each(randomAspects, function(aspect) {
      let value = (aspect.effect == 'up') ? Random.between(10,25) : -(Random.between(10,25));
      if (experience[aspect.code] == null) { experience[aspect.code] = 0; }
      experience[aspect.code] += value;
    });

    return experience;
  }

  function selectRandomAspects(action, count, direction) {
    let up =   direction == 'positive' ? 'up' : 'down';
    let down = direction == 'positive' ? 'down' : 'up';

    let availableAspects = [{ code:'slut', effect:up }];
    let selectedAspects = [];

    if (direction == 'positive' && action.skill) {
      availableAspects.push({ code:action.skill, effect:'up' });
    }

    each(action.complementing, code => { availableAspects.push({ code:code, effect:up }); });
    each(action.conflicting,   code => { availableAspects.push({ code:code, effect:down }); });

    for (let i=0; i<count; i++) {
      selectedAspects.push(Random.from(availableAspects));
    }

    return selectedAspects;
  }

  // If they have the aspect alreay we add the value to the aspect. Because
  // their aspect strength may go up a level here we might also include a
  // notification for that.
  //
  // If they don't have the aspect already, we only want to add it if it has
  // a positive value. We still want to show the negative experience though,
  // even if it essentially does nothing when the aspect is absent.
  async function addExperience(character, code, value) {
    const aspect = await character.getCharacterAspect(code);

    if (aspect != null) {
      return await addExperienceToAspect(character, aspect, value);
    }

    if (value > 0) { await character.addAspect(code, { strength:value }); }
    return { code:code, name:Aspect.lookup(code).name, experience:value };
  }

  async function addExperienceToAspect(character, aspect, value) {
    let currentLevel = aspect.level;
    let currentStrength = aspect.strength;

    await aspect.adjustStrength(value);

    if (currentStrength == aspect.strength) { return null; }
    if (currentLevel == aspect.level) { return { code:aspect.code, name:aspect.name, experience:value } }

    return value > 0 ?
      { code:aspect.code, name:aspect.name, experience:value, gainedLevel:aspect.level }:
      { code:aspect.code, name:aspect.name, experience:value, lostLevel:aspect.level };
  }

  return { calculate, addExperience };

})();
