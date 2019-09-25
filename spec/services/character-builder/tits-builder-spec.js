describe.only('TitsBuilder', function() {

  it('builds tits using all options', function(done) {
    let options = { species:'rat', gender:'futa', tits:{
      count: 3,
      size_class: 'monster',
      size_scale: 100.0,
      shape: 'bell',
    }};

    CharacterBuilder.build(options, character => {
      character.getTits(tits => {
        expect(tits.count).to.equal(3);
        expect(tits.size_class).to.equal('monster');
        expect(tits.size_scale).to.equal(100.0)
        expect(tits.shape).to.equal('bell');
        done();
      });
    });
  });

  it("doesn't give tits to Kobolds", function(done) {
    CharacterBuilder.build({ species:'kobold', gender:'female' }, character => {
      character.getTits(tits => {
        expect(tits).to.not.exist
        done();
      });
    });
  });


  //
  // it('randomizes options otherwise', function(done) {
  //   CharacterBuilder.build({ gender:'futa', species:'nymph' }, character => {
  //     character.getTits(tits => {
  //       expect(tits.count).to.equal(2);
  //       expect(tits.size).to.be.within(400,1150);
  //       expect(tits.shape).to.exist;
  //       done();
  //     });
  //   });
  // });
  //

});
