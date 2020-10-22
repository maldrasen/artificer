describe.only('Body Loom', function() {

  function buildContext(options) {
    const context = new Context();

    return new Promise(resolve => {
      MinionBuilder.buildMinion({ firstName:'Jada', lastName:'Fire', species:'elf', gender:'female', physical:20, body:options}).then(character => {
        context.addCharacter('C',character).then(()=>{
          resolve(context);
        });
      });
    });
  }

  describe("Gets weight", function() {
    it('tiny', function(done) {
      buildContext({ height:1520 }).then(context => {
        expect(Weaver.weave('{{C::body.fiftyPound}}',context)).to.equal('ninety pound');
        done();
      });
    });

    it('average', function(done) {
      buildContext({ height:1800 }).then(context => {
        expect(Weaver.weave('{{C::body.fiftyPound}}',context)).to.equal('one hundred forty pound');
        done();
      });
    });

    it('heavy', function(done) {
      buildContext({ height:2500 }).then(context => {
        expect(Weaver.weave('{{C::body.fiftyPounds}}',context)).to.equal('two hundred sixty-five pounds');
        done();
      });
    });

    it('average metric', function(done) {
      Settings.set({ metric:true });
      buildContext({ height:1800 }).then(context => {
        expect(Weaver.weave('{{C::body.fiftyPounds}}',context)).to.equal('sixty-four kilograms');
        done();
      });
    });
  });

  describe("Gets height in feet and inches", function() {
    it('shorty', function(done) {
      buildContext({ height:800 }).then(context => {
        expect(Weaver.weave('{{C::body.fiveFootTenInches}}',context)).to.equal('two foot eight inches');
        done();
      });
    });

    it('slightly taller', function(done) {
      buildContext({ height:900 }).then(context => {
        expect(Weaver.weave('{{C::body.fiveFootTenInches}}',context)).to.equal('three feet');
        done();
      });
    });

    it('average height', function(done) {
      buildContext({ height:1800 }).then(context => {
        expect(Weaver.weave('{{C::body.fiveFeetTenInches}}',context)).to.equal('five feet eleven inches');
        done();
      });
    });

    it(`metric measurement`, function(done) {
      Settings.set({ metric:true });
      buildContext({ height:1600 }).then(context => {
        expect(Weaver.weave('{{C::body.fiveFeetTenInches}}',context)).to.equal('one hundred sixty centimeters');
        done();
      });
    });

    it(`numeric measurement`, function(done) {
      buildContext({ height:2000 }).then(context => {
        expect(Weaver.weave(`{{C::body.5'10}}`,context)).to.equal(`6'7"`);
        done();
      });
    });

    it(`metric numeric measurement`, function(done) {
      Settings.set({ metric:true });
      buildContext({ height:1230 }).then(context => {
        expect(Weaver.weave(`{{C::body.5'10}}`,context)).to.equal(`123 cm`);
        done();
      });
    });
  });

  it("gets a fur color", function(done) {
    buildContext({ furColor:'red', furShade:5 }).then(context => {
      expect(Weaver.weave(`{{C::body.furColor}}`,context)).to.equal(`strawberry blond`);
      done();
    });
  });

  it("gets a skin color", function(done) {
    buildContext({ skinColor:'red', skinShade:4 }).then(context => {
      expect(Weaver.weave(`{{C::body.skinColor}}`,context)).to.be.oneOf(["pink","dusty pink"]);
      done();
    });
  });

  it("gets a scale color", function(done) {
    buildContext({ scaleColor:'gold' }).then(context => {
      expect(Weaver.weave(`{{C::body.scaleColor}}`,context)).to.equal(`golden`);
      done();
    });
  });

  it("gets an eye color", function(done) {
    buildContext({ eyeColor:'hazel' }).then(context => {
      expect(Weaver.weave(`{{C::body.eyeColor}}`,context)).to.equal(`hazel`);
      done();
    });
  });

  it("gets a hair color", function(done) {
    buildContext({ hairColor:'light-purple' }).then(context => {
      expect(Weaver.weave(`{{C::body.hairColor}}`,context)).to.equal(`light purple`);
      done();
    });
  });

})
