Event.build('found-blood-berries', {

  setting: {
    phase: 'after-work',
    location: 'great-hall',
  },

  stages:[{
    pages:[
      { text:`{{C::character.firstName}} returns from {{his}} last trip out into the hinterlands and {{he}} and I begin
          to sort through everything {{he}} brought back today. Among the various fruits and nuts that I've grown
          accustomed to seeing are a few handfuls of a bright red berry I haven't seen before.` },
      { text:`I pick one up and hold it up to the light of the sunset. It's dark red but looks plump and juicy.` },
      { playerSpeaker:true, text:`"What's this?" I ask {{him}}.` },
      { actorSpeaker:'C', text:`"Bloodberry {{P::character.title}}," {{he}} says grinning, "Very tasty." {{He}} pops
          one into {{his}} mouth, "A dark shady path near the river. Many bloodberry bushes there."` },
      { text:`I nod and try one myself.` },
    ]
  },{
    requires:['player.not-wolf-blooded'],
    pages:[
      { text:`I take one bite and immediately spit it out in disgust.` },
      { text:`Blood.` },
      { text:`Actual fucking blood.` },
      { playerSpeaker:true, text:`My minion looks mortified as I wipe the blood from my lips. I look down at the red
          smear on my hand and yell, "What the fuck? The fuck is wrong with this place?"` },
      { actorSpeaker:'C', text:`{{C::character.firstName}} stammers, perhaps not understand that was a rhetorical
          question, "Ahh! Sorry {{P::character.title}}. Sorry."` },
      { playerSpeaker:true, text:`I shake my head, "No. No, that's alright; just not what I was expecting." I suppose I
          can understand why the scaven would like these. It's just not the sort of thing that agrees with my pallet.` },
      { actorSpeaker:'C', text:`The scaven, perhaps worried that I would forbid {{him}} from gathering {{his}} favorite
          snack says, "The Bone Woman, she makes medicine from the blood."` },
    ]
  },{
    requires:['player.wolf-blooded'],
    pages:[
      { text:`I take a bite and my eyes grow wide in shock.` },
      { text:`It's blood.` },
      { text:`Real, actual fucking blood.` },
      { text:`Though I'm sure most civilized people would be repulsed by the taste, for a brief moment it makes my wolf
          blood sing. I find myself salivating, wanting more.` },
      { actorSpeaker:'C', text:`{{C::character.firstName}} smiles up at me, but takes a step back when {{he}} sees the
          look in my eyes, caught somewhere between contentment and holding back the desire to bite down on {{his}}
          throat. "{{P::character.Title}}?" {{he}} says.` },
      { playerSpeaker:true, text:`I swallow, "It's good. Very good. Just not what I was expecting."` },
      { actorSpeaker:'C', text:`{{He}} nods happily, "Best snack. Very tasty. The Bone Woman, she makes medicine from
          the blood."` },
    ]
  },{
    pages:[
      { playerSpeaker:true, text:`Oh? Now there's something I hadn't considered. "Medicine? What kind of medicine?"` },
      { actorSpeaker:'C', text:`"All kinds. Blood berries go in everything."` },
      { text:`Interesting, perhaps it acts as some kind of fixing agent. As my mind suddenly swirls with possibility,
          one realization floats above the rest.` },
      { text:`Oh. It would seem I'm an alchemist as well.` },
      { text:`Tintcures, poisions, potions, unguents and oils. I know of these things &hellip; and they would be useful
          to have.` },
      { playerSpeaker:true, text:`"{{C::character.firstName}}, I want you to keep gathering these bloodberries. And
          bring back anything else your Bone Woman uses to make medicine. Understand?"` },
      { actorSpeaker:'C', text:`{{He}} grins and squeeks, "Yes {{P::character.title}}," as I lean back into my chair,
          already drawing up plans for an alchemy laboratory in my mind.` },
    ]
  }],

  onFinish: async choices => {
    AvailableEvent.add('rat-thief-1');
  },

});
