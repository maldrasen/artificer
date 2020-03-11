Personality.build('scaven-default', {

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
  //       average size cock and that a scaven is still intimatated by it.
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
      `{{C::gender.He}} smiles as {{C::gender.his}} eyes move down to glance at it. {{C::gender.He}} seems a bit nervious, probably a bit intimidated by the size of it, but clearly willing to give it a try.`
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
