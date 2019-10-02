const speciesChoices = [
  { value:'elf', label:'Elf', image:'../../resources/game-start/elf.png',
    body: 'The Elves are a versatile people, found in every profession and walk of life in the Rhysh.' },

  { value:'dark-elf', label:'Dark Elf', image:'../../resources/game-start/dark-elf.png',
    body:'The Dark Elves are a race of malevolent elves from deep underground.' },

  { value:'wood-elf', label:'Wood Elf', image:'../../resources/game-start/wood-elf.png',
    body:'The Wood Elves are short, muscular, wolf-blooded elves who live in the various forests of the Rhysh.' },

  { value:'neko', label:'Neko', image:'../../resources/game-start/neko.png',
    body:"The Neko are half-elf cat spirits with cat-like ears, tails, and attitudes." },

  { value:'viera', label:'Viera', image:'../../resources/game-start/viera.png',
    body:"Originally from Ivalice, the Viera are rabbit hybrids that have recently settled in the Rhysh." },

  { value:'gnome', label:'Gnome', image:'../../resources/game-start/gnome.png',
    body:'The Gnomes are a race of short but industrious earth spirits.' },

  { value:'caprien', label:'Caprien', image:'../../resources/game-start/caprien.png',
    body:'The Caprien are goat spirits seen by some as having demonic origins. The males of the species are particularly goat like.' },

  { value:'equian', label:'Equian', image:'../../resources/game-start/equian.png',
    body:'The Equian are large horse spirits renowned for their strength, but are really famous for their massive cocks.' },

  { value:'lupin', label:'Lupin', image:'../../resources/game-start/lupin.png',
    body:'The Lupin are wolf spirits known for both their loyality and their ferocious attitudes.' },

  { value:'minotaur', label:'Minotaur', image:'../../resources/game-start/minotaur.png',
    body:"The Minotaur are huge muscular cow spirits. They're slow to anger, but unstoppable when enraged." },

  { value:'selkie', label:'Selkie', image:'../../resources/game-start/selkie.png',
    body:"The Selkie are small, good natured seal spirits." },

  { value:'vulpine', label:'Vulpine', image:'../../resources/game-start/vulpine.png',
    body:"The Vulpine are fox spirits with a friendy and often sultry demeanor." }
];

const genderChoices = [
  { value:'male', label:'Male', image:'../../resources/game-start/male.png',
    body:"Standard male. You use male pronouns and have a dick." },

  { value:'female', label:'Female', image:'../../resources/game-start/female.png',
    body:"Standard female. You use female pronouns, have tits and a pussy." },

  { value:'futa', label:'Futa', image:'../../resources/game-start/futa.png',
    body:"Both male and female. You're pronouns are shi and hir. You have everything; tits, dick, and pussy." },

  { value:'custom', label:"It's Complicated...", image:'../../resources/game-start/custom.png',
    body:"You're some combination of the above or none of the above. Select this to choose all of your pronouns." },
];

Event.build('game-start', {

  background: '../../assets/images/backgrounds/bg-void.png',
  pageScript: '../../data/artificer/events/game-start-page.js',
  darkenBackground: 100,

  stages:[
    {
      warningPage: true
    },{
      pages: [
        { text:"I'm dead." },
        // { text:"No, that's not right." },
        // { text:"I'm alive.",                      darkenBackground:98 },
        // { text:"Maybe?",                          darkenBackground:95 },
        // { text:"I can't remember.",               darkenBackground:90 },
        // { text:"I can't remember anything.",      darkenBackground:85 },
        // { text:"...",                             darkenBackground:80 },
        // { text:"Who am I?",                       darkenBackground:75 },
        // { text:"...",                             darkenBackground:65 },
        // { text:"Where is my body?",               darkenBackground:50 },
        // { text:"...",                             darkenBackground:40 },
        // { text:"I think.",                        darkenBackground:30 },
        // { text:"I think I must reform myself.",   darkenBackground:20 },
        // { text:"A new body.",                     darkenBackground:10 },
        { text:"A new name.",                     darkenBackground:0 },
        // { text:"That is the first step." }
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
      text: "With that settled, how would I describe my gender?",
      onAccept: 'onGenderChoice',
    },{
      id:'custom-gender-page',
      genderFormPage: true
    },{
      id:'after-gender-page',
      pages: [
        { text:'OK, after gender' }
      ]
    }
  ]
});

// function buildStartingMinions(game) {
//   return new Promise(resolve => {
//     let startingCharacters = [
//       { type:'minion', species:'rat', gender:'male'   },
//       { type:'minion', species:'rat', gender:'male'   },
//       { type:'minion', species:'rat', gender:'male'   },
//       { type:'minion', species:'rat', gender:'female' },
//       { type:'minion', species:'rat', gender:'female' },
//       { type:'minion', species:'rat', gender:'female' },
//     ];
//
//     Promise.all(startingCharacters.map((options) => {
//       return CharacterBuilder.build(options);
//     })).then(resolve);
//   })
// }
