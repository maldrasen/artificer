Event.build('game-start-2', {
  // TODO: Background, a field with the keep in the far distance.

  stages:[{
    pages: [
      { text:`I open my eyes for the first time and take a look around. It’s a bleak and barren landscape.` },
      { text:`A rocky and cold windswept plain with sparse vegetation. Just some short spiky grass that, come to think
              of it, is rather uncomfortable to lie down in.` },
      { text:`I stand up and slowly turn about, taking it all in. The land slopes steeply downwards into dense forests
              that surround this high plateau. And in the center of it all stands a tall forlorn keep.` },
      { text:`The memories of my past have faded away like a half remembered dream, but waking here can't be a
              coincidence.` },
      { text:`I'm not sure how, but I must have planned this.` },
      { text:`Even from this distance it's clear that the keep lies abandoned. Its wooden roofs have caved in and thick
              vines creep up its walls.` },
      { text:`It is shelter though. I look down at my body, nude and goosefleshed, and I realize that this
              uncomfortable stinging sensation might be me freezing to death.`, requires:'player.not-furry' },
      { text:`It is shelter though. I look down at my body, and though it's covered in thick fur, the biting winds of
              this frigid lands are stripping me of precious heat.`, requires:'player.furry' },
      { text:`I need to get inside quick. I can't help but spend a few seconds admiring my naked body first though.` }
    ]
  },{
    requires:['player.has-tits','player.tits.smaller-than-average'],
    pages: [
      { text:`Looking down I see that I have given myself small, perfectly formed tits.` },
      { text:`The cool autumn breeze blowing over my bare chest though has made my nipples hard enough to cut glass.` },
    ]
  },{
    requires:['player.has-tits','player.tits.average'],
    pages: [
      { text:`Looking down I see that I have given myself a shapely pair of reasonably sized breasts.` },
      { text:`Not too large, not too small&hellip;` },
      { text:`Just perfectly sized to hold in your hands.` },
      { text:`The cool autumn breeze blowing over my bare chest though has made my nipples hard enough to cut glass.` },
    ]
  },{
    requires:['player.has-tits','player.tits.bigger-than-average'],
    pages: [
      { text:`Looking down I see that I have given myself impressivly large breasts.` },
      { text:`I give a little shake and smile at the way the jiggle.` },
      { text:`The cool autumn breeze blowing over my bare chest though has made my nipples hard enough to cut glass.` },
    ]
  },{
    requires:['player.has-cock','player.cock.average'],
    pages: [
      { text:`I reach down and take a hold of my cock, feeling it's heft.` },
      { text:`It's of average size I would say. Large enough to do what it needs to, but not so large as to be
              inconvenient.` },
    ]
  },{
    requires:['player.has-cock','player.cock.big'],
    pages: [
      { text:`I reach down and take a hold of my large cock, feeling it's heft.` },
      { text:`I couldn't help but give myself a bigger than average cock. One must look the part after all.` },
    ]
  },{
    requires:['player.has-cock','player.cock.bigger-than-big'],
    pages: [
      { text:`I reach down and take a hold of my huge cock, feeling it's heft.` },
      { text:`I couldn't help but give myself a massive cock. Everyone loves dick after all.` },
    ]
  },{
    pages: [
      { text:`While I'd love to spend some more time exploring my new body I have other pressing matters at hand. I
              need to get inside that keep before nightfall, and so I begin the long lonely walk to what will
              ultimately be my new home.` },

      // TODO: Background, outside of the keep.
      { text:`It takes a little over an hour to reach the deserted keep, and in that time I saw no signs of
              civilization whatsoever.` },
      { text:`It makes me wonder though. If no one lives here, or anywhere even close by, then why build a
              fortress here?` },
      { text:`Perhaps it once served as a watchtower, in some long ago conflict. Far enough removed from this time that
              the lands that it was meant to watch over have all been reclaimed by nature.` },
      { text:`For such an old structure though it's in remarkably good shape. I would have expected the stonework to be
              crumbling, but it looks both solid and ancient, as if carved from a single great monolith that once stood
              here.` },
      { text:`However, while the stonework is in remarkably good shape, anything that was made of wood has badly
              deteriorated.` },
      { text:`The keep's massive doors lay open, fallen to the ground in a heap of splinters and rust. At least getting
              inside is a trivial matter, although even I'm a bit shocked when I see the keep's central courtyard.` },

      // TODO: Background, horse statue in the central courtyard.
      { text:`In the middle of the courtyard is a statue of a horse. The horse is being penetrated and lifted off of
              the ground by a tentacle cock as wide as a pine tree.` },
      { text:`Bulges beneath the horse's skin show the path the tentacle is taking through his body until ultimately
              the deformed head of the demonic looking cock erupts from the horse's mouth.` },
      { text:`The horse's expression is pure terror and agony, but his own oversized cock juts forward hard and eager.` },
      { text:`It's shocking, but beautifully rendered none the less. I have to force myself to tear my eyes away from
              it and concentrate on the matter at hand; gathering wood for a fire.` },
      { text:`It's getting rather late in the evening now and the high walls of the keep flood the courtyard in shadow.
              I can begin my explorations more fully in the daylight, but for now I had best make camp.` },
    ]
  },{
    formPage: 'splash-screen'
  }]
});
