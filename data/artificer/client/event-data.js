
Elements.Chooser.OptionsFunctions['gender-options'] = state => {
  return [
    { value:'male', label:'Male', imageResource:{ code:'gender.male' },
      body:"Standard male. You use male pronouns and have a dick." },
    { value:'female', label:'Female', imageResource:{ code:'gender.female' },
      body:"Standard female. You use female pronouns, have tits and a pussy." },
    { value:'futa', label:'Futa', imageResource:{ code:'gender.futa' },
      body:"Both male and female. You're pronouns are shi and hir. You have everything; tits, dick, and pussy." },
  ];
}

Elements.Chooser.OptionsFunctions['species-options'] = state => {
  let gender = (state.gender == 'male') ? 'm' : 'f';
  let choices = []

  choices.push({
    value:'elf', label:'Elf', imageResource:{ code:`species.elf-${gender}` },
    body: 'The Elves are a versatile people, found in every profession and walk of life in the Rhysh.',
    comment:"An elf. Yes, better to not stand out." });

  choices.push({
    value:'dark-elf', label:'Dark Elf', imageResource:{ code:`species.dark-elf-${gender}` },
    body:'The Dark Elves are a race of malevolent elves from deep underground.',
    comment:"Yes, one of the deep elves, to terrify those who oppose me." });

  choices.push({
    value:'wood-elf', label:'Wood Elf', imageResource:{ code:`species.wood-elf-${gender}` },
    body:'The Wood Elves are short, muscular, wolf-blooded elves who live in the various forests of the Rhysh.',
    comment:"Yes, a woodland elf, strong and lithe." });

  if (gender == 'm') {
    choices.push({
      value:'equian', label:'Equian', imageResource:{ code:'species.equian-m' },
      body:'The Equian are large horse spirits renowned for their strength, but are really famous for their massive cocks.',
      comment:"Yes, an Equian commands a certain level of respect after all." });

    choices.push({
      value:'lupin', label:'Lupin', imageResource:{ code:'species.lupin-m' },
      body:'The Lupin are wolf spirits known for both their loyality and their ferocious attitudes.',
      comment:"The lupin, the personification of savegry. Yes, that's how I'll make my mark upon this land." });

    choices.push({
      value:'minotaur', label:'Minotaur', imageResource:{ code:'species.minotaur-m' },
      body:"The Minotaur are huge muscular cow spirits. They're slow to anger, but unstoppable when enraged.",
      comment:"Yes, perhaps this time it would be best to strive for unparalleled strength." });
  }

  if (gender == 'f') {
    choices.push({
      value:'neko', label:'Neko', imageResource:{ code:'species.neko-f' },
      body:"The Neko are half-elf cat spirits with cat-like ears, tails, and attitudes.",
      comment:"Hmmm, perhaps a cat this time?" });

    choices.push({
      value:'nymph', label:'Nymph', imageResource:{ code:'species.nymph-f' },
      body:"Nymphs are playful and seductive water fae with a reputation for enslaving those they fancy.",
      comment:"Yes, sometimes seduction is the most direct path to power." });

    choices.push({
      value:'viera', label:'Viera', imageResource:{ code:'species.viera-f' },
      body:"Originally from Ivalice, the Viera are rabbit hybrids that have recently settled in the Rhysh.",
      comment:"Have I been a sexy rabbit before? I should be a sexy rabbit." });
  }

  choices.push({
    value:'caprien', label:'Caprien', imageResource:{ code:`species.caprien-${gender}` },
    body:'The Caprien are goat spirits seen by some as having demonic origins. The males of the species are particularly goat like.',
    comment:"Yes, only a Caprien can fully harness the powers of the underworld." });

  return choices;
}
