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
    const desirability = await storyTeller.getCharacterCockDesirability();

    console.log("Skill:",oralSkill);
    console.log("Desirability:",desirability);
    console.log("Cock Length:",cock.length);

    if (oralSkill.mouthFit == 'impossible') {
      throw `Error: Can't fit cock into mouth. This should have been a requirement for this action or handled in a seperate branch.`
    }

    if (oralSkill.mouthFit == 'painful') {

    }

    if (oralSkill.mouthFit == 'comfortable') {

    }

    storyTeller.addSegment({ text:`TODO: Start front facing blowjob.` })
  }

  async function continueFrontBlowjob(storyTeller) {
    const cock = await storyTeller.getPlayerCock();
    const oralSkill = await storyTeller.getCharacterCanSuckCock();
    const desirability = await storyTeller.getCharacterCockDesirability();

    storyTeller.addSegment({ text:`TODO: Continue front facing blowjob.` })
  }

  async function startOnBackBlowjob(storyTeller) {
    const cock = await storyTeller.getPlayerCock();
    const oralSkill = await storyTeller.getCharacterCanSuckCock();
    const desirability = await storyTeller.getCharacterCockDesirability();

    console.log("Skill:",oralSkill);
    console.log("Desirability:",desirability);
    console.log("Cock Length:",cock.length);

    if (oralSkill.mouthFit == 'impossible') {
      throw `Error: Can't fit cock into mouth. This should have been a requirement for this action or handled in a seperate branch.`
    }

    if (oralSkill.mouthFit == 'painful') {

    }

    if (oralSkill.mouthFit == 'comfortable') {

    }

    storyTeller.addSegment({ text:`TODO: Start on back blowjob.` })
  }

  async function continueOnBackBlowjob(storyTeller) {
    const cock = await storyTeller.getPlayerCock();
    const oralSkill = await storyTeller.getCharacterCanSuckCock();
    const desirability = await storyTeller.getCharacterCockDesirability();

    storyTeller.addSegment({ text:`TODO: Continue on back blowjob.` })
  }

  async function cumFromBlowjob(storyTeller) {
    const cock = await storyTeller.getPlayerCock();
    const oralSkill = await storyTeller.getCharacterCanSuckCock();
    const desirability = await storyTeller.getCharacterCockDesirability();

    storyTeller.addSegment({ text:`TODO: Cum from blowjob.` })
  }


  return {
    startFrontBlowjob,
    continueFrontBlowjob,
    startOnBackBlowjob,
    continueOnBackBlowjob,
    cumFromBlowjob,
  };

})();
