// const ANUS_SIZES = ['small','average','big','huge','monster'];
// const ANUS_CONDITIONS = ['tight','average','loose','gaping'];
//
// global.Anus = Database.instance().define('anus', {
//   parent_id:       { type:Sequelize.INTEGER },
//   parent_class:    { type:Sequelize.STRING },
//   shape:           { type:Sequelize.STRING, validate:{ isIn:[['normal','puffy','horse','mouth']] }},
//   condition:       { type:Sequelize.STRING, validate:{ isIn:[ANUS_CONDITIONS] }},
//   sizeClass:       { type:Sequelize.STRING, validate:{ isIn:[ANUS_SIZES] }},
//   sizeScale:       { type:Sequelize.DOUBLE, validate:{ min:0, max:100 }},
//   sizeFactor:      { type:Sequelize.DOUBLE  },
//   prolapseLength:  { type:Sequelize.INTEGER },
//   smashLevel:      { type:Sequelize.INTEGER, validate:{ min:0, max:5 }},
//   smashCount:      { type:Sequelize.INTEGER },
//   smashHealing:    { type:Sequelize.INTEGER },
//   smashShape:      { type:Sequelize.STRING, validate:{ isIn:[['whip','hand']] }},
//   description:     { type:Sequelize.STRING },
// },{
//   timestamps: false,
//   getterMethods: {
//
//     width() {
//       let range = Anus.SizeRanges[this.sizeClass]
//       return Math.round(this.sizeFactor * ((this.sizeScale/100)*(range.max-range.min) + range.min))
//     },
//
//     area()                    { return MathUtility.widthToArea(this.width); },
//     convertedProlapseLength() { return ConversionUtility.milliToInches(this.prolapseLength); },
//     convertedWidth()          { return ConversionUtility.milliToInches(this.width); },
//   }
// });
//
// // TODO: Not doing anything yet to change anus size and condition, but I will
// //       at some point. It's important to remember that some size / condition
// //       combinations are impossible. You can't have small/loose, small/gaping
// //       or average/gaping. If you go up to loose increase size class to at
// //       least average, and increase size class to at least big if gaping.
//
// // The Anus size classes are just like the pussies, but about 20% smaller.
// Anus.SizeRanges = {
//   small:   { min:16, max:22 }, // 0.62 - 0.87 inches
//   average: { min:22, max:28 }, // 0.87 - 1.10 inches
//   big:     { min:28, max:38 }, // 1.10 - 1.50 inches
//   huge:    { min:38, max:50 }, // 1.50 - 1.97 inches
//   monster: { min:50, max:75 }, // 1.97 - 2.95 inches
// }
