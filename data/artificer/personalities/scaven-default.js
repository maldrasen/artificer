Personality.build('scaven-default', {

  reactToPlayer: async function(character, attitude) {
    const options = [];
    const tits = await character.getTits();
    const cock = await character.getCock();
    const pussy = await character.getPussy();

    if (attitude == 'love') {
      options.push('{{C::gender.He}} looks upward lovingly at me, ready to be used as a sex toy.');
      options.push('{{C::gender.He}} smiles lovingly up at me, clear desire etched on {{C::gender.his}} rat like features.');
      options.push('{{C::gender.He}} laughs and wiggles {{C::gender.his}} shapely ass in my direction, a clear invitation.');
    }

    if (ArrayUtility.contains(['love','lusty'],attitude)) {
      options.push(`{{C::gender.He}} grins broadly and licks {{C::gender.his}} lips, clearly ready for whatever I have in mind.`);
      options.push(`{{C::gender.His}} eyes are filled with lust as {{C::gender.he}} waits to see what I desire from {{C::gender.him}}.`);
      options.push(`{{C::gender.He}} smiles at me lustfully, longing it seems to be used by me.`);

      if (tits) { options.push(`{{C::gender.He}} smiles and starts fondling one of {{C::gender.his}} many nipples, twisting and pulling it roughly.`); }
      if (cock) { options.push(`{{C::gender.He}} smiles and reaches down to squeeze {{C::gender.his}} cock sheath, almost unable to contain {{C::gender.his}} lust.`); }
      if (pussy) { options.push(`{{C::gender.He}} looks up at me with eyes filled with lust and reaches down to squeeze {{C::gender.his}} cunt, moaning.`) }
    }

    // Lust and love share many of the same reactions so add them all to the
    // options and randomly select one if any have been added, otherwise
    // continue on.
    if (options.length > 0) {
      return { text:Random.from(options), characterPosition:'standing' };
    }

    if (attitude == 'friendly') {
      options.push(`{{C::gender.He}} smiles and nods to me, happy to be of service to {{C::gender.her}} {{P::character.title}}.`);
      options.push(`{{C::gender.He}} smiles up at me, ready to serve me in whatever way I would like.`);
      options.push(`{{C::gender.He}} grins and nods, willing to let me use {{C::gender.him}} however I like.`);
    }

    if (attitude == 'resigned') {
      options.push(`{{C::gender.He}} nods, looking resigned and a little nervous, but ready do do what I ask of him.`);
      options.push(`{{C::gender.He}} nods to me, understanding that {{C::gender.his}} body is mine to do with as I like.`);
      options.push(`{{C::gender.He}} looks away shamefully, but seems willing to let me use {{C::gender.his}} body.`);
      options.push(`{{C::gender.He}} glances down at the floor, resigned to let me have my way with {{C::gender.him}}.`);
    }

    if (attitude == 'fearful') {
      options.push(`{{C::gender.He}} looks up at me, clearly afraid and not sure of what I'm about to do to {{C::gender.him}}.`);
      options.push(`{{C::gender.He}} looks up at me, looking afraid and unsure of what I will ask of {{C::gender.him}}.`);
      options.push(`{{C::gender.He}} backs away slightly, looking like {{C::gender.he}} might run from me, but knows {{C::gender.he}} can't.`);
      options.push(`{{C::gender.He}} glances about the room as if looking for a way to escape, but knows {{C::gender.he}} can't.`);
    }

    if (attitude == 'angry') {
      options.push(`{{C::gender.He}} snarls in warning, clearly not at all in the mood for any kind of sexual activity.`);
      options.push(`{{C::gender.He}} backs away looking angry, clearly not interested in doing anything with me right now.`);
      options.push(`{{C::gender.He}} looks angrily up at me, clearly wanting to be anyplace other than here right now.`);
    }

    return { text:Random.from(options), characterPosition:'standing' };
  },

  // Give the reaction a character has to being shown the player's cock. Should
  // be proceeded by a sentence where the player is doing something with their
  // dick as it implies that they're looking at it, and is referred to with the
  // pronoun it, so is clearly the current topic. e.g.
  //
  //    I take my soft thick cock by the base and let it swing back and forth.
  //
  // TODO: Eventually I'd like to use the skill skills concern to also look at
  //       the relationship between the size of the cock and the size of the
  //       scaven. Specifically the canFuckAss() function that has yet to be
  //       written. For now though we're pretty sure the character has an
  //       average size cock and that a scaven is still intimated by it.
  reactToCock: async function(character, cock, desirability) {

    // Terrible Reaction, probably androphobic.
    if (desirability < -5) { return Random.from([
      `As I expose myself to {{C::gender.him}} {{C::gender.he}} makes a disgusted face. {{C::gender.He}}'s clearly not at all interested in my cock.`,
      `{{C::gender.He}} makes an awful face when {{C::gender.his}} eyes land on it though. I think {{C::gender.he}}'s somewhat repulsed by it.`,
    ]); }

    // Very Bad Reaction
    if (desirability < -3) { return Random.from([
      `{{C::gender.He}} tries to avoid looking at it though, seemingly uninterested in it.`,
      `{{C::gender.He}} does what {{C::gender.he}} can to avoid looking at it though. It's clearly making {{C::gender.him}} uncomfortable.`
    ]); }

    // Average Reaction
    if (desirability < 0)  { return Random.from([
      `{{C::gender.He}} smiles as {{C::gender.his}} eyes move down to glance at it. {{C::gender.He}} seems a bit nervous, probably a bit intimidated by the size of it, but clearly willing to give it a try.`
    ]); }

    // Good Reaction
    if (desirability == 1) { return Random.from([
      `{{C::gender.He}} smiles as {{C::gender.he}} looks it over; eyes growing a bit wide as he no doubt imagines it going inside of {{C::gender.him}}.`
    ]); }

    // They Love this Cock
    if (desirability < 4)  { return Random.from([
      `{{C::gender.He}} looks transfixed by it; licking {{C::gender.his}} lips and practically drooling at the sight of my cock.`
    ]); }

    // They Fucking Need This Cock
    if (desirability < 7)  { return Random.from([
      `{{C::gender.He}} can't seem to take {{C::gender.his}} eyes off of it.`
    ]); }

    // They Worship This Cock As A God
    return Random.from([
      `At the sight of it {{C::gender.he}} looks as though he can barely contain {{C::gender.him}}self; clearly wanting to get it inside of {{C::gender.him}}self immediately.`
    ]);
  }

});
