global.Composer = (function(){

  // When the game state changes the composer needs to create everything in the
  // view for the client to render. In its simplist state this just sends a
  // path to an HTML file for the view to render. In most cases though this
  // will need to create a document object that the client will need to turn
  // into an actual html view.
  function render() {
    console.log("Render Current State...")
  }

  return {
    render: render
  };

})();