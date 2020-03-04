SummonAction.build('face-fuck', {
  category: 'Oral',
  name: 'Face Fuck',
  description: `I'm in the mood to violently fuck {{C::character.firstName's}} face.`,
  tags: ['player sadist 1'],

  requirements: [
    'player.has-cock',
    'canSuckCock(C,P).mouthFit!=impossible'],

  event: 'face-fuck',
  variants:[
    { when:['location.has-table'], event:'face-fuck-table' },
  ],

});
