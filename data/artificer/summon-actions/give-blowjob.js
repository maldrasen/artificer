SummonAction.build('give-blowjob', {
  category: 'Oral',
  name: 'Give Blowjob',
  description: `I'd like to suck on {{C::character.firstName's}} cock.`,

  requirements:[
    'minion(C).has-cock',
    'canSuckCock(P,C).mouthFit!=impossible'],

  difficulty: 0,
  complementing:[],
  conflicting:[],

  event: 'give-blowjob',
  variants:[
    { when:['location.has-chair'], event:'give-blowjob-chair' },
  ],

});
