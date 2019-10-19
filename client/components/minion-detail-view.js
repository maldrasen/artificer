Components.MinionDetailView = (function() {
  let minion;

  function init() {}

  function open(event, data) {
    minion = data;
    Renderer.showMinion();
    Renderer.unlock();
  }

  function build() {
    let view = $('#overlayContent .minion-detail-view');

    view.find('.portrait-frame').append($('<img>',{ src:minion.portrait }));
    view.find('.name-section .name').append(minion.name);
    view.find('.name-section .gender').append(minion.gender);
    view.find('.name-section .species').append(minion.species);
    view.find('.top-row .health-value').append(minion.health);
    view.find('.top-row .health-word').append(minion.healthWord);
    view.find('.top-row .health-section').addClass(`fg-health-${minion.healthClass}`);
    view.find('.attributes dd.physical').append(minion.physical);
    view.find('.attributes dd.personal').append(minion.personal);
    view.find('.attributes dd.mental').append(minion.mental);
    view.find('.attributes dd.magical').append(minion.magical);

    Elements.ScrollingPanel.build($('#overlayContent .scrolling-panel'));
  }


  return { init, open, build };

})();
