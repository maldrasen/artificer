describe('Recipe', function() {

  it("gets a list of unlocked craftable items", function(done) {
    Resource.add('willow-branch',10).then(() => {
      Flag.set('recipe.basket','unlocked').then(() => {
        Recipe.getRecipeListForPlan({ reserved:{} }).then(list => {
          expect(list.length).to.equal(1)
          expect(list[0].name).to.equal('Wicker Basket');
          expect(list[0].enoughResources).to.be.true;
          done();
        });
      });
    });
  });

  it("gets a list of available resources to check against", function(done) {
    Resource.add('willow-branch',15).then(() => {
      Recipe.getAvailableResources({ 'willow-branch':7 }).then(available => {
        expect(available['willow-branch']).to.equal(8);
        done();
      });
    });
  });

  it("checks to see if an item can be built", function(done) {
    Recipe.lookup('basket').enoughResources({ 'willow-branch':10 }).then(possible => {
      expect(possible).to.be.true;
      done();
    });
  });

  it("checks to see if an item cannot be built", function(done) {
    Recipe.lookup('basket').enoughResources({ 'willow-branch':9 }).then(possible => {
      expect(possible).to.be.false;
      done();
    });
  });

  it("gets a sentence describing what resources are missing", function() {
    expect(Recipe.resourceSentence({},{ 'willow-branch':5 })).to.equal(
      "I need five willow branches before I can make this.");
  });

  it("gets a sentence describing what resources are missing when some are available", function() {
    expect(Recipe.resourceSentence({ 'willow-branch':4 },{ 'willow-branch':5 })).to.equal(
      "I need a single willow branch before I can make this.");
  });

  it("gets a sentence describing what resources are missing when there are multiple different resources", function() {
    expect(Recipe.resourceSentence({ stone:10, wood:2, 'willow-branch':4 },{ stone:5, wood:5, 'willow-branch':5 })).to.equal(
      "I need three wood and a single willow branch before I can make this.");
  });

});
