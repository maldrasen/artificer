Location.build('heart-of-sin', {

  buildName: async () => {
    return `The Heart of Sin`;
  },

  buildDescription: async () => {
    return `A perfectly flat and infinite plane of gray smooth stone stretches out in all directions. Anything is
            possible here. All it takes is the willpower to conjure it into being.`;
  },

  actions:[
    { name: 'Unlock Early Game Flags',
      command: 'debug.set-flag-list',
      data: { flags:'early-game' }},

    { name: 'Create Minion',
      command: 'game.start-action-event',
      data: { code:'debug-create-minion' }}
  ],

});
