SummonAction.build('get-blowjob', {
  category: 'Oral',
  name: 'Get Blowjob',
  description: `I'll have {{C::character.firstName}} suck my cock.`,

  requirements:[
    'player.has-cock',
    'canSuckCock(C,P).mouthFit!=impossible'],

  difficulty:    2,
  role:          'sub',
  complementing: ['cock-lover','cum-lover','oral-slut'],
  conflicting:   [],

  event: 'get-blowjob-standing',
  variants:[
    { event:'get-blowjob-on-back' },
    { when:['location.has-chair'], event:'get-blowjob-chair' },
  ],

});
