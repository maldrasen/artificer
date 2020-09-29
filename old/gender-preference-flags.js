// These should be somewhere else.

Flag.alwaysFuckGenderList = function() {
  let always = []

  if (Flag._cache['player.fucks-men'] == 'always')   { always.push('male');   }
  if (Flag._cache['player.fucks-futas'] == 'always') { always.push('futa');   }
  if (Flag._cache['player.fucks-women'] == 'always') { always.push('female'); }

  return always;
}

Flag.maybeFuckGenderList = function() {
  let maybe = []

  if (Flag._cache['player.fucks-men'] == 'maybe')   { maybe.push('male');   }
  if (Flag._cache['player.fucks-futas'] == 'maybe') { maybe.push('futa');   }
  if (Flag._cache['player.fucks-women'] == 'maybe') { maybe.push('female'); }

  return maybe;
}

Flag.genderPreferenceScores = function() {
  let scores = { male:0, female:0, futa:0 };

  if (Flag._cache['player.fucks-men'] == 'always')   { scores.male = 2;   }
  if (Flag._cache['player.fucks-men'] == 'maybe')    { scores.male = 1;   }
  if (Flag._cache['player.fucks-women'] == 'always') { scores.female = 2; }
  if (Flag._cache['player.fucks-women'] == 'maybe')  { scores.female = 1; }
  if (Flag._cache['player.fucks-futas'] == 'always') { scores.futa = 2;   }
  if (Flag._cache['player.fucks-futas'] == 'maybe')  { scores.futa = 1;   }

  return scores;
}

describe("gender preferences", function() {

  function setFlags() {
    Flag.setAll({
      'player.fucks-men':'never',
      'player.fucks-futas':'maybe',
      'player.fucks-women':'always',
    });
  }

  it('gets the "always fuck" gender list', function() {
    setFlags();
    expect(Flag.alwaysFuckGenderList()).to.eql(['female']);
  });

  it('gets the "maybe fuck" gender list', function() {
    setFlags();
    expect(Flag.maybeFuckGenderList()).to.eql(['futa']);
  });

  it('gets the gender preference scores', function() {
    setFlags();
    let compiled = Flag.genderPreferenceScores();
    expect(compiled.male).to.equal(0);
    expect(compiled.futa).to.equal(1);
    expect(compiled.female).to.equal(2);
  });
});
