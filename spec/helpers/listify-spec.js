describe('listify()', function() {

  it("gets a single word", function() {
    expect(listify([{ word:'dick', count:1 }])).to.equal('a single dick');
  });

  it("gets a couple of words", function() {
    expect(listify([{ word:'tit', count:2 }])).to.be.oneOf([
      'a pair of tits',
      'a couple of tits'
    ]);
  });

  it("gets a few words", function() {
    expect(listify([{ word:'fuck', count:3 }])).to.be.oneOf([
      'three fucks',
      'a few fucks',
    ]);
  });

  it("gets two single words", function() {
    expect(listify([
      { word:'dick', count:1 },
      { word:'cunt', count:1 }
    ])).to.equal('a dick and a cunt');
  });

  it("gets two words (1 and 2)", function() {
    expect(listify([
      { word:'dick', count:1 },
      { word:'ass', count:2 }
    ])).to.be.oneOf([
      'a dick and a pair of asses',
      'a dick and a couple of asses'
    ]);
  });

  it("gets two words (2 and 1)", function() {
    expect(listify([
      { word:'dick', count:2 },
      { word:'ass', count:1 }
    ])).to.be.oneOf([
      'an ass and a pair of dicks',
      'an ass and a couple of dicks',
    ]);
  });

  it("gets two words (2 and 2)", function() {
    expect(listify([
      { word:'cunt', count:2 },
      { word:'ass', count:2 }
    ])).to.be.oneOf([
      'two cunts and two asses',
      'a couple of cunts and asses'
    ]);
  });

  it("gets two words (1 and 3)", function() {
    expect(listify([
      { word:'pussy', count:1 },
      { word:'cock', count:3 }
    ])).to.equal('three cocks and a single pussy');
  });

  it("gets two words (3 and 1)", function() {
    expect(listify([
      { word:'pussy', words:'pussies', count:3 },
      { word:'cock', count:1 }
    ])).to.equal('three pussies and a single cock');
  });

  it("gets two words (2 and 21)", function() {
    expect(listify([
      { word:'pussy', words:'pussies', count:2 },
      { word:'cock', count:21 }
    ])).to.equal('two pussies and twenty-one cocks');
  });

  it("gets three words", function() {
    expect(listify([
      { word:'cunt', count:1 },
      { word:'ass', count:1 },
      { word:'tit', count:2 },
    ])).to.be.oneOf([
      'a cunt, an ass, and a pair of tits',
      'a cunt, an ass, and a couple of tits'
    ]);
  });

});
