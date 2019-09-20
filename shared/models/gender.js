
global.Gender = function(options) {
  this.code = options.code;
  this.man = options.man.trim().toLowerCase();
  this.men = options.men.trim().toLowerCase();
  this.male = options.male.trim().toLowerCase();
  this.cock = options.cock;
  this.balls = options.balls;
  this.pussy = options.pussy;
  this.tits = options.tits;
  this.he = options.he.trim().toLowerCase();
  this.him = options.him.trim().toLowerCase();
  this.his = options.his.trim().toLowerCase();
  this.hers = options.hers.trim().toLowerCase();
}

// Instance Methods
extend(Gender.prototype, {
  Man: function() { return TextUtility.titlecase(this.man); },
  Men: function() { return TextUtility.titlecase(this.men); },
  Male: function() { return TextUtility.titlecase(this.male); },
  He: function() { return TextUtility.titlecase(this.he); },
  Him: function() { return TextUtility.titlecase(this.him); },
  His: function() { return TextUtility.titlecase(this.his); },
  Hers: function() { return TextUtility.titlecase(this.hers); },
});

Gender.male = new Gender({
  code: 'male',
  man: 'man',
  men: 'men',
  male: 'male',
  cock: true,
  balls: true,
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
  balls: false,
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
  balls: true,
  pussy: true,
  tits: true,
  he: 'shi',
  him: 'hir',
  his: 'hir',
  hers: 'hirs',
});
