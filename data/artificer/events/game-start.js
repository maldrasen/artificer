const speciesChoices = [
  { value:'elf', label:'Elf', imageResource:{ code:'species.elf' },
    body: 'The Elves are a versatile people, found in every profession and walk of life in the Rhysh.' },
  { value:'dark-elf', label:'Dark Elf', imageResource:{ code:'species.dark-elf' },
    body:'The Dark Elves are a race of malevolent elves from deep underground.' },
  { value:'wood-elf', label:'Wood Elf', imageResource:{ code:'species.wood-elf' },
    body:'The Wood Elves are short, muscular, wolf-blooded elves who live in the various forests of the Rhysh.' },
  { value:'neko', label:'Neko', imageResource:{ code:'species.neko' },
    body:"The Neko are half-elf cat spirits with cat-like ears, tails, and attitudes." },
  { value:'viera', label:'Viera', imageResource:{ code:'species.viera' },
    body:"Originally from Ivalice, the Viera are rabbit hybrids that have recently settled in the Rhysh." },
  { value:'caprien', label:'Caprien', imageResource:{ code:'species.caprien' },
    body:'The Caprien are goat spirits seen by some as having demonic origins. The males of the species are particularly goat like.' },
  { value:'equian', label:'Equian', imageResource:{ code:'species.equian' },
    body:'The Equian are large horse spirits renowned for their strength, but are really famous for their massive cocks.' },
  { value:'lupin', label:'Lupin', imageResource:{ code:'species.lupin' },
    body:'The Lupin are wolf spirits known for both their loyality and their ferocious attitudes.' },
  { value:'minotaur', label:'Minotaur', imageResource:{ code:'species.minotaur' },
    body:"The Minotaur are huge muscular cow spirits. They're slow to anger, but unstoppable when enraged." },
  { value:'vulpine', label:'Vulpine', imageResource:{ code:'species.vulpine' },
    body:"The Vulpine are fox spirits with a friendy and often sultry demeanor." }
];

const genderChoices = [
  { value:'male', label:'Male', imageResource:{ code:'gender.male' },
    body:"Standard male. You use male pronouns and have a dick." },
  { value:'female', label:'Female', imageResource:{ code:'gender.female' },
    body:"Standard female. You use female pronouns, have tits and a pussy." },
  { value:'futa', label:'Futa', imageResource:{ code:'gender.futa' },
    body:"Both male and female. You're pronouns are shi and hir. You have everything; tits, dick, and pussy." },
  { value:'custom', label:"It's Complicated...", imageResource:{ code:'gender.custom' },
    body:"You're some combination of the above or none of the above. Select this to choose all of your pronouns." },
];

Event.build('game-start', {
  background: '../../assets/images/backgrounds/bg-void.png',
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
      choices: speciesChoices,
      name: 'species',
      text: "What manner of creature was I? Or more importantly what do I wish to become?",
    },{
      nameFormPage: true
    },{
      chooserPage: true,
      choices: genderChoices,
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
  },

});
