Components.EventView.GenderForm = {

  build() {
    $('#currentEvent .event-content').append(`
      <div id='genderFormPage' class='chooser-centered-panel'>
        <div class='small-centered-area panel' style='margin-top:30px; margin-bottom:87px'>
          <ul class='form-list label-size-16 input-size-6 margin-auto' style='width:306px;'>
            <li>
              <label>Dick</label>
              <div id='genderDick' class='radio-buttons'>
                <a href='#' class='radio-button' data-value='yes'>Yes</a><a href='#' class='radio-button on' data-value='no'>No</a>
              </div>
            </li>
            <li>
              <label>Tits</label>
              <div id='genderTits' class='radio-buttons'>
                <a href='#' class='radio-button' data-value='yes'>Yes</a><a href='#' class='radio-button on' data-value='no'>No</a>
              </div>
            </li>
            <li class='margin-bottom'>
              <label>Pussy</label>
              <div id='genderPussy' class='radio-buttons'>
                <a href='#' class='radio-button' data-value='yes'>Yes</a><a href='#' class='radio-button on' data-value='no'>No</a>
              </div>
            </li>
            <li><label>Name (man/woman)               </label><input type='text' id='genderName' value='elf'/></li>
            <li><label>Plural (men/women)             </label><input type='text' id='genderPlural' value='elves'/></li>
            <li><label>Descriptive (male/female)      </label><input type='text' id='genderDescriptive' value='elven'/></li>
            <li><label>Subject (he/she)               </label><input type='text' id='genderSubject' value='xe'/></li>
            <li><label>Object (him/her)               </label><input type='text' id='genderObject' value='xem'/></li>
            <li><label>Possessive (his/her)           </label><input type='text' id='genderPossessive' value='xyr'/></li>
            <li><label>Absolute Possessive (his/hers) </label><input type='text' id='genderAbsolute' value='xyrs'/></li>
          </ul>
        </div>
        <div class='chooser-centered-footer'>
          Well now. What pronouns shall I insist that my subjects refer to me by, under pain of death?
          <div class='action'><a href='#' class="button-primary accept">Accept</a></div>
        </div>
      </div>
    `);
  },

  accept() {
    let valid = true;
    let values = {};
    let fields = [
      'genderName',
      'genderPlural',
      'genderDescriptive',
      'genderSubject',
      'genderObject',
      'genderPossessive',
      'genderAbsolute'
    ]

    each(fields, id => {
      values[id] = $(`#${id}`).val().trim();
      if (values[id].length == 0) { valid = false; }
    });

    values.genderDick = $('#genderDick').data('value') || 'no';
    values.genderTits = $('#genderTits').data('value') || 'no';
    values.genderPussy = $('#genderPussy').data('value') || 'no';

    // Yeah, I'm really going to have no idea what to do with a player if they
    // don't have at least one sex organ.
    if (values.genderDick == 'no' && values.genderPussy == 'no') { valid = false; }

    if (valid) {
      $('#genderFormPage').remove();
      Components.EventView.updateChoices(values);
      Components.EventView.nextStage();
    }
  },

}
