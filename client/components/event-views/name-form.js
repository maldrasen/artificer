Components.EventView.NameForm = {

  build() {
    let comment = Components.EventView.Page.speciesComments[Components.EventView.getChoices().species];
    $('#currentEvent .event-content').append(`
      <div id='nameFormPage' class='chooser-centered-panel'>
        <div class='small-centered-area panel', style='margin-top:100px; margin-bottom:244px;'>
          <ul class='form-list label-size-6 input-size-12 margin-auto big-padding' style='width:252px;'>
            <li><label>Title</label><input type='text' id='title' value='Master'/></li>
            <li><label>First Name</label><input type='text' id='firstName' value='Horsecock'/></li>
            <li><label>Last Name</label><input type='text' id='lastName' value='Murderface'/></li>
          </ul>
        </div>
        <div class='chooser-centered-footer'>
          ${comment} A being needs a name as well. What should I call myself?
          <div class='action'><a href='#' class="button-primary name-accept">Accept</a></div>
        </div>
      </div>
    `)
  },

  accept() {
    let choices = {
      title:     $('#title').val().trim(),
      firstName: $('#firstName').val().trim(),
      lastName:  $('#lastName').val().trim(),
    };

    if (choices.firstName.length == 0 || choices.lastName.length == 0 || choices.title.length == 0) { return false; }
    if (choices.firstName.length > 20 || choices.lastName.length > 20 || choices.title.length > 20) { return false; }

    $('#nameFormPage').remove();
    Components.EventView.updateChoices(choices)
    Components.EventView.nextStage();
  },

}
