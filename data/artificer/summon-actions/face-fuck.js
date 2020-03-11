SummonAction.build('face-fuck', {
  category: 'Oral',
  name: 'Face Fuck',
  description: `I'm in the mood to violently fuck {{C::character.firstName's}} face.`,
  tags: ['player sadist 1'],

  requirements: [
    'player.has-cock',
    'canSuckCock(C,P).mouthFit!=impossible'],

  difficulty:    4,
  effects:       'head',
  complementing: ['cock-lover','cum-lover','oral-slut','masochist','submissive'],
  conflicting:   ['dominant'],
  skill:         'oral',

  event: 'face-fuck',
  variants:[
    { when:['location.has-table'], event:'face-fuck-table' },
  ],

  writeStory: async summoner => {
    return "TODO: Write story for Face Fuck"
  },

});
