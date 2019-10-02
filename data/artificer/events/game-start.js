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
        { text:"A new name.",                     darkenBackground:0 },
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
      text: "With that settled, how would I describe my gender?",
      onAccept: 'onGenderChoice',
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
        { text:"I bolt upright. I still feel sluggish, like I've just woken up after a long sleep.", background:"../../resources/backgrounds/bg-field-1.png" },
        { text:"I'm standing in some sort of field." },
        { text:"The barren landscape is cold and windy, and I'm completely naked." },
        { text:"I need to find shelter before I freeze to death and have to reform myself yet again." },
        { text:"And so I wander, looking for any signs of civilization." },
        { text:"..." },
        { text:"After some time I come across a road." },
        { text:"It's in bad repair and doesn't look like it's been traveled upon for some time." },
        { text:"Still, it's better than nothing; so I follow it." },
        { text:"...", background:"../../resources/backgrounds/bg-field-2.png" },
        { text:"This land is unusually empty." },
        { text:"I don't remember it, or any place else for that matter, so I can't say whether or not that's to be expected." },
        { text:"There must be people somewhere though." },
        { text:"Someone built this road after all." },
        { text:"...", background:"../../resources/backgrounds/bg-keep-distant.png" },
        { text:"After what feels like hours of walking I finally find some further evidence of civilization; an abandoned looking keep, set upon a high and rocky hill." },
        { text:"Even from this distance I can see that its high walls and single tall tower are crumbling, practically near collapse." },
        { text:"There is a chance though that I could find something useful in such a place." },
        { text:"At the very least it will provide some shelter against the cold winds of these barren hinterlands." },
        { text:"..." },
        { text:"I walk around the rocky hill to the keep's front entrance." },
        { text:"The keep's massive oak doors lie in a pile of rubble near the entryway." },
        { text:"Whatever fate befell this place was a violent one." },
        { text:"...", background:"../../resources/backgrounds/bg-courtyard-ruined.png" },
        { text:"The keep's central courtyard lies in ruins." },
        { text:"Piles of rubble and debris block the entrance to the keep's main hall." },
        { text:"It will grow dark soon, so spending what daylight remains making a rudimentary camp seems like the best course of action." },
        { text:"I gather sticks and stones from around the courtyard and fashion a small fire pit." },
        { text:"Almost without thought I set the fire ablaze with a quick gesture." },
        { text:"I realize with a start what just happened and stare at my hand in some small wonder." },
        { text:"I'm a wizard then?" },
        { text:"Able to call forth elemental fire from nothing?" },
        { text:"It was instinctive; like something I've done countless times before, but could only recall just now being able to do such a thing." },
        { text:"And it makes me wonder of course what other powers are at my disposal?" },
        { text:"With my campfire burning brightly before me, I sit and contemplate such things." },
        { text:"..." },
        { text:"..", darkenBackground:50 },
        { text:".", darkenBackground:75 },
        { text:"", darkenBackground:90 },
        { text:"It's the middle of the night when I'm awoken by a soft scraping sound.", background:"../../resources/backgrounds/bg-courtyard-ruined-night.png" },
        { text:"There's a creature of some sort nearby." },
        { text:"I bolt upright and let off a flash of bright light that illuminates the entire courtyard in a harsh white glare." },
        { text:"I'm surrounded by small rat-like creatures." },
        { text:"Well, surrounded is not quite the right word..." },
        { text:"What rats haven't scurried off cower away from me, clearly terrified that I might incinerate or otherwise magically mangle them in some way." },
        { text:"The rats have a fairly humanoid shape, though their faces remain very rat-like, with short muzzles and twitching whiskers." },
        { text:describeRats() },
        { text:`The boldest of these rats crawls towards me.` },
        { text:`<span class='minion-quote'>"No! No! Don't kill! Please."</span>` },
        { text:`<span class='minion-quote'>"We serve you. Yes, will be yours."</span>` },
        { text:`<span class='minion-quote'>"Steal for you. Bring you meats."</span>` },
        { text:`You consider his words for a moment.` },
        { text:`Having some minions, even ones as meager as these, would be useful.` },
        { text:`You could use them to explore this keep at the very least; first establish a foothold then decide what to do from there.` },
        { text:`You nod to the rats gathered around you and say, <span class='player-quote'>"Very well. I will make you my minions. You may call me MASTER"</span>` },
        { text:"...", darkenBackground:50 },
        { text:"..", darkenBackground:75 },
        { text:".", darkenBackground:90 },
      ]
    },{
      splashPage:true,
    }
  ]
});

function describeRats() {
  return `${Configuration.metric ? "They're a little over a meter tall or so," : "They range from about three to four feet tall,"}
    and their bodies are covered in thick brown and black fur and wear clothing made from various animal hides.`
}
