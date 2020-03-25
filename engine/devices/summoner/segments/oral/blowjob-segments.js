Summoner.OralSegments.BlowjobSegments = (function() {

  // These segments should be short, but rich in detail. My plan is, once the
  // scene is set and the characters are positioned and so forth then most
  // every story with oral sex will call into these functions. Start blowjob
  // has the character starting to suck the cock, then there's a gap to let the
  // player do something while that's happening, then there's a follow on
  // continue action, and finally a general cum action that should always be
  // usable.

  async function getStartingOptionsForAnyPosition(storyTeller) {
    const cock = await storyTeller.getPlayerCock();
    const oralSkill = await storyTeller.getCharacterCanSuckCock();
    const desires = await getDesireFramework(storyTeller);

    let options = [];

    console.log("=== Any Position ===")
    console.log("Skill:",oralSkill);
    console.log("Desires:",desires);

    if (oralSkill.mouthFit == 'impossible') {
      throw `Error: Can't fit cock into mouth. This should have been a requirement for this action or handled in a seperate branch.`
    }

    // The first series of options just talk about the depth we start at and
    // don't mention the mouth fit at all.

    if (oralSkill.depthClass == 'very-shallow') {
      if (storyTeller.mightBe('playerCock','soft')) {
        Summoner.StoryTeller.addOptionsWith(options,[
          `{{He}} takes the head of my cock as into {{his}} mouth and starts sucking and licking
           {{P::cock.theGlansOfHisCock}}, getting me fully hard within the shallow confines of {{his}} mouth`,
        ],{ playerCock:'hard' });
      }
      if (storyTeller.mightBe('playerCock','hard')) {
        Summoner.StoryTeller.addOptionsWith(options,[
          `I thrust my cock into {{his}} mouth but I can barely push more than ${oralSkill.depthInch} in before I feel
           my thick head press against the too narrow entrance of {{his}} throat.`,
        ],{ playerCock:'hard' });
      }
    }
    if (oralSkill.depthClass == 'shallow') {

    }
    if (oralSkill.depthClass == 'half') {

    }
    if (oralSkill.depthClass == 'most') {

    }
    if (oralSkill.depthClass == 'all') {

    }

    // The next series of options do mention the mouth fit of the cock, if
    // they're able to take the cock comfortably or not.

    if (oralSkill.mouthFit == 'painful') {
      if (oralSkill.depthClass == 'very-shallow') {
        if (storyTeller.mightBe('playerCock','soft')) {
          Summoner.StoryTeller.addOptionsWith(options,[
            `{{He}} takes my cock in {{his}} hand and sucks the head into {{his}} mouth, swirling {{his}} tongue around
             my sensitive glans as my cock grows fully hard within {{his}} mouth. {{He}} closes {{his}} eyes and winces
             in pain as my cockhead swells to its full {{P::cock.twoInch}} wide thickness.`,
          ],{ playerCock:'hard' });
        }
        if (storyTeller.mightBe('playerCock','hard')) {
          Summoner.StoryTeller.addOptionsWith(options,[
            `{{He}} closes {{his}} eyes and opens {{his}} mouth as wide as {{he}} can for my cock but still struggles
            to wrap {{his}} lips around the {{P::cock.twoInch}} wide head. {{He}} starts sucking the thick head filling
            {{his}} mouth, but struggles to take anything more than just the head.`,
          ],{ playerCock:'hard' });
        }
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

    return options;
  }

  // While the starting options focused on getting a cock hard and going into
  // mouth fit and depth, the continuing segment focuses more on thrusting.
  async function getContinuingOptionsForAnyPosition(storyTeller) {
    let options = [];
    return options;
  }

  // When starting a front facing blowjob we get the generalized starting
  // options then we add a few position specific options.  We then call into
  // the character's personality to have the character react to the feeling of
  // their mouth being filled with cock.
  async function startFrontBlowjob(storyTeller) {
    let options = await getStartingOptionsForAnyPosition(storyTeller);
    storyTeller.addSegment(options.length > 0 ? Random.from(options) : { text:'[TODO: Start front blowjob for these scene conditions.]' });
  }

  async function continueFrontBlowjob(storyTeller) {
    const cock = await storyTeller.getPlayerCock();
    const oralSkill = await storyTeller.getCharacterCanSuckCock();
    const desires = await getDesireFramework(storyTeller);

    storyTeller.addSegment({ text:`[TODO: Continue front facing blowjob.]` })
  }

  // When starting am on back blowjob we get the generalized starting options
  // then we add a few position specific options. We then call into the
  // character's personality to have the character react to the feeling of
  // their mouth being filled with cock.
  async function startOnBackBlowjob(storyTeller) {
    let options = await getStartingOptionsForAnyPosition(storyTeller);
    storyTeller.addSegment(options.length > 0 ? Random.from(options) : { text:'[TODO: Start on back blowjob for these scene conditions.]' });
  }

  async function continueOnBackBlowjob(storyTeller) {
    const cock = await storyTeller.getPlayerCock();
    const oralSkill = await storyTeller.getCharacterCanSuckCock();
    const desires = await getDesireFramework(storyTeller);

    storyTeller.addSegment({ text:`[TODO: Continue on back blowjob.]` })
  }

  async function cumFromBlowjob(storyTeller) {
    const cock = await storyTeller.getPlayerCock();
    const oralSkill = await storyTeller.getCharacterCanSuckCock();
    const desires = await getDesireFramework(storyTeller);

    storyTeller.addSegment({ text:`[TODO: Cum from blowjob.]` })
  }

  // ===========================================================================
  // Desire Framework
  // ===========================================================================

  // Rather than having cock desirability be its own tree, we can pregenerate
  // some adjectives and reactions beforehand to use in the segments as they're
  // being written. We may move this into personality if it looks like the sort
  // of thing that gets used everywhere.

  // Actually yes, move this into personality once we start using it.

  async function getDesireFramework(storyTeller) {
    let desireClass = await getDesireClass(storyTeller);

    if (desireClass == 'bad') {

    }
    if (desireClass == 'average') {

    }
    if (desireClass == 'good') {

    }
    if (desireClass == 'great') {

    }

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
