// Gender isn't stored in the database, It's a data object that we keep it in
// memory. Gender has three genders normally, but the player can add a custom
// gender when the game starts. When that happens the custom gender, stored
// on the player model, is added to the Gender object.

global.Gender = class Gender {
  constructor(options) {
    this.code = options.code;
    this.man = options.man;
    this.men = options.men;
    this.male = options.male;
    this.cock = options.cock;
    this.pussy = options.pussy;
    this.tits = options.tits;
    this.he = options.he;
    this.him = options.him;
    this.his = options.his;
    this.hers = options.hers;
  }

  get Man() { return TextUtility.titlecase(this.man); }
  get Men() { return TextUtility.titlecase(this.men); }
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
  male: 'male',
  cock: true,
  pussy: false,
  tits: false,
  he: 'he',
  him: 'him',
  his: 'his',
  hers: 'his',
});

Gender.female = new Gender({
  code: 'female',
  man: 'woman',
  men: 'women',
  male: 'female',
  cock: false,
  pussy: true,
  tits: true,
  he: 'she',
  him: 'her',
  his: 'her',
  hers: 'hers',
});

Gender.futa = new Gender({
  code: 'futa',
  man: 'futa',
  men: 'futas',
  male: 'futa',
  cock: true,
  pussy: true,
  tits: true,
  he: 'shi',
  him: 'hir',
  his: 'hir',
  hers: 'hirs',
});
