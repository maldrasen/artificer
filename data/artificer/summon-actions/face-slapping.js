SummonAction.build('face-slapping', {
  category: 'Abuse',
  name: 'Face Slapping',
  description: `I'm going to slap {{C::character.firstName's}} face until {{C::gender.he}} can't take it any more.`,
  tags: ['player sadist 2'],

  requirements: [],

  difficulty:    4,
  role:          'sub',
  complementing: ['masochist'],
  conflicting:   [],

  event: 'face-slapping',

});
