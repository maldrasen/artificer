Components.EventView.ChooserPage = (function() {

  function init() {
    $(document).on('click', '#currentEvent .chooser-accept', Elements.buttonAction(acceptChoice));
  }

  // A chooser page has the following arguments on the stage:
  //     chooserTitle:       (*) Title
  //     options:            (*) List of choice options with the following attributes:
  //       - value:          (*) value to set.
  //       - label:          (*) label name,
  //       - body:           (*) choice description,
  //       - imageResource:  (*) image resource loader arguments,
  //       - locked:         Show the option, but make it non-selectable.
  //
  //       (choices can also be a string like "gender-choices" or "species-choices", in which case a function will be
  //        called to fetch the list from some canned function defined by a mod.)
  //
  //     text:         Text to display in the footer.
  //     name:         Name under which to save the chosen value.
  //
  //     onAccept:     A named function called with the chosen value when the choice is accepted. We can't just stick a
  //                   actual accept function onto the page because the page data is coming from the engine and run in
  //                   the client, and functions can't be safely serialized and deserialized (at least I don't think
  //                   they can.)
  //
  //                   Events that are called onAccet are therefor stored on the chooser component and called by name.
  //                   Mods that add onAccept functions will just need to add the functions onto the
  //                   Elements.Chooser.OnAcceptFunctions object when their mod is loaded in the client. When adding an
  //                   onAccept function the function name should be prefixed with the event code.
  //
  //                   An onAccept function needs to select the next stage. The entire reason for including it is so
  //                   choices made in the chooser can show a different stage depending on the choice made.
  //
  function build() {
    let stage = Components.EventView.currentStage();
    let choices = Components.EventView.getChoices();
    let content = $('#currentEvent .chooser-content').empty().removeClass('hide').append($($("#chooserPageTemplate").html()));
    let options = (typeof stage.options === 'string') ? Elements.Chooser.OptionsFunctions[stage.options](choices) : stage.options;

    stage.chooser = new Elements.Chooser({
      title: stage.chooserTitle,
      element: $('#currentEvent .chooser-target'),
      height: (stage.chooserHeight || 500),
      width: (stage.chooserWidth || 800),
      imageWidth: (stage.imageWidth || 500),
    });

    each(options, option => {
      stage.chooser.addChoice(option);
    });

    content.find('.chooser-frame').css({ width:(stage.chooserWidth || 800) });
    content.find('.text').append(stage.text);
  }

  function acceptChoice() {
    let stage =  Components.EventView.currentStage();
    let value = stage.chooser.selectedValue;
    if (stage.name) { Components.EventView.setChoice(stage.name,value) }
    stage.onAccept == null ? Components.EventView.nextStage() : Elements.Chooser.OnAcceptFunctions[stage.onAccept](value);
  }

  return { init, build };

})();
