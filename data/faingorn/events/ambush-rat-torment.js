Event.build('ambush-rat-torment', {
  background:{ location:'great-hall', time:'evening' },

  stages:[{
    pages:[
      { text:`I roughly slam the rat up against the curved stone wall.` },
      { text:`{{R::gender.He}}'s small enough that I can easily hold {{R::gender.him}} up against the wall with one arm while still leaving my other hand free.` },
      { text:`{{R::gender.His}} eyes bulge out of {{R::gender.his}} head as {{R::gender.he}} struggles for breath, so I ease up on the pressure a little, letting {{R::gender.him}} breathe again.` },
      { text:`{{R::gender.His}} struggling intensifies for half a minute more; {{R::gender.his}} hands pulling at mine.` },
      { text:`Finally {{R::gender.he}} accepts that there isn't anything {{R::gender.he}} can do to break free and hangs limply against the wall in defeat.` },
      { playerSpeaker:true, text:`"Can you speak?" I ask.` },
      { minionSpeaker:'Rat', text:`"Yes!" {{R::gender.he}} squeeks back, "No hurt! No kill!"` },
      { playerSpeaker:true, text:`I nod, "We'll see. I have some questions for you. How you answer them will determine if you live or die."` },
      { minionSpeaker:'Rat', text:`{{R::gender.He}} nods as well as {{R::gender.he}} can with my hand to {{R::gender.his}} throat, "What do you want?"` },
      { text:`I briefly consider asking {{R::gender.him}} all the very basics; Where are we? What are you?` },
      { text:`But then, perhaps it wouldn't be wise to reveal that I have absolutely no memory or know anything at all about where we are.` },
      { text:`I need to remain cautious.` },
      { text:`I'd rather not reveal more about myself or my situation than I have to.` },
      { playerSpeaker:true, text:`"Let's start simple, what is your name?"` },
      { actorSpeaker:'R', text:`"This one is {{R::character.firstName}} {{R::character.lastName}} of the Deep Hole Scaven."` },
      { text:`{{R::gender.His}} name is a barely pronounceable sequence of squeaks.` },
      { text:`Scaven though, that sounds familiar somehow.` },
      { playerSpeaker:true, text:`"Why are you here? This place is abandoned, or do you and your Deep Holes live here?"` },
      { actorSpeaker:'R', text:`"Abandoned yes," {{R::gender.he}} chokes out, "But we live here still, down in the deep dark."` },
      { playerSpeaker:true, text:`"Underneath the keep? Interesting."` },
      { text:`I wrack my brain, trying to remember anything I could about the scaven, their society, what motivates them?` },
      { text:`Nothing.` },
      { text:`I'm going to have to play this by ear and hope for the best.` },
      { text:`Given the nature and state of {{R::gender.his}} dress I can only guess that the scaven have some sort of tribal structure, and that overall they're not doing that well.` },
      { text:`I can use this to my advantage.` },
    ]
  },{
    requires:`minion(R).has-cock`,
    pages:[
      { text:`I reach down with my other hand and tug his hide loincloth aside, fully exposing his furry sheath and small grape sized balls.` },
      { text:`He starts struggling again, but a quick shove against his neck puts an end to that.` },
      { text:`I gently stroke the back of my hand up and down his sheath, making him visibly shudder in spite of himself.` },
      { playerSpeaker:true, text:`"There's something I need you to understand scaven."` },
      { playerSpeaker:true, text:`"This is my keep now."` },
      { playerSpeaker:true, text:`"Everything within these walls now belongs to me."` },
      { text:`His cock is beginning to grow hard, becoming thick between my fingers, though not yet enough to emerge from his cock sheath.` },
      { text:`With a grin I reach lower and pinch one of his small testicles between my fingers, then using just a trickle of magical power, cause electricity to arc between my fingers.`, effects:['actor(R) fear 1']},
      { text:`The scaven jerks and shudders as the electricity courses through his balls.` },
      { text:`I need to tighten my grip on both his neck and ballsack to keep him from breaking free.` },
      { text:`I finally release his balls, leaving him limp and gasping in my grasp.` },
    ]
  },{
    requires:`minion(R).no-cock`,
    pages:[
      { text:`I reach down with my other hand and yank her hide vest open, exposing her furry chest.` },
      { text:`Her tits are small, but what she lacks in size she makes up for in quantity.` },
      { text:`As I pull her vest completely off of her I see she has a total of twelve tits, in two rows of six that extend from her chest down to her flat stomach.` },
      { text:`Each tiny breast is capped with a big {{R::nipples.grape}} sized nipple that would look normal on an average sized person, but look huge on her tiny form.` },
      { text:`Her ears turn bright red and she renews her struggling as I expose her chest and begin pinching and tugging on each of her {{R::nipples.length}} long teats at random.` },
      { playerSpeaker:true, text:`"There's something I need you to understand scaven."` },
      { playerSpeaker:true, text:`"This is my keep now."` },
      { playerSpeaker:true, text:`"Everything within these walls now belongs to me."` },
      { text:`With a grin I pinch down harder on one of her nipples, then using just a trickle of magical power, cause electricity to arc between my fingers.`, effects:['actor(R) fear 1']},
      { text:`The scaven jerks and shudders as the electricity courses through her nipple.` },
      { text:`I tighten my grip on her neck to keep her from breaking free.` },
      { text:`I finally release her tit, leaving her limp and gasping in my grasp.` },
    ]
  },{
    pages:[
      { playerSpeaker:true, text:`"I do have need of servents though, so I'll make you a deal."` },
      { playerSpeaker:true, text:`"I would like for you to return to your chief and let him know that a powerful wizard is now the {{P::character.title}} of this keep."` },
      { playerSpeaker:true, text:`"If the Deep Hole Scaven serve me, they will become powerful, and feared again."` },
      { playerSpeaker:true, text:`"If they do not, I will kill every single one of you, slowly and painfully."` },
      { playerSpeaker:true, text:`"Do you understand?"` },
      { actorSpeaker:'R', text:`The scaven slowly nods and with a quivering voice says, "Yes, yes {{P::character.title}}, I will go tell the chief this."` },
      { playerSpeaker:true, text:`"Good," I say, finally releasing {{R::gender.him}}, "You may go."` },
      { text:`The scaven sprints from the room, running on all fours.` },
      { text:`As soon as {{R::gender.he}} leaves though I collapse into a nearby chair.` },
      { text:`I'm panting, sweating.` },
      { text:`Heh, some powerful wizard, I can barely use magic at all without almost collapsing.` },
      { text:`Flying really takes it out of me, and I don't think I could have kept the electricity flowing for much longer.` },
      { text:`I don't know if my gambit will work.`},
      { text:`I really doubt that I could make good on my threat if it came to that.` },
      { text:`Only time will tell I suppose.` },
    ]
  }],

  onFinish: async choices => {
    await Game.updateLocation('great-hall');
    await EventQueue.enqueueEvent('ambush-rat-end-1',{ actors:{ R:choices.event.actorIDs.R }});
  },

});
