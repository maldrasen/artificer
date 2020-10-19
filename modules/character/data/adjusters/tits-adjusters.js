//
// Adjustment.build('zero-tits', {
//   requires: ['minion(C).has-tits'],
//   apply: async character => {
//     await (await character.getTits()).update({
//       sizeClass: 'zero',
//       sizeScale: 0,
//       shape:     'flat',
//     });
//   }
// });
//
// Adjustment.build('small-tits', {
//   requires: ['minion(C).has-tits'],
//   apply: async character => {
//     await (await character.getTits()).update({
//       sizeClass: 'tiny',
//       sizeScale: Random.upTo(20),
//       shape:     'flat',
//     });
//   }
// });
//
// Adjustment.build('big-tits', {
//   requires: ['minion(C).has-tits'],
//   apply: async character => {
//     await growTits((await character.getTits()),'huge');
//   }
// });
//
// Adjustment.build('monster-tits', {
//   requires: ['minion(C).has-tits'],
//   apply: async character => {
//     await growTits((await character.getTits()),'monster');
//   }
// });
//
// async function growTits(tits, size) {
//   await tits.update({
//     sizeClass: size,
//     sizeScale: Random.between(25,75),
//     shape: Random.fromFrequencyMap({ round:50, dangling:100, bell:80 }),
//   });
// }
