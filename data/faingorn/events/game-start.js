Event.build('game-start', {
  background: { code:'void' },
  darkenBackground: 100,

  stages:[
    {
      warningPage: true
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
      choices: Species.chooserOptions,
      name: 'species',
      text: "What manner of creature was I? Or more importantly what do I wish to become?",
    },{
      nameFormPage: true
    },{
      chooserPage: true,
      choices: Gender.chooserOptions,
      name: 'gender',
      text: "And how would I describe my gender?",
      onAccept: 'game-start.gender-choice',
    },{
      id:'custom-gender-page',
      genderFormPage: true
    },{
      id:'after-gender-page',
      pages: [
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

    let startingCharacters = [
      { type:'minion', species:'rat', gender:'male',   fear:Random.between(40,60), loyalty:Random.between(10,20) },
      { type:'minion', species:'rat', gender:'male',   fear:Random.between(40,60), loyalty:Random.between(10,20) },
      { type:'minion', species:'rat', gender:'male',   fear:Random.between(40,60), loyalty:Random.between(10,20) },
      { type:'minion', species:'rat', gender:'female', fear:Random.between(40,60), loyalty:Random.between(10,20) },
      { type:'minion', species:'rat', gender:'female', fear:Random.between(40,60), loyalty:Random.between(10,20) },
      { type:'minion', species:'rat', gender:'female', fear:Random.between(40,60), loyalty:Random.between(10,20) },
    ];

    await Promise.all(startingCharacters.map((options) => {
      return CharacterBuilder.build(options);
    }));
  },

});
