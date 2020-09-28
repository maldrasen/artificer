Components.CharacterViews = (function() {

  // Build the aspects panel for the detail views. The aspect panel is common
  // to both the player and the minion detail views, but minions have a few
  // aspects that the player doesn't.
  function buildAspects(view, character, type) {
    const area = view.find('.aspects-area').append($('#characterAspectsTemplate').html());

    area.find('.attributes dd.physical .value').append(character.physical);
    area.find('.attributes dd.physical .word').append(character.physicalWord);
    area.find('.attributes dd.personal .value').append(character.personal);
    area.find('.attributes dd.personal .word').append(character.personalWord);
    area.find('.attributes dd.mental .value').append(character.mental);
    area.find('.attributes dd.mental .word').append(character.mentalWord);
    area.find('.attributes dd.magical .value').append(character.magical);
    area.find('.attributes dd.magical .word').append(character.magicalWord);

    if (type == 'minion') {
      area.find('.attributes .fear').removeClass('hide');
      area.find('.attributes dd.fear .value').append(character.fear);
      area.find('.attributes dd.fear .word').append(character.fearWord);
      area.find('.attributes .loyalty').removeClass('hide');
      area.find('.attributes dd.loyalty .value').append(character.loyalty);
      area.find('.attributes dd.loyalty .word').append(character.loyaltyWord);
      area.find('.attributes .lust').removeClass('hide');
      area.find('.attributes dd.lust .value').append(character.lust);
      area.find('.attributes dd.lust .word').append(character.lustWord);
    }

    addAspects(character.skillAspects,       area.find('.skill-aspects'));
    addAspects(character.personalityAspects, area.find('.personality-aspects'));
    addAspects(character.sexualAspects,      area.find('.sexual-aspects'));
  }

  function addAspects(aspects, element) {
    if (aspects.length > 0) {
      element.removeClass('hide');
      each(aspects, aspect => { element.find('dl').
        append($('<dt>').append(aspect.name)).
        append($('<dd>').append(`<span class='level'>Level ${aspect.level}</span><span class='strength'>${aspect.strength} xp</span>`));
      });
    }
  }

  return {
    buildAspects
  };

})();
