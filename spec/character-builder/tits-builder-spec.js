describe('TitsBuilder', function() {

  it('builds tits using all options', function(done) {
    let options = { firstName:'X', species:'rat', gender:'futa', tits:{
      count: 3,
      sizeClass: 'monster',
      sizeScale: 100.0,
      shape: 'bell',
    }};

    CharacterBuilder.build(options).then(character => {
      character.getTits().then(tits => {
        expect(tits.count).to.equal(3);
        expect(tits.sizeClass).to.equal('monster');
        expect(tits.sizeScale).to.equal(100.0)
        expect(tits.shape).to.equal('bell');
        done();
      });
    });
  });

  it("doesn't give tits to Kobolds", function(done) {
    CharacterBuilder.build({ firstName:'X', species:'kobold', gender:'female' }).then(character => {
      character.getTits().then(tits => {
        expect(tits).to.not.exist
        done();
      });
    });
  });

  it('randomizes options otherwise', function(done) {
    CharacterBuilder.build({ firstName:'X', gender:'futa', species:'sylph' }).then(character => {
      character.getTits().then(tits => {
        expect(tits.count).to.equal(2);
        expect(tits.size).to.be.within(0,100);
        expect(tits.shape).to.exist;
        done();
      });
    });
  });

});
