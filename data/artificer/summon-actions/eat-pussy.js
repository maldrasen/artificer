SummonAction.build('eat-pussy', {
  category: 'Oral',
  name: 'Eat Pussy',
  description: `I'd like to eat {{C::firstName's}} pussy.`,

  requirements: ['minion(C).has-pussy'],

  event: 'eat-pussy',
  variants:[
    { when:[], event:'eat-pussy-face-sit' },
    { when:['minion(C).very-small-body'], event:'eat-pussy-wall' },
    { when:['location.has-table'], event:'eat-pussy-table' },
    { when:['location.has-chair'], event:'eat-pussy-chair' },
  ],

});
