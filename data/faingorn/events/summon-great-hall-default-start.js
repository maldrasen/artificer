Event.build('summon-great-hall-default-start', {
  background:{ location:'cellars' },
  repeatable: true,

  stages:[{
    pages:[
      { text:`I ask {{C::character.firstName}} to join me here in the great hall.` },
    ],
  }],

});
