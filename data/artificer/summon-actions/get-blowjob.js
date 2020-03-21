SummonAction.build('get-blowjob', {
  category: 'Oral',
  name: 'Get Blowjob',
  description: `I'll have {{C::character.firstName}} suck my cock.`,

  requirements:[
    'player.has-cock',
    'canSuckCock(C,P).mouthFit!=impossible'],

  difficulty:    2,
  effects:       'head',
  complementing: ['cock-lover','cum-lover','oral-slut','submissive'],
  conflicting:   ['dominant'],
  skill:         'oral',

  supportClass: () => SummonAction.GetBlowjob,
});

SummonAction.GetBlowjob = (function() {

  // ===========================================================================
  // Enthusiastic
  // ===========================================================================

  async function writeEnthusiasticStory(summoner) {
    return "TODO: Enthusiastic Get Blowjob Story."
  }

  // ===========================================================================
  // Consenting
  // ===========================================================================

  async function writeConsentStory(summoner) {
    const storyTeller = await normalStart(summoner);
    const position = storyTeller.getStatus('playerPosition');
    const cock = await storyTeller.getPlayerCock();
    const cockFit = await summoner.character.canSuckCock(cock);
    const heightDifference = await storyTeller.heightDifference();

    if (ArrayUtility.contains(['laying','sitting','standing'],position) == false) {
      throw `Invalid player position - ${position}`
    }

    if (heightDifference.name == 'miniCharacter') {
      storyTeller.addSegment({ text:'TODO: Blowjob with vase height difference.' });
    }
    if (heightDifference.name == 'tinyCharacter') {
      if (position == 'laying') { await writeTinyConsentLaying(storyTeller, cockFit); }
      if (position == 'sitting') { await writeTinyConsentSitting(storyTeller, cockFit); }
      if (position == 'standing') { await writeTinyConsentStanding(storyTeller, cockFit); }
    }
    if (heightDifference.name == 'smallCharacter') {
      if (position == 'laying') { await writeSmallConsentLaying(storyTeller, cockFit); }
      if (position == 'sitting') { await writeSmallConsentSitting(storyTeller, cockFit); }
      if (position == 'standing') { await writeSmallConsentStanding(storyTeller, cockFit); }
    }
    if (heightDifference.name == 'averageCharacter') {
      storyTeller.addSegment({ text:'TODO: Blowjob with basically no height difference.' });
    }
    if (heightDifference.name == 'bigCharacter') {
      storyTeller.addSegment({ text:'TODO: Blowjob with larger character.' });
    }
    if (heightDifference.name == 'giantCharacter') {
      storyTeller.addSegment({ text:'TODO: Blowjob with much larger character.' });
    }

    return storyTeller.compile();
  }

  async function writeTinyConsentLaying(storyTeller, cockFit) {
    storyTeller.addSegment({ text:'Todo: Start consenting tiny character blowjob, laying' });
  }

  async function writeTinyConsentSitting(storyTeller, cockFit) {
    storyTeller.addSegment({ text:'Todo: Start consenting tiny character blowjob, sitting' });
  }

  async function writeTinyConsentStanding(storyTeller, cockFit) {
    storyTeller.addSegment({ text:'Todo: Start consenting tiny character blowjob, standing' });
  }

  async function writeSmallConsentLaying(storyTeller, cockFit) {
    storyTeller.addSegment({ text:'Todo: Start consenting small character blowjob, laying' });
  }

  async function writeSmallConsentSitting(storyTeller, cockFit) {
    storyTeller.addSegment({ text:'Todo: Start consenting small character blowjob, sitting' });
  }

  async function writeSmallConsentStanding(storyTeller, cockFit) {
    storyTeller.addSegment({ text:'Todo: Start consenting small character blowjob, standing' });
  }

  // ===========================================================================
  // Reluctant
  // ===========================================================================


  async function writeReluctantStory(summoner) {
    return "TODO: Reluctant Get Blowjob Story."
  }

  // ===========================================================================
  // Rape
  // ===========================================================================

  async function writeRapeStory(summoner) {
    return "TODO: Rape Get Blowjob Story."
  }

  // ===========================================================================
  // Shared Segments
  // ===========================================================================

  // Same as the normal start for cock licking as well. Will probably be
  // similar for all of the oral scenes with a dick.
  async function normalStart(summoner) {
    const storyTeller = new Summoner.StoryTeller(summoner);
    await storyTeller.startSummoning();
    await storyTeller.addSegment(await summoner.character.reactToPlayer())
    await storyTeller.showCock();
    await storyTeller.addSegment(await summoner.character.reactToCock(await storyTeller.getPlayerCock()))

    return storyTeller;
  }

  return {
    writeEnthusiasticStory,
    writeConsentStory,
    writeReluctantStory,
    writeRapeStory,
  };

})();

// event: 'get-blowjob-standing',
// variants:[
//   { event:'get-blowjob-on-back' },
//   { when:['location.has-chair'], event:'get-blowjob-chair' },
// ],
