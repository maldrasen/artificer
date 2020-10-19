
global.Name = {
  add: () => { 
    // TODO: Reimplement
  }
}


// global.Name = Database.instance().define('name', {
//   name:             { type:Sequelize.STRING },
//   species:          { type:Sequelize.STRING },
//   adjustments_json: { type:Sequelize.STRING },
//   requires:         { type:Sequelize.STRING },
//   restriction:      { type:Sequelize.STRING, validate:{ isIn:[['male','not-male']] }},
//   position:         { type:Sequelize.STRING, validate:{ isIn:[['pre','first','last']] }},
// },{
//   timestamps: false,
//   getterMethods: {
//     adjustments() { return JSON.parse(this.adjustments_json||'[]'); },
//   }
// });
//
// Name.add = function(data, options) {
//   Name.create({
//     name:             data.name,
//     species:          options.species,
//
//     requires:         data.requires,
//     restriction:      options.restriction,
//     position:         data.position || options.position,
//     adjustments_json: JSON.stringify(data.adjustments),
//   })
// }
