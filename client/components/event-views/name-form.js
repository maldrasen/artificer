Components.EventView.NameForm = {

  build() {
    let comment = Components.EventView.Page.speciesComments[Components.EventView.getChoices().species];
    $('#currentEvent .event-content').append(`
      <div id='nameFormPage' class='medium-centered-area panel'>
        <div class='margin-bottom padding-bottom border-light-bottom'>${comment} A being needs a name as well. What should I call myself?</div>
        <ul class='form-list label-size-6 input-size-12 margin-auto' style='width:252px;'>
          <li><label>Title</label><input type='text' id='title' value='Master'/></li>
          <li><label>First Name</label><input type='text' id='firstName' value='Synder'/></li>
          <li><label>Last Name</label><input type='text' id='lastName' value='Rhysh'/></li>
        </ul>
        <div class='align-right margin-top padding-top border-light-top'><a href='#' class="button-primary name-accept">Accept</a></div>
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
