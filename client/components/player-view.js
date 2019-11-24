Components.PlayerView = (function() {

  function init() {}

  function open(event, data) {
    console.log("Open Player View")
    console.log(data)
  }

  function build() {

    // view.find('.portrait-frame').append($('<img>',{ src:minion.portrait }));
    // view.find('.name-section .name').append(minion.name);
    // view.find('.name-section .gender').append(minion.gender);
    // view.find('.name-section .species').append(minion.species);
    // view.find('.top-row .health-value').append(minion.health);
    // view.find('.top-row .health-word').append(minion.healthWord);
    // view.find('.top-row .health-section').addClass(`fg-health-${minion.healthClass}`);
    //
    // view.find('.attributes dd.physical .value').append(minion.physical);
    // view.find('.attributes dd.physical .word').append(minion.physicalWord);
    // view.find('.attributes dd.personal .value').append(minion.personal);
    // view.find('.attributes dd.personal .word').append(minion.personalWord);
    // view.find('.attributes dd.mental .value').append(minion.mental);
    // view.find('.attributes dd.mental .word').append(minion.mentalWord);
    // view.find('.attributes dd.magical .value').append(minion.magical);
    // view.find('.attributes dd.magical .word').append(minion.magicalWord);
    // view.find('.attributes dd.fear .value').append(minion.fear);
    // view.find('.attributes dd.fear .word').append(minion.fearWord);
    // view.find('.attributes dd.loyalty .value').append(minion.loyalty);
    // view.find('.attributes dd.loyalty .word').append(minion.loyaltyWord);
    //
    // view.find('.description-row').append(minion.description);
    //
    // addAspects(minion.skillAspects,       view.find('.skill-aspects'));
    // addAspects(minion.personalityAspects, view.find('.personality-aspects'));
    // addAspects(minion.sexualAspects,      view.find('.sexual-aspects'));
    //
    // Elements.ScrollingPanel.build($('#overlayContent .scrolling-panel'));
    //
    // if (flags['minion.rename'] == 'unlocked') {
    //   view.find('.button.rename-minion').removeClass('hide');
    // }
  }

  // function addAspects(aspects, element) {
  //   each(aspects, aspect => { element.
  //     append($('<dt>').append(aspect.name)).
  //     append($('<dd>').append(`<span class='level'>Level ${aspect.level}</span><span class='strength'>${aspect.strength} xp</span>`));
  //   });
  // }

  return { init, open, build };

})();
