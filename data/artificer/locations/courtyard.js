
let courtyard = Location.build('courtyard', {
  name: 'Courtyard',
});

courtyard.buildName = function() {
  return new Promise(resolve => {
    resolve(`Ruined Courtyard`);
  });
}

courtyard.buildDescription = function() {
  return new Promise(resolve => {
    // Default: Description at game start.
    resolve(`The courtyard is large but strewn with rubble and choaked with tall weeds. This was no doubt an impressive
      keep at one point. Its high walls have crumbled though, littering the ground with an impressive amount of debris.
      For the moment you have set up a small camp. It's little more than a fire pit ringed with small stones, but at
      least it's sheltered from the wind by what's left of the walls.`);
  });
}
