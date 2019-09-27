describe('BodyBuilder', function() {

  it('uses the height options if present', function(done) {
    CharacterBuilder.build({ species:'rat', body:{ height:1500 }}, character => {
      character.getBody(body => {
        expect(body.convertedHeight).to.equal(59);
        done();
      });
    });
  });

  it('generates random hight based on species and gender', function(done) {
    CharacterBuilder.build({ species:'dragon', gender:'futa' }, character => {
      character.getBody(body => {
        expect(body.convertedHeight).to.be.within(80,130);
        done();
      });
    });
  });

  it('Calculates finger and fist widths and areas based on body height', function(done) {
    CharacterBuilder.build({ species:'elf', body:{ height:1800 }}, character => {
      character.getBody(body => {
        expect(body.fistWidth).to.equal(88);
        expect(body.fingerWidth).to.equal(19);
        expect(body.fistArea).to.equal(6082);
        expect(body.fingerArea).to.equal(284);
        done();
      });
    });
  });

  it('uses skin color values from options first', function(done) {
    CharacterBuilder.build({ species:'elf', body:{ skinColor:'red', skinShade:3 }}, character => {
      character.getBody(body => {
        expect(body.skinColor).to.equal('red');
        expect(body.skinShade).to.equal(3);
        done();
      });
    });
  });

  it('fetches random skin color values from the species otherwise', function(done) {
    CharacterBuilder.build({ species:'dryad' }, character => {
      character.getBody(body => {
        expect(body.skinColor).to.equal('pale-green');
        expect(body.skinShade).to.be.within(1,5);
        done();
      });
    });
  });

  it('uses fur color values from options first', function(done) {
    CharacterBuilder.build({ species:'lupin', body:{ furColor:'gray', furShade:1 }}, character => {
      character.getBody(body => {
        expect(body.furColor).to.equal('gray');
        expect(body.furShade).to.equal(1);
        done();
      });
    });
  });

  it('fetches values from species otherwise', function(done) {
    CharacterBuilder.build({ species:'rat' }, character => {
      character.getBody(body => {
        expect(body.furColor).to.be.oneOf(['black','white','brown','gray']);
        expect(body.furShade).to.be.within(1,5);
        done();
      });
    });
  });

  it('Male Capriens have fur and a goat face', function(done) {
    CharacterBuilder.build({ species:'caprien', gender:'male' }, character => {
      character.getBody(body => {
        expect(body.furColor).to.be.oneOf(['black','brown','gray','white']);
        expect(body.furShade).to.be.within(1,5);
        expect(body.hairColor).to.equal(null);
        expect(body.faceShape).to.equal('goat');
        done();
      });
    });
  });

  it("Female Capriens don't have fur and an elven face", function(done) {
    CharacterBuilder.build({ species:'caprien', gender:'female' }, character => {
      character.getBody(body => {
        expect(body.furColor).to.be.equal(null);
        expect(body.furShade).to.be.equal(null);
        expect(body.hairColor).to.exist;
        expect(body.faceShape).to.equal('elf');
        done();
      });
    });
  });

  it('uses scale color value from options first, and matches eye color', function(done) {
    CharacterBuilder.build({ species:'dragon', body:{ scaleColor:'purple' }}, character => {
      character.getBody(body => {
        expect(body.scaleColor).to.equal('purple');
        expect(body.eyeColor).to.equal('purple');
        done();
      });
    });
  });

  it('fetches scale color values from species otherwise', function(done) {
    CharacterBuilder.build({ species:'naga' }, character => {
      character.getBody(body => {
        expect(body.scaleColor).to.be.oneOf(['green','gray']);
        done();
      });
    });
  });

  it('matchs fur and tail color', function(done) {
    CharacterBuilder.build({ species:'neko', gender:'futa' }, character => {
      character.getBody(body => {
        expect(body.furColor).to.equal(body.hairColor);
        done();
      });
    });
  });


  it('uses hair color value from options first', function(done) {
    CharacterBuilder.build({ species:'elf', body:{ hairColor:'purple' }}, character => {
      character.getBody(body => {
        expect(body.hairColor).to.equal('purple');
        done();
      });
    });
  });

  it('fetches values from species next', function(done) {
    CharacterBuilder.build({ species:'dark-elf' }, character => {
      character.getBody(body => {
        expect(body.hairColor).to.equal('white');
        done();
      });
    });
  });

  it('fetches values from the species hair color list otherwise', function(done) {
    CharacterBuilder.build({ species:'minotaur' }, character => {
      character.getBody(body => {
        expect(body.hairColor).to.be.oneOf(['red','dark-brown','brown','black']);
        done();
      });
    });
  });

  it('randomly selects a human hair color if human was selected as the hair color', function(done) {
    CharacterBuilder.build({ species:'elf' }, character => {
      character.getBody(body => {
        expect(body.hairColor).to.exist;
        expect(body.hairColor).to.not.equal('human');
        done();
      });
    });
  });

  it ('sets the tail shape', function(done) {
    CharacterBuilder.build({ species:'elf', body:{ tailShape:'rat' }}, character => {
      character.getBody(body => {
        expect(body.tailShape).to.equal('rat');
        done();
      });
    });
  });

  it ('uses the tail shape from the species', function(done) {
    CharacterBuilder.build({ species:'centaur' }, character => {
      character.getBody(body => {
        expect(body.tailShape).to.equal('horse');
        done();
      });
    });
  });

  it ('is null otherwise', function(done) {
    CharacterBuilder.build({ species:'elf' }, character => {
      character.getBody(body => {
        expect(body.tailShape).to.not.exist;
        done();
      });
    });
  });

});
