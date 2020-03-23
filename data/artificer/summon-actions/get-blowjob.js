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
    storyTeller.addSeparator();

    await storyTeller.positionCharacterForGivingCockOral();
    storyTeller.addSeparator();

    let playerPosition = storyTeller.getStatus('playerPosition');
    let characterPosition = storyTeller.getStatus('characterPosition');

    if (playerPosition == 'standing') {
      if (characterPosition == 'table-on-back') { return await writeConsentTableOnBack(storyTeller); }
    }
    if (playerPosition == 'sitting') {
      if (characterPosition == 'standing') { return await writeConsentInChair(storyTeller); }
    }
    if (playerPosition == 'laying') {
      if (characterPosition == 'straddle') { return await writeConsentStraddle(storyTeller); }
      if (characterPosition == 'reverse-straddle') { return await writeConsentReverseStraddle(storyTeller); }
    }

    throw `Unexpected positioning Player:${playerPosition} Character:${characterPosition}`
  }

  async function writeConsentTableOnBack(storyTeller) {
    storyTeller.addSegment({ text:'TODO: Blowjob, on table lying on back.' })
    return storyTeller.compile();
  }

  async function writeConsentInChair(storyTeller) {
    storyTeller.addSegment({ text:'TODO: Blowjob, standing in front of chair.' })
    return storyTeller.compile();
  }

  async function writeConsentStraddle(storyTeller) {
    storyTeller.addSegment({ text:'TODO: Blowjob, straddling leg.' })
    return storyTeller.compile();
  }

  async function writeConsentReverseStraddle(storyTeller) {
    storyTeller.addSegment({ text:'TODO: Blowjob, straddling chest.' })
    return storyTeller.compile();
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
