Components.TrainingPlan = (function() {
  let planData;

  function init() {
    $(document).on('click','#trainingPlan .add-minion-button', Elements.buttonAction(selectMinion));
  }

  function build(event, data) {
    Elements.reset();
    planData = data;
    $('#mainContent').empty().append($('<div>',{ id:"trainingPlan" }).append($('#trainingPlanTemplate').html()));
  }

  function selectMinion() {
    Components.MinionSelectDialog.open({
      title:'Select Minion to Train',
      minions: planData.minions,
      limit: 1,
      minimum: 1,
      onConfirm: selected => {
        Renderer.sendCommand('training-plan.add-minion',{ id:selected[0] })
      },
    });
  }

  function addMinion(event, data) {
    const minionRow = $($('#trainingMinionPlanTemplate').html());
    const mainArea = $('#trainingPlan .main-area').append(minionRow);

    minionRow.data('id',data.minion.id);
    minionRow.find('.portrait').append($('<img>',{ src:data.minion.portrait }));
    minionRow.find('.name').append(data.minion.name);
    minionRow.find('.lust-word').append(data.minion.lustWord);
    minionRow.find('.lust-value').append(data.minion.lust);

    each(data.courses.physical, course => { addCourseButton(minionRow.find('.physical-tab'), course); });
    each(data.courses.social, course => { addCourseButton(minionRow.find('.social-tab'), course); });
    each(data.courses.sexual, course => { addCourseButton(minionRow.find('.sexual-tab'), course); });

    if (mainArea.find('li.minion-plan').length == planData.minionCount) {
      mainArea.find('.add-minion-item').addClass('hide');
    }
  }

  function addCourseButton(element, course) {
    element.find('.course-list').append(
      $('<li>',{ class:'course' }).append(
        $('<a>',{ href:'#', class:'button button-small' }).
          append(course.name).
          data('code',course.code)));
  }

  return { init, build, addMinion };

})();
