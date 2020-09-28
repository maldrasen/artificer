global.Animal = Database.instance().define('animal', {
  genderCode:       { type:Sequelize.STRING },
  breedCode:        { type:Sequelize.STRING },
  name:             { type:Sequelize.STRING },
  pregnantWith:     { type:Sequelize.STRING  },
  pregnantDays:     { type:Sequelize.INTEGER },
  pregnantTotal:    { type:Sequelize.INTEGER },
},{
  timestamps: false,
  getterMethods: {
    gender()      { return Gender[this.genderCode]; },
    breed()       { return Breed.lookup(this.breedCode); },

    isMale()      { return this.genderCode == 'male'; },
    isFemale()    { return this.genderCode == 'female'; },
    isPregnant()   { return this.pregnantWith != null },
  },
});

// Completely remove a character and their dependant models. If for some reason
// the destroyed character has equipment it should be removed first, or else
// this function will detroy it. (also, why is body on backwards?)
Animal.prototype.completelyRemove = async function(options={}) {
  await this.completelyRemoveBody();
  await this.destroy();
}

HasBody.isAppliedTo(Animal);
