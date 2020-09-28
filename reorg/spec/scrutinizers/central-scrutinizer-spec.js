describe('CentralScrutinizer', function() {

  it('Checks day number', function(done) {
    Game.start().then(() => {
      Game.setDayNumber(69);
      CentralScrutinizer.meetsRequirements('game.dayNumber>17').then(past => {
        CentralScrutinizer.meetsRequirements('game.dayNumber=69').then(today => {
          CentralScrutinizer.meetsRequirements('game.dayNumber<131').then(future => {
            expect(past).to.be.true;
            expect(today).to.be.true;
            expect(future).to.be.true;
            done();
          });
        });
      });
    });
  });

  it('checks or conditions', function(done) {
    Flag.setAll({ tits:'small', ass:'big' });
    CentralScrutinizer.meetsRequirements([{ or:['flag.tits=big','flag.ass=big']}]).then(yep => {
      CentralScrutinizer.meetsRequirements([{ or:['flag.tits=big','flag.cock=big']}]).then(nope => {
        expect(yep).to.be.true;
        expect(nope).to.be.false;
        done();
      });
    })
  });

  it('checks combined and/or conditions', function(done) {
    Flag.setAll({ cock:'huge', tits:'big', ass:'big' });
    CentralScrutinizer.meetsRequirements(['flag.cock=huge',{ or:['flag.tits=big','flag.ass=big']}]).then(yep => {
      CentralScrutinizer.meetsRequirements(['flag.cock=not-huge',{ or:['flag.tits=big','flag.ass=big']}]).then(nope => {
        expect(yep).to.be.true;
        expect(nope).to.be.false;
        done();
      });
    })
  });


  it('Checks flag values', function(done) {
    Flag.set('anus.flavor','grape');
    CentralScrutinizer.meetsRequirements('flag.anus.flavor=grape').then(yep => {
      CentralScrutinizer.meetsRequirements('flag.anus.flavor=lemon').then(nope => {
        expect(yep).to.be.true;
        expect(nope).to.be.false;
        done();
      });
    });
  });

  it('Checks flag presence', function(done) {
    Flag.set('anus.flavor','grape');
    CentralScrutinizer.meetsRequirements('flag.anus.flavor').then(yep => {
      CentralScrutinizer.meetsRequirements('flag.pussy.flavor').then(nope => {
        expect(yep).to.be.true;
        expect(nope).to.be.false;
        done();
      });
    });
  });

  it("Checks state values", function(done) {
    CentralScrutinizer.meetsRequirements('state.gallonsOfCum>=37',null,{ state:{ gallonsOfCum:40 } }).then(yep => {
      CentralScrutinizer.meetsRequirements('state.gallonsOfCum>=37',null,{ state:{ gallonsOfCum:30 } }).then(nope => {
        expect(yep).to.be.true;
        expect(nope).to.be.false;
        done();
      });
    });
  });

  describe("checkComparisonOperation()", function() {
    it('checks =', function() {
      expect(CentralScrutinizer.checkComparisonOperation('3','=','3')).to.be.true;
      expect(CentralScrutinizer.checkComparisonOperation('3','=','4')).to.be.false;
    });

    it('checks <=', function() {
      expect(CentralScrutinizer.checkComparisonOperation('3','<=','2')).to.be.false;
      expect(CentralScrutinizer.checkComparisonOperation('3','<=','3')).to.be.true;
      expect(CentralScrutinizer.checkComparisonOperation('3','<=','4')).to.be.true;
    });

    it('checks >=', function() {
      expect(CentralScrutinizer.checkComparisonOperation('3','>=','2')).to.be.true;
      expect(CentralScrutinizer.checkComparisonOperation('3','>=','3')).to.be.true;
      expect(CentralScrutinizer.checkComparisonOperation('3','>=','4')).to.be.false;
    });

    it ('checks <', function() {
      expect(CentralScrutinizer.checkComparisonOperation('2','<','3')).to.be.true;
      expect(CentralScrutinizer.checkComparisonOperation('3','<','3')).to.be.false;
    });

    it ('checks >', function() {
      expect(CentralScrutinizer.checkComparisonOperation('4','>','3')).to.be.true;
      expect(CentralScrutinizer.checkComparisonOperation('3','>','3')).to.be.false;
    });
  });

  describe('checkEquipment()', function() {
    async function setup() {
      const p1 = await CharacterEquipment.create({ code:'huge-anal-plug', condition:100 });
      const p2 = await CharacterEquipment.create({ code:'huge-anal-plug', condition:100 });
      const p3 = await CharacterEquipment.create({ code:'monster-anal-plug', condition:100 });

      const jada = await SpecHelper.buildJada({});
      await jada.equip(p1,'anus');
    }

    it('checks available presence', function(done) {
      setup().then(_ => {
        CentralScrutinizer.meetsRequirements('equipment.available.monster-anal-plug').then(yep => {
          CentralScrutinizer.meetsRequirements('equipment.available.small-anal-plug').then(nope => {
            expect(yep).to.be.true;
            expect(nope).to.be.false;
            done();
          });
        });
      });
    });

    it('checks available count', function(done) {
      setup().then(_ => {
        CentralScrutinizer.meetsRequirements('equipment.available.huge-anal-plug=1').then(yep => {
          CentralScrutinizer.meetsRequirements('equipment.available.huge-anal-plug=2').then(nope => {
            expect(yep).to.be.true;
            expect(nope).to.be.false;
            done();
          });
        });
      });
    });

    it('checks total presence', function(done) {
      setup().then(_ => {
        CentralScrutinizer.meetsRequirements('equipment.all.monster-anal-plug').then(yep => {
          CentralScrutinizer.meetsRequirements('equipment.all.small-anal-plug').then(nope => {
            expect(yep).to.be.true;
            expect(nope).to.be.false;
            done();
          });
        });
      });
    });

    it('checks total count', function(done) {
      setup().then(_ => {
        CentralScrutinizer.meetsRequirements('equipment.all.huge-anal-plug=2').then(yep => {
          CentralScrutinizer.meetsRequirements('equipment.all.huge-anal-plug=1').then(nope => {
            expect(yep).to.be.true;
            expect(nope).to.be.false;
            done();
          });
        });
      });
    });
  });

  describe('checkResource()', function() {
    it('checks for item presence', function(done) {
      Resource.add('blood-berries',50).then(() => {
        CentralScrutinizer.meetsRequirements('resource.blood-berries').then(check => {
          expect(check).to.be.true;
          done();
        });
      });
    });

    it('checks for item presence (negative)', function(done) {
      CentralScrutinizer.meetsRequirements('resource.blood-berries').then(check => {
        expect(check).to.be.false;
        done();
      });
    });

    it('checks for item quantity', function(done) {
      Resource.add('blood-berries',50).then(() => {
        CentralScrutinizer.meetsRequirements('resource.blood-berries=50').then(check => {
          expect(check).to.be.true;
          done();
        });
      });
    });

    it('checks for item quantity (negative)', function(done) {
      Resource.add('blood-berries',50).then(() => {
        CentralScrutinizer.meetsRequirements('resource.blood-berries>=100').then(check => {
          expect(check).to.be.false;
          done();
        });
      });
    });
  });

});