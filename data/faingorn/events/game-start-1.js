
const conquestTooltip = `
  <ul class='game-start-goal-tooltip'>
    <li>I will have a stronger body.</li>
    <li>My minions get a savagery bonus on raiding missions.</li>
  </ul>
`;

const followersTooltip = `
  <ul class='game-start-goal-tooltip'>
    <li>I will be generally more likable.</li>
    <li>My new minions will be more loyal.</li>
  </ul>
`;

const knowledgeTooltip = `
  <ul class='game-start-goal-tooltip'>
    <li>I will be naturally smarter.</li>
    <li>I'm more likely to make discoveries though experimentation.</li>
  </ul>
`;

const powerTooltip = `
  <ul class='game-start-goal-tooltip'>
    <li>Bonus magical attribute</li>
    <li>I will be able to gain mana more rapidly.</li>
  </ul>
`;


Event.build('game-start-1', {
  background: { code:'void' },
  darkenBackground: 100,

  stages:[
    {
      formPage: 'warning-form'
    },{
      pages: [
        { text:`I'm dead.` },
        { text:`No, that doesn't sound right, but I can't really remember.` },
        { text:`I can't remember anything.`,     darkenBackground:90 },
        { text:`Who am I?`,                      darkenBackground:85 },
        { text:`What happened to my body?`,      darkenBackground:70 },
        { text:`&hellip;`,                       darkenBackground:60 },
        { text:`It's impossible to say how long long I've been here, in this void between life and death.` },
        { text:`I could stay here of course. That's always an option.` },
        { text:`There's no pain here, and no suffering, but I feel something pulling at me. ` },
        { text:`Some greater purpose drives me forward. My great work is left undone.` },
        { text:`What is it?` },
      ]
    },{
      selectionPage: true,
      selectionKey: 'goal',
      selections:[
        { text:`<span class='game-start-goal fg-physical'>Conquest</span> I will conquer these lands.`, value:'conquest', tooltip:conquestTooltip },
        { text:`<span class='game-start-goal fg-personal'>Followers</span> They will all kneel before me.`, value:'followers', tooltip:followersTooltip },
        { text:`<span class='game-start-goal fg-mental'>Knowledge</span> I will learn the secrets of this world.`, value:'knowledge', tooltip:knowledgeTooltip },
        { text:`<span class='game-start-goal fg-magical'>Power</span> None will rival my power.`, value:'power', tooltip:powerTooltip },
      ]
    },{
      pages:[
        { text:`Yes. And now I must return. Return to this world that has wronged me so many time in the past.` },
        { text:`I think.`,                       darkenBackground:58 },
        { text:`&hellip;`,                       darkenBackground:55 },
        { text:`I think I must reform myself.`,  darkenBackground:52 },
        { text:`A new body.`,                    darkenBackground:50 },
        { text:`A new name.`,                    darkenBackground:45 },
        { text:`That is the first step.`,        darkenBackground:40 },
      ]
    },{
      chooserPage: true,
      options: 'gender-options',
      name: 'gender',
      text: "First how would I describe my gender?",
    },{
      formPage: 'name-form'
    },{
      chooserPage: true,
      options: 'species-options',
      name: 'species',
      text: "What manner of creature was I? Or more importantly what do I wish to become?",
    },{
      pages: [
        { text:"(Species Comment)", onShow:'species-comment' },
        { text:"With that form in mind I will myself to again be made flesh." },
        { text:"It's impossible to say how long it takes. It could be minutes. It could be years." },
        { text:"I can't even say for certain when I first feel the soft wetness of the grass against my back." },
      ]
    }
  ],

  onFinish: async choices => {
    await (await Game.instance()).createPlayer(choices);
  },

});
