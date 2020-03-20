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

  async function writeEnthusiasticStory(summoner) {
    return "TODO: Enthusiastic Get Blowjob Story."
  }

  async function writeConsentStory(summoner) {
    const storyTeller = await normalStart(summoner);
    const position = storyTeller.getStatus('playerPosition')

    if (ArrayUtility.contains(['laying','sitting','standing'],position) == false) {
      throw `Invalid player position - ${position}`
    }

    if (position == 'laying') { await writeConsentLaying(summoner, storyTeller); }
    if (position == 'sitting') { await writeConsentSitting(summoner, storyTeller); }
    if (position == 'standing') { await writeConsentStanding(summoner, storyTeller); }

    return storyTeller.compile();
  }

  async function writeConsentLaying(summoner, storyTeller) {
    storyTeller.addSegment({ text:'Todo: Start blowjob, laying' })
  }

  async function writeConsentSitting(summoner, storyTeller) {
    storyTeller.addSegment({ text:'Todo: Start blowjob, sitting' })
  }

  async function writeConsentStanding(summoner, storyTeller) {
    storyTeller.addSegment({ text:'Todo: Start blowjob, laying' })
  }

  async function writeReluctantStory(summoner) {
    return "TODO: Reluctant Get Blowjob Story."
  }

  async function writeRapeStory(summoner) {
    return "TODO: Rape Get Blowjob Story."
  }

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
