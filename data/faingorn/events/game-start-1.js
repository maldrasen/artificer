Event.build('game-start-1', {
  background: { code:'void' },
  darkenBackground: 100,

  stages:[
    {
      formPage: 'warning-form'
    },{
      pages: [
        { text:"I'm dead." },
        { text:"No, that's not right." },
        { text:"I'm alive.",                      darkenBackground:98 },
        { text:"Maybe?",                          darkenBackground:95 },
        { text:"I can't remember.",               darkenBackground:90 },
        { text:"I can't remember anything.",      darkenBackground:85 },
        { text:"...",                             darkenBackground:80 },
        { text:"Who am I?",                       darkenBackground:75 },
        { text:"...",                             darkenBackground:65 },
        { text:"Where is my body?",               darkenBackground:50 },
        { text:"...",                             darkenBackground:40 },
        { text:"I think.",                        darkenBackground:30 },
        { text:"I think I must reform myself.",   darkenBackground:20 },
        { text:"A new body.",                     darkenBackground:10 },
        { text:"A new name.",                     darkenBackground:0  },
        { text:"That is the first step." }
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
        { text:"It's impossible to say how long it takes." },
        { text:"It could be minutes or years." },
        { text:"Time has no meaning here after all, wherever it is that here is." },
        { text:"Before I can really determine the nature of this place, this void between life and death, I am awoken by the feeling of grass under my back." },
      ]
    }
  ],

  onFinish: async choices => {
    await (await Game.instance()).createPlayer(choices);
  },

});
