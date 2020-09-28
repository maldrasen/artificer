describe('HasEquipment', function() {

  async function makeEquipment(code) {
    return await CharacterEquipment.create({ code:code, condition:100 });
  }

  describe("equip()", function() {
    it("equips an item on a character", function(done) {
      SpecHelper.buildJada().then(jada => {
        makeEquipment('basket').then(basket => {
          jada.equip(basket,'tool-1').then(() => {
            jada.getAllEquipmentForView().then(equipment => {
              expect(equipment['tool-1'].code).to.equal('basket');
              done();
            });
          });
        });
      });
    });

    it("replaces equipped items", function(done) {
      SpecHelper.buildJada().then(jada => {
        makeEquipment('small-anal-plug').then(smallPlug => {
          makeEquipment('big-anal-plug').then(bigPlug => {
            jada.equip(smallPlug,'anus').then(() => {
              jada.equip(bigPlug,'anus').then(() => {
                jada.getAllEquipmentForView().then(equipment => {
                  expect(equipment['anus'].code).to.equal('big-anal-plug');
                  done();
                });
              });
            });
          });
        });
      });
    });

  });

});
