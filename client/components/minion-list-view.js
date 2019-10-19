Components.MinionListView = (function() {

  function init() {}

  function build(event, minions) {
    $('#mainContent').empty().append($('<div>',{ id:"minionListView" }).append($('#minionListTemplate').html()));
    each(minions, minion => {
      $('#minionListView .minion-list').append(buildMinionFrame(minion));
    });

    Elements.ScrollingPanel.build($('#minionListView .scrolling-panel'));
  }

  function buildMinionFrame(minion) {
    let frame = $($('#minionFrameTemplate').html());
        frame.find('.portrait-frame').append($('<img>',{ src:minion.portrait }));

    return frame;
  }

  return { init, build, buildMinionFrame };

})();



// id: minion.id,
// name: minion.name,
// gender: minion.gender.Male,
// species: minion.species.name,
// portrait: portrait,
// health: health,
// healthWord: healthWord,
// physical: minion.physical,
// mental: minion.mental,
// personal: minion.personal,
// magical: minion.magical,
// currentTask: minion.currentTask,
// role: minion.roleCode,
