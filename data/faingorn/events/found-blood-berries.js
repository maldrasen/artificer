Event.build('found-blood-berries', {
  background:{ location:'great-hall', time:'evening' },

  stages:[{
    pages:[
      { text:`{{C::character.firstName}} returns from {{C::gender.his}} last trip out into the hinterlands and {{C::gender.he}} and I begin to sort through everything {{C::gender.he}} brought back today.` },
      { text:`Among the various fruits and nuts that I've grown accustomed to seeing are a few handfuls of a bright red berry I haven't seen before.` },
      { text:`I pick one up and hold it up to the light of the sunset.` },
      { text:`It's dark red but looks plump and juicy.` },
      { playerSpeaker:true, text:`<span class='player-quote'>"What's this?"</span> I ask {{C::gender.him}}.` },
      { minionSpeaker:'{{C::character.firstName}}', text:`<span class='minion-quote'>"Bloodberry {{P::character.title}},"</span> {{C::gender.he}} says grinning, <span class='minion-quote'>"Very tasty."</span>` },
      { minionSpeaker:'{{C::character.firstName}}', text:`{{C::gender.He}} pops one into {{C::gender.his}} mouth, <span class='minion-quote'>"A dark shady path near the river. Many bloodberry bushes there."</span>` },
      { text:`I nod and try one myself.` },
    ]
  },{
    requires:['player.not-wolf-blooded'],
    pages:[
      { text:`I take one bite and immediately spit it out in disgust.` },
      { text:`Blood.` },
      { text:`Actual fucking blood.` },
      { text:`My minion looks mortified as I wipe the blood from my lips.` },
      { playerSpeaker:true, text:`I look down at the red smear on my hand, <span class='player-quote'>"What the fuck?"</span>` },
      { playerSpeaker:true, text:`<span class='player-quote'>"What the fuck is wrong with this place?"</span>` },
      { minionSpeaker:'{{C::character.firstName}}', text:`{{C::character.firstName}} stammers, perhaps not understand that was a rhetorical question, <span class='minion-quote'>"Ahh! You no like. Sorry. Sorry."</span>` },
      { playerSpeaker:true, text:`I shake my head, <span class='player-quote'>"No. No, that's alright; just not what I was expecting."</span>` },
      { text:`I suppose I can understand why the scaven would like these.` },
      { text:`It's just not the sort of thing that agrees with my pallet.` },
      { minionSpeaker:'{{C::character.firstName}}', text:`The scaven, perhaps worried that I would forbid {{C::gender.him}} from gathering {{C::gender.his}} favorite snack says, <span class='minion-quote'>"The Bone Woman, she makes medicine from the blood."</span>` },
    ]
  },{
    requires:['player.wolf-blooded'],
    pages:[
      { text:`I take a bite and my eyes grow wide in shock.` },
      { text:`It's blood.` },
      { text:`Real, actual fucking blood.` },
      { text:`Though I'm sure most civilized people would be repulsed by the taste, for a brief moment it makes my wolf blood sing.` },
      { text:`I find myself salivating, wanting more.` },
      { text:`{{C::character.firstName}} smiles up at me, but takes a step back when {{C::gender.he}} sees the look in my eyes, caught somewhere between contentment and holding back the desire to bite down on {{C::gender.his}} throat.` },
      { minionSpeaker:'{{C::character.firstName}}', text:`<span class='minion-quote'>"{{P::character.Title}}?" {{C::gender.he}} says.</span>` },
      { playerSpeaker:true, text:`I swallow, <span class='player-quote'>"It's good. Very good."</span>` },
      { playerSpeaker:true, text:`<span class='player-quote'>"Just not what I was expecting."</span>` },
      { minionSpeaker:'{{C::character.firstName}}', text:`{{C::gender.He}} nods happily, <span class='minion-quote'>"Best snack. Very tasty."</span>` },
      { minionSpeaker:'{{C::character.firstName}}', text:`<span class='minion-quote'>"The Bone Woman, she makes medicine from the blood."</span>` },
    ]
  },{
    pages:[
      { text:`Oh?` },
      { text:`Now there's something I hadn't considered.` },
      { playerSpeaker:true, text:`<span class='player-quote'>"Medicine? What kind of medicine?"</span>` },
      { minionSpeaker:'{{C::character.firstName}}', text:`<span class='minion-quote'>"All kinds. Blood berries go in everything."</span>` },
      { text:`Interesting, perhaps it acts as some kind of fixing agent.` },
      { text:`As my mind suddenly swirls with possibility, one realization floats above the rest.` },
      { text:`Oh. It would seem I'm an alchemist as well.` },
      { text:`Tintcures, poisions, potions, unguents and oils.` },
      { text:`I know of these things.` },
      { text:`&hellip;and they would be useful to have.` },
      { playerSpeaker:true, text:`<span class='player-quote'>"{{C::character.firstName}}, I want you to keep gathering these bloodberries."</span>` },
      { playerSpeaker:true, text:`<span class='player-quote'>"And bring back anything else your Bone Woman uses to make medicine."</span>` },
      { playerSpeaker:true, text:`<span class='player-quote'>"Understand?"</span>` },
      { minionSpeaker:'{{C::character.firstName}}', text:`{{C::gender.He}} grins, <span class='minion-quote'>"Yes {{P::character.title}}."</span>` },
      { text:`I nod, already drawing up plans for an alchemy laboratory in my mind.` },
    ]
  }]
});
