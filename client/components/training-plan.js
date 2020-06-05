Components.TrainingPlan = (function() {
  let planData;

  function init() {
    $(document).on('click', '#trainingPlan .training-plan-cancel', Elements.buttonAction(Renderer.sendCancel));
    $(document).on('click', '#trainingPlan .training-plan-confirm', Elements.buttonAction(confirmPlan));
    $(document).on('click','#trainingPlan .add-minion-button', Elements.buttonAction(selectMinion));
    $(document).on('click','#trainingPlan .cancel-training', Elements.buttonAction(cancelTraining));
    $(document).on('click','#trainingPlan .select-course', Elements.buttonAction(selectCourse));
    $(document).on('click','#trainingPlan .cancel-course', Elements.buttonAction(cancelCourse));
  }

  function build(event, data) {
    planData = data;
    Elements.reset();
    $('#mainContent').empty().append($('<div>',{ id:"trainingPlan" }).addClass('can-cancel').append($('#trainingPlanTemplate').html()));
  }

  // === Minion Selection ===
  // Right now, we only have one minion that can train, so this function always
  // sends all minions. When we can select more than one we need to filter the
  // minions array to exclude the ones that are already in the plan.
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
    const classname = `train-minion-${data.minion.id}`

    minionRow.addClass(classname);
    minionRow.data('minionData',data);
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

    new Elements.Tabs({
      tabButtons: `#trainingPlan .${classname} .tab-buttons`,
      tabContainer: `#trainingPlan .${classname} .tab-container`,
    });
  }

  function cancelTraining() {
    $(this).closest('li.minion-plan').remove();
    $('#trainingPlan .add-minion-item').removeClass('hide');
  }

  function addCourseButton(element, course) {
    let button = $('<a>',{ href:'#', class:'select-course button button-small' }).
      append(course.name).
      data('code',course.code);

    button.addClass(course.consentLevels ? `button-consent-${course.consentLevels.normal.level}` : 'button-primary');

    element.find('.course-list').append($('<li>',{ class:'course' }).append(button));
  }

  // === Course Selection ===

  function selectCourse() {
    const course = findCourse($(this));
    const minionElement = $(this).closest('.minion-plan');
    const courseElement = $($('#trainingCourseTemplate').html());

    console.log(course);

    courseElement.find('.top-row .name').append(course.name)
    courseElement.find('.top-row .description').append(course.description)

    if (course.consentLevels) {
      setCourseInfo(courseElement, course,'normal');
    }

    if (Object.keys(course.styleDescriptions||{}).length > 0) {
      courseElement.find('.style-select').removeClass('hide').append(buildStyleSelect(courseElement, course));
    }

    minionElement.find('.course-tab-buttons').addClass('hide');
    minionElement.find('.course-tab-container').addClass('hide');
    minionElement.find('.selected-course').removeClass('hide').append(courseElement);
  }

  function cancelCourse() {
    const minionElement = $(this).closest('.minion-plan');
    minionElement.find('.course-tab-buttons').removeClass('hide');
    minionElement.find('.course-tab-container').removeClass('hide');
    minionElement.find('.selected-course').empty().addClass('hide');
  }

  function findCourse(button) {
    const code = button.data('code');
    const courses = button.closest('.minion-plan').data('minionData').courses;
    return [...courses.physical, ...courses.social, ...courses.sexual].filter(course => course.code == code)[0];
  }

  function setCourseInfo(courseElement, course, style) {
    courseElement.data('selected-style',style);
    courseElement.find('.consent-span').empty().append(Elements.ConsentBadge.build(course.consentLevels[style]));
    courseElement.find('.top-row .name').empty().append(styleLabel(course, style));
    courseElement.find('.top-row .description').empty().append(styleDescription(course, style));
  }

  // This goes in the consent window...
  // $('<span>',{ class:'explanation' }).append(consent.explanation);

  // Builds the radio buttons for the styles if there are more styles than just
  // the normal one. The buttons are sorted so that the normal option is always
  // first.
  function buildStyleSelect(courseElement, course) {
    const choices = Object.keys(course.consentLevels).map(key => ({ label:styleLabel(course, key), value:key })).sort((a,b) => {
      return a.label == course.name ? -1 : a.label.localeCompare(b.label);
    });

    return new Elements.RadioButtons({
      currentValue: 'normal',
      choices: choices,
      onSelect: e => setCourseInfo(courseElement, course, e.value),
    }).element;
  }

  // Given a course named 'Fucking', 'Fucking' is the normal label. Styles
  // should be adjectives that can be tacked onto the front of the course name
  // so that an abusive style becomes 'Abusive Fucking'.
  function styleLabel(course, style) {
    return (style == 'normal') ? course.name : `${style.charAt(0).toUpperCase()}${style.substring(1)} ${course.name}`;
  }

  function styleDescription(course, style) {
    return (style == 'normal') ? course.description : course.styleDescriptions[style]
  }

  // If minions have been added to the plan ensure that a course is selected.
  function confirmPlan() {
    console.log("Confirm Plan.");
  }

  return { init, build, addMinion };

})();
