global.Character = class Character extends Model {
  get species()     { return Species.lookup(this.speciesCode); }
  get gender()      { return Gender[this.genderCode]; }
  get isFurry()     { return this.species.isFurry(this.genderCode); }
  get isScalie()    { return this.species.isScalie; }
  get hasSkinBody() { return !this.isFurry && !this.isScalie; }
  get hasHair()     { return this.hasSkinBody || this.species.hasHair }
  get isMale()      { return this.genderCode == 'male'; }
  get isFemale()    { return this.genderCode == 'female'; }
  get isFuta()      { return this.genderCode == 'futa'; }
}

HasAspects.isAppliedTo(Character);
HasAttributes.isAppliedTo(Character);
HasBody.isAppliedTo(Character);
