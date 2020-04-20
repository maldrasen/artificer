Location.build('heart-of-sin', {
  inTheName: 'within the sin heart',
  toTheName: 'to the heart of sin',

  buildName: () => {
    return `The Heart of Sin`;
  },

  buildDescription: () => {
    return `A perfectly flat and infinite plane of gray smooth stone stretches out in all directions. Anything is
            possible here. All it takes is the willpower to conjure it into being.`;
  },

  actions:[
    { name: 'Set Flag',
      command: 'game.start-event',
      data: { code:'debug-set-flag' }},

    { name: 'Create Minion',
      command: 'game.start-event',
      data: { code:'debug-create-minion' }}
  ],

  hasBed: () => false,
  hasChair: () => false,
  hasTable: () => false,
});
