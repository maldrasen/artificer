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
      { text:`This place though, it's strange.` },
      { text:`The architecture here, from the way it was constructed to how it was decorated, it's unsettling.` },
      { text:`I wouldn't say that I was disturbed by it; it takes a lot to disturb me.` },
      { text:`The first thing I noticed was that the architecture here is elven, though I'm not exactly sure how I know it's elven.` },
    ]
  },{
    requires: 'player.elf',
    pages:[
      { text:`I am an elf, so perhaps there's some cultural memory that comes along with this form.` },
      { text:`I recognize it because it's the architectural style of my people.` },
    ]
  },{
    requires: 'player.not-elf',
    pages:[
      { text:`I may have no memory, but I find that I do have knowledge.` },
    ]
  },{
    pages:[
      { text:`This place has all the hallmarks of elven construction, sweeping organic forms, stone walls that look like they were grown rather than built.` },
      { text:`Every room seems to be built to allow the maximum amount of natural light in as possible.` },
      { text:`The walls are stone, but they're not solid.` },
      { text:`They act more like bones, just there to maintain the structure of the building while its form is mostly defined by its windows.` },
      { text:`While I feel like all of this is normal, everything else I've seen is decidedly not.` },
      { text:`The architecture here is&hellip; sexual, for lack of a better word.` },
      { text:`I can't imagine that it's the norm for all of a building's ornamentation to be bondage and sadomasochism themed, but that's what we have here.` },
      { text:`From the statues in the great hall alone one might assume that was once a cathedral of some ostentatious sex cult.` },
      { text:`The keep though doesn't have the layout of a church.` },
      { text:`It has the layout of a home.` },
      { text:`A grand home to be sure, with servants quarters and other luxurious amenities, but it is the home of a single family, or perhaps even one single incredibly perverse person.` },
      { text:`I haven't seen a single room in this keep that doesn't have a dick carved into it somewhere.` },
      { text:`And when compared to all of the pierced and gaping assholes, overstuffed wide spread pussies, and bound and smashed tortured tits everywhere, the dicks almost seem pedestrian.` },
      { text:`No subject seems to have been taboo or off limits to the sculpture who made all of this.` },
      { text:`Torture, bestiality, scatophilia, are all well represented in the keep's ornamentation, with all three sometimes combined into a single work.` },
      { text:`It's all quite too much, though I have to assume that must be the point; that the too-muchness of it all is meant to overwhelm, disorient, and perhaps even disgust.` },
      { text:`I do find myself drawn to it though, some of it at least.` },
      { text:`Already I've caught myself just staring at some of the sculptures here, like the statue out in the keep's central courtyard.` },
      { text:`It features a full sized horse, being penetrated and lifted off of the ground by a tentacle cock as wide as a pine tree.` },
      { text:`The horse's expression is pure terror and agony.` },
      { text:`Despite the subject though, it's beautifully rendered.` },
      { text:`The fountain in the entry hall has caught my eye more than once as well.` },
      { text:`A tiny looking Selkie girl sits in the middle of the fountain, her face upturned and mouth opened wide to catch the piss streams of the dozen or so men arranged in a semicircle around her.` },
      { text:`It's quite the piece, and looks like it might actually be a good source of fresh water, even if it is dick water and all.` },
      { text:`At one point, the keep must have been even more depraved and oppulant, back before anything that wasn't nailed down was scavenged away.` },
      { text:`Despite it all though, I think I will grow to like it here.` },
      { text:`For as long as I'm here at least.` },
    ]
  }],

  onFinish: async choices => {
    await AvailableProject.add({ code:'make-crude-fur-clothing' });
    await Game.updateLocation('great-hall');

    Flag.setAll({
      'location.current-study': 'great-hall',
      'location-menu.map':      'unlocked' ,
      'map.cellars':            'unlocked',
      'map.courtyard':          'unlocked',
      'map.great-hall':         'unlocked',
      'map.lower-keep':         'unlocked',
      'map.upper-keep':         'unlocked',
      'player.bed-location':    'great-hall',
      'player.bed-type':        'fur-pile',
    });
  },

});
