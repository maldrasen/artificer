Event.build('summon-cellars-default-start', {
  background:{ location:'cellars' },
  repeatable: true,

  stages:[{
    pages:[
      { text:`I ask {{C::character.firstName}} to join me down in the cellars.` },
    ],
  }],

});
