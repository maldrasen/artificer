global.Composer = (function() {

  async function render() {
    if (typeof Browser == 'undefined') { return; }

console.log("Rendering...")

    // If a current event is set then it should be rendered. This will happen
    // when events are chained together.
    // if (Game.currentEvent()) { return renderEvent(Game.currentEvent()); }

    // Game.log(`Rendering [${Game.phase()}]`,true)

    // If there isn't a current event set in the Game then try to find one.
    // This function will advance the game time until a phase with an event is
    // found or it will return null if there are no events.
    // const eventData = await Game.pullNextEvent();
    // if (eventData) {
    //   Game.log(`Rendering Event: ${eventData.event.code}`);
    //   return renderEvent(eventData);
    // }


    // If there's no active event or anything like that:
    // Game.log(`Rendering Location: ${Game.location()}`);
    // renderLocation(Game.location());
  }

  function renderEvent(eventData) {
    // Event.prepare(eventData).then(prepared => {
    //   Browser.send('render.event',prepared);
    // });
  }

  function renderLocation(code) {
    // Location.lookup(code).buildView().then(view => {
    //   Browser.send('render.location',view);
    // });
  }

  return {
    render,
  };

})();
