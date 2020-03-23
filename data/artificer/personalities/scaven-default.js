Personality.build('scaven-default', {

  reactToPlayer: async function(character, attitude) {
    const options = [];
    const tits = await character.getTits();
    const cock = await character.getCock();
    const pussy = await character.getPussy();

    if (attitude == 'love') {
      options.push('{{He}} looks upward lovingly at me, ready to be used as a sex toy.');
      options.push('{{He}} smiles lovingly up at me, clear desire etched on {{his}} rat like features.');
      options.push('{{He}} laughs and wiggles {{his}} shapely ass in my direction, a clear invitation.');
    }

    if (ArrayUtility.contains(['love','lusty'],attitude)) {
      options.push(`{{He}} grins broadly and licks {{his}} lips, clearly ready for whatever I have in mind.`);
      options.push(`{{His}} eyes are filled with lust as {{he}} waits to see what I desire from {{him}}.`);
      options.push(`{{He}} smiles at me lustfully, longing it seems to be used by me.`);

      if (tits) { options.push(`{{He}} smiles and starts fondling one of {{his}} many nipples, twisting and pulling it roughly.`); }
      if (cock) { options.push(`{{He}} smiles and reaches down to squeeze {{his}} cock sheath, almost unable to contain {{his}} lust.`); }
      if (pussy) { options.push(`{{He}} looks up at me with eyes filled with lust and reaches down to squeeze {{his}} cunt, moaning.`) }
    }

    // Lust and love share many of the same reactions so add them all to the
    // options and randomly select one if any have been added, otherwise
    // continue on.
    if (options.length > 0) {
      return { text:Random.from(options), characterPosition:'standing' };
    }

    if (attitude == 'friendly') {
      options.push(`{{He}} smiles and nods to me, happy to be of service to {{his}} {{P::character.title}}.`);
      options.push(`{{He}} smiles up at me, ready to serve me in whatever way I would like.`);
      options.push(`{{He}} grins and nods, willing to let me use {{him}} however I like.`);
    }

    if (attitude == 'resigned') {
      options.push(`{{He}} nods, looking resigned and a little nervous, but ready do do what I ask of {{him}}.`);
      options.push(`{{He}} nods to me, understanding that {{his}} body is mine to do with as I like.`);
      options.push(`{{He}} looks away shamefully, but seems willing to let me use {{his}} body.`);
      options.push(`{{He}} glances down at the floor, resigned to let me have my way with {{him}}.`);
    }

    if (attitude == 'fearful') {
      options.push(`{{He}} looks up at me, clearly afraid and not sure of what I'm about to do to {{him}}.`);
      options.push(`{{He}} looks up at me, looking afraid and unsure of what I will ask of {{him}}.`);
      options.push(`{{He}} backs away slightly, looking like {{he}} might run from me, but knows {{he}} can't.`);
      options.push(`{{He}} glances about the room as if looking for a way to escape, but knows {{he}} can't.`);
    }

    if (attitude == 'angry') {
      options.push(`{{He}} snarls in warning, clearly not at all in the mood for any kind of sexual activity.`);
      options.push(`{{He}} backs away looking angry, clearly not interested in doing anything with me right now.`);
      options.push(`{{He}} looks angrily up at me, clearly wanting to be anyplace other than here right now.`);
    }

    return { text:Random.from(options), characterPosition:'standing' };
  },

  // Give the reaction a character has to being shown the player's cock. Should
  // be proceeded by a sentence where the player is doing something with their
  // dick as it implies that they're looking at it, and is referred to with the
  // pronoun it, so is clearly the current topic. Perhaps used following the
  // StoryTeller.showCock() function for instance.
  //
  // TODO: Eventually I'd like to use the skill skills concern to also look at
  //       the relationship between the size of the cock and the size of the
  //       scaven. Specifically the canFuckAss() function that has yet to be
  //       written. For now though we're pretty sure the character has an
  //       average size cock and that a scaven is still intimated by it.
  reactToCock: async function(character, cock, desirability) {
    const characterCock = await character.getCock();
    const characterPussy = await character.getPussy();
    const options = [];

    // Terrible Reaction, probably androphobic.
    if (desirability < -5) {
      options.push(`As I expose myself to {{him}} {{he}} makes a disgusted face and looks away.`);
      options.push(`From {{his}} expression it looks like my cock is the last thing {{he}}'s interested in seeing right now.`);
      options.push(`{{He}} makes an awful face when {{his}} eyes land on it. I think {{he}}'s somewhat repulsed by my cock.`);
    }

    // Very Bad Reaction
    if (desirability >= -5 && desirability < -2) {
      options.push(`{{He}} tries to avoid looking at it, seemingly uninterested in it.`);
      options.push(`{{He}} tries to avoid looking at it, not really interested seeing my dick at all right now.`);
      options.push(`{{He}} does what {{he}} can to avoid looking at it. It's clearly making {{him}} uncomfortable.`);
    }

    // Average Reaction
    if (desirability >= -2 && desirability < 1)  {
      options.push(`{{He}} smiles as {{his}} eyes move down to glance at it. {{He}} seems a bit nervous, probably a bit intimidated by the size of it.`);
      options.push(`{{He}} glances briefly at it, seemingly nervous and uncomfortable at the sight of my cock.`);
      options.push(`{{He}} seems uncomfortable looking at my cock, perhaps intimidated by its size.`);
    }

    // Good Reaction
    if (desirability >= 1 && desirability < 3) {
      options.push(`{{He}} smiles as {{he}} looks it over; eyes growing a bit wide as {{he}} no doubt imagines it going inside of {{him}}.`);
      options.push(`{{He}} glances down at it, enjoying the sight of my cock, but not lingering on it overlong.`);
      options.push(`{{He}} gasps as {{his}} eyes roam over it. My cock's far larger than most scaven's so the size of it might be a little intimidating.`);
    }

    // They Love this Cock
    if (desirability >= 3 && desirability < 5)  {
      options.push(`{{He}} smiles in appreciation as {{his}} eyes roam over it, as if memorizing the shape of my dick.`);
      options.push(`{{He}} grins broadly as {{his}} eyes linger on it, ignoring everything else but my shaft.`);
      options.push(`{{He}} licks {{his}} lips and grins; eager to have it in {{his}} mouth now that it's directly in front of {{his}} face like this .`);
    }

    // They Fucking Need This Cock
    if (desirability >= 5 && desirability < 8)  {
      options.push(`{{He}} looks transfixed by it; licking {{his}} lips and practically drooling at the sight of my cock.`);
      options.push(`{{He}} makes a little moaning sound as {{his}} eyes roam over my shaft.`);
      options.push(`{{He}} can't seem to take {{his}} eyes off of it.`);
    }

    // They Worship This Cock As A God
    if (desirability >= 8) {
      options.push(`At the sight of it {{he}} looks as though {{he}} can barely contain {{him}}self; clearly wanting to get it inside of {{him}}self immediately.`);
      options.push(`{{He}} looks as though {{he}} wants to drop to {{his}} knees and start worshiping my dick at the sight of it.`);
      options.push(`{{He}} can't seem to help himself as {{his}} gasps and starts drooling, panting, and practically begging me for a taste of it.`);

      if (characterPussy) {
        options.push(`At the sight of it {{his}} pussy floods with moisture, enough that I can smell it from here.`);
        options.push(`I can smell {{his}} pussy from here as {{he}} drinks in the sight of it; already needing it inside of {{him}}.`);
      }
      if (characterCock) {
        options.push(`At the sight of it {{his}} own cock begins to grow hard.`);
        options.push(`{{His}} own cock begins to grow hard at the sight of mine.`);
      }
    }

    let reaction = { cockDesirability:desirability, text:Random.from(options) };
    if (desirability > 5) {
      if (characterPussy) { reaction.characterPussy = 'wet'; }
      if (characterPussy) { reaction.characterCock = 'hard'; }
    }
    return reaction;
  }

});
