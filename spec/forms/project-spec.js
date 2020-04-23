describe("Project", function() {

  describe('readyState() with equipment', function() {
    async function makeBaskets() {
      await CharacterEquipment.create({ code:'basket', condition:100 });
      await CharacterEquipment.create({ code:'basket', condition:100 });
      await CharacterEquipment.create({ code:'basket', condition:100 });
      await CharacterEquipment.create({ code:'basket', condition:100 });
    }

    it("checks to see if there is sufficient equipment", function(done) {
      makeBaskets().then(() => {
        Project.lookup('build-storeroom').readyState().then(state => {
          expect(state.ready).to.be.true;
          done();
        });
      });
    });

    it("makes an excuse if there is insufficient equipment", function(done) {
      Project.lookup('build-storeroom').readyState().then(state => {
        expect(state.ready).to.be.false;
        expect(state.excuse).to.equal("I don't have four wicker baskets.");
        done();
      });
    });
  });

});
