describe('HasAspects', function() {

  function withJada(callback) {
    CharacterBuilder.build({ firstName:'Jada', lastName:'Fire', species:'elf', gender:'futa' }).then(jada => {
      callback(jada);
    });
  }

  describe('getCharacterAspects', function() {
    it('returns an empty array when empty', function(done) {
      withJada(jada => {
        jada.getCharacterAspects().then(aspects => {
          expect(aspects).to.eql([]);
          done();
        });
      });
    });

    it('returns an array of CharacterAspect objects', function(done) {
      withJada(jada => {
        jada.addAspect('cum-lover', { level:1 }).then(() => {
          jada.getCharacterAspects().then(aspects => {
            let codes = aspects.map(aspect => aspect.code);
            expect(codes.length).to.equal(3);
            expect(codes).to.include('androphilic');
            expect(codes).to.include('cock-lover');
            expect(codes).to.include('cum-lover');
            done();
          });
        });
      });
    });
  });

  describe('hasAspect', function() {
    it('checks for aspects by code', function(done) {
      withJada(jada => {
        CharacterAspect.create({ character_id:jada.id, code:'breeder', strength:1000 }).then(() => {
          jada.hasAspect('breeder').then(present => {
            expect(present).to.equal(true);
            done();
          });
        });
      });
    });

    it('is false without that aspect', function(done) {
      withJada(jada => {
        jada.hasAspect('breeder').then(present => {
          expect(present).to.equal(false);
          done();
        });
      });
    });
  });

  describe('canAddAspect', function() {
    it('is false if the current aspect is present', function(done) {
      withJada(jada => {
        CharacterAspect.create({ character_id:jada.id, code:'gynephilic', strength:500 }).then(() => {
          jada.canAddAspect('gynephilic').then(possible => {
            expect(possible).to.equal(false);
            done();
          });
        });
      });
    });

    it('is false if a mirrored aspect is present', function(done) {
      withJada(jada => {
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

    it('is false if a dependent aspect is needed', function(done) {
      withJada(jada => {
        jada.canAddAspect('golden').then(possible => {
          expect(possible).to.equal(false);
          done();
        });
      });
    });

    it('is false if an existing aspect refutes it', function(done) {
      withJada(jada => {
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
      withJada(jada => {
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
      withJada(jada => {
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

    it('optionally includes dependent aspects if needed', function(done) {
      withJada(jada => {
        jada.addAspect('revolting', { level:2 }).then(() => {
          jada.getCharacterAspects().then(aspects => {
            let codes = aspects.map(aspect => aspect.code);
            expect(codes.length).to.equal(4);
            expect(codes).to.include('revolting');
            expect(codes).to.include('golden');
            expect(codes).to.include('shameless');
            expect(codes).to.include('perverted');
            done();
          });
        });
      });
    });

    it('will not add a mirrored aspect', function(done) {
      withJada(jada => {
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
      withJada(jada => {
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

  describe('canRemoveAspect', function() {
    it(`is false if the character doesn't have the aspect`, function(done) {
      withJada(jada => {
        jada.canRemoveAspect('revolting').then(answer => {
          expect(answer).to.equal(false);
          done();
        });
      });
    });

    it('is true if there are no dependent aspects', function(done) {
      withJada(jada => {
        jada.addAspect('gynephilic', { level:1 }).then(() => {
          jada.canRemoveAspect('gynephilic').then(answer => {
            expect(answer).to.equal(true);
            done();
          });
        });
      });
    });

    it('is false if there are dependent aspects', function(done) {
      withJada(jada => {
        jada.addAspect('golden', { level:1 }).then(() => {
          jada.hasAspect('shameless').then(present => {
            jada.canRemoveAspect('shameless').then(answer => {
              expect(present).to.equal(true);
              expect(answer).to.equal(false);
              done();
            });
          });
        });
      });
    });
  });

  describe('removeAspect', function() {
    it('removes an aspect', function(done) {
      withJada(jada => {
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

    it('allows aspects to be removed in order', function(done) {
      withJada(jada => {
        jada.addAspect('revolting', { level:1 }).then(() => {
          jada.removeAspect('revolting').then(() => {
            jada.removeAspect('golden').then(() => {
              jada.removeAspect('perverted').then(() => {
                jada.removeAspect('shameless').then(() => {
                  jada.getCharacterAspects().then(aspects => {
                    expect(aspects.length).to.equal(0);
                    done();
                  });
                });
              });
            });
          });
        });
      });
    });


    it("won't remove an aspect with a dependent aspect", function(done) {
      withJada(jada => {
        jada.addAspect('golden', { level:1 }).then(() => {
          jada.removeAspect('perverted').then(removed => {
            jada.hasAspect('perverted').then(present => {
              expect(removed).to.equal(false);
              expect(present).to.equal(true);
              done();
            });
          });
        });
      });
    });
  });

  describe('forceAspects', function(done) {
    it('forces the character to only have the specified aspects', function(done) {
      withJada(jada => {
        jada.addAspect('submissive', { level:1 }).then(() => {
          jada.forceAspects({ golden:3 }).then(() => {
            jada.getCharacterAspects().then(aspects => {
              expect(aspects.length).to.equal(1);
              expect(aspects[0].code).to.equal('golden');
              expect(aspects[0].level).to.equal(3);
              done();
            });
          });
        });
      });
    });
  });

  describe('adjustAspect', function() {
    it('can adjust an existing aspect', function(done) {
      withJada(jada => {
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
      withJada(jada => {
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
      withJada(jada => {
        jada.adjustAspect('deviant', 250).then(() => {
          jada.getCharacterAspect('deviant').then(aspect => {
            expect(aspect.strength).to.equal(250);
            done();
          });
        });
      });
    });

    it("adjusts the opposing aspect instead if the character has it.", function(done) {
      withJada(jada => {
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

    it("does nothing when adjusting an aspect if the required aspect isn't present.", function(done) {
      withJada(jada => {
        jada.adjustAspect('revolting', 500).then(() => {
          jada.getCharacterAspects().then(aspects => {
            expect(aspects.length).to.equal(0);
            done();
          });
        });
      });
    });

    it("will hovever add the aspect if the required aspect is present", function(done) {
      withJada(jada => {
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
