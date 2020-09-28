Event.build('ambush-rat-torment', {

  stages:[{
    pages:[
      { text:`I roughly slam the rat up against the curved stone wall. {{He}}'s small enough that I can easily hold
          {{him}} up against the wall with one arm while still leaving my other hand free. {{His}} eyes bulge out of
          {{his}} head as {{he}} struggles for breath, so I ease up on the pressure a little, letting {{him}} breathe
          again.` },
      { text:`{{His}} struggling intensifies for half a minute more; {{his}} hands pulling at mine. Finally {{he}}
          accepts that there isn't anything {{he}} can do to break free and hangs limply against the wall in defeat.` },
      { playerSpeaker:true, text:`"Can you speak?" I ask.` },
      { otherSpeaker:'Rat', text:`"Yes!" {{he}} squeeks back, "No hurt! No kill!"` },
      { playerSpeaker:true, text:`I nod, "We'll see. I have some questions for you. How you answer them will determine
          if you live or die."` },
      { otherSpeaker:'Rat', text:`{{He}} nods as well as {{he}} can with my hand to {{his}} throat, "What do you want?"` },
      { text:`I briefly consider asking {{him}} all the very basics; Where are we? What are you? But then, perhaps it
          wouldn't be wise to reveal that I have absolutely no memory or know anything at all about where we are.` },
      { text:`I need to remain cautious. I shouldn't reveal more about myself or my situation than I have to.` },
      { playerSpeaker:true, text:`"Let's start simple, what is your name?"` },
      { actorSpeaker:'R', text:`"This one is {{R::character.firstName}} {{R::character.lastName}} of the Deep Hole Scaven."` },
      { text:`{{His}} name is a barely pronounceable sequence of squeaks. Scaven though, that sounds familiar somehow.` },
      { playerSpeaker:true, text:`"Why are you here? This place is abandoned, or do you and your Deep Holes live here?"` },
      { actorSpeaker:'R', text:`"Abandoned yes," {{he}} chokes out, "But we live here still, down in the deep dark."` },
      { playerSpeaker:true, text:`"Underneath the keep? Interesting."` },
      { text:`I wrack my brain, trying to remember anything I could about the scaven, their society, what motivates them?` },
      { text:`Nothing.` },
      { text:`I'm going to have to play this by ear and hope for the best. It's obvious that they live in some sort of
          tribal society. Given the state of {{his}} clothing I can only guess that overall they're not doing that well.` },
      { text:`I can use this to my advantage.` },
    ]
  },{
    requires:`minion(R).has-cock`,
    pages:[
      { text:`I reach down with my other hand and tug his hide loincloth aside, fully exposing his furry sheath and
          small grape sized balls.` },
      { text:`He starts struggling again, but a quick shove against his neck puts an end to that.` },
      { playerSpeaker:true, text:`I gently stroke the back of my hand up and down his sheath, making him visibly
          shudder in spite of himself. "There's something I need you to understand scaven. This is my keep now.
          Everything within these walls now belongs to me."` },
      { text:`His cock is beginning to grow hard, becoming thick between my fingers, though not yet enough to emerge
          from his cock sheath. With a sadistic grin I reach lower and pinch one of his small testicles between my
          fingers, then using just a trickle of magical power, cause electricity to arc between my fingers.`,
          effects:['actor(R) fear 1']},
      { text:`The scaven jerks and shudders as the electricity courses through his balls. I need to tighten my grip on
          both his neck and ballsack to keep him from breaking free.` },
      { text:`After what must seem like an unreasonably long time to him, I finally release his balls, leaving him limp
          and gasping in my grasp.` },
    ]
  },{
    requires:`minion(R).no-cock`,
    pages:[
      { text:`I reach down with my other hand and yank her hide vest open, exposing her furry chest. Her tits are
          small, but what she lacks in size she makes up for in quantity. As I pull her vest completely off of her I
          see she has a total of twelve tits, in two rows of six that extend from her chest down to her flat stomach.` },
      { text:`Each tiny breast is capped with a big {{R::nipples.grape}} sized nipple that would look normal on an
          average sized person, but look huge on her tiny form. Her ears turn bright red and she renews her struggling
          as I expose her chest and begin pinching and tugging on each of her {{R::nipples.length}} long teats at
          random.` },
      { playerSpeaker:true, text:`"There's something I need you to understand scaven. This is my keep now. Everything
          within these walls now belongs to me."` },
      { text:`With a sadistic grin I pinch down harder on one of her nipples, then using just a trickle of magical
          power, cause electricity to arc between my fingers.`, effects:['actor(R) fear 1']},
      { text:`The scaven jerks and shudders as the electricity courses through her nipple. I need to tighten my grip
          on her neck to keep her from breaking free.` },
      { text:`After what must seem like an unreasonably long time to her, I finally release her tit, leaving her limp
          and gasping in my grasp.` },
    ]
  },{
    pages:[
      { playerSpeaker:true, text:`"I do have need of servents though, so I'll make you a deal. I would like for you to
          return to your chief and let him know that a powerful wizard is now the {{master}} of this keep. If the Deep
          Hole Scaven serve me, they will become powerful, and feared again."` },
      { playerSpeaker:true, text:`"If they do not, I will kill every single one of you, slowly and painfully. Do you
          understand?"` },
      { actorSpeaker:'R', text:`The scaven slowly nods and with a quivering voice says, "Yes, yes
          {{master}}, I will go tell the chief this."` },
      { playerSpeaker:true, text:`"Good," I say, finally releasing {{him}}, "You may go."` },
      { text:`The scaven sprints from the room, running on all fours. As soon as {{he}} leaves though I collapse into a
          nearby chair. I'm panting, sweating. Heh, some powerful wizard, I can barely use magic at all without almost
          collapsing.` },
      { text:`Using any kind of magic really takes it out of me, and I don't think I could have kept the electricity
          flowing for much longer.` },
      { text:`I don't know if my gambit will work. I really doubt that I could make good on my threat if it came to
          that. Only time will tell I suppose.` },
    ]
  }],

  onFinish: async choices => {
    Game.setLocation('great-hall');
    Game.chainEvent('ambush-rat-end-1');
  },

});
