SummonAction.build('face-sitting', {
  category: 'Oral',
  name: 'Face Sitting',
  description: `I'd like to sit on {{C::character.firstName's}} face for a while.`,

  requirements:[],

  difficulty:    3,
  effects:       'head',
  complementing: ['ass-obsessed','oral-slut','perverted','submissive'],
  conflicting:   ['dominant'],
  skill:         'oral',

  event: 'face-sitting',
  variants:[
    { when:['location.has-chair'], event:'face-sitting-chair' },
  ],

  writeStory: async summoner => {
    return "TODO: Write story for Face Sitting"
  },

});
