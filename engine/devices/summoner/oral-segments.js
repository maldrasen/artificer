Summoner.OralSegments = (function() {

  // Position a character to give oral. This will depend on the player's
  // position, the character's height, and other factors, furniture in the room,
  // etc.
  //
  // Before we can set the character's position the player's position should
  // have already been determined. Other starting positions or an unset
  // starting position might be possible someday, but for now the player must
  // be standing, laying, or sitting.
  async function positionCharacterForGivingOral(storyTeller) {
    const playerPosition = storyTeller.getStatus('playerPosition');
    const heightDifference = await storyTeller.heightDifference();

    if (ArrayUtility.contains(['laying','sitting','standing'],playerPosition) == false) {
      throw `Invalid player position - ${playerPosition}`
    }

    // The character is only about knee high, so standing isn't an option. The
    // player will need to lay down for this.
    if (heightDifference.name == 'miniCharacter') {
      storyTeller.addSegment({ text:'TODO: Position character with vase height difference.' });
    }

    // The positioning for tiny (less than waist high) and small (about waist
    // high) is the same when the player is sitting or laying down. The only
    // real difference is for standing players who will need to get lower.
    if (heightDifference.name == 'tinyCharacter') {
      if (playerPosition == 'laying') { await givingPositionWhenSmallLaying(storyTeller); }
      if (playerPosition == 'sitting') { await givingPositionWhenSmallSitting(storyTeller); }
      if (playerPosition == 'standing') { await givingPositionWhenTinyStanding(storyTeller); }
    }
    if (heightDifference.name == 'smallCharacter') {
      if (playerPosition == 'laying') { await givingPositionWhenSmallLaying(storyTeller); }
      if (playerPosition == 'sitting') { await givingPositionWhenSmallSitting(storyTeller); }
      if (playerPosition == 'standing') { await givingPositionWhenSmallStanding(storyTeller); }
    }

    // Most characters other than scaven, kobolds, and goblins will probably
    // fall into this category, unless the player is very tall.
    if (heightDifference.name == 'averageCharacter') {
      storyTeller.addSegment({ text:'TODO: Position character with basically no height difference.' });
    }
    if (heightDifference.name == 'bigCharacter') {
      storyTeller.addSegment({ text:'TODO: Position character with larger character.' });
    }
    if (heightDifference.name == 'giantCharacter') {
      storyTeller.addSegment({ text:'TODO: Position character with much larger character.' });
    }
  }

  async function givingPositionWhenTinyStanding(storyTeller) {
    storyTeller.addSegment({ text:'TODO: Position character, they are tiny, the player is standing.' });
  }

  async function givingPositionWhenSmallLaying(storyTeller) {
    storyTeller.addSegment({ text:'TODO: Position character, they are small, the player is laying.' });
  }

  async function givingPositionWhenSmallSitting(storyTeller) {
    storyTeller.addSegment({ text:'TODO: Position character, they are small, the player is sitting.' });
  }

  async function givingPositionWhenSmallStanding(storyTeller) {
    storyTeller.addSegment({ text:'TODO: Position character, they are small, the player is standing.' });
  }

  return {
    positionCharacterForGivingOral,
  };

})();
