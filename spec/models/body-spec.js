describe("Body", function() {
  describe("weight()", function() {

    it("calculates the weight of an average height male", function(done) {
      CharacterBuilder.build({ firstName:'X', gender:'male', species:'elf', body:{ height:1800 }}).then(character => {
        character.getBody().then(body => {
          body.getWeight().then(weight => {
            expect(ConversionUtility.gramToPound(weight)).to.equal(174);
            done();
          });
        });
      });
    });

    it("calculates the weight of an average height female", function(done) {
      CharacterBuilder.build({ firstName:'X', gender:'female', species:'elf', body:{ height:1800 }}).then(character => {
        character.getBody().then(body => {
          body.getWeight().then(weight => {
            expect(ConversionUtility.gramToPound(weight)).to.equal(156);
            done();
          });
        });
      });
    });

    it("calculates the weight of an short height female", function(done) {
      CharacterBuilder.build({ firstName:'X', gender:'female', species:'elf', body:{ height:1520 }}).then(character => {
        character.getBody().then(body => {
          body.getWeight().then(weight => {
            expect(ConversionUtility.gramToPound(weight)).to.equal(100);
            done();
          });
        });
      });
    });

    it("calculates the weight of a too short height female", function(done) {
      CharacterBuilder.build({ firstName:'X', gender:'female', species:'elf', body:{ height:1400 }}).then(character => {
        character.getBody().then(body => {
          body.getWeight().then(weight => {
            expect(ConversionUtility.gramToPound(weight)).to.equal(92);
            done();
          });
        });
      });
    });

    it("calculates the weight of the smallest rat", function(done) {
      CharacterBuilder.build({ firstName:'X', gender:'female', species:'rat', body:{ height:760 }}).then(character => {
        character.getBody().then(body => {
          body.getWeight().then(weight => {
            expect(ConversionUtility.gramToPound(weight)).to.equal(50);
            done();
          });
        });
      });
    });

    it("calculates the weight of the biggest rat", function(done) {
      CharacterBuilder.build({ firstName:'X', gender:'male', species:'rat', body:{ height:1060 }}).then(character => {
        character.getBody().then(body => {
          body.getWeight().then(weight => {
            expect(ConversionUtility.gramToPound(weight)).to.equal(74);
            done();
          });
        });
      });
    });

    it("calculates the weight of the biggest dragon", function(done) {
      CharacterBuilder.build({ firstName:'X', gender:'male', species:'dragon', body:{ height:3000 }}).then(character => {
        character.getBody().then(body => {
          body.getWeight().then(weight => {
            expect(ConversionUtility.gramToPound(weight)).to.equal(465);
            done();
          });
        });
      });
    });

    it("calculates the weight of the smallest dryad", function(done) {
      CharacterBuilder.build({ firstName:'X', gender:'female', species:'dryad', body:{ height:1350 }}).then(character => {
        character.getBody().then(body => {
          body.getWeight().then(weight => {
            expect(ConversionUtility.gramToPound(weight)).to.equal(160);
            done();
          });
        });
      });
    });

    it("calculates the weight of the smallest centaur", function(done) {
      CharacterBuilder.build({ firstName:'X', gender:'female', species:'centaur', body:{ height:1700 }}).then(character => {
        character.getBody().then(body => {
          body.getWeight().then(weight => {
            expect(ConversionUtility.gramToPound(weight)).to.equal(543);
            done();
          });
        });
      });
    });

    it("calculates the weight of the biggest centaur", function(done) {
      CharacterBuilder.build({ firstName:'X', gender:'male', species:'centaur', body:{ height:2800 }}).then(character => {
        character.getBody().then(body => {
          body.getWeight().then(weight => {
            expect(ConversionUtility.gramToPound(weight)).to.equal(1665);
            done();
          });
        });
      });
    });

    it("calculates the weight of the smallest pixie", function(done) {
      CharacterBuilder.build({ firstName:'X', gender:'female', species:'pixie', body:{ height:300 }}).then(character => {
        character.getBody().then(body => {
          body.getWeight().then(weight => {
            expect(ConversionUtility.gramToPound(weight)).to.equal(10);
            done();
          });
        });
      });
    });

  });
});
