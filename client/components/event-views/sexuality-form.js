Components.EventView.SexualityForm = {

  build() {
    $('#currentEvent .event-content').append(`
      <div id='sexualityFormPage' class='chooser-centered-panel'>
        <div class='large-centered-area panel', style='margin-top:50px; margin-bottom:48px;'>
          <div class='explain'>
            The game will use these values to determine what kind of events can spontaneously occur and to pick people
            potentially involved in events. Choosing <span class='fg-strong'>Always</span> for a gender will allow the
            game to generate random sexual acts between the player and characters of that gender. Choosing
            <span class='fg-strong'>Maybe</span> will generate fewer events and endeavor to ask beforehand. Choosing
            <span class='fg-strong'>Never</span> will block sexual content with that gender, mostly... probably.
          </div>
          <div class='form'>
            <div class='row'>
              <label>I like fucking men</label>
              <div id='fuckMen' class='radio-buttons'><a href='#' class='radio-button on' data-value='always'
                >Always</a><a href='#' class='radio-button' data-value='maybe'>Maybe</a><a href='#' class='radio-button'
                data-value='never'>Never</a></div>
            </div>
            <div class='row'>
              <label>I like fucking futas</label>
              <div id='fuckFutas' class='radio-buttons'><a href='#' class='radio-button on' data-value='always'
                >Always</a><a href='#' class='radio-button' data-value='maybe'>Maybe</a><a href='#' class='radio-button'
                data-value='never'>Never</a></div>
            </div>
            <div class='row'>
              <label>I like fucking women</label>
              <div id='fuckWomen' class='radio-buttons'><a href='#' class='radio-button on' data-value='always'
                >Always</a><a href='#' class='radio-button' data-value='maybe'>Maybe</a><a href='#' class='radio-button'
                data-value='never'>Never</a></div>
            </div>
          </div>
          <div class='explain'>
            Other facets of the player character's sexuality including fetish content will be determined through
            gameplay. Participating in more perverse acts will increase the likelihood that such things will happen.
            The game will eventually just assume that the player is in to that sort of thing.
          </div>
        </div>
        <div class='chooser-centered-footer'>
          <div class='action'><a href='#' class="button-primary accept">Accept</a></div>
        </div>
      </div>
    `)
  },

  accept() {
    let choices = {
      men:   ($('#fuckMen').data('value')||'always'),
      futas: ($('#fuckFutas').data('value')||'always'),
      women: ($('#fuckWomen').data('value')||'always'),
    };

    // Sorry, no idea how to make a sex game for asexuals.
    if (! (choices.men=='never' && choices.futas=='never' && choices.women=='never')) {
      $('#sexualityFormPage').remove();
      Components.EventView.updateChoices(choices)
      Components.EventView.nextStage();
    }
  }

}