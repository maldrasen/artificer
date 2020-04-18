Event.build('morning-1-work', {
  background:{ location:'great-hall', time:'morning' },

  stages:[{
    pages:[
      { text:`Later...` },
      { text:`Having fully explored the place I've decided to move my camp into the keep's great hall. It's sheltered
              from the elements and the big stone fireplace really makes the place comfortable with a large enough
              fire.` },
      { text:`After finishing my late breakfast I take a bit more than half the furs I found and lay them out in front
              of the fireplace, giving me a more comfortable place to bed down for the night.` },
      { text:`The rest I'm going to turn into clothing somehow. Perhaps I could make strips of leather out of the bag
              and use them to strap the furs together? It'll be crude, barely passable clothing really, but should keep
              the cold away when I'm away from the fire.` },
      { narratorSpeaker:true, alert:{ unlock:"Projects" }, text:`During the day you will be able to work on various
              projects to repair the keep or otherwise improve your situation.`},
      { narratorSpeaker:true, text:`For today, you should add a project to create some crude fur clothing.` },
    ]
  }],

  onFinish: async choices => {
    GameStage.FlagCollections.setDefaults();
    await AvailableProject.add({ code:'make-crude-fur-clothing' });
    await Game.updateLocation('great-hall');
  },

});
