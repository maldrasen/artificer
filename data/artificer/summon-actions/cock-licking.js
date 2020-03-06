SummonAction.build('cock-licking', {
  category: 'Oral',
  name: 'Cock Licking',
  description: `I'm going to have {{C::character.firstName}} lick my cock until I cum all over {{C::gender.his}} face.`,

  requirements: [
    'player.has-cock',
    'canSuckCock(C,P).mouthFit=impossible'],

  difficulty:    1,
  role:          'sub',
  effects:       'head',
  complementing: ['cock-lover','cum-lover','oral-slut'],
  conflicting:   [],

  event: 'cock-licking',

});
