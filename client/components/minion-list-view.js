Components.MinionListView = (function() {

  function init() {
    $(document).on('click','#minionListView .back-button', Elements.buttonAction(Renderer.sendCancel));

    $(document).on('click','#minionListView.full .minion-frame', function() {
      Renderer.lock();
      Renderer.sendCommand('location.show-minion',$(this).data('id'))
    });
  }

  function build(event, minions) {
    $('#mainContent').empty().append($('<div>',{ id:"minionListView", class:'full' }).append($('#minionListTemplate').html()));
    $('#minionListView .back-bar').removeClass('hide');

    each(minions, minion => {
      $('#minionListView .minion-list').append(buildMinionFrame(minion));
    });

    Elements.ScrollingPanel.build($('#minionListView .scrolling-panel'));
  }

  function buildForPlan(element, minions, callback) {
    element.empty().append($('<div>',{ id:"minionListView", class:'for-plan' }).append($('#minionListTemplate').html()));

    each(minions, minion => {
      let frame = buildMinionFrame(minion);
      element.find('.minion-list').append(frame);
      callback(minion, frame);
    });

    Elements.ScrollingPanel.build($('#minionListView .scrolling-panel'));
  }

  function buildMinionFrame(minion) {
    let frame = $($('#minionFrameTemplate').html());
    frame.addClass(`minion-${minion.id}`);
    frame.data('id',minion.id);
    frame.find('.portrait-frame').append($('<img>',{ src:minion.portrait }));
    frame.find('.top-row .name').append(minion.name);
    frame.find('.top-row .gender').append(minion.gender);
    frame.find('.top-row .species').append(minion.species);
    frame.find('.top-row .health-value').append(minion.health);
    frame.find('.top-row .health-word').append(minion.healthWord);
    frame.find('.top-row .health-section').addClass(`fg-health-${minion.healthClass}`);
    frame.find('.attributes dd.physical').append(minion.physical);
    frame.find('.attributes dd.personal').append(minion.personal);
    frame.find('.attributes dd.mental').append(minion.mental);
    frame.find('.attributes dd.magical').append(minion.magical);

    return frame;
  }

  return {
    init,
    build,
    buildForPlan,
    buildMinionFrame
  };

})();
