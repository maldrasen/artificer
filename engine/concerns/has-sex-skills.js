global.HasSexSkills = { isAppliedTo: function(model) {

  // Returns an object describing how well a character can suck a given cock.
  //   mouthFit: (comfortable, painful, impossible)
  //   throatFit: (comfortable, painful, impossible)
  //   depth: (mm) How far can the cock can be thrust, based on skill and throat width. Assume mouth depth is the same
  //          as mouth width in most instances. (lupins and other furries are more like width/2)
  //   knot: (null, mouth, impossible) Can the cock sucker get the knot in their mouth if there is one?
  //   balls: (none, one, entire) Can they fit the balls in their mouth too, either one ball or the entire scrotum?
  //
  // All of this has to be done because this isn't a normal sex game and there
  // can be a huge size difference between characters. Also, if anyone's
  // curious, the gag reflex has been completely lost from all species.
  //
  // TODO: Need to figure out how cock knobs and spines fit into this as well.
  model.prototype.canSuckCock = async function(cock) {
    if (cock == null) { throw "canSuckCock() should not be called without a cock." }

    const mouth = await this.getMouth();
    const oral = await this.getCharacterAspect('oral');

    let mouthFit = 'impossible';
    let throatFit = 'impossible';
    let depth = 0;
    let balls = 'none';
    let knot;

    if (cock.width <= mouth.width) { mouthFit = 'painful'; }
    if (cock.width <= mouth.throatWidth) { throatFit = 'painful'; }
    if (cock.width <= mouth.comfortableWidth) { mouthFit = 'comfortable'; }
    if (cock.width <= mouth.comfortableThroatWidth) { throatFit = 'comfortable'; }

    if (mouthFit != 'impossible') {
      // The character cannot get the entire cock in their throat. If this is a
      // close fit though their cock sucking skill adds some percentage of the
      // cock length to what they could normally take. Otherwise, just use the
      // mouth depth.
      if (throatFit == 'impossible') {
        depth = mouthDepth(this, mouth);
        depth += oralSkillBonus(oral, cock, mouth, depth);
      }

      // If they can get the cock into their throat, assume they can take the
      // entire length, even if it's painful.
      if (throatFit != 'impossible') { depth = cock.length; }
    }

    if (cock.testicleWidth <= mouth.width) { balls = 'one'; }
    if (cock.scrotumWidth <= mouth.width) { balls = 'entire'; }

    if (cock.hasKnot) {
      knot = cock.knotWidth <= mouth.width ? 'mouth' : 'impossible'
    }

    return {
      mouthFit,
      throatFit,
      depth,
      balls,
      knot
    };
  }

  function oralSkillBonus(oral, cock, mouth, depth) {
    let remaining = cock.length - depth;

    if (oral && cock.width <= mouth.width * 1.2) {
      if (oral.level == 1) { return Math.ceil(remaining * 0.33); }
      if (oral.level == 2) { return Math.ceil(remaining * 0.50); }
      if (oral.level == 3) { return Math.ceil(remaining * 0.66); }
    }

    return 0;
  }

  // Furries with larger than usual mouth widths (lupins, dragons, etc.) have
  // half the mouth depth, whereas furries with long faces (equians, minotaurs)
  // have twice the mouth depth. Otherwise assume depth is the same as width.
  function mouthDepth(character, mouth) {
    if (['dragon','kobold','lupin','naga','scaven'].indexOf(character.speciesCode) >= 0) { return Math.ceil(mouth.width/2); }
    if (['equian','minotaur'].indexOf(character.speciesCode) >= 0) { return mouth.width * 2; }
    return mouth.width
  }

}};
