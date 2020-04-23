describe("CharacterEquipment", function() {

  async function setup() {
    const p1 = await CharacterEquipment.create({ code:'small-anal-plug',   condition:100 });
    const p2 = await CharacterEquipment.create({ code:'small-anal-plug',   condition:100 });
    const p3 = await CharacterEquipment.create({ code:'big-anal-plug',     condition:100 });
    const p4 = await CharacterEquipment.create({ code:'monster-anal-plug', condition:100 });
    const jada = await SpecHelper.buildJada();
    await jada.equip(p4,'anus');
  }

  it("availableCounts()", function(done) {
    setup().then(() => {
      CharacterEquipment.availableCounts().then(counts => {
        expect(counts['small-anal-plug']).to.equal(2);
        expect(counts['big-anal-plug']).to.equal(1);
        expect(counts['monster-anal-plug']).to.not.exist;
        done();
      })
    });
  });

});
