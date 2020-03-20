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
    const location = await storyTeller.getLocation();

    if (storyTeller.getStatus('playerPosition') != null) {
      console.log("Already set:",storyTeller.getStatus('playerPosition'))
    }


    // After the story starts we don't know if we've said that the player is
    // sitting, standing, or laying down yet. If it hasn't been said yet, we
    // need to position the player and character.
    if (storyTeller.getStatus('playerPosition') == null) {
      let positions = ['standing'];
      if (await location.hasChair()) { positions.push('sitting'); }
      if (await location.hasBed()) { positions.push('laying'); }

      let position = Random.from(positions);
      storyTeller.setStatus('playerPosition',position);

      console.log("Updated position:", position);
    }

    storyTeller.addSeparator();

    return storyTeller.compile();
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
