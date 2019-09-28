describe.only('HasAspects', function() {

  function withJada(callback) {
    CharacterBuilder.build({ firstName:'Jada', lastName:'Fire', species:'elf', gender:'futa' }, jada => {
      callback(jada);
    });
  }

  describe('getCharacterAspects', function() {
    it('returns an empty array when empty', function(done) {
      withJada(jada => {
        jada.getCharacterAspects(aspects => {
          expect(aspects).to.eql([]);
          done();
        });
      });
    });

    it('returns an array of CharacterAspect objects', function(done) {
      withJada(jada => {
        jada.addAspect('cum-lover', { level:1 }, () => {
          setTimeout(()=>{
            jada.getCharacterAspects(aspects => {
              let codes = aspects.map(aspect => aspect.code);
              expect(codes.length).to.equal(3);
              expect(codes).to.include('androphilic');
              expect(codes).to.include('cock-lover');
              expect(codes).to.include('cum-lover');
              done();
            });
          },50);
        });
      });
    });
  });

  describe('hasAspect', function() {
    it('checks for aspects by code', function(done) {
      withJada(jada => {
        CharacterAspect.create({ character_id:jada.id, code:'breeder', strength:1000 }).then(() => {
          jada.hasAspect('breeder', present => {
            expect(present).to.equal(true);
            done();
          });
        });
      });
    });

    it('is false without that aspect', function(done) {
      withJada(jada => {
        jada.hasAspect('breeder', present => {
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
          jada.canAddAspect('gynephilic', possible => {
            expect(possible).to.equal(false);
            done();
          });
        });
      });
    });

    it('is false if a mirrored aspect is present', function(done) {
      withJada(jada => {
        CharacterAspect.create({ character_id:jada.id, code:'gynephilic', strength:500 }).then(() => {
          jada.canAddAspect('gynephobic', possible => {
            expect(possible).to.equal(false);
            done();
          });
        });
      });
    });

    it('is false if refuted by a furry character', function(done) {
      CharacterBuilder.build({ species:'lupin' }, character => {
        character.canAddAspect('beast-repulsed', possible => {
          expect(possible).to.equal(false);
          done();
        });
      });
    });

    it('is false if a dependent aspect is needed', function(done) {
      withJada(jada => {
        jada.canAddAspect('golden', possible => {
          expect(possible).to.equal(false);
          done();
        });
      });
    });

    it('is false if an existing aspect refutes it', function(done) {
      withJada(jada => {
        CharacterAspect.create({ character_id:jada.id, code:'androphilic', strength:500 }).then(() => {
          jada.canAddAspect('cock-skeptic', possible => {
            expect(possible).to.equal(false);
            done();
          });
        });
      });
    });

    it('can require a pussy', function(done) {
      CharacterBuilder.build({ species:'elf', gender:'male' }, character => {
        character.canAddAspect('pussy-slut', possible => {
          expect(possible).to.equal(false);
          done();
        });
      });
    });

    it('can require a cock', function(done) {
      CharacterBuilder.build({ species:'elf', gender:'female' }, character => {
        character.canAddAspect('cock-slut', possible => {
          expect(possible).to.equal(false);
          done();
        });
      });
    });

    it('can require tits', function(done) {
      CharacterBuilder.build({ species:'elf', gender:'male' }, character => {
        character.canAddAspect('tit-slut', possible => {
          expect(possible).to.equal(false);
          done();
        });
      });
    });
  });

  describe('addAspect', function() {
    it('adds an aspect to the character', function(done) {
      withJada(jada => {
        jada.addAspect('gynephilic', { level:2 }, () => {
          jada.getCharacterAspects(aspects => {
            expect(aspects[0].code).to.equal('gynephilic');
            expect(aspects[0].level).to.equal(2);
            done();
          });
        });
      });
    });

    it('adds the aspect at the strength specified', function(done) {
      withJada(jada => {
        jada.addAspect('gynephilic', { strength:666 }, () => {
          jada.getCharacterAspects(aspects => {
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
        jada.addAspect('revolting', { level:1 }, () => {
          setTimeout(() => {
            jada.getCharacterAspects(aspects => {
              let codes = aspects.map(aspect => aspect.code);
              expect(codes.length).to.equal(4);
              expect(codes).to.include('revolting');
              expect(codes).to.include('golden');
              expect(codes).to.include('shameless');
              expect(codes).to.include('perverted');
              done();
            });
          },50);
        });
      });
    });

    it('will not add a mirrored aspect', function(done) {
      withJada(jada => {
        jada.addAspect('anal-shy', { level:1 }, shyAspect => {
          jada.addAspect('anal-slut', { level:1 }, slutAspect => {
            jada.getCharacterAspects(aspects => {
              expect(shyAspect.code).to.equal('anal-shy');
              expect(slutAspect).to.equal(false);
              expect(aspects.length).to.equal(1);
              done();
            });
          });
        });
      });
    });

    it('will not add a refuted aspect', function(done) {
      withJada(jada => {
        jada.addAspect('androphilic', { level:1 }, androAspect => {
          jada.addAspect('cock-skeptic', { level:1 }, cockAspect => {
            jada.getCharacterAspects(aspects => {
              expect(androAspect.code).to.equal('androphilic');
              expect(cockAspect).to.equal(false);
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
        jada.canRemoveAspect('revolting', answer => {
          expect(answer).to.equal(false);
          done();
        });
      });
    });

    it('is true if there are no dependent aspects', function(done) {
      withJada(jada => {
        jada.addAspect('gynephilic', { level:1 }, () => {
          jada.canRemoveAspect('gynephilic', answer => {
            expect(answer).to.equal(true);
            done();
          });
        });
      });
    });

    it('is false if there are dependent aspects', function(done) {
      withJada(jada => {
        jada.addAspect('golden', { level:1 }, () => {
          setTimeout(() => {
            jada.hasAspect('shameless',present=> {
              jada.canRemoveAspect('shameless', answer => {
                expect(present).to.equal(true);
                expect(answer).to.equal(false);
                done();
              });
            });
          },50);
        });
      });
    });
  });

  describe('removeAspect', function() {
    it('removes an aspect', function(done) {
      withJada(jada => {
        jada.addAspect('androphilic', { level:1 }, () => {
          jada.removeAspect('androphilic', () => {
            jada.hasAspect('androphilic', present => {
              expect(present).to.equal(false);
              done();
            });
          });
        });
      });
    });

    it('allows aspects to be removed in order', function(done) {
      new Promise(resolve => {
        withJada(jada => { resolve(jada); });
      }).then(character => {
        return new Promise(resolve => {
          character.addAspect('revolting', { level:1 }, () => { resolve(character); });
        });
      }).then(character => {
        return new Promise(resolve => {
          character.removeAspect('revolting', () => { resolve(character); });
        });
      }).then(character => {
        return new Promise(resolve => {
          character.removeAspect('golden', () => { resolve(character); });
        });
      }).then(character => {
        return new Promise(resolve => {
          character.removeAspect('perverted', () => { resolve(character); });
        });
      }).then(character => {
        return new Promise(resolve => {
          character.removeAspect('shameless', () => { resolve(character); });
        });
      }).then(character => {
        character.getCharacterAspects(aspects => {
          expect(aspects.length).to.equal(0);
          done();
        });
      });
    });

    it("won't remove an aspect with a dependent aspect", function(done) {
      withJada(jada => {
        jada.addAspect('golden', { level:1 }, () => {
          setTimeout(() => {
            jada.removeAspect('perverted', removed => {
              jada.hasAspect('perverted', present => {
                expect(removed).to.equal(false);
                expect(present).to.equal(true);
                done();
              });
            });
          },50);
        });
      });
    });
  });

  describe('forceAspects', function(done) {
    it('forces the character to only have the specified aspects', function(done) {
      withJada(jada => {
        jada.addAspect('submissive', { level:1 }, () => {
          jada.forceAspects({ golden:3 }, () => {
            jada.getCharacterAspects(aspects => {
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
        jada.addAspect('deviant', { strength:100 }, () => {
          jada.adjustAspect('deviant', 50, () => {
            jada.getCharacterAspect('deviant', aspect => {
              expect(aspect.strength).to.equal(150);
              done();
            });
          });
        });
      });
    });

    it('can delete an aspect by adjusting it down to 0', function(done) {
      withJada(jada => {
        jada.addAspect('deviant', { strength:100 }, () => {
          jada.adjustAspect('deviant', -150, () => {
            setTimeout(() => {
              jada.hasAspect('deviant', present => {
                expect(present).to.equal(false);
                done();
              });
            },20);
          });
        });
      });
    });

    it("adds the aspect if the character doesn't currently have it", function(done) {
      withJada(jada => {
        jada.adjustAspect('deviant', 250, () => {
          jada.getCharacterAspect('deviant', aspect => {
            expect(aspect.strength).to.equal(250);
            done();
          });
        });
      });
    });

    it("adjusts the opposing aspect instead if the character has it.", function(done) {
      withJada(jada => {
        jada.adjustAspect('prudent', 700, () => {
          jada.adjustAspect('deviant', 34, () => {
            jada.getCharacterAspect('prudent', aspect => {
              expect(aspect.strength).to.equal(666);
              done();
            });
          });
        });
      });
    });

    it("does nothing when adjusting an aspect if the required aspect isn't present.", function(done) {
      withJada(jada => {
        jada.adjustAspect('revolting', 500, () => {
          jada.getCharacterAspects(aspects => {
            expect(aspects.length).to.equal(0);
            done();
          });
        });
      });
    });

    it("will hovever add the aspect if the required aspect is present", function(done) {
      withJada(jada => {
        jada.addAspect('perverted', { strength:1000 }, () => {
          jada.adjustAspect('beast-lover', 120, () => {
            jada.getCharacterAspect('beast-lover', aspect => {
              expect(aspect.strength).to.equal(120);
              done();
            });
          });
        });
      });
    });
  });

});
