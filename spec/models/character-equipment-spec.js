describe("CharacterEquipment", function() {

  describe("availableCounts()", function() {
    async function setup() {
      const p1 = await CharacterEquipment.create({ code:'small-anal-plug',   condition:100 });
      const p2 = await CharacterEquipment.create({ code:'small-anal-plug',   condition:100 });
      const p3 = await CharacterEquipment.create({ code:'big-anal-plug',     condition:100 });
      const p4 = await CharacterEquipment.create({ code:'monster-anal-plug', condition:100 });
      const jada = await SpecHelper.buildJada();
      await jada.equip(p4,'anus');
    }

    it("gets available counts", function(done) {
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

  describe("degrade()", function() {

    async function setup() {
      const plug = await CharacterEquipment.create({ code:'small-anal-plug', condition:100 });
      const basket_1 = await CharacterEquipment.create({ code:'basket', condition:1 });
      const basket_2 = await CharacterEquipment.create({ code:'basket', condition:100 });
      const sling = await CharacterEquipment.create({ code:'sling', condition:100 });

      const jada = await SpecHelper.buildJada();
      await jada.equip(plug,'anus');
      await jada.equip(basket_1,'tool-1');
      await jada.equip(basket_2,'tool-2');
      await jada.equip(sling,'weapon');

      return jada;
    }

    it("can degrade hunting equipment", function(done) {
      setup().then(jada => {
        jada.dutyCode = 'hunter';
        CharacterEquipment.degrade(jada).then(story => {
          jada.getEquipment('weapon').then(sling => {
            expect(story).to.equal(`<span class='broken-equipment'> </span>`);
            expect(sling.condition).be.within(90,99);
            done();
          });
        });
      });
    });

    it("can breaks foraging equipment", function(done) {
      setup().then(jada => {
        jada.dutyCode = 'forager';
        CharacterEquipment.degrade(jada).then(story => {
          jada.getEquipment('tool-1').then(basket => {
            expect(story).to.contain(`{{C::character.firstName's}} basket broke and can no longer be used.`);
            expect(basket).to.not.exist;
            done();
          });
        });
      });
    });

    it("creates resources when some equipment is broken", function(done) {
      setup().then(jada => {
        jada.dutyCode = 'hunter';
        CharacterEquipment.degrade(jada,100).then(story => {
          jada.getEquipment('weapon').then(sling => {
            expect(story).to.contain(`I was able to recover a single Scrap of Leather from the broken Sling.`);
            expect(sling).to.not.exist;
            done();
          });
        });
      });
    });
  });

});
