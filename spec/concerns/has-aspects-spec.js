describe('HasAspects', function() {

  function buildJada(options) {
    return new Promise(resolve => {
      CharacterBuilder.build(
        extend({ firstName:'Jada', lastName:'Fire', species:'elf', gender:'futa' },options)
      ).then(resolve);
    });
  }

  describe('getCharacterAspects', function() {
    it('returns an empty array when empty', function(done) {
      buildJada().then(jada => {
        jada.getCharacterAspects().then(aspects => {
          expect(aspects).to.eql([]);
          done();
        });
      });
    });

    it('returns an array of CharacterAspect objects', function(done) {
      buildJada().then(jada => {
        jada.addAspect('cum-lover', { level:2 }).then(() => {
          jada.getCharacterAspects().then(aspects => {
            expect(aspects.length).to.equal(1)
            expect(aspects[0].code).to.equal('cum-lover')
            expect(aspects[0].level).to.equal(2)
            done();
          });
        });
      });
    });
  });

  describe('hasAspect', function() {
    it('checks for aspects by code', function(done) {
      buildJada().then(jada => {
        CharacterAspect.create({ character_id:jada.id, code:'breeder', strength:1000 }).then(() => {
          jada.hasAspect('breeder').then(present => {
            expect(present).to.equal(true);
            done();
          });
        });
      });
    });

    it('is false without that aspect', function(done) {
      buildJada().then(jada => {
        jada.hasAspect('breeder').then(present => {
          expect(present).to.equal(false);
          done();
        });
      });
    });
  });

  describe('canAddAspect', function() {
    it('is false if the current aspect is present', function(done) {
      buildJada().then(jada => {
        CharacterAspect.create({ character_id:jada.id, code:'gynephilic', strength:500 }).then(() => {
          jada.canAddAspect('gynephilic').then(possible => {
            expect(possible).to.equal(false);
            done();
          });
        });
      });
    });

    it('is false if a mirrored aspect is present', function(done) {
      buildJada().then(jada => {
        CharacterAspect.create({ character_id:jada.id, code:'gynephilic', strength:500 }).then(() => {
          jada.canAddAspect('gynephobic').then(possible => {
            expect(possible).to.equal(false);
            done();
          });
        });
      });
    });

    it('is false if refuted by a furry character', function(done) {
      CharacterBuilder.build({ species:'lupin' }).then(character => {
        character.canAddAspect('beast-repulsed').then(possible => {
          expect(possible).to.equal(false);
          done();
        });
      });
    });

    it('is false if an existing aspect refutes it', function(done) {
      buildJada().then(jada => {
        CharacterAspect.create({ character_id:jada.id, code:'androphilic', strength:500 }).then(() => {
          jada.canAddAspect('cock-skeptic').then(possible => {
            expect(possible).to.equal(false);
            done();
          });
        });
      });
    });

    it('can require a pussy', function(done) {
      CharacterBuilder.build({ species:'elf', gender:'male' }).then(character => {
        character.canAddAspect('pussy-slut').then(possible => {
          expect(possible).to.equal(false);
          done();
        });
      });
    });

    it('can require a cock', function(done) {
      CharacterBuilder.build({ species:'elf', gender:'female' }).then(character => {
        character.canAddAspect('cock-slut').then(possible => {
          expect(possible).to.equal(false);
          done();
        });
      });
    });

    it('can require tits', function(done) {
      CharacterBuilder.build({ species:'elf', gender:'male' }).then(character => {
        character.canAddAspect('tit-slut').then(possible => {
          expect(possible).to.equal(false);
          done();
        });
      });
    });
  });

  describe('addAspect', function() {
    it('adds an aspect to the character', function(done) {
      buildJada().then(jada => {
        jada.addAspect('gynephilic', { level:2 }).then(() => {
          jada.getCharacterAspects().then(aspects => {
            expect(aspects[0].code).to.equal('gynephilic');
            expect(aspects[0].level).to.equal(2);
            done();
          });
        });
      });
    });

    it('adds the aspect at the strength specified', function(done) {
      buildJada().then(jada => {
        jada.addAspect('gynephilic', { strength:666 }).then(() => {
          jada.getCharacterAspects().then(aspects => {
            expect(aspects[0].code).to.equal('gynephilic');
            expect(aspects[0].strength).to.equal(666);
            expect(aspects[0].level).to.equal(2);
            done();
          });
        });
      });
    });

    it('will not add a mirrored aspect', function(done) {
      buildJada().then(jada => {
        jada.addAspect('anal-shy', { level:1 }).then(() => {
          jada.addAspect('anal-slut', { level:1 }).then().catch(() => {
            jada.getCharacterAspects().then(aspects => {
              expect(aspects.length).to.equal(1);
              done();
            });
          });
        });
      });
    });

    it('will not add a refuted aspect', function(done) {
      buildJada().then(jada => {
        jada.addAspect('androphilic', { level:1 }).then(() => {
          jada.addAspect('cock-skeptic', { level:1 }).then().catch(() => {
            jada.getCharacterAspects().then(aspects => {
              expect(aspects.length).to.equal(1);
              done();
            });
          });
        });
      });
    });
  });

  describe('removeAspect', function() {
    it('removes an aspect', function(done) {
      buildJada().then(jada => {
        jada.addAspect('androphilic', { level:1 }).then(() => {
          jada.removeAspect('androphilic').then(() => {
            jada.hasAspect('androphilic').then(present => {
              expect(present).to.equal(false);
              done();
            });
          });
        });
      });
    });
  });

  describe('adjustAspect', function() {
    it('can adjust an existing aspect', function(done) {
      buildJada().then(jada => {
        jada.addAspect('deviant', { strength:100 }).then(() => {
          jada.adjustAspect('deviant', 50).then(() => {
            jada.getCharacterAspect('deviant').then(aspect => {
              expect(aspect.strength).to.equal(150);
              done();
            });
          });
        });
      });
    });

    it('can delete an aspect by adjusting it down to 0', function(done) {
      buildJada().then(jada => {
        jada.addAspect('deviant', { strength:100 }).then(() => {
          jada.adjustAspect('deviant', -150).then(() => {
            jada.hasAspect('deviant').then(present => {
              expect(present).to.equal(false);
              done();
            });
          });
        });
      });
    });

    it("adds the aspect if the character doesn't currently have it", function(done) {
      buildJada().then(jada => {
        jada.adjustAspect('deviant', 250).then(() => {
          jada.getCharacterAspect('deviant').then(aspect => {
            expect(aspect.strength).to.equal(250);
            done();
          });
        });
      });
    });

    it("adjusts the opposing aspect instead if the character has it.", function(done) {
      buildJada().then(jada => {
        jada.adjustAspect('prudent', 700).then(() => {
          jada.adjustAspect('deviant', 34).then(() => {
            jada.getCharacterAspect('prudent').then(aspect => {
              expect(aspect.strength).to.equal(666);
              done();
            });
          });
        });
      });
    });

    it("will hovever add the aspect if the required aspect is present", function(done) {
      buildJada().then(jada => {
        jada.addAspect('perverted', { strength:1000 }).then(() => {
          jada.adjustAspect('beast-lover', 120).then(() => {
            jada.getCharacterAspect('beast-lover').then(aspect => {
              expect(aspect.strength).to.equal(120);
              done();
            });
          });
        });
      });
    });
  });

});
