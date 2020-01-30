describe('Location', function() {

  it("gets a list of unlocked craftable items", function(done) {
    Flag.set('recipe.basket','unlocked').then(() => {
      Recipe.getRecipeListForPlan({ reserved:{} }).then(list => {
        expect(list.length).to.equal(1)
        expect(list[0].name).to.equal('Basket');
        done();
      });
    });
  });

  it("checks to see if an item can be built", function(done) {
    Resource.add('willow-branch',10).then(() => {
      Recipe.lookup('basket').canBeBuilt({}).then(possible => {
        expect(possible).to.be.true;
        done()
      })
    })
  });

});
