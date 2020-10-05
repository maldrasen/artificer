// Gender isn't stored in the database, It's a data object that we keep it in
// memory. Gender has three genders normally, but the player can add a custom
// gender when the game starts. When that happens the custom gender, stored
// on the player model, is added to the Gender object.

global.Gender = class Gender {
  constructor(options) {
    this.code = options.code;
    this.man = options.man;
    this.men = options.men;
    this.boy = options.boy;
    this.boys = options.boys;
    this.male = options.male;
    this.cock = options.cock;
    this.pussy = options.pussy;
    this.tits = options.tits;
  }

  get he() {
    if (this.code == 'male')   { return 'he' }
    if (this.code == 'female') { return 'she' }
    return (Settings.FutaPronouns == 'shi/hir') ? 'shi' : 'she';
  }

  get him() {
    if (this.code == 'male')   { return 'him' }
    if (this.code == 'female') { return 'her' }
    return (Settings.FutaPronouns == 'shi/hir') ? 'hir' : 'her';
  }

  get his() {
    if (this.code == 'male')   { return 'his' }
    if (this.code == 'female') { return 'her' }
    return (Settings.FutaPronouns == 'shi/hir') ? 'hir' : 'her';
  }

  get hers() {
    if (this.code == 'male')   { return 'his' }
    if (this.code == 'female') { return 'hers' }
    return (Settings.FutaPronouns == 'shi/hir') ? 'hirs' : 'hers';
  }

  get Man() { return TextUtility.titlecase(this.man); }
  get Men() { return TextUtility.titlecase(this.men); }
  get Boy() { return TextUtility.titlecase(this.boy); }
  get Boys() { return TextUtility.titlecase(this.boys); }
  get Male() { return TextUtility.titlecase(this.male); }
  get He() { return TextUtility.titlecase(this.he); }
  get Him() { return TextUtility.titlecase(this.him); }
  get His() { return TextUtility.titlecase(this.his); }
  get Hers() { return TextUtility.titlecase(this.hers); }
}

Gender.male = new Gender({
  code: 'male',
  man: 'man',
  men: 'men',
  boy: 'boy',
  boys: 'boys',
  male: 'male',
  cock: true,
  pussy: false,
  tits: false,
});

Gender.female = new Gender({
  code: 'female',
  man: 'woman',
  men: 'women',
  boy: 'girl',
  boys: 'girls',
  male: 'female',
  cock: false,
  pussy: true,
  tits: true,
});

Gender.futa = new Gender({
  code: 'futa',
  man: 'futa',
  men: 'futas',
  boy: 'gurl',
  boys: 'gurls',
  male: 'futa',
  cock: true,
  pussy: true,
  tits: true,
});
