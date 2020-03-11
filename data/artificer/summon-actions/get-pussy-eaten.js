SummonAction.build('get-pussy-eaten', {
  category: 'Oral',
  name: 'Get Pussy Eaten',
  description: `I'm going to have {{C::character.firstName}} eat my pussy.`,

  requirements: ['player.has-pussy'],

  difficulty:    2,
  effects:       'head',
  complementing: ['pussy-lover','oral-slut','submissive'],
  conflicting:   ['dominant'],
  skill:         'oral',

  event: 'get-pussy-eaten',
  variants:[
    { event:'get-pussy-eaten-face-sit' },
    { when:['location.has-table'], event:'get-pussy-eaten-table' },
    { when:['location.has-chair'], event:'get-pussy-eaten-chair' },
  ],

  writeStory: async summoner => {
    return "TODO: Write story for Get Pussy Eaten"
  },

});
