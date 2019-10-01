Event.build('game-start', {

  stages:[
    {
      pages:[
        { text:'Event Text' }
      ]
    },
  ],

});


// let event = Event.lookup('game.start')
//
//
//
// console.log("Event:",event.stages)
//
// resolve(event)


//
// buildStartingMinions(game).then(() => {
//   // resolve(game);
//   resolve("An Event Actually...")
// });


// function buildStartingMinions(game) {
//   return new Promise(resolve => {
//     let startingCharacters = [
//       { type:'minion', species:'rat', gender:'male'   },
//       { type:'minion', species:'rat', gender:'male'   },
//       { type:'minion', species:'rat', gender:'male'   },
//       { type:'minion', species:'rat', gender:'female' },
//       { type:'minion', species:'rat', gender:'female' },
//       { type:'minion', species:'rat', gender:'female' },
//     ];
//
//     Promise.all(startingCharacters.map((options) => {
//       return CharacterBuilder.build(options);
//     })).then(resolve);
//   })
// }
