WorldBuilder.Adjuster = (function() {

  let adjustmentsMade = {};

  function getAdjustmentList(character) {
    return adjustmentsMade[character.id] || [];
  }

  function applyAdjustments(label, adjustments, character) {
    each(adjustments, (rawAdjustment) => {
      WorldBuilder.Controls.log(`${label} includes an adjustment > ${rawAdjustment}`,{ level:4, indent:2 });

      let adjustment = rawAdjustment.split('.')[0];
      let level = parseInt(rawAdjustment.split('.')[1]||'1');
      let aspect = Aspect.where({ code:adjustment })[0];

      aspect ?
        applyAspectAdjustment(aspect, level, character):
        applyAdjustment(adjustment, character);
    });
  }

  function applyAspectAdjustment(aspect, level, character) {
    if (character.hasAspect(aspect.code) == false) {
      return character.addAspect(aspect.code, { level:level });
    }

    let characterAspect = character.getCharacterAspect(aspect.code);
    if (characterAspect.level < level) {
      characterAspect.setLevel(level);
    }
  }

  function applyAdjustment(adjustment, character) {
    if (adjustmentsMade[character.id] == null) { adjustmentsMade[character.id] = []; }

    if (adjustment == 'strong')    { return applyPhysical(character, adjustmentsMade[character.id], 'strong');    }
    if (adjustment == 'weak')      { return applyPhysical(character, adjustmentsMade[character.id], 'weak');      }
    if (adjustment == 'smart')     { return applyMental(character,   adjustmentsMade[character.id], 'smart');     }
    if (adjustment == 'stupid')    { return applyMental(character,   adjustmentsMade[character.id], 'stupid');    }
    if (adjustment == 'ugly')      { return applyPersonal(character, adjustmentsMade[character.id], 'ugly');      }
    if (adjustment == 'beautiful') { return applyPersonal(character, adjustmentsMade[character.id], 'beautiful'); }
    if (adjustment == 'magical')   { return applyMagical(character,  adjustmentsMade[character.id]);              }

    if (Balls.canApplyFlag(adjustment)) {
      let balls = character.getBalls();
          balls.applyFlag(adjustment);
          balls.save();
      return adjustmentsMade[character.id].push(adjustment);
    }

    if (Body.canApplyFlag(adjustment)) {
      let body = character.getBody();
          body.applyFlag(adjustment, adjustmentsMade[character.id]);
          body.save();
      return adjustmentsMade[character.id].push(adjustment);
    }

    if (Cock.canApplyFlag(adjustment)) {
      let cock = character.getCock();
          cock.applyFlag(adjustment);
          cock.save();
      return adjustmentsMade[character.id].push(adjustment);
    }

    if (Tits.canApplyFlag(adjustment)) {
      let tits = character.getTits();
          tits.applyFlag(adjustment, adjustmentsMade[character.id]);
          tits.save();
      return adjustmentsMade[character.id].push(adjustment);
    }

    if (Pussy.canApplyFlag(adjustment)) {
      let pussy = character.getPussy();
          pussy.applyFlag(adjustment);
          pussy.save();
      return adjustmentsMade[character.id].push(adjustment);
    }

    if (Nipples.canApplyFlag(adjustment)) {
      let nipples = character.getNipples();
          nipples.applyFlag(adjustment);
          nipples.save();
      return adjustmentsMade[character.id].push(adjustment);
    }

    throw `Unknown Adjustment ${adjustment}`;
  }

  function applyPhysical(character, adjustments, flag) {
    if (adjustments.indexOf('strong') >= 0 && flag == 'weak') { throw `Contradicting physical adjustment ${flag}`; }
    if (adjustments.indexOf('weak') >= 0 && flag == 'strong') { throw `Contradicting physical adjustment ${flag}`; }
    if (flag == 'strong') { character.setPhysical(Math.round(character.physical*(1.5+Math.random()))); }
    if (flag == 'weak') {   character.setPhysical(Math.round(character.physical/(1.5+Math.random()))); }
    adjustmentsMade[character.id].push(flag);
  }

  function applyMental(character, adjustments, flag) {
    if (adjustments.indexOf('smart') >= 0 && flag == 'stupid') { throw `Contradicting mental adjustment ${flag}`; }
    if (adjustments.indexOf('stupid') >= 0 && flag == 'smart') { throw `Contradicting mental adjustment ${flag}`; }
    if (flag == 'smart') {  character.setMental(Math.round(character.mental*(1.5+Math.random()))); }
    if (flag == 'stupid') { character.setMental(Math.round(character.mental/(1.5+Math.random()))); }
    adjustmentsMade[character.id].push(flag);
  }

  function applyPersonal(character, adjustments, flag) {
    if (adjustments.indexOf('beautiful') >= 0 && flag == 'ugly') { throw `Contradicting personal adjustment ${flag}`; }
    if (adjustments.indexOf('ugly') >= 0 && flag == 'beautiful') { throw `Contradicting personal adjustment ${flag}`; }
    if (flag == 'beautiful') { character.setPersonal(Math.round(character.personal*(1.5+Math.random()))); }
    if (flag == 'ugly') {      character.setPersonal(Math.round(character.personal/(1.5+Math.random()))); }
    adjustmentsMade[character.id].push(flag);
  }

  function applyMagical(character, adjustments) {
    character.setMagical(Math.round(character.magical*(1.5+Math.random())));
    adjustmentsMade[character.id].push('magical');
  }

  return {
    getAdjustmentList: getAdjustmentList,
    applyAdjustments: applyAdjustments,
  }

})();
