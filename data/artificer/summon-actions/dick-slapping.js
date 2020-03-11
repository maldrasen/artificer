SummonAction.build('dick-slapping', {
  category: 'Oral',
  name: 'Eat Pussy',
  description: `I'm going to slap my cock against {{C::character.firstName's}} face.`,
  tags: ['player sadist 1'],

  requirements: [
    'player.has-cock',
    'player.has-bigger-than-big-cock'],

  difficulty:    2,
  effects:       'head',
  complementing: ['cock-lover','masochist','submissive'],
  conflicting:   ['dominant'],

  event: 'dick-slapping',

  writeStory: async summoner => {
    return "TODO: Write story for Eat Pussy"
  },

});
