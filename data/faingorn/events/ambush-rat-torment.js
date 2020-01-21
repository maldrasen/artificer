Event.build('ambush-rat-torment', {
  actors:{ R:'any-scaven' },

  background:{ location:'great-hall', time:'evening' },

  stages:[{
    pages:[
      { text:`I roughly slam the rat up against the wall.` },
      { text:`{{R::gender.He}}'s small enough that I can easily hold {{R::gender.him}} up against the wall with one arm while still leaving my other hand free.` },
      { text:`{{R::gender.His}} eyes bulge out of {{R::gender.his}} head as {{R::gender.he}} struggles for breath, so I‌ ease up on the pressure a little, letting {{R::gender.him}} breathe again.` },
      { text:`{{R::gender.His}} struggling intensifies for half a minute more; {{R::gender.his}} hands pulling at mine, {{R::gender.his}} dangling legs kicking out at nothing.` },
      { text:`Finally {{R::gender.he}} accepts that there isn't anything {{R::gender.he}} can do to break free and hangs limply against the wall in defeat.` },
      { playerSpeaker:true, text:`<span class='player-quote'>"Can you speak?"</span> I‌ ask.` },
      { minionSpeaker:'Rat', text:`<span class='minion-quote'>"Yes!"</span> {{R::gender.he}} squeeks back, <span class='minion-quote'>"No hurt! No kill!"</span>` },
      { playerSpeaker:true, text:`I nod, <span class='player-quote'>"We'll see. I have some questions for you. How you answer them will determine if you live or die."</span>` },
      { minionSpeaker:'Rat', text:`{{R::gender.He}} nods as well as {{R::gender.he}} can with my hand to {{R::gender.his}} throat, <span class='minion-quote'>"What do you want?"</span>` },
      { text:`I briefly consider asking {{R::gender.him}} all the very basics; Where are we? What are you?` },
      { text:`But then, perhaps it wouldn't be wise to reveal that I‌ have absolutely no memory or know anything at all about where we are.` },
      { text:`I‌ need to remain cautious.` },
      { text:`I'd rather not reveal more about myself or my situation than I have to.` },
      { playerSpeaker:true, text:`<span class='player-quote'>"Let's start simple, what is your name?"</span>` },
      { minionSpeaker:'{{R::character.firstName}}', text:`<span class='minion-quote'>"This one is {{R::character.firstName}} {{R::character.lastName}} of the Deep Hole Scaven."</span>` },
      { text:`{{R::gender.His}} name is a barely pronounceable sequence of squeaks.` },
      { text:`Scaven though, that sounds familiar somehow.` },
      { playerSpeaker:true, text:`<span class='player-quote'>"Why are you here? This place is abandoned, or do you and your Deep Holes live here?"</span>` },
      { minionSpeaker:'{{R::character.firstName}}', text:`<span class='minion-quote'>"Abandoned yes,"</span> {{R::gender.he}} chokes out, <span class='minion-quote'>"But we live here still, down in the deep dark."</span>` },
      { playerSpeaker:true, text:`<span class='player-quote'>"Underneath the keep? Interesting."</span>` },
      { text:`I wrack my brain, trying to remember anything I‌ could about the scaven, their society, what motivates them?` },
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
      { playerSpeaker:true, text:`<span class='player-quote'>"There's something I need you to understand scaven."</span>` },
      { playerSpeaker:true, text:`<span class='player-quote'>"This is my keep now."</span>` },
      { playerSpeaker:true, text:`<span class='player-quote'>"Everything within these walls now belongs to me."</span>` },
      { text:`His cock is beginning to grow hard, becoming thick between my fingers, though not yet enough to emerge from his cock sheath.` },
      { text:`With a grin I reach lower and pinch one of his small testicles between my fingers, then using just a trickle of magical power, cause electricity to arc between my fingers.` },
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
      { text:`Her ears turn bright red and she renews her struggling as I‌ expose her chest and begin pinching and tugging on each of her {{R::nipples.length}} long teats at random.` },
      { playerSpeaker:true, text:`<span class='player-quote'>"There's something I need you to understand scaven."</span>` },
      { playerSpeaker:true, text:`<span class='player-quote'>"This is my keep now."</span>` },
      { playerSpeaker:true, text:`<span class='player-quote'>"Everything within these walls now belongs to me."</span>` },
      { text:`With a grin I pinch down harder on one of her nipples, then using just a trickle of magical power, cause electricity to arc between my fingers.` },
      { text:`The scaven jerks and shudders as the electricity courses through her nipple.` },
      { text:`I tighten my grip on her neck to keep her from breaking free.` },
      { text:`I finally release her tit, leaving her limp and gasping in my grasp.` },
    ]
  },{
    pages:[
      { playerSpeaker:true, text:`<span class='player-quote'>"I do have need of servents though, so I'll make you a deal."</span>` },
      { playerSpeaker:true, text:`<span class='player-quote'>"I would like for you to return to your chief and let him know that a powerful wizard is now the {{P::character.title}} of this keep."</span>` },
      { playerSpeaker:true, text:`<span class='player-quote'>"If the Deep Hole Scaven serve me, they will become powerful, and feared again."</span>` },
      { playerSpeaker:true, text:`<span class='player-quote'>"If they do not, I will kill every single one of you, slowly and painfully."</span>` },
      { playerSpeaker:true, text:`<span class='player-quote'>"Do you understand?"</span>` },
      { minionSpeaker:'{{R::character.firstName}}', text:`The scaven slowly nods and with a quivering voice says, <span class='minion-quote'>"Yes, yes {{P::character.title}}, I‌ will go tell the chief this."</span>` },
      { playerSpeaker:true, text:`<span class='player-quote'>"Good,"</span> I say, finally releasing {{R::gender.him}} and letting {{R::gender.him}} drop to the floor, <span class='player-quote'>"You may go."</span>` },
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

  onFinish: async () => {
    await Game.updateLocation('great-hall');
    await EventQueue.enqueueEvent('ambush-rat-end-1');
  },

});
