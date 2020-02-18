Event.build('found-blood-berries', {
  background:{ location:'great-hall', time:'evening' },

  stages:[{
    pages:[
      { text:`{{C::character.firstName}} returns from {{C::gender.his}} last trip out into the hinterlands and {{C::gender.he}} and I begin to sort through everything {{C::gender.he}} brought back today.` },
      { text:`Among the various fruits and nuts that I've grown accustomed to seeing are a few handfuls of a bright red berry I haven't seen before.` },
      { text:`I pick one up and hold it up to the light of the sunset.` },
      { text:`It's dark red but looks plump and juicy.` },
      { playerSpeaker:true, text:`"What's this?" I ask {{C::gender.him}}.` },
      { actorSpeaker:'C', text:`"Bloodberry {{P::character.title}}," {{C::gender.he}} says grinning, "Very tasty."` },
      { actorSpeaker:'C', text:`{{C::gender.He}} pops one into {{C::gender.his}} mouth, "A dark shady path near the river. Many bloodberry bushes there."` },
      { text:`I nod and try one myself.` },
    ]
  },{
    requires:['player.not-wolf-blooded'],
    pages:[
      { text:`I take one bite and immediately spit it out in disgust.` },
      { text:`Blood.` },
      { text:`Actual fucking blood.` },
      { text:`My minion looks mortified as I wipe the blood from my lips.` },
      { playerSpeaker:true, text:`I look down at the red smear on my hand, "What the fuck?"` },
      { playerSpeaker:true, text:`"What the fuck is wrong with this place?"` },
      { actorSpeaker:'C', text:`{{C::character.firstName}} stammers, perhaps not understand that was a rhetorical question, "Ahh! You no like. Sorry. Sorry."` },
      { playerSpeaker:true, text:`I shake my head, "No. No, that's alright; just not what I was expecting."` },
      { text:`I suppose I can understand why the scaven would like these.` },
      { text:`It's just not the sort of thing that agrees with my pallet.` },
      { actorSpeaker:'C', text:`The scaven, perhaps worried that I would forbid {{C::gender.him}} from gathering {{C::gender.his}} favorite snack says, "The Bone Woman, she makes medicine from the blood."` },
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
      { actorSpeaker:'C', text:`"{{P::character.Title}}?" {{C::gender.he}} says.` },
      { playerSpeaker:true, text:`I swallow, "It's good. Very good."` },
      { playerSpeaker:true, text:`"Just not what I was expecting."` },
      { actorSpeaker:'C', text:`{{C::gender.He}} nods happily, "Best snack. Very tasty."` },
      { actorSpeaker:'C', text:`"The Bone Woman, she makes medicine from the blood."` },
    ]
  },{
    pages:[
      { text:`Oh?` },
      { text:`Now there's something I hadn't considered.` },
      { playerSpeaker:true, text:`"Medicine? What kind of medicine?"` },
      { actorSpeaker:'C', text:`"All kinds. Blood berries go in everything."` },
      { text:`Interesting, perhaps it acts as some kind of fixing agent.` },
      { text:`As my mind suddenly swirls with possibility, one realization floats above the rest.` },
      { text:`Oh. It would seem I'm an alchemist as well.` },
      { text:`Tintcures, poisions, potions, unguents and oils.` },
      { text:`I know of these things.` },
      { text:`&hellip;and they would be useful to have.` },
      { playerSpeaker:true, text:`"{{C::character.firstName}}, I want you to keep gathering these bloodberries."` },
      { playerSpeaker:true, text:`"And bring back anything else your Bone Woman uses to make medicine."` },
      { playerSpeaker:true, text:`"Understand?"` },
      { actorSpeaker:'C', text:`{{C::gender.He}} grins, "Yes {{P::character.title}}."` },
      { text:`I nod, already drawing up plans for an alchemy laboratory in my mind.` },
    ]
  }]
});
