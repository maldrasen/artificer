SummonAction.build('get-blowjob', {
  category: 'Oral',
  name: 'Get Blowjob',
  description: `I'll have {{C::firstName}} suck my cock.`,

  requirements:[
    'player.has-cock',
    'canSuckCock(C,P).mouthFit!=impossible'],

  event: 'get-blowjob-standing',
  variants:[
    { event:'get-blowjob-on-back' },
    { when:['location.has-chair'], event:'get-blowjob-chair' },
  ],

});
