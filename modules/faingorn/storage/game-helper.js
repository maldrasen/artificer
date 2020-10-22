
// Spec helper for scenario specific tests.

// global.GameHelper = (function() {
//
//   async function setupTestGame() {
//     await Game.start();
//
//     let testCharacters = [
//       { type:'minion', species:'scaven', gender:'male',   fear:Random.between(40,60), loyalty:Random.between(10,20) },
//       { type:'minion', species:'scaven', gender:'female', fear:Random.between(40,60), loyalty:Random.between(10,20) },
//     ];
//
//     await SpecHelper.buildPlayer({});
//     await Promise.all(testCharacters.map((options) => {
//       return CharacterBuilder.build(options);
//     }));
//   }
//
//   return { setupTestGame };
//
// })();
