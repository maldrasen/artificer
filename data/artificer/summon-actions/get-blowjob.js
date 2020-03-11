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

  event: 'get-blowjob-standing',
  variants:[
    { event:'get-blowjob-on-back' },
    { when:['location.has-chair'], event:'get-blowjob-chair' },
  ],

  writeStory: async summoner => {
    return "TODO: Write story for Get Blowjob"
  },

});
