describe('Adjustments - Body', function() {

  it ('gives dark skin', function(done) {
    CharacterBuilder.build({ species:'nymph', triggers:['dark-skin'] }).then(character => {
      character.getBody().then(body => {
        expect(body.skinShade).to.equal(1);
        done();
      });
    });
  });

  it ('gives light skin', function(done) {
    CharacterBuilder.build({ species:'nymph', triggers:['light-skin'] }).then(character => {
      character.getBody().then(body => {
        expect(body.skinShade).to.equal(5);
        done();
      });
    });
  });

  it ('gives furries dark fur', function(done) {
    CharacterBuilder.build({ species:'lupin', triggers:['dark-skin'] }).then(character => {
      character.getBody().then(body => {
        expect(body.furShade).to.equal(1);
        done();
      });
    });
  });

  it ('gives red hair', function(done) {
    CharacterBuilder.build({ species:'nymph', triggers:['red-hair'] }).then(character => {
      character.getBody().then(body => {
        expect(body.hairColor).to.equal('red');
        done();
      });
    });
  });

  it ('gives purple hair', function(done) {
    CharacterBuilder.build({ species:'nymph', triggers:['purple-hair'] }).then(character => {
      character.getBody().then(body => {
        expect(body.hairColor).to.equal('purple');
        done();
      });
    });
  });

  it ('gives white hair', function(done) {
    CharacterBuilder.build({ species:'nymph', triggers:['white-hair'] }).then(character => {
      character.getBody().then(body => {
        expect(body.hairColor).to.equal('white');
        done();
      });
    });
  });

  it ('gives white fur', function(done) {
    CharacterBuilder.build({ species:'lupin', triggers:['white-hair'] }).then(character => {
      character.getBody().then(body => {
        expect(body.furColor).to.equal('white');
        done();
      });
    });
  });

});
