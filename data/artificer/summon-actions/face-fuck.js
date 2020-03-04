SummonAction.build('face-fuck', {
  category: 'Oral',
  name: 'Face Fuck',
  description: `I'd like to violently fuck {{C::firstName's}} face.`,
  tags: ['player sadist 1'],

  requirements: [
    'player.has-cock',
    'canSuckCock(C,P).mouthFit!=impossible'],

  event: 'face-fuck',
  variants:[
    { when:['location.has-table'], event:'face-fuck-table' },
  ],

});
