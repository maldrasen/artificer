
Elements.Chooser.OptionsFunctions['gender-options'] = state => {
  return [
    { value:'male', label:'Male', imageResource:{ code:'gender.male' },
      body:"Standard male. I use male pronouns and have a dick." },
    { value:'female', label:'Female', imageResource:{ code:'gender.female' },
      body:"Standard female. I use female pronouns. I have a pussy and a pair of tits." },
    { value:'futa', label:'Futa', imageResource:{ code:'gender.futa' },
      body:"Both male and female. My pronouns are shi and hir. I have everything; a dick, a pussy, and a pair of tits" },
  ];
}

Elements.Chooser.OptionsFunctions['species-options'] = state => {
  let gender = (state.gender == 'male') ? 'm' : 'f';
  let choices = []

  choices.push({
    value:'elf', label:'Elf', imageResource:{ code:`species.elf-${gender}` },
    body: 'The common elves are a versatile people, found in every profession and walk of life in the Rhysh.' });

  choices.push({
    value:'dark-elf', label:'Dark Elf', imageResource:{ code:`species.dark-elf-${gender}` },
    body:'The dark elves are malevolent beings who rule the deep underground through unmatched cruelity.' });

  choices.push({
    value:'wood-elf', label:'Wood Elf', imageResource:{ code:`species.wood-elf-${gender}` },
    body:'The Wood Elves are short, muscular, wolf-blooded elves who live in the various forests of the Rhysh.' });

  if (gender == 'f') {
    choices.push({
      value:'neko', label:'Neko', imageResource:{ code:'species.neko-f' },
      body:"The Neko are half-elf cat spirits with cat-like ears, tails, and attitudes." });

    choices.push({
      value:'nymph', label:'Nymph', imageResource:{ code:'species.nymph-f' },
      body:"Nymphs are playful and seductive water fae with a reputation for enslaving those they fancy." });

    choices.push({
      value:'viera', label:'Viera', imageResource:{ code:'species.viera-f' },
      body:"These half-elves have long rabbit like ears, but unlike rabbits they tend to be fearsom and warlike." });
  }

  choices.push({
    value:'equian', label:'Equian', imageResource:{ code:`species.equian-${gender}` },
    body:'The Equian are large horse spirits renowned for their strength.' });

  choices.push({
    value:'lupin', label:'Lupin', imageResource:{ code:`species.lupin-${gender}` },
    body:'The Lupin are wolf spirits known for both their loyality and their ferocious attitudes.' });

  choices.push({
    value:'caprien', label:'Caprien', imageResource:{ code:`species.caprien-${gender}` },
    body:'The Caprien are goat spirits seen by some as having demonic origins. The males of the species are particularly goat like.' });

  choices.push({
    value:'minotaur', label:'Minotaur', imageResource:{ code:`species.minotaur-${gender}` },
    body:"The Minotaur are huge muscular cow spirits. They're slow to anger, but unstoppable when enraged." });

  return choices;
}

Components.EventView.PageFunctions['species-comment'] = choices => {
  let comment = {
    "caprien":  "Yes, only a Caprien can fully harness the powers of the underworld.",
    "dark-elf": "Yes, one of the deep elves, to terrify those who oppose me.",
    "elf":      "An elf, so that I may walk unseen among them.",
    "equian":   "Yes, an Equian commands a certain level of respect after all.",
    "lupin":    "The lupin, the personification of savegry. Yes, that's how I'll make my mark upon this land.",
    "minotaur": "Yes, perhaps this time it would be best to strive for unparalleled strength.",
    "neko":     "Yes. The Neko are sly, cunning, and know how to go unseen.",
    "nymph":    "Yes, sometimes seduction is the most direct path to power.",
    "viera":    "Have I been a sexy rabbit before? I should be a sexy rabbit.",
    "wood-elf": "Yes, a woodland elf, strong and lithe.",
  }[choices.species];

  $('#currentEvent .event-text-frame').empty().append(comment);
}