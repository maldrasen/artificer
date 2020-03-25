Summoner.OralSegments = (function() {

  // These segments should be short, but rich in detail. My plan is, once the
  // scene is set and the characters are positioned and so forth then most
  // every story with oral sex will call into these functions. Start blowjob
  // has the character starting to suck the cock, then there's a gap to let the
  // player do something while that's happening, then there's a follow on
  // continue action, and finally a general cum action that should always be
  // usable.

  async function startFrontBlowjob(storyTeller) {
    const cock = await storyTeller.getPlayerCock();
    const oralSkill = await storyTeller.getCharacterCanSuckCock();
    const desires = await getDesireFramework(storyTeller);

    console.log("=== Start Front Facing ===")
    console.log("Skill:",oralSkill);
    console.log("Desires:",desires);

    if (oralSkill.mouthFit == 'impossible') {
      throw `Error: Can't fit cock into mouth. This should have been a requirement for this action or handled in a seperate branch.`
    }

    if (oralSkill.mouthFit == 'painful') {
      if (oralSkill.depthClass == 'very-shallow') {

      }
      if (oralSkill.depthClass == 'shallow') {

      }
      if (oralSkill.depthClass == 'half') {

      }
      if (oralSkill.depthClass == 'most') {

      }
      if (oralSkill.depthClass == 'all') {

      }
    }

    if (oralSkill.mouthFit == 'comfortable') {
      if (oralSkill.depthClass == 'very-shallow') {

      }
      if (oralSkill.depthClass == 'shallow') {

      }
      if (oralSkill.depthClass == 'half') {

      }
      if (oralSkill.depthClass == 'most') {

      }
      if (oralSkill.depthClass == 'all') {

      }
    }

    storyTeller.addSegment({ text:`TODO: Start front facing blowjob.` })
  }

  async function continueFrontBlowjob(storyTeller) {
    const cock = await storyTeller.getPlayerCock();
    const oralSkill = await storyTeller.getCharacterCanSuckCock();
    const desires = await getDesireFramework(storyTeller);

    storyTeller.addSegment({ text:`TODO: Continue front facing blowjob.` })
  }

  async function startOnBackBlowjob(storyTeller) {
    const cock = await storyTeller.getPlayerCock();
    const oralSkill = await storyTeller.getCharacterCanSuckCock();
    const desires = await getDesireFramework(storyTeller);

    console.log("=== Start On Back   ===")
    console.log("Skill:",oralSkill);
    console.log("Desires:",desires);

    if (oralSkill.mouthFit == 'impossible') {
      throw `Error: Can't fit cock into mouth. This should have been a requirement for this action or handled in a seperate branch.`
    }

    if (oralSkill.mouthFit == 'painful') {
      if (oralSkill.depthClass == 'very-shallow') {

      }
      if (oralSkill.depthClass == 'shallow') {

      }
      if (oralSkill.depthClass == 'half') {

      }
      if (oralSkill.depthClass == 'most') {

      }
      if (oralSkill.depthClass == 'all') {

      }
    }

    if (oralSkill.mouthFit == 'comfortable') {
      if (oralSkill.depthClass == 'very-shallow') {

      }
      if (oralSkill.depthClass == 'shallow') {

      }
      if (oralSkill.depthClass == 'half') {

      }
      if (oralSkill.depthClass == 'most') {

      }
      if (oralSkill.depthClass == 'all') {

      }
    }

    storyTeller.addSegment({ text:`TODO: Start on back blowjob.` })
  }

  async function continueOnBackBlowjob(storyTeller) {
    const cock = await storyTeller.getPlayerCock();
    const oralSkill = await storyTeller.getCharacterCanSuckCock();
    const desires = await getDesireFramework(storyTeller);

    storyTeller.addSegment({ text:`TODO: Continue on back blowjob.` })
  }

  async function cumFromBlowjob(storyTeller) {
    const cock = await storyTeller.getPlayerCock();
    const oralSkill = await storyTeller.getCharacterCanSuckCock();
    const desires = await getDesireFramework(storyTeller);

    storyTeller.addSegment({ text:`TODO: Cum from blowjob.` })
  }

  // ===========================================================================
  // Desire Framework
  // ===========================================================================

  // Rather than having cock desirability be its own tree, we can pregenerate
  // some adjectives and reactions beforehand to use in the segments as they're
  // being written. We may move this into personality if it looks like the sort
  // of thing that gets used everywhere.

  async function getDesireFramework(storyTeller) {
    let desireClass = await getDesireClass(storyTeller);

    return {
      desireClass,
    }
  }

  // Reduce the base desire level to one of 4 classes. Less that what we use in
  // the personality classes, but we need there to be fewer branches here.
  // Might tweek these levels at some point as well.
  async function getDesireClass(storyTeller) {
    let desirability = await storyTeller.getCharacterCockDesirability();

    if (desirability < -2) { return 'bad'}
    if (desirability >= -2 && desirability < 2)  { return 'average' }
    if (desirability >= 2 && desirability < 5)  { return 'good' }
    return 'great'
  }

  return {
    startFrontBlowjob,
    continueFrontBlowjob,
    startOnBackBlowjob,
    continueOnBackBlowjob,
    cumFromBlowjob,
  };

})();
