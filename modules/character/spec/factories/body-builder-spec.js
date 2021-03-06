describe('BodyBuilder', function() {

  it('uses the height options if present', function(done) {
    MinionBuilder.buildMinion({ firstName:'X', species:'scaven', body:{ height:1500 }}).then(character => {
      character.getBody().then(body => {
        expect(body.convertedHeight).to.equal(59);
        done();
      });
    });
  });

  it('generates random hight based on species and gender', function(done) {
    MinionBuilder.buildMinion({ firstName:'X', species:'dragon', gender:'futa' }).then(character => {
      character.getBody().then(body => {
        expect(body.convertedHeight).to.be.within(80,130);
        done();
      });
    });
  });

  it('Calculates finger and fist widths and areas based on body height', function(done) {
    MinionBuilder.buildMinion({ firstName:'X', species:'elf', body:{ height:1800 }}).then(character => {
      character.getBody().then(body => {
        expect(body.fistWidth).to.equal(88);
        expect(body.fingerWidth).to.equal(19);
        expect(body.fistArea).to.equal(6082);
        expect(body.fingerArea).to.equal(284);
        done();
      });
    });
  });

  it('uses skin color values from options first', function(done) {
    MinionBuilder.buildMinion({ firstName:'X', species:'elf', body:{ skinColor:'red', skinShade:3 }}).then(character => {
      character.getBody().then(body => {
        expect(body.skinColor).to.equal('red');
        expect(body.skinShade).to.equal(3);
        done();
      });
    });
  });

  it('fetches random skin color values from the species otherwise', function(done) {
    MinionBuilder.buildMinion({ firstName:'X', species:'dryad' }).then(character => {
      character.getBody().then(body => {
        expect(body.skinColor).to.equal('pale-green');
        expect(body.skinShade).to.be.within(1,5);
        done();
      });
    });
  });

  it('uses fur color values from options first', function(done) {
    MinionBuilder.buildMinion({ firstName:'X', species:'lupin', body:{ furColor:'gray', furShade:1 }}).then(character => {
      character.getBody().then(body => {
        expect(body.furColor).to.equal('gray');
        expect(body.furShade).to.equal(1);
        done();
      });
    });
  });

  it('fetches values from species otherwise', function(done) {
    MinionBuilder.buildMinion({ firstName:'X', species:'scaven' }).then(character => {
      character.getBody().then(body => {
        expect(body.furColor).to.be.oneOf(['black','white','brown','gray']);
        expect(body.furShade).to.be.within(1,5);
        done();
      });
    });
  });

  it('Male Capriens have fur and a goat face', function(done) {
    MinionBuilder.buildMinion({ firstName:'X', species:'caprien', gender:'male' }).then(character => {
      character.getBody().then(body => {
        expect(body.furColor).to.be.oneOf(['black','brown','gray','white']);
        expect(body.furShade).to.be.within(1,5);
        expect(body.faceShape).to.equal('goat');
        done();
      });
    });
  });

  it("Female Capriens don't have fur and an elven face", function(done) {
    MinionBuilder.buildMinion({ firstName:'X', species:'caprien', gender:'female' }).then(character => {
      character.getBody().then(body => {
        expect(body.furColor).to.be.equal(null);
        expect(body.furShade).to.be.equal(null);
        expect(body.hairColor).to.exist;
        expect(body.faceShape).to.equal('elf');
        done();
      });
    });
  });

  it('uses scale color value from options first, and matches eye color', function(done) {
    MinionBuilder.buildMinion({ firstName:'X', species:'dragon', body:{ scaleColor:'purple' }}).then(character => {
      character.getBody().then(body => {
        expect(body.scaleColor).to.equal('purple');
        expect(body.eyeColor).to.equal('purple');
        done();
      });
    });
  });

  it('fetches scale color values from species otherwise', function(done) {
    MinionBuilder.buildMinion({ firstName:'X', species:'naga' }).then(character => {
      character.getBody().then(body => {
        expect(body.scaleColor).to.be.oneOf(['green','gray']);
        done();
      });
    });
  });

  it('matchs fur and tail color', function(done) {
    MinionBuilder.buildMinion({ firstName:'X', species:'neko', gender:'futa' }).then(character => {
      character.getBody().then(body => {
        expect(body.furColor).to.equal(body.hairColor);
        done();
      });
    });
  });


  it('uses hair color value from options first', function(done) {
    MinionBuilder.buildMinion({ firstName:'X', species:'elf', body:{ hairColor:'purple' }}).then(character => {
      character.getBody().then(body => {
        expect(body.hairColor).to.equal('purple');
        done();
      });
    });
  });

  it('fetches values from species next', function(done) {
    MinionBuilder.buildMinion({ firstName:'X', species:'dark-elf' }).then(character => {
      character.getBody().then(body => {
        expect(body.hairColor).to.equal('white');
        done();
      });
    });
  });

  it('fetches values from the species hair color list otherwise', function(done) {
    MinionBuilder.buildMinion({ firstName:'X', species:'minotaur' }).then(character => {
      character.getBody().then(body => {
        expect(body.hairColor).to.be.oneOf(['red','dark-brown','brown','black']);
        done();
      });
    });
  });

  it('randomly selects a human hair color if human was selected as the hair color', function(done) {
    MinionBuilder.buildMinion({ firstName:'X', species:'elf' }).then(character => {
      character.getBody().then(body => {
        expect(body.hairColor).to.exist;
        expect(body.hairColor).to.not.equal('human');
        done();
      });
    });
  });

  it('sets the tail shape', function(done) {
    MinionBuilder.buildMinion({ firstName:'X', species:'elf', body:{ tailShape:'rat' }}).then(character => {
      character.getBody().then(body => {
        expect(body.tailShape).to.equal('rat');
        done();
      });
    });
  });

  it ('uses the tail shape from the species', function(done) {
    MinionBuilder.buildMinion({ firstName:'X', species:'centaur' }).then(character => {
      character.getBody().then(body => {
        expect(body.tailShape).to.equal('horse');
        done();
      });
    });
  });

  it ('is null otherwise', function(done) {
    MinionBuilder.buildMinion({ firstName:'X', species:'elf' }).then(character => {
      character.getBody().then(body => {
        expect(body.tailShape).to.not.exist;
        done();
      });
    });
  });

});
