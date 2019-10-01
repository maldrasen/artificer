Event.build('game-start', {

  stages:[
    {
      warningPage: true
    },{
      background:{ url:'{{ ROOT }}/assets/images/backgrounds/bg-void.png' },
      pages: [
        { text:"I'm dead." },
        { text:"No, that's not right." },
        { text:"I'm alive.",                      darkenBackground:98 },
        { text:"Maybe?",                          darkenBackground:95 },
        { text:"I can't remember.",               darkenBackground:90 },
        { text:"I can't remember anything.",      darkenBackground:85 },
        { text:"...",                             darkenBackground:80 },
        { text:"Who am I?",                       darkenBackground:75 },
        { text:"...",                             darkenBackground:65 },
        { text:"Where is my body?",               darkenBackground:50 },
        { text:"...",                             darkenBackground:40 },
        { text:"I think.",                        darkenBackground:30 },
        { text:"I think I must reform myself.",   darkenBackground:20 },
        { text:"A new body.",                     darkenBackground:10 },
        { text:"A new name.",                     darkenBackground:0 },
        { text:"That is the first step." }
      ]
    },{
      chooserPage: true,
    }
  ]
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
