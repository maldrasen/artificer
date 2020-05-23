describe.only('Role: Hunter.Results', function() {

  it("gets items for no equipment or skill", function(done) {
    SpecHelper.buildJada({ species:'scaven' }).then(jada => {
      Role.Hunter.Results.hunt({ character:jada, skill:0, injured:false }).then(hunted => {
        expect(hunted.tier).to.equal('teeth');
        expect(hunted.flavors).to.exist;
        done();
      });
    });
  });

  describe('calculateCount()', function() {
    it('gets count for uninjured characters', function(done) {
      SpecHelper.buildJada({ species:'scaven' }).then(jada => {
        Role.Hunter.Results.calculateCount({ character:jada, skill:0, injured:false }).then(count => {
          expect(count).to.be.within(0,4);
          done();
        });
      });
    });

    it ('gets count for already injured characters', function(done) {
      SpecHelper.buildJada({ species:'scaven' }).then(jada => {
        Abuser.addPussyInjury(jada, { type:'burn', level:3 }).then(_ => {
          Role.Hunter.Results.calculateCount({ character:jada, skill:1, injured:false }).then(count => {
            expect(count).to.be.within(0,4);
            done();
          });
        });
      });
    });

    it ('gets count for characters injured this day', function(done) {
      SpecHelper.buildJada({ species:'scaven' }).then(jada => {
        Role.Hunter.Results.calculateCount({ character:jada, skill:3, injured:true }).then(count => {
          expect(count).to.be.within(2,5);
          done();
        });
      });
    });
  });

});
