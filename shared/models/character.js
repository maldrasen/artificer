global.Character = class Character extends Model {

  constructor(data) {
    super();
    this._id = data.id;
    this._role = data.role;
    this._gender = data.gender;
    this._preName = data.preName;
    this._givenName = data.givenName;
    this._postName = data.postName;
    this._race = data.race;
    this._physical = data.physical;
    this._mental = data.mental;
    this._personal = data.personal;
    this._magical = data.magical;
  }

  get attributes() {
    return {
      id: this._id,
      role: this._role,
      gender: this._gender,
      preName: this._preName,
      givenName: this._givenName,
      postName: this._postName,
      fullName: this.fullName,
      race: this._race,
      physical: this._physical,
      mental: this._mental,
      personal: this._personal,
      magical: this._magical,
    }
  }

  // === Instance Functions ===

  get givenName() { return this._givenName; }
  get preName() { return this._preName; }
  get postName() { return this._postName; }
  get fullName() { return `${this.preName||''} ${this.givenName} ${this.postName||''}`.trim(); }
  get name() { return this.fullName; }

  setGivenName(name) { this._givenName = name; }
  setPreName(name) { this._preName = name; }
  setPostName(name) { this._postName = name; }

  // Possible possessive form of given name.
  getGivenName(possessive) { return (possessive) ? EnglishUtility.possessive(this._givenName) : this._givenName; }

  get gender() { return Gender[this._gender]; }
  get isMale() { return this.gender.code == 'male'; }
  get isFemale() { return this.gender.code == 'female'; }
  get role() { return Role.lookup(this._role); }
  get race() { return Race.lookup(this._race); }
  get physical() { return this._physical; }
  get mental()   { return this._mental; }
  get personal() { return this._personal; }
  get magical()  { return this._magical; }

  setPhysical(value)   { this._physical = value; }
  setMental(value)     { this._mental = value; }
  setPersonal(value)   { this._personal = value; }
  setMagical(value)    { this._magical = value; }

  setGender(gender) {
    if (gender instanceof Gender) { return this._gender = gender.code; }
    this.validateValueIn('gender', gender, ['male','female','futa','custom']);
    this._gender = gender;
  }

}
