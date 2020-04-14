Event.build('game-start-2', {
  background:{ code:'field' },

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
      { text:`It's of average size I would say. Large enough to do what it needs to, but not so large as to be inconvenient.` },
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
      { text:`I couldn't help but give myself a massive dick.` },
    ]
  },{
    pages: [
      { text:`NEXT` }
    ]
  },{
    formPage: 'splash-screen'
  }]
});
