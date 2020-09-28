Resolver.Lust = (function() {

  // Apply the character's daily lust adjustment. The character's lust buildup
  // should be somewhere between 0 and 30, but should on average be around 10.
  //  - A high slut aspect will build lust much faster.
  //  - A high chaste aspect will build lust much slower or not at all.
  //  - An unhealthy character's lust may decrease.
  //  - Extreme lust levels like 50 or 100 every day may be possible as well.
  //
  // This function also sets the character's energy back to 2. It's not really
  // part of lust generation, but it's related at least, and it had to go
  // someplace.
  async function applyLust(minion) {
    let slutLevel = 0;
    let slut = await minion.getCharacterAspect('slut');
    let chaste = await minion.getCharacterAspect('chaste');
    let health = await minion.getHealthClass();

    if (slut)   { slutLevel = slut.level; }
    if (chaste) { slutLevel = -chaste.level; }

    let lust = 0;
    if (slutLevel == -2) { lust = Random.upTo(4);  }
    if (slutLevel == -1) { lust = 4 +  Random.upTo(4);  }
    if (slutLevel == 0)  { lust = 8 +  Random.upTo(4);  }
    if (slutLevel == 1)  { lust = 10 + Random.upTo(6);  }
    if (slutLevel == 2)  { lust = 15 + Random.upTo(8);  }
    if (slutLevel == 3)  { lust = 20 + Random.upTo(10); }

    if (health == 'injured')  { lust = Math.floor(lust/2); }
    if (health == 'bad')      { lust = -Random.upTo(5); }
    if (health == 'horrible') { lust = -20 - Random.upTo(10); }
    if (health == 'critical') { lust = -100; }

    let value = minion.lust + lust;
    if (value > 100) { value = 100; }
    if (value < 0)   { value = 0; }

    await minion.update({ lust:value, energy:2 });
  }

  return { applyLust };

})();
