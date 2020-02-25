Event.build('betrayal-single', {
  background:{ location:'great-hall', time:'evening' },

  stages:[{
    pages:[
      { text:`Something is wrong.` },
      { text:`I try to sit up but I can't.` },
      { text:`My limbs are dead.` },
      { text:`I hear myself groan as I manage to twist my head to the side.` },
      { text:`{{C::character.firstName}} is here, standing over me.` },
      { text:`The room's almost completely dark so I can't quite see {{C::gender.his}} expression.` },
      { text:`There is enough light though to see the glint of metal on the knife {{C::gender.he}}'s holding.` },
      { text:`I try to reach out to {{C::gender.him}}, but can only lie paralyzed as {{C::gender.he}} suddenly plunges the knife into my neck.` },
      { text:`Blood sprays everywhere, splattering across {{C::character.firstName's}} face.` },
      { text:`The pain isn't as intense as I thought it would be.` },
      { text:`Perhaps some benefit of whatever paralyzing drug is flowing through my veins.` },
      { text:`It would also seem that I'm quite difficult to kill.` },
      { text:`I feel a bit light headed from the loss of blood, but {{C::gender.he}} doesn't stop there of course.` },
      { text:`{{C::gender.He}} pulls the knife out an stabs me the in the neck again, then again.` },
      { text:`Each time I feel the blade slicing just a bit deeper.` },
      { text:`{{C::gender.He}} means to remove my head I see.` },
      { text:`That should do it, though I'm amazed by how long I manage to stay conscious through it all.` },
      { text:`The whole world suddenly tilts as {{C::gender.he}} lifts my severed head up off of my body.` },
      { text:`Finally everything fades to black.`, darkenBackground:25 },
      { text:"...", darkenBackground:50 },
      { text:"..", darkenBackground:75 },
      { text:".", darkenBackground:100 },
    ]
  },{
    formPage: 'game-over'
  }],

});
