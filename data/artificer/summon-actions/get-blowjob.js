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

  function writeEnthusiasticStory(summoner) {
    return "TODO: Enthusiastic Get Blowjob Story."
  }

  function writeConsentStory(summoner) {
    return "TODO: Consenting Get Blowjob Story."
  }

  function writeReluctantStory(summoner) {
    return "TODO: Reluctant Get Blowjob Story."
  }

  function writeRapeStory(summoner) {
    return "TODO: Rape Get Blowjob Story."
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
