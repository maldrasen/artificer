Event.build('courtyard-walk-on-walls', {
  location: 'courtyard',
  background: '../../resources/backgrounds/bg-courtyard-ruined.png',

  actors: { 'R':'the-smartest-rat' },

  stages:[
    {
      pages: [
        { text:`Now that I'm awake, I should get a better idea of where I am.` },
        { text:`With a magically aided leap I jump up onto one of the high walls sorrounding the courtyard.` },
        { text:`...`, background:'../../resources/backgrounds/bg-lake-1.png' },
        { text:`One of my rat minions has decided to join me up here, quickly scaling the wall to come and stand at my side.` },
        { text:`{{R::gender.He}} squeaks out what might be {{R::gender.his}} name to me.` },
        { text:`{{R::character.firstName}}, or something equally unpronounceable.`},
        { text:`I may have to start naming them myself as their own names are difficult and nearly indistinguishable.`},
        { text:`This little rat though I think is one of the more cleaver of the bunch.` },
        { text:`{{R::gender.He}} may be able to tell me more about these lands.` },
        { text:`I look out over the landscape.` },
        { text:`It's not exactly barren, not in the same way that a desert is at least.` },
        { text:`There's plant life, a few trees and long stretches of tall spiky grass.` },
        { text:`It isn't what I would call thriving either though.` },
        { text:`It's a harsh land, blasted by constant and cold winds that howl through the tower at night.` },
        { text:`I can barely stand it myself.` },
        { text:`The keep and courtyard are sheltered from the biting winds.` },
        { text:`Standing out on this parapet though I feel cold, exposed, and utterly tiny.` },
        { text:`I hear a shuffling sound coming from below.` },
        { text:`One of the creatures that had chased me here has noticed me.` },
        { text:`The ground on the other side lies at least fifty feet below my perch atop the wall.` },
        { text:`It's not even attempting to climb the wall.` },
        { text:`It looks confused and desperate, pacing back and forth under me.` },
        { text:`Is it not able to come into contact with the wall?` },
        { text:`From the trail of blood it looks like it's been pacing for some time.` },
        { text:`All around the fortress are other such trails.` },
        { text:`They approach the keep, seem to look for a way in, and eventually wander off.` },
        { text:`<span class='player-quote'>"What is that creature down there?"</span> I ask my rodent companion.` },
        { text:`<span class='minion-quote'>"Skinless,"</span> {{R::gender.he}} says.` },
        { text:`<span class='minion-quote'>"They hunt always for {{P::character.title}}."</span>` },
        { text:`<span class='minion-quote'>"Always hungry for magic."</span>` },
        { text:`<span class='player-quote'>"Magic?"</span> I ask.` },
        { text:`<span class='minion-quote'>"Yes, your magic calls them."</span>` },
        { text:`<span class='minion-quote'>"They wants it."</span>` },
        { text:`<span class='minion-quote'>"Makes them crazy."</span>` },
        { text:`<span class='player-quote'>"They won't attack you then?"</span>` },
        { text:`<span class='minion-quote'>"No. No. They like to kill rats."</span>` },
        { text:`<span class='minion-quote'>"Rats fun to kill."</span>` },
        { text:`<span class='minion-quote'>"But rats are sneaky quiet."</span>` },
        { text:`<span class='minion-quote'>"They don't find us."</span>` },
        { text:`<span class='player-quote'>"How do you know all this?"</span>` },
        { text:`<span class='minion-quote'>"Rat tribe had a bone woman once."</span>` },
        { text:`<span class='minion-quote'>"She called the fog and fixed skin."</span>` },
        { text:`<span class='minion-quote'>"Skinless always wanted her."</span>` },
        { text:`<span class='minion-quote'>"One day... Snap!"</span>` },
        { text:`<span class='minion-quote'>"Ate her up."</span>` },
        { text:`He starts laughing as though finding the story more humorous than frightening or tragic.` },
        { text:`Now that it's of no obvious threat to you the 'Skinless' creature fascinates you more than anything.` },
        { text:`It looks like nothing more than a loosely assembled pile of body parts, and should be incapable of survival by mere biological means.` },
        { text:`That it must sustain itself on magical energy is really the only way to explain it.` },
        { text:`With a nod to {{R::character.firstName}} you jump back down to the courtyard below to start the day's work.` },
      ]
    }
  ],

  finish: async choices => {
    let game = await Game.instance();
    await game.setFlags({ 'project.clear-great-hall':'available' });
  },

});
