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
      options.push(`As I expose myself to {{C::gender.him}} {{C::gender.he}} makes a disgusted face and looks away.`);
      options.push(`From {{C::gender.his}} expression it looks like my cock is the last thing {{C::gender.he}}'s interested in seeing right now.`);
      options.push(`{{C::gender.He}} makes an awful face when {{C::gender.his}} eyes land on it. I think {{C::gender.he}}'s somewhat repulsed by my cock.`);
    }

    // Very Bad Reaction
    if (desirability >= -5 && desirability < -2) {
      options.push(`{{C::gender.He}} tries to avoid looking at it, seemingly uninterested in it.`);
      options.push(`{{C::gender.He}} tries to avoid looking at it, not really interested seeing my dick at all right now.`);
      options.push(`{{C::gender.He}} does what {{C::gender.he}} can to avoid looking at it. It's clearly making {{C::gender.him}} uncomfortable.`);
    }

    // Average Reaction
    if (desirability >= -2 && desirability < 1)  {
      options.push(`{{C::gender.He}} smiles as {{C::gender.his}} eyes move down to glance at it. {{C::gender.He}} seems a bit nervous, probably a bit intimidated by the size of it.`);
      options.push(`{{C::gender.He}} glances briefly at it, seemingly nervous and uncomfortable at the sight of my cock.`);
      options.push(`{{C::gender.He}} seems uncomfortable looking at my cock, perhaps intimidated by its size.`);
    }

    // Good Reaction
    if (desirability >= 1 && desirability < 3) {
      options.push(`{{C::gender.He}} smiles as {{C::gender.he}} looks it over; eyes growing a bit wide as he no doubt imagines it going inside of {{C::gender.him}}.`);
      options.push(`{{C::gender.He}} glances down at it, enjoying the sight of my cock, but not lingering on it overlong.`);
      options.push(`{{C::gender.He}} gasps as {{C::gender.his}} eyes roam over it. My cock's far larger than most scaven's so the size of it might be a little intimidating.`);
    }

    // They Love this Cock
    if (desirability >= 3 && desirability < 5)  {
      options.push(`{{C::gender.He}} smiles in appreciation as his eyes roam over it, as if memorizing the shape of my dick.`);
      options.push(`{{C::gender.He}} grins broadly as {{C::gender.his}} eyes linger on it, ignoring everything else but my shaft.`);
      options.push(`{{C::gender.He}} licks {{C::gender.his}} lips and grins; eager to have it in {{C::gender.his}} mouth now that it's directly in front of {{C::gender.his}} face like this .`);
    }

    // They Fucking Need This Cock
    if (desirability >= 5 && desirability < 8)  {
      options.push(`{{C::gender.He}} looks transfixed by it; licking {{C::gender.his}} lips and practically drooling at the sight of my cock.`);
      options.push(`{{C::gender.He}} makes a little moaning sound as {{C::gender.his}} eyes roam over my shaft.`);
      options.push(`{{C::gender.He}} can't seem to take {{C::gender.his}} eyes off of it.`);
    }

    // They Worship This Cock As A God
    if (desirability >= 8) {
      options.push(`At the sight of it {{C::gender.he}} looks as though he can barely contain {{C::gender.him}}self; clearly wanting to get it inside of {{C::gender.him}}self immediately.`);
      options.push(`{{C::gender.He}} looks as though he wants to drop to {{C::gender.his}} knees and start worshiping my dick at the sight of it.`);
      options.push(`{{C::gender.He}} can't seem to help himself as {{C::gender.his}} gasps and starts drooling, panting, and practically begging me for a taste of it.`);

      if (characterPussy) {
        options.push(`At the sight of it {{C::gender.his}} pussy floods with moisture, enough that I can smell it from here.`);
        options.push(`I can smell {{C::gender.his}} pussy from here as {{C::gender.he}} drinks in the sight of it; already needing it inside of {{C::gender.him}}.`);
      }
      if (characterCock) {
        options.push(`At the sight of it his own cock begins to grow hard.`);
        options.push(`{{C::gender.His}} own cock begins to grow hard at the sight of mine.`);
      }
    }

    let reaction = { desirability:desirability, text:Random.from(options) };
    if (desirability > 5) {
      if (characterPussy) { reaction.characterPussy = 'wet'; }
      if (characterPussy) { reaction.characterCock = 'hard'; }
    }
    return reaction;
  }

});
