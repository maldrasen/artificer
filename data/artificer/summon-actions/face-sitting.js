SummonAction.build('face-sitting', {
  category: 'Oral',
  name: 'Face Sitting',
  description: `I'd like to sit on {{C::firstName's}} face for a while.`,

  requirements:[],

  event: 'face-sitting',
  variants:[
    { when:['location.has-chair'], event:'face-sitting-chair' },
  ],

});
