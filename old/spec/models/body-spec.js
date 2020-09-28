describe("Body", function() {
  describe("weight()", function() {

    it("calculates the weight of an average height male", function(done) {
      CharacterBuilder.build({ firstName:'X', gender:'male', species:'elf', physical:15, body:{ height:1800 }}).then(character => {
        character.getBody().then(body => {
          body.getWeight().then(weight => {
            expect(ConversionUtility.gramToPound(weight)).to.equal(191);
            done();
          });
        });
      });
    });

    it("calculates the weight of an average height female", function(done) {
      CharacterBuilder.build({ firstName:'X', gender:'female', species:'elf', physical:15, body:{ height:1800 }}).then(character => {
        character.getBody().then(body => {
          body.getWeight().then(weight => {
            expect(body.heightIsAverage).to.be.true;
            expect(ConversionUtility.gramToPound(weight)).to.equal(140);
            done();
          });
        });
      });
    });

    it("calculates the weight of an short height female", function(done) {
      CharacterBuilder.build({ firstName:'X', gender:'female', species:'elf', physical:15, body:{ height:1520 }}).then(character => {
        character.getBody().then(body => {
          body.getWeight().then(weight => {
            expect(ConversionUtility.gramToPound(weight)).to.equal(90);
            done();
          });
        });
      });
    });

    it("calculates the weight of a too short height female", function(done) {
      CharacterBuilder.build({ firstName:'X', gender:'female', species:'elf', physical:15, body:{ height:1400 }}).then(character => {
        character.getBody().then(body => {
          body.getWeight().then(weight => {
            expect(body.heightIsShort).to.be.true;
            expect(ConversionUtility.gramToPound(weight)).to.equal(83);
            done();
          });
        });
      });
    });

    it("calculates the weight of the smallest scaven", function(done) {
      CharacterBuilder.build({ firstName:'X', gender:'female', species:'scaven', physical:1, body:{ height:760 }}).then(character => {
        character.getBody().then(body => {
          body.getWeight().then(weight => {
            expect(ConversionUtility.gramToPound(weight)).to.equal(35);
            done();
          });
        });
      });
    });

    it("calculates the weight of the biggest scaven", function(done) {
      CharacterBuilder.build({ firstName:'X', gender:'male', species:'scaven', physical:100, body:{ height:1060 }}).then(character => {
        character.getBody().then(body => {
          body.getWeight().then(weight => {
            expect(ConversionUtility.gramToPound(weight)).to.equal(111);
            done();
          });
        });
      });
    });

    it("calculates the weight of the biggest dragon", function(done) {
      CharacterBuilder.build({ firstName:'X', gender:'male', species:'dragon', physical:100, body:{ height:3000 }}).then(character => {
        character.getBody().then(body => {
          body.getWeight().then(weight => {
            expect(body.heightIsTall).to.be.true;
            expect(ConversionUtility.gramToPound(weight)).to.equal(697);
            done();
          });
        });
      });
    });

    it("calculates the weight of the smallest dryad", function(done) {
      CharacterBuilder.build({ firstName:'X', gender:'female', species:'dryad', physical:1, body:{ height:1350 }}).then(character => {
        character.getBody().then(body => {
          body.getWeight().then(weight => {
            expect(ConversionUtility.gramToPound(weight)).to.equal(112);
            done();
          });
        });
      });
    });

    it("calculates the weight of the smallest centaur", function(done) {
      CharacterBuilder.build({ firstName:'X', gender:'female', species:'centaur', physical:1, body:{ height:1700 }}).then(character => {
        character.getBody().then(body => {
          body.getWeight().then(weight => {
            expect(ConversionUtility.gramToPound(weight)).to.equal(380);
            done();
          });
        });
      });
    });

    it("calculates the weight of the biggest centaur", function(done) {
      CharacterBuilder.build({ firstName:'X', gender:'male', species:'centaur', physical:100, body:{ height:2800 }}).then(character => {
        character.getBody().then(body => {
          body.getWeight().then(weight => {
            expect(ConversionUtility.gramToPound(weight)).to.equal(2497);
            done();
          });
        });
      });
    });

  });
});
