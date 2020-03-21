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

    // const cock = await storyTeller.getPlayerCock();
    // const cockFit = await summoner.character.canSuckCock(cock);

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
