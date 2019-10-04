Components.EventView.Warning = {

  // The warning page is essentially a javascript alert. It shows a message that
  // must be dismissed by pressing the button. I don't think this is used
  // anywhere but the first page of the first event.
  build() {
    $('#currentEvent .event-content').append(`
      <div id="warningFrame"><div class="flex">
        <div class="warning-image"></div>
        <div class="warning-message">
          <span class="fg-danger">Warning.</span> The main character of Artificer is an extremely perverse sexual
          sadist. While some of this game's most extreme content is avoidable the majority of it really isn't. If
          that's not your thing, it would probably be best to just to not play this at all. Seriously. Trust me. This
          shit's going to be fucked up.
        </div></div>
        <div class="warning-footer"><a href="#" class="button-warning close-warning">Acknowledged</a></div>
      </div>`);
  },

  accept() {
    $('#warningFrame').remove();
    Components.EventView.nextStage();
  }

}
