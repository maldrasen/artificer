SummonAction.build('face-sitting', {
  category: 'Oral',
  name: 'Face Sitting',
  description: `I'd like to sit on {{C::character.firstName's}} face for a while.`,

  requirements:[],

  difficulty: 3,
  complementing:[],
  conflicting:[],

  event: 'face-sitting',
  variants:[
    { when:['location.has-chair'], event:'face-sitting-chair' },
  ],

});
