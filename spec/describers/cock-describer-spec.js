describe('Describer: Cock', function() {

  function printCock(title, options, done) {
    Settings.Metric = Random.from([true,false,false]);
    SpecHelper.tenTimes(done, async resolve => {
      const spineHeight = options.spines ? Random.between(1,38) : null;
      const knobHeight = options.knobs ? Random.between(1,24) : null;

      const rando = await SpecHelper.buildRando({
        gender: 'futa',
        species: (options.species || 'elf'),
        cock: { sizeClass:options.size, spineHeight, knobHeight }
      });

      await CharacterDescriber.updateAll(rando);
      const cock = await rando.getCock();

      SpecHelper.print(`${title}(${cock.sizeClass},${cock.length}) > ${cock.description}`);

      resolve();
    });
  }

  it('describes small normal cocks', function(done) {
    printCock('Small Normal', { size:'small' }, done);
  });

  it('describes average normal cocks', function(done) {
    printCock('Average Normal', { size:'average' }, done);
  });

  it('describes big normal cocks', function(done) {
    printCock('Big Normal', { size:'big' }, done);
  });

  it('describes huge normal cocks', function(done) {
    printCock('Huge Normal', { size:'huge' }, done);
  });

  it('describes monster normal cocks', function(done) {
    printCock('Monster Normal', { size:'monster' }, done);
  });

  it('describes small canine cocks', function(done) {
    printCock('Small Canine', { species:'lupin', size:'small' }, done);
  });

  it('describes average canine cocks', function(done) {
    printCock('Average Canine', { species:'lupin', size:'average' }, done);
  });

  it('describes big canine cocks', function(done) {
    printCock('Big Canine', { species:'lupin', size:'big' }, done);
  });

  it('describes huge canine cocks', function(done) {
    printCock('Huge Canine', { species:'lupin', size:'huge' }, done);
  });

  it('describes monster canine cocks', function(done) {
    printCock('Monster Canine', { species:'lupin', size:'monster' }, done);
  });

  it('describes small horse cocks', function(done) {
    printCock('Small Horse', { species:'equian', size:'small' }, done);
  });

  it('describes average horse cocks', function(done) {
    printCock('Average Horse', { species:'equian', size:'average' }, done);
  });

  it('describes big horse cocks', function(done) {
    printCock('Big Horse', { species:'equian', size:'big' }, done);
  });

  it('describes huge horse cocks', function(done) {
    printCock('Huge Horse', { species:'equian', size:'huge' }, done);
  });

  it('describes monster horse cocks', function(done) {
    printCock('Monster Horse', { species:'equian', size:'monster' }, done);
  });

  it('describes scaven cocks', function(done) {
    printCock('Scaven', { species:'scaven' }, done);
  });

  it('describes kobold cocks', function(done) {
    printCock('Kobold', { species:'kobold' }, done);
  });

  it('describes goat cocks', function(done) {
    printCock('Caprien', { species:'caprien' }, done);
  });

  it('describes snake cocks', function(done) {
    printCock('Naga', { species:'naga' }, done);
  });

  it('describes dragon cocks', function(done) {
    printCock('Dragon', { species:'dragon' }, done);
  });

  it('describes monster dragon cocks', function(done) {
    printCock('Monster Dragon', { species:'dragon', size:'monster' }, done);
  });

  it('describes demon cocks', function(done) {
    printCock('Demon', { species:'succubus' }, done);
  });

  it('describes huge demon cocks', function(done) {
    printCock('Huge Demon', { species:'succubus', size:'huge' }, done);
  });

  it('describes monster demon cocks', function(done) {
    printCock('Monster Demon', { species:'succubus', size:'monster' }, done);
  });

  it('describes spined cocks', function(done) {
    printCock('Spined', { spines:true }, done);
  });

  it('describes multiple spined cocks', function(done) {
    printCock('Multiple Spined', { species:'naga', spines:true }, done);
  });

  it('describes knobbed cocks', function(done) {
    printCock('Knobbed', { knobs:true }, done);
  });

  it('describes multiple knobbed cocks', function(done) {
    printCock('Knobbed', { species:'naga', knobs:true }, done);
  });

});
