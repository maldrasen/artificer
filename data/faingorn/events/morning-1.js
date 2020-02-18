Event.build('morning-1', {
  location: 'courtyard',
  background:{ location:'courtyard', time:'morning' },

  stages:[{
    pages:[
      { text:`Fuck.` },
      { text:`I hurt all over.` },
      { text:`That's good news in a way.` },
      { text:`It means I'm alive at least.` },
      { text:`I sit up slowly and take a look around.` },
      { text:`I'm sitting in the courtyard of the fortress I saw earlier.` },
      { text:`Or perhaps yesterday.` },
      { text:`It's early morning.` },
      { text:`I think it was early afternoon when those, <i>things</i>, whatever they were, chased me here.` },
      { text:`The fact that they didn't tear me apart while I was passed out means that this place is at least somewhat safe.` },
      { text:`I can't shake the feeling that I'm being watched though.` },
      { text:`I finally stand up and take a long look at the courtyard.` },
      { text:`I don't see anyone.` },
      { text:`The place looks completely abandoned.` },
      { text:`Thick brambles and vines cover most of the ground and creep up the walls.` },
      { text:`A wooden building, long since collapsed in on itself, may have been a stable once.` },
      { text:`Hmm, a lot of places to hide...` },
      { text:`Perhaps I'm just being paranoid, but I should remain cautious until I have a better understanding of my situation here.` },
      { text:`It's warmer here at least.` },
      { text:`I can hear the wind howling, but the high walls that surround the courtyard are shielding me from it.` },
      { text:`Still, I'm completely naked and it feels like it might be early winter.` },
      { text:`I think the best course of action would be to get inside at least, maybe scavenge for some supplies and explore this place a bit.` },
      { text:`Later&hellip;`,  background:{ code:'black' }},
      { text:`I spend most of the day exploring the keep.`, background:{ location:'great-hall', time:'evening' }},
      { text:`It looks like it's been abandoned for decades.` },
      { text:`The roof of the keep's single tower has collapsed, letting in all manner of animals and rainwater.` },
      { text:`Because of the water intrusion the keep's upper floors are almost completely destroyed.` },
      { text:`I didn't find anything at all salvageable up there.` },
      { text:`The ground floor isn't in terrible shape though.` },
      { text:`There are debris, piles of animal bones and scat, but at least it's dry.` },
      { text:`What was once the great hall could be made comfortable I think, so I've decided to set up camp here for the time being.` },
      { text:`There's a large fireplace and plenty of wood from what's left of the rotting furniture.` },
      { text:`It's obvious that the place has already been completely picked over by other scavengers though.` },
      { text:`Rooms that were closed up and dry lie almost completely empty.` },
      { text:`I did manage to find some supplies though, which in truth is a bit odd.` },
      { text:`In one of the smaller rooms someone had hidden a small leather bag stuffed with dried fruit and meat placed upon a large pile of furs.` },
      { text:`If I had to guess it looks like someone had left it there as some kind of emergency cache, perhaps some fur trader making their living out in the nearby wilderness?` },
      { text:`I'll have to deal with them if they return for their goods, but I'm taking them for now.` },
      { text:`I took a bit more than half the furs and laid them out in front of the fireplace, giving me a more comfortable place to bed down for the night.` },
      { text:`The rest I'm going to turn into clothing somehow.` },
      { text:`Perhaps I could make strips of leather out of the bag and use them to strap the furs together somehow?` },
      { text:`It's something I'll have to figure out this evening.` },
      { text:`But for now at least I have food, clothing, and shelter.` },
      { narratorSpeaker:true, text:`During the day you will be able to plan that day's activities.`, alert:{ unlock:"Projects" }},
      { narratorSpeaker:true, text:`For today, add a project to create some crude fur clothing.` },
    ]
  }],

  onFinish: async () => {
    await Game.updateLocation('great-hall');

    await Flag.setAll({
      'location.currentStudy': 'great-hall',
      'locationMenu.map':      'unlocked' ,
      'map.cellars':           'unlocked',
      'map.courtyard':         'unlocked',
      'map.great-hall':        'unlocked',
      'map.lower-keep':        'unlocked',
      'map.upper-keep':        'unlocked',
    });

    await AvailableProject.add({ code:'make-crude-fur-clothing' });
  },

});
