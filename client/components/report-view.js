Components.ReportView = (function() {

  function init() {}

  function build(event, report) {
    $('#mainContent').empty().append($('<div>',{ id:"reportView" }).append($('#reportTemplate').html()));
    $('#reportView').find('.projects .text').append(report.project.text);

    each(report.minions, (minion, id) => {
      addMinionFrame(minion);
    });

    Elements.ScrollingPanel.build($('#reportView .scrolling-panel'));
  }

  function addMinionFrame(minion) {
    const story = minion.work.story;
    const injury = minion.work.injury;
    const flavors = minion.work.flavors;
    const notifications = minion.work.notifications;

    let topRow = $(`<div class='top-row'><div class='minion-name'>${minion.name}</div></div>`);
    let storyRow = $(`<div class='story-row'><span class='story'>${story}</span></div>`);

    if (injury) {
      storyRow.append($('<span>',{ class:'injury-story' }).append(` ${injury}`));
    }

    console.log("=== Build Minion Frame ===")
    // console.log(story);
    // console.log(injury);
    // console.log(flavors);
    // console.log(notifications);

    let minionFrame = $('<li>',{class: 'minion-frame' }).
      append(topRow).
      append(storyRow);

    if (flavors) { minionFrame.append(buildSpoilsRow(flavors)); }

    $('#reportView').find('.minion-list').append(minionFrame);
  }

  function buildSpoilsRow(flavors) {
    let frame = $('<div>',{ class:'spoils-frame' });
    let row = $('<div>',{ class:'spoils-row' }).append(frame);

    each(flavors, flavor => {
      frame.append($(`
        <div class='flavor-icon large-icon'>
          <span class='count'>${flavor.count}</span>
          <span class='name'>${flavor.name}</span>
          <img src='${flavor.icon}' height=40 width=40/>
        </div>
      `));
    });

    return row;
  }

  return {
    init: init,
    build: build,
  };

})();
