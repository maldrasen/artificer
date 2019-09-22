describe('CharacterAdjuster', function() {

  let failure = function(error) {
    fail("Failure Called");
  }

  describe("Aspect Adjectments", function() {
    it("Applies an aspect adjustment", function(done) {
      let callback = function(character) {
        character.getCharacterAspect('drunk',(aspect) => {
          expect(aspect.level).to.equal(1);
          done();
        });
      }

      CharacterHelper.withTestCharacter({}, (character) => {
        CharacterAdjuster.applyAdjustments(character, ['drunk'], callback, failure);
      });
    });

    it("Increases the strength of a character aspect", function(done) {
      let callback = function(character) {
        character.getCharacterAspect('drunk',(aspect) => {
          expect(aspect.level).to.equal(3);
          done();
        });
      }

      CharacterHelper.withTestCharacter({}, (character) => {
        character.addAspect('drunk', { level:1 }, () => {
          CharacterAdjuster.applyAdjustments(character, ['drunk.3'], callback, failure);
        });
      });
    });

    it("Does not decrease aspect strength", function() {
      let callback = function(character) {
        character.getCharacterAspect('drunk',(aspect) => {
          expect(aspect.level).to.equal(2);
          done();
        });
      }

      CharacterHelper.withTestCharacter({}, (character) => {
        character.addAspect('drunk', { level:2 }, () => {
          CharacterAdjuster.applyAdjustments(character, ['drunk.1'], callback, failure);
        });
      });
    });
  });

});
