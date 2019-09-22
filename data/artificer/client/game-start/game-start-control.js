global.GameStartControl = (function() {

  function init() {
    initSpeciesControl();
    $(document).on('click','.game-start-complete',Elements.buttonAction(complete));
    $(document).on('click','.game-start-check-name',Elements.buttonAction(checkName));
    $(document).on('change', '#genderSelect', genderSelected);
  }

  function checkName() {
    let first = $("#firstName").val().trim();
    let last = $("#lastName").val().trim();

    if (first.length == 0 || last.length == 0) { return false; }
    if (first.length > 20 || last.length > 20) { return false; }

    Elements.PagedContent.showNextPage();
  }

  function genderSelected() {
    $('.gender-detail').addClass('hide');
    let selected = $('#genderSelect').val();
    $(`.gender-detail.${selected}`).removeClass('hide');
  }

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
  { code:'elf', name:'Elf', image:'../../data/artificer/species/images/elf.png',
    description:'The elves are a versatile people, found in every profession and walk of life in the Rhysh.' },

  { code:'dark-elf', name:'Dark Elf', image:'../../data/artificer/species/images/dark-elf.png',
    description:'The Dark Elves are a race of malevolent elves from deep underground.' },

  { code:'wood-elf', name:'Wood Elf', image:'../../data/artificer/species/images/wood-elf.png',
    description:'The Wood Elves are short, muscular, wolf-blooded elves who live in the various forests of the Rhysh.' },

  { code:'neko', name:'Neko', image:'../../data/artificer/species/images/neko.png',
    description:"The Neko are half-elf cat spirits with cat-like ears, tails, and attitudes." },

  { code:'gnome', name:'Gnome', image:'../../data/artificer/species/images/gnome.png',
    description:'The Gnomes are a race of short but industrious earth spirits.' },

  { code:'nymph', name:'Nymph', image:'../../data/artificer/species/images/nymph.png',
    description:'Nymphs are water and fertility spirits, renowned for both their beauty and libido.' },

  { code:'sylph', name:'Sylph', image:'../../data/artificer/species/images/sylph.png',
    description:'Sylphs are thoughtful and curious wind spirits with unbelievable flexibility.' },

  { code:'dryad', name:'Dryad', image:'../../data/artificer/species/images/dryad.png',
    description:'The dryads are tree spirits who can be at times, stoic, playful, or increadibly violent.' },

  { code:'dragon', name:'Dragon', image:'../../data/artificer/species/images/dragon.png',
    description:'The Dragons are fearsome and powerful creatures of the ancient world.' },

  { code:'equian', name:'Equian', image:'../../data/artificer/species/images/equian.png',
    description:'The Equian are large horse spirits renowned for their strength, but are really famous for their massive cocks.' },

  { code:'lupin', name:'Lupin', image:'../../data/artificer/species/images/lupin.png',
    description:'The Lupin are wolf spirits known for both their loyality and their ferocious attitudes.' },

  { code:'minotaur', name:'Minotaur', image:'../../data/artificer/species/images/minotaur.png',
    description:"The Minotaur are huge muscular cow spirits. They're slow to anger, but unstoppable when enraged." },

  { code:'selkie', name:'Selkie', image:'../../data/artificer/species/images/selkie.png',
    description:"The Selkie are small, good natured seal spirits." },

  { code:'vulpine', name:'Vulpine', image:'../../data/artificer/species/images/vulpine.png',
    description:"The Vulpine are fox spirits with a friendy and often sultry demeanor." },
]
