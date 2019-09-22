global.GameStartControl = (function() {
  let speciesChooser;
  let genderChooser;

  function init() {
    Elements.PagedContent.darkenBackground(100);

    initSpeciesControl();
    initGenderControl();

    $(document).on('click','.game-start-complete',Elements.buttonAction(complete));
    $(document).on('click','.check-name',Elements.buttonAction(checkName));
    $(document).on('click','.check-custom-gender',Elements.buttonAction(checkCustomGender));
    $(document).on('click','.accept-species-choice',Elements.buttonAction(speciesChosen));
    $(document).on('click','.accept-gender-choice',Elements.buttonAction(genderChosen));
  }

  // === Species ===

  function initSpeciesControl() {
    speciesChooser = new Elements.Chooser({
      title: 'Species Select',
      element: $('#speciesChooser'),
      height: 500,
      width: 800,
      imageWidth: 500,
    });

    each(GameStartControl.playerSpecies, species => {
      speciesChooser.addChoice({
        value: species.code,
        label: species.name,
        body: species.description,
        image: species.image,
        locked: false,
      });
    });
  }

  function speciesChosen() {
    let code = speciesChooser.selectedValue;
    let selected = GameStartControl.playerSpecies.find(species => {
      return species.code == code;
    });

    $('.species-choice-comment').append(selected.comment);

    Elements.PagedContent.showNextPage();
  }

  // === Name ===

  function checkName() {
    let first = $("#firstName").val().trim();
    let last = $("#lastName").val().trim();

    if (first.length == 0 || last.length == 0) { return false; }
    if (first.length > 20 || last.length > 20) { return false; }

    Elements.PagedContent.showNextPage();
  }

  // === Gender ===

  function initGenderControl() {
    genderChooser = new Elements.Chooser({
      title: 'Gender Select',
      element: $('#genderChooser'),
      height: 500,
      width: 800,
      imageWidth: 500,
    });

    genderChooser.addChoice({
      value: 'male',
      label: 'Male',
      body: "Standard male. You use male pronouns and have a dick.",
      image: '../../data/artificer/client/game-start/male.png',
      locked: false,
    });

    genderChooser.addChoice({
      value: 'female',
      label: 'Female',
      body: "Standard female. You use female pronouns, have tits and a pussy.",
      image: '../../data/artificer/client/game-start/female.png',
      locked: false,
    });

    genderChooser.addChoice({
      value: 'futa',
      label: 'Futa',
      body: "Both male and female. You're pronouns are shi and hir. You have everything; tits, dick, and pussy.",
      image: '../../data/artificer/client/game-start/futa.png',
      locked: false,
    });

    genderChooser.addChoice({
      value: 'custom',
      label: "It's Complicated...",
      body: "You're some combination of the above or none of the above. Select this to choose all of your pronouns.",
      image: '../../data/artificer/client/game-start/custom.png',
      locked: false,
    });
  }

  function genderChosen() {
    Elements.PagedContent.showPage(
      (genderChooser.selectedValue == 'custom') ? '.custom-gender-page' : '.after-gender-page'
    );
  }

  function checkCustomGender() {
    let valid = true;
    let fields = [
      '#genderDick',
      '#genderTits',
      '#genderPussy',
      '#genderName',
      '#genderPlural',
      '#genderDescriptive',
      '#genderSubject',
      '#genderObject',
      '#genderPossessive',
      '#genderAbsolute']

    each(fields, id => {
      if ($(id).val().trim().length == 0) { valid = false; }
    });

    if (valid) {
      Elements.PagedContent.showNextPage();
    }
  }

  // === Complete ===

  function complete() {
    let options = {
      firstName: $("#firstName").val().trim(),
      lastName: $("#lastName").val().trim(),
      gender: $('#genderSelect').val(),
    }

    if (options.gender == 'custom') {
      extend(options,{
        genderDick: $('#genderDick').val(),
        genderTits: $('#genderTits').val(),
        genderPussy: $('#genderPussy').val(),
        genderName: $('#genderName').val(),
        genderPlural: $('#genderPlural').val(),
        genderDescriptive: $('#genderDescriptive').val(),
        genderSubject: $('#genderSubject').val(),
        genderObject: $('#genderObject').val(),
        genderPossessive: $('#genderPossessive').val(),
        genderAbsolute: $('#genderAbsolute').val(),
      });
    }

    Renderer.sendCommand('game.create-player',options);
  }

  return { init:init };

})();

// =========================================================================
// This list can be changed by mods if modders want to add or remove species
// from the list of species that players can select at character creation.
// =========================================================================

GameStartControl.playerSpecies = [
  { code:'elf', name:'Elf', image:'../../data/artificer/client/game-start/elf.png',
    comment: 'An elf. Yes, better to not stand out.',
    description: 'The elves are a versatile people, found in every profession and walk of life in the Rhysh.' },

  { code:'dark-elf', name:'Dark Elf', image:'../../data/artificer/client/game-start/dark-elf.png',
    comment: 'Yes, one of the deep elves, to terrify those who oppose me.',
    description:'The Dark Elves are a race of malevolent elves from deep underground.' },

  { code:'wood-elf', name:'Wood Elf', image:'../../data/artificer/client/game-start/wood-elf.png',
    comment: 'Yes, a woodland elf, strong and lithe.',
    description:'The Wood Elves are short, muscular, wolf-blooded elves who live in the various forests of the Rhysh.' },

  { code:'neko', name:'Neko', image:'../../data/artificer/client/game-start/neko.png',
    comment: 'Hmmm, perhaps a cat this time?',
    description:"The Neko are half-elf cat spirits with cat-like ears, tails, and attitudes." },

  { code:'viera', name:'Viera', image:'../../data/artificer/client/game-start/viera.png',
    comment: 'Have I been a sexy rabbit before? I should be a sexy rabbit.',
    description:"Originally from Ivalice, the Viera a rabbit hybrids that have recently settled in the Rhysh." },

  { code:'gnome', name:'Gnome', image:'../../data/artificer/client/game-start/gnome.png',
    comment: 'A gnome, a spirit of the earth. Yes, as a master of crafts.',
    description:'The Gnomes are a race of short but industrious earth spirits.' },

  { code:'caprien', name:'Caprien', image:'../../data/artificer/client/game-start/caprien.png',
    comment: 'Yes, only a Caprien can fully harness the powers of the underworld.',
    description:'The Caprien are goat spirits seen by some as having demonic origins.' },

  { code:'dragon', name:'Dragon', image:'../../data/artificer/client/game-start/dragon.png',
    comment: 'Yes, a Dragon is fit to rule over these lands/',
    description:'The Dragons are fearsome and powerful creatures of the ancient world.' },

  { code:'equian', name:'Equian', image:'../../data/artificer/client/game-start/equian.png',
    comment: 'Yes, an Equian commands a certain level of respect after all.',
    description:'The Equian are large horse spirits renowned for their strength, but are really famous for their massive cocks.' },

  { code:'lupin', name:'Lupin', image:'../../data/artificer/client/game-start/lupin.png',
    comment: "The lupin, the personification of savegry. Yes, that's how I'll make my mark upon this land.",
    description:'The Lupin are wolf spirits known for both their loyality and their ferocious attitudes.' },

  { code:'minotaur', name:'Minotaur', image:'../../data/artificer/client/game-start/minotaur.png',
    comment: 'Yes, perhaps this time it would be best to strive for unparalleled strength.',
    description:"The Minotaur are huge muscular cow spirits. They're slow to anger, but unstoppable when enraged." },

  { code:'selkie', name:'Selkie', image:'../../data/artificer/client/game-start/selkie.png',
    comment: "Fuck it. I'm a seal.",
    description:"The Selkie are small, good natured seal spirits." },

  { code:'vulpine', name:'Vulpine', image:'../../data/artificer/client/game-start/vulpine.png',
    comment: "Yes. When seaking to outwit the world, you could do worse than a fox.",
    description:"The Vulpine are fox spirits with a friendy and often sultry demeanor." },
]
