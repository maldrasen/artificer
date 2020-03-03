Event.build('summon-courtyard-default-start', {
  background:{ location:'cellars' },
  repeatable: true,

  stages:[{
    pages:[
      { text:`I ask {{C::character.firstName}} to join me out in the courtyard.` },
    ],
  }],

});
