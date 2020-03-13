global.HasPersonality = (function() {
  const strongInfluence = { '-3':0.1, '-2':0.3, '-1':0.7, '1':1.3, '2':1.7, '3':1.9 };
  const weakInfluence =   { '-3':0.5, '-2':0.7, '-1':0.9, '1':1.1, '2':1.3, '3':1.5 };

  // For the time being there's only a single personality. This function will
  // eventually need to pick a personality based on the character's aspects and
  // attributes. I'm building the framework out now though so that I know what
  // the personality instances will eventually need to implement.
  //
  // This will also need to be called whenever a character changes an aspect
  // that might effect their overall personality. I just need to flag the
  // aspects that effect personality once I know them.
  async function determinePersonality() {
    return await this.update({ personalityCode:'scaven-default' });
  }

  // Get the character's reaction to seeing the player at the start of a
  // summoning scene. This will mostly be determined by the character's fear,
  // loyalty, lust triad.
  async function reactToPlayer() {
    let baseConsent = new ConsentCalculator(this).calculateConsent(1);
    if (baseConsent == 'enthusiastic') {
      return await this.personality.reactToPlayer(this, 'love');
    }
    if (baseConsent == 'consent') {
      return await this.personality.reactToPlayer(this, this.lust > this.loyalty ? 'lusty' : 'friendly');
    }
    if (baseConsent == 'reluctant') {
      return await this.personality.reactToPlayer(this, this.fear > this.loyalty ? 'fearful' : 'resigned');
    }
    if (baseConsent == 'rape') {
      return await this.personality.reactToPlayer(this, this.loyalty < 30 ? 'angry' : 'fearful');
    }
  }

  // Get a reaction from this character when they are shown a cock. The
  // character's aspects and cock's attributes all greatly influence how the
  // character reacts. This function calculates the impressions and passes
  // them off to the individual personalities for the complete reaction.
  //
  // This function also returns the desireability just in case some follow on
  // function wants to do something with it. The desireability should fall
  // somewhere between -9 and 21, but -6 should be treated as very bad and +6
  // as very good. Might get some extra cock worship at around +10.
  async function reactToCock(cock) {
    const cockLover =   await this.getAspectLevel('cock-lover');
    const androphilic = await this.getAspectLevel('androphilic');
    const androphobic = await this.getAspectLevel('androphobic');
    const sizeQueen =   await this.getAspectLevel('size-queen');
    const beastLover =  await this.getAspectLevel('beast-lover');

    let desirability = 0;

    if (cockLover)   { desirability += (cockLover * 2); }
    if (androphilic) { desirability += (androphilic * 2); }
    if (androphobic) { desirability -= (androphobic * 2); }

    if (sizeQueen) {
      if (cock.sizeClass == 'small') { desirability -= sizeQueen }
      if (cock.sizeClass == 'big')   { desirability += sizeQueen }
      if (['huge','monster'].indexOf(cock.sizeClass) >= 0) {
        desirability += (sizeQueen * 2);
      }
    }

    if (beastLover && ['horse','dog','snake','dragon'].indexOf(cock.shape) >= 0) {
      desirability += beastLover;
    }

    // TODO: Once we have more exotic cocks, with spines and knobs and
    //       multicocks and such we need to use the deviant aspect here to
    //       influence the reaction. The reactions need to take all that into
    //       account as well.

    // TODO: We may want a special flag for the first time a character is
    //       seeing the player's dick. There's an element of suprise there that
    //       will be lacking in future events. For now, assume the character is
    //       used to seeing this particular cock.

    return {
      desirability: desirability,
      text: (await this.personality.reactToCock(this, cock, desirability))
    };
  }

  return { isAppliedTo:function(model) {
    model.prototype.determinePersonality = determinePersonality;
    model.prototype.reactToCock = reactToCock;
    model.prototype.reactToPlayer = reactToPlayer;
  }};

})();
